import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Caring Souls Foundation with a one-off or regular gift.",
};

export default function Donate() {
  const hasBank = site.bank.sortCode && site.bank.accountNumber;

  return (
    <>
      <PageHero
        title="Support our work"
        intro="Your gift helps churches reach their communities and puts practical help in the hands of people who need it."
      />

      <section className="section" style={{ paddingTop: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="wrap">
          <div className="section-intro">
            <h2>What your gift makes possible</h2>
            <ul className="values">
              <li>
                <strong>£10</strong>
                <span>Provides essentials for a family facing a difficult week.</span>
              </li>
              <li>
                <strong>£25</strong>
                <span>Covers materials for a youth mentoring session.</span>
              </li>
              <li>
                <strong>£50</strong>
                <span>Helps run a community worship and outreach event.</span>
              </li>
            </ul>
          </div>

          <div className="give-options">
            <div className="panel">
              <h3>Give online</h3>
              <p>Make a secure one-off or monthly donation by card.</p>
              {site.donateUrl ? (
                <a className="btn btn-primary" href={site.donateUrl} target="_blank" rel="noopener noreferrer">
                  Donate now
                </a>
              ) : (
                <p className="note">
                  Online giving is being set up. In the meantime, please{" "}
                  <Link href="/contact/">contact us</Link> to give.
                </p>
              )}
            </div>

            <div className="panel bank">
              <h3>Bank transfer</h3>
              {hasBank ? (
                <dl>
                  <dt>Account name</dt>
                  <dd>{site.bank.accountName}</dd>
                  <dt>Sort code</dt>
                  <dd>{site.bank.sortCode}</dd>
                  <dt>Account number</dt>
                  <dd>{site.bank.accountNumber}</dd>
                  <dt>Reference</dt>
                  <dd>{site.bank.reference}</dd>
                </dl>
              ) : (
                <p className="note">
                  For bank details, email{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
            </div>
          </div>

          <p className="note" style={{ marginTop: "2rem" }}>
            If you’re a UK taxpayer, Gift Aid lets us claim an extra 25p for every £1 you give, at no
            cost to you. Tell us when you donate and we’ll send you a declaration. Caring Souls
            Foundation is registered charity {site.charityNumber}.
          </p>
        </div>
      </section>
    </>
  );
}
