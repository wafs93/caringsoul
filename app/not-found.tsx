import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section cta">
      <div className="wrap">
        <h1>Page not found</h1>
        <p>The page you’re looking for has moved or doesn’t exist.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn-primary">Go to the homepage</Link>
        </div>
      </div>
    </section>
  );
}
