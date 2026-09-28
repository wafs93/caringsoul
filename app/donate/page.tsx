import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support our work",
  description: "Give a one-off or regular gift to Caring Souls Foundation.",
};

export default function Donate() {
  const hasBank = site.bank.sortCode && site.bank.accountNumber;

  return (
    <>
      <PageHero
        title="You can help us care for more people"
        intro="Our work is made possible through people who believe in supporting their communities."
      />

      <section className="section" style={{ paddingTop: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="wrap">
          <div className="section-intro">
            <h2>Where your gift goes</h2>
            <p>
              Your support helps us provide practical assistance, develop community outreach, support
              children and young people, offer mentoring and pastoral care, and sustain our charitable
              activities throughout England. As a small charity, every contribution makes a direct
              difference to what we can do.
            </p>
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
                  For bank details, email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
                  {site.phone}.
                </p>
              )}
            </div>
          </div>

          <p className="note" style={{ marginTop: "2rem" }}>
            If you’re a UK taxpayer, Gift Aid lets us claim an extra 25p for every £1 you give, at no
            cost to you. Tell us when you donate and we’ll send you a declaration. Caring Souls
            Foundation is registered charity {site.charityNumber}.
          </p>

          <div className="btn-row">
            <Link href="/get-involved/" className="btn btn-ghost">Other ways to help</Link>
          </div>
        </div>
      </section>
    </>
  );
}
