import Wave from "./Wave";

type Props = { title: string; intro: string; next?: string };

export default function PageHero({ title, intro, next = "#ffffff" }: Props) {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      <Wave top="#0b2a5b" bottom={next} />
    </>
  );
}
