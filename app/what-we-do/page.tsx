import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { beneficiaries, programmes } from "@/lib/site";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Practical support, work with children and young people, mentoring, wellbeing and pastoral care, and community outreach throughout England.",
};

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        title="What we do"
        intro="Practical care and Christian compassion, brought into the communities we serve."
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

      <section className="section band-mist">
        <div className="wrap">
          <div className="section-intro">
            <h2>Everyone deserves care</h2>
            <p>
              The Charity Commission record identifies these groups among those who may benefit from
              our work. Our activities are not limited to one community or location.
            </p>
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
