import { experience } from '@/data'

export function Experience() {
  return (
    <section id="experience" className="block light">
      <div className="container">
        <div className="section-head center reveal">
          <div className="eyebrow">Experience</div>
          <h2>
            Work <span className="gold">History</span>
          </h2>
          <p>
            4+ years building scalable production WordPress platforms with end-to-end ownership from requirements to deployment.
          </p>
        </div>

        <div className="experience-timeline-container reveal">
          <div className="experience-timeline-track">
            {experience.map((item, idx) => (
              <div key={item.company} className={`experience-card-item reveal reveal-delay-${(idx % 2) + 1}`}>
                <div className="exp-meta-col">
                  <span className="exp-period-badge">{item.date}</span>
                  {item.current && <span className="exp-current-pill">Current Role</span>}
                </div>

                <div className="exp-content-col">
                  <div className="exp-company-name">{item.company}</div>
                  <h3 className="exp-role-title">{item.title}</h3>
                  <div className="exp-skills-wrap">
                    {item.skills.map(s => (
                      <span key={s} className="exp-skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Foundation Card */}
          <div className="academic-foundation-card reveal reveal-delay-2">
            <div className="academic-badge">Academic Foundation</div>
            <h3 className="academic-title">
              Bachelor of Engineering in Information Technology
            </h3>
            <p className="academic-sub">
              A.D. Patel Institute of Technology, Karamsad · Graduated with 8.03 CGPA
            </p>
            <p className="academic-desc">
              Rigorous 4-year curriculum covering software engineering, database management systems, algorithms,
              web architecture, and network security.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
