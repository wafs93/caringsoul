import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { approach, missionPoints, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Caring Souls Foundation is a Charitable Incorporated Organisation registered with the Charity Commission for England and Wales.",
};

export default function About() {
  return (
    <>
      <PageHero
        title="Who we are"
        intro="A Christian charity putting faith into practical action in communities throughout England."
      />

      <section className="section" style={{ paddingTop: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="wrap split">
          <div>
            <h2>Our story</h2>
            <p>
              Caring Souls Foundation is a Charitable Incorporated Organisation (CIO), registered with
              the Charity Commission for England and Wales on {site.registeredDate}.
            </p>
            <p>
              Our purpose is to advance the Christian religion in the UK for the benefit of the public,
              while putting Christian faith into practical action within our communities. We believe
              faith should be demonstrated not only through words, but through service, compassion and
              practical support.
            </p>
            <p>
              Our work includes supporting people experiencing hardship, providing advice and
              assistance, developing ministry and pastoral outreach programmes, supporting local
              churches and the wider community, and undertaking charitable activities that help
              prevent or relieve poverty and advance education.
            </p>
          </div>
          <aside className="facts" aria-label="Charity details">
            <h3>At a glance</h3>
            <dl>
              <dt>Registered name</dt>
              <dd>Caring Souls Foundation</dd>
              <dt>Charity number</dt>
              <dd>
                <a href={site.charityRegisterUrl} target="_blank" rel="noopener noreferrer">
                  {site.charityNumber}
                </a>
              </dd>
              <dt>Structure</dt>
              <dd>Charitable incorporated organisation (CIO)</dd>
              <dt>Registered</dt>
              <dd>{site.registeredDate}</dd>
              <dt>Where we work</dt>
              <dd>Throughout England</dd>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section band-mist">
        <div className="wrap split">
          <div>
            <h2>Our mission</h2>
            <p>
              Our mission is to put Christian faith into action by serving people and strengthening
              communities. We aim to:
            </p>
            <ul className="ticks">
              {missionPoints.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Our approach</h2>
            <ul className="values">
              {approach.map((a) => (
                <li key={a.title}>
                  <strong>{a.title}</strong>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>
            <h2 style={{ marginTop: "2.5rem" }}>Our faith</h2>
            <p>
              Our registered charitable objects state that the purpose of the CIO is to advance the
              Christian religion in the UK for the benefit of the public. We express that faith through
              practical service, Christian ministry, pastoral outreach and support for local churches
              and the wider community, with compassion and respect for every person.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap">
          <h2>Be part of what happens next</h2>
          <p>Give, volunteer or partner with us to support communities across England.</p>
          <div className="btn-row">
            <Link href="/get-involved/" className="btn btn-primary">Get involved</Link>
            <Link href="/governance/" className="btn btn-ghost">How we are run</Link>
          </div>
        </div>
      </section>
    </>
  );
}
