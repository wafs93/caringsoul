import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  const { address } = site;

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">{site.name}</div>
            <p className="footer-tagline">{site.tagline}</p>
            <p>
              Registered charity in England and Wales, number{" "}
              <a href={site.charityRegisterUrl} target="_blank" rel="noopener noreferrer">
                {site.charityNumber}
              </a>
              .
            </p>
          </div>

          <div>
            <h2>Explore</h2>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/donate/">Support our work</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Get in touch</h2>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </li>
              <li>
                <address>
                  {address.line1}, {address.line2}
                  <br />
                  {address.town} {address.postcode}
                </address>
              </li>
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>
            © {new Date().getFullYear()} {site.name}. Charitable incorporated organisation.
          </span>
          <span>
            Website by{" "}
            <a href="https://wafstech.com" target="_blank" rel="noopener noreferrer">
              Wafs Tech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
