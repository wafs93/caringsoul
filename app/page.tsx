import Link from "next/link";
import Wave from "@/components/Wave";
import { programmes, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Faith that shows up for people</h1>
            <p className="lead">
              We help churches reach their communities, and we stand alongside young people, families
              and anyone going through a hard season, with care, worship and practical support.
            </p>
            <div className="btn-row">
              <Link href="/get-involved/" className="btn btn-primary">
                Get involved
              </Link>
              <Link href="/what-we-do/" className="btn btn-ghost">
                See what we do
              </Link>
            </div>
            <span className="registered">Registered charity {site.charityNumber}, serving communities across England</span>
          </div>
          <div className="hero-mark">
            <img src="/images/emblem.png" alt="Caring Souls Foundation emblem: three figures held together" width={560} height={486} />
          </div>
        </div>
      </section>
      <Wave top="#f2f7f9" bottom="#ffffff" />

      <section className="section" style={{ paddingTop: "clamp(2rem, 5vw, 3.5rem)" }}>
        <div className="wrap">
          <div className="section-intro">
            <h2>How we help</h2>
            <p>
              Six areas of work, one purpose: putting faith into practice where people live.
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
            <h2>Why we exist</h2>
            <p>
              Caring Souls Foundation was set up to advance the Christian faith for the good of the
              public. For us that means more than Sunday services. It means equipping local churches,
              gathering people in worship, and meeting real needs: poverty, isolation, and young
              people looking for direction.
            </p>
            <p>
              We work with churches, schools and other charities, and our door is open to everyone,
              whatever their background or beliefs.
            </p>
            <div className="btn-row">
              <Link href="/about/" className="btn btn-ghost">
                About the foundation
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Wave top="#0b2a5b" bottom="#f2f7f9" />

      <section className="section band-mist" style={{ paddingTop: "clamp(2rem, 5vw, 3.5rem)" }}>
        <div className="wrap">
          <div className="section-intro">
            <h2>Ways you can help</h2>
            <p>Every gift of time, money or prayer goes straight into this work.</p>
          </div>
          <div className="ways">
            <div className="way way-feature">
              <h3>Give</h3>
              <p>A one-off or monthly gift funds food parcels, youth sessions and pastoral visits.</p>
              <Link href="/donate/">Make a donation</Link>
            </div>
            <div className="way">
              <h3>Volunteer</h3>
              <p>Help at events, mentor a young person, or bring your skills in music, admin or teaching.</p>
              <Link href="/get-involved/">Become a volunteer</Link>
            </div>
            <div className="way">
              <h3>Partner with us</h3>
              <p>Churches and organisations can work with us on outreach, events and community projects.</p>
              <Link href="/contact/">Start a conversation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
