import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: "Who we are, what we believe, and how Caring Souls Foundation is run.",
};

export default function About() {
  return (
    <>
      <PageHero
        title="About the foundation"
        intro="A Christian charity putting faith to work through churches, worship and practical care."
      />

      <section className="section" style={{ paddingTop: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="wrap split">
          <div>
            <h2>Our story</h2>
            <p>
              Caring Souls Foundation is a charitable incorporated organisation registered with the
              Charity Commission for England and Wales. We began with a simple conviction: that the
              love of God should be seen in how we treat our neighbours.
            </p>
            <p>
              Today we support local churches with their ministry and outreach, hold worship events
              that bring communities together, and offer pastoral care and practical help to people
              who need it most, including children and young people and people living with disabilities.
            </p>
            <p>
              We work throughout England, partnering with churches, community groups and other charities.
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
              <dt>Where we work</dt>
              <dd>Throughout England</dd>
              <dt>Who we help</dt>
              <dd>Children and young people, people with disabilities, churches and voluntary groups, and the wider public</dd>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section band-mist">
        <div className="wrap split">
          <div>
            <h2>Our purpose</h2>
            <p>
              Our charitable purpose is to advance the Christian religion in the UK for the benefit of
              the public. We carry this out by:
            </p>
            <ul>
              <li>giving practical advice and support to churches developing their ministry, pastoral care and outreach</li>
              <li>sharing the gospel, developing and holding musical worship events, and offering pastoral care to churches and the wider community</li>
              <li>relieving poverty, helping young people get on in life, and advancing education, as a practical outworking of faith</li>
            </ul>
          </div>
          <div>
            <h2>What guides us</h2>
            <ul className="values">
              <li>
                <strong>Compassion</strong>
                <span>We meet people as they are and treat everyone with dignity.</span>
              </li>
              <li>
                <strong>Faithfulness</strong>
                <span>Our work flows from our Christian faith, and we keep our promises.</span>
              </li>
              <li>
                <strong>Community</strong>
                <span>We achieve more together, with churches and partners alongside us.</span>
              </li>
              <li>
                <strong>Integrity</strong>
                <span>We are open about how we use every gift we receive.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap">
          <h2>Be part of what happens next</h2>
          <p>Give, volunteer or partner with us to support communities across England.</p>
          <div className="btn-row">
            <Link href="/get-involved/" className="btn btn-primary">Get involved</Link>
            <Link href="/contact/" className="btn btn-ghost">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
