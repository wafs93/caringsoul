import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { programmes } from "@/lib/site";

export const metadata: Metadata = {
  title: "What we do",
  description: "Church support, worship events, pastoral care, poverty relief, youth work and education.",
};

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        title="What we do"
        intro="From worship nights to food parcels, everything we do puts faith into practice in the community."
      />

      <section className="section" style={{ paddingTop: "clamp(1rem, 3vw, 2rem)" }}>
        <div className="wrap">
          {programmes.map((p) => (
            <article key={p.slug} id={p.slug} className="detail">
              <h2>{p.title}</h2>
              <div>
                <p>{p.summary}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section band-navy on-dark cta">
        <div className="wrap">
          <h2>Want to bring this work to your church or community?</h2>
          <p>Tell us what you need and we’ll find a way to help.</p>
          <div className="btn-row">
            <Link href="/contact/" className="btn btn-primary">Contact us</Link>
            <Link href="/donate/" className="btn btn-ghost">Support the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
