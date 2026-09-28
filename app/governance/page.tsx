import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { finances, policies, site, trustees } from "@/lib/site";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "How Caring Souls Foundation is run: our trustees, our policies, our volunteers and our finances.",
};

export default function Governance() {
  return (
    <>
      <PageHero
        title="Responsible. Accountable. Transparent."
        intro="Caring Souls Foundation is a Charitable Incorporated Organisation registered with the Charity Commission for England and Wales."
      />

      <section className="section" style={{ paddingTop: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="wrap">
          <div className="section-intro">
            <h2>Our trustees</h2>
            <p>
              The charity is overseen by a board of three trustees, responsible for its governance,
              management and administration. Trustees receive no remuneration, payments or benefits
              from the charity.
            </p>
          </div>
          <div className="ways">
            {trustees.map((t) => (
              <div key={t.name} className="way">
                <h3>{t.name}</h3>
                <p>
                  {t.role}
                  <br />
                  <span className="note">Appointed {t.appointed}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-mist">
        <div className="wrap split">
          <div>
            <h2>Our policies</h2>
            <p>
              The charity’s registered record includes policies and procedures covering:
            </p>
            <ul className="ticks">
              {policies.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="note">
              These policies form part of our commitment to responsible governance and the proper
              management of the charity. The charity does not own or lease land or property.
            </p>
          </div>

          <div>
            <h2>Financial transparency</h2>
            <p>
              For the financial year ending {finances.yearEnd}, the Charity Commission record shows:
            </p>
            <div className="facts">
              <dl>
                <dt>Total income</dt>
                <dd>{finances.income}</dd>
                <dt>Total expenditure</dt>
                <dd>{finances.expenditure}</dd>
                <dt>Government contracts</dt>
                <dd>None</dd>
                <dt>Government grants</dt>
                <dd>None</dd>
              </dl>
            </div>
            <p className="note" style={{ marginTop: "1.2rem" }}>
              Our annual return and accounts for the year ending {finances.yearEnd} were received by
              the Charity Commission on {finances.returnReceived} and recorded as on time. Our
              reporting is up to date. The charity has no trading subsidiary. Full details are on our{" "}
              <a href={site.charityRegisterUrl} target="_blank" rel="noopener noreferrer">
                Charity Commission record
              </a>
              .
            </p>

            <h2 style={{ marginTop: "2.5rem" }}>Our volunteers</h2>
            <p>
              {finances.volunteers} volunteers currently support the charity’s work, from community
              outreach and practical assistance to helping run our charitable activities. They extend
              our reach and help us serve more people.
            </p>
            <div className="btn-row">
              <Link href="/get-involved/" className="btn btn-primary">Become a volunteer</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
