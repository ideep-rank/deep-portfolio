import math
import struct
import zlib

def render_symbol_icon(size):
    # Render with 4x supersampling for ultra smooth antialiasing
    scale = 4
    W = size * scale
    
    rgba = bytearray(size * size * 4)
    
    def color_lerp(c1, c2, t):
        t = max(0.0, min(1.0, t))
        return (
            int(c1[0] + (c2[0] - c1[0]) * t),
            int(c1[1] + (c2[1] - c1[1]) * t),
            int(c1[2] + (c2[2] - c1[2]) * t),
            int(c1[3] + (c2[3] - c1[3]) * t) if len(c1) > 3 else 255
        )

    def get_gold_gradient(t):
        if t <= 0.25:
            return color_lerp((255, 255, 255), (252, 231, 162), t / 0.25)
        elif t <= 0.65:
            return color_lerp((252, 231, 162), (201, 150, 58), (t - 0.25) / 0.40)
        else:
            return color_lerp((201, 150, 58), (226, 171, 75), (t - 0.65) / 0.35)

    def get_bg_gradient(t):
        if t <= 0.5:
            return color_lerp((15, 28, 69), (7, 14, 36), t / 0.5)
        else:
            return color_lerp((7, 14, 36), (3, 7, 18), (t - 0.5) / 0.5)

    def get_border_gradient(t):
        if t <= 0.5:
            return color_lerp((245, 220, 142), (201, 150, 58), t / 0.5)
        else:
            return color_lerp((201, 150, 58), (138, 101, 31), (t - 0.5) / 0.5)

    for py in range(size):
        for px in range(size):
            r_acc, g_acc, b_acc, a_acc = 0, 0, 0, 0
            for sy in range(scale):
                sub_y = (py * scale + sy + 0.5) / W * 64.0
                for sx in range(scale):
                    sub_x = (px * scale + sx + 0.5) / W * 64.0
                    
                    # 1. Container rounded rect (rx=14, x:2..62, y:2..62)
                    bx = abs(sub_x - 32) - 17.5
                    by = abs(sub_y - 32) - 17.5
                    dist_to_corner = math.sqrt(max(0, bx)**2 + max(0, by)**2)
                    dist = dist_to_corner + min(0, max(bx, by)) - 11.5
                    
                    if dist > 1.0:
                        continue
                    
                    t_diag = (sub_x + sub_y) / 128.0
                    bg_col = get_bg_gradient(t_diag)
                    
                    if dist > -1.2:
                        border_col = get_border_gradient(t_diag)
                        alpha_factor = 1.0 if dist < 0 else (1.0 - dist)
                        pix_r, pix_g, pix_b = border_col[:3]
                        pix_a = int(255 * alpha_factor)
                    else:
                        pix_r, pix_g, pix_b = bg_col[:3]
                        pix_a = 255
                        
                    # 2. Orbital ellipse:
                    rot = math.radians(-24)
                    ox = (sub_x - 32) * math.cos(-rot) - (sub_y - 32) * math.sin(-rot)
                    oy = (sub_x - 32) * math.sin(-rot) + (sub_y - 32) * math.cos(-rot)
                    orb_val = (ox / 24.0)**2 + (oy / 11.0)**2
                    orb_dist = abs(math.sqrt(orb_val) - 1.0) * 16.0
                    if orb_dist < 0.8:
                        orb_alpha = (0.8 - orb_dist) / 0.8 * 0.20
                        pix_r = int(pix_r * (1 - orb_alpha) + 245 * orb_alpha)
                        pix_g = int(pix_g * (1 - orb_alpha) + 220 * orb_alpha)
                        pix_b = int(pix_b * (1 - orb_alpha) + 142 * orb_alpha)

                    # 3. Sheared coordinate: x_orig = sub_x + 0.24 * sub_y - 7.68
                    x_orig = sub_x + 0.24 * sub_y - 7.68
                    
                    in_symbol = False
                    
                    # (a) Central Dollar-style vertical strike pillar:
                    # x from 30.0 to 34.0, y from 6.5 to 57.5
                    if 30.0 <= x_orig <= 34.0 and 6.5 <= sub_y <= 57.5:
                        in_symbol = True

                    # (b) Architectural Italic D:
                    in_d = False
                    if 15.0 <= sub_y <= 49.0 and x_orig >= 16.5:
                        if x_orig <= 32.0:
                            in_d = True
                        else:
                            dx = (x_orig - 32.0) / 16.5
                            dy = (sub_y - 32.0) / 17.0
                            if (dx * dx + dy * dy) <= 1.0:
                                in_d = True
                                
                        if in_d and 22.5 <= sub_y <= 41.5 and x_orig >= 23.5:
                            if x_orig <= 30.5:
                                in_d = False
                            else:
                                dx_in = (x_orig - 30.5) / 10.0
                                dy_in = (sub_y - 32.0) / 9.5
                                if (dx_in * dx_in + dy_in * dy_in) < 1.0:
                                    in_d = False
                                    
                    if in_d:
                        in_symbol = True
                        
                    if in_symbol:
                        gold_t = (sub_x + sub_y - 20) / 60.0
                        gcol = get_gold_gradient(gold_t)
                        pix_r, pix_g, pix_b = gcol[:3]
                        
                    # (c) Star glint ✦ at (48, 13) in sheared space
                    if size >= 32:
                        st_dx = abs(x_orig - 48.0)
                        st_dy = abs(sub_y - 13.0)
                        st_dist = math.sqrt(st_dx) + math.sqrt(st_dy)
                        if st_dist < 2.0:
                            st_alpha = max(0.0, min(1.0, (2.0 - st_dist) / 1.0))
                            pix_r = int(pix_r * (1 - st_alpha) + 255 * st_alpha)
                            pix_g = int(pix_g * (1 - st_alpha) + 250 * st_alpha)
                            pix_b = int(pix_b * (1 - st_alpha) + 230 * st_alpha)

                    r_acc += pix_r
                    g_acc += pix_g
                    b_acc += pix_b
                    a_acc += pix_a

            total_samples = scale * scale
            idx = (py * size + px) * 4
            rgba[idx + 0] = r_acc // total_samples
            rgba[idx + 1] = g_acc // total_samples
            rgba[idx + 2] = b_acc // total_samples
            rgba[idx + 3] = a_acc // total_samples
            
    return bytes(rgba)

def make_png(width, height, rgba):
    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)
    header = b'\x89PNG\r\n\x1a\n'
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0))
    raw = bytearray()
    for y in range(height):
        raw.append(0)
        raw.extend(rgba[y * width * 4 : (y + 1) * width * 4])
    idat = chunk(b'IDAT', zlib.compress(bytes(raw)))
    iend = chunk(b'IEND', b'')
    return header + ihdr + idat + iend

def make_ico(png_dict):
    count = len(png_dict)
    header = struct.pack('<HHH', 0, 1, count)
    offset = 6 + 16 * count
    dir_entries = b''
    img_data = b''
    
    for size, pdata in png_dict.items():
        w = size if size < 256 else 0
        h = size if size < 256 else 0
        entry = struct.pack('<BBBBHHII', w, h, 0, 0, 1, 32, len(pdata), offset)
        dir_entries += entry
        img_data += pdata
        offset += len(pdata)
        
    return header + dir_entries + img_data

print("Rendering high-res symbol favicons...")
rgba_16 = render_symbol_icon(16)
png_16 = make_png(16, 16, rgba_16)

rgba_32 = render_symbol_icon(32)
png_32 = make_png(32, 32, rgba_32)

rgba_48 = render_symbol_icon(48)
png_48 = make_png(48, 48, rgba_48)

rgba_180 = render_symbol_icon(180)
png_180 = make_png(180, 180, rgba_180)

ico_data = make_ico({16: png_16, 32: png_32, 48: png_48})

with open('public/favicon.ico', 'wb') as f:
    f.write(ico_data)

with open('public/favicon-32x32.png', 'wb') as f:
    f.write(png_32)

with open('public/apple-touch-icon.png', 'wb') as f:
    f.write(png_180)

with open('app/favicon.ico', 'wb') as f:
    f.write(ico_data)

print("Favicons successfully written to public/ and app/!")

