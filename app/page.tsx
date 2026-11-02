import { Header }       from '@/components/Header'
import { Hero }         from '@/components/Hero'
import { Marquee }      from '@/components/Marquee'
import { Journey }      from '@/components/Journey'
import { Work }         from '@/components/Work'
import { Services }     from '@/components/Services'
import { TechStack }    from '@/components/TechStack'
import { Process }      from '@/components/Process'
import { Philosophy }   from '@/components/Philosophy'
import { Experience }   from '@/components/Experience'
import { Contact }      from '@/components/Contact'
import { Footer }       from '@/components/Footer'
import { CursorGlow }   from '@/components/CursorGlow'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Journey />
        <Work />
        <Services />
        <TechStack />
        <Process />
        <Philosophy />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
