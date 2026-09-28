import Link from "next/link";
import Wave from "@/components/Wave";
import { approach, beneficiaries, programmes, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{site.tagline}</p>
            <h1>Caring for people. Strengthening communities.</h1>
            <p className="lead">
              Caring Souls Foundation is a Christian charity serving communities throughout England.
              We put faith into action through practical support, community outreach, mentoring,
              pastoral care, education and assistance for people experiencing hardship.
            </p>
            <div className="btn-row">
              <Link href="/donate/" className="btn btn-primary">
                Support our work
              </Link>
              <Link href="/get-involved/" className="btn btn-ghost">
                Get involved
              </Link>
            </div>
            <span className="registered">Registered charity {site.charityNumber}</span>
          </div>
          <div className="hero-mark">
            <img
              src="/images/emblem.png"
              alt="Caring Souls Foundation emblem: three figures held together"
              width={560}
              height={486}
            />
          </div>
        </div>
      </section>
      <Wave top="#f2f7f9" bottom="#ffffff" />

      <section className="section" style={{ paddingTop: "clamp(2rem, 5vw, 3.5rem)" }}>
        <div className="wrap">
          <div className="section-intro">
            <h2>Faith. Compassion. Action.</h2>
            <p>
              We support children and young people, people with disabilities, vulnerable individuals
              and the wider community, while working alongside churches, charities and voluntary
              organisations. From food and clothing support to advice, mentoring and pastoral care,
              our goal is simple: to serve people with compassion and make a practical difference.
            </p>
          </div>
          <ul className="programmes">
            {programmes.map((p) => (
              <li key={p.slug} className="programme">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="btn-row">
            <Link href="/what-we-do/" className="btn btn-ghost">
              Read about our work
            </Link>
          </div>
        </div>
      </section>

      <Wave top="#ffffff" bottom="#0b2a5b" flip />
      <section className="section band-navy on-dark">
        <div className="wrap statement">
          <blockquote>
            “Let us not love with words or speech but with actions and in truth.”
            <cite>1 John 3:18</cite>
          </blockquote>
          <div>
            <h2>Our faith, our foundation</h2>
            <p>
              Christian faith is at the heart of Caring Souls Foundation. Our registered charitable
              purpose is to advance the Christian religion in the UK for the benefit of the public.
            </p>
            <p>
              We believe faith should be shown not only in words but through service, compassion and
              practical support, offered with dignity and respect for every person.
            </p>
            <div className="btn-row">
              <Link href="/about/" className="btn btn-ghost">
                About the foundation
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Wave top="#0b2a5b" bottom="#ffffff" />

      <section className="section" style={{ paddingTop: "clamp(2rem, 5vw, 3.5rem)" }}>
        <div className="wrap">
          <div className="section-intro">
            <h2>Who we support</h2>
            <p>Our work is not limited to one community or location. We operate throughout England.</p>
          </div>
          <div className="ways">
            {beneficiaries.map((b) => (
              <div key={b.title} className="way">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-mist">
        <div className="wrap">
          <div className="section-intro">
            <h2>From faith to action</h2>
            <p>Genuine care takes more than good intentions. Our approach is built on five steps.</p>
          </div>
          <ol className="steps">
            {approach.map((a) => (
              <li key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Wave top="#f2f7f9" bottom="#ffffff" flip />
      <section className="section" style={{ paddingTop: "clamp(2rem, 5vw, 3.5rem)" }}>
        <div className="wrap">
          <div className="section-intro">
            <h2>You can help us care for more people</h2>
            <p>Our work is made possible by people who believe in supporting their communities.</p>
          </div>
          <div className="ways">
            <div className="way way-feature">
              <h3>Give</h3>
              <p>Your donation helps us respond to practical needs and sustain our charitable activities.</p>
              <Link href="/donate/">Donate now</Link>
            </div>
            <div className="way">
              <h3>Volunteer</h3>
              <p>Give your time, skills or experience to support our work in the community.</p>
              <Link href="/get-involved/">Volunteer with us</Link>
            </div>
            <div className="way">
              <h3>Partner</h3>
              <p>Work with us to reach more people and strengthen community support together.</p>
              <Link href="/get-involved/#partner">Partner with us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
