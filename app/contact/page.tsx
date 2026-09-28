import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FormspreeForm from "@/components/FormspreeForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Caring Souls Foundation in Barking, London.",
};

export default function Contact() {
  const { address } = site;

  return (
    <>
      <PageHero
        title="We’d love to hear from you"
        intro="Find out more about our work, volunteer, discuss a partnership, or ask about our charitable activities."
        next="#f2f7f9"
      />

      <section className="section band-mist" style={{ paddingTop: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="wrap split">
          <div>
            <h2>Reach us directly</h2>
            <ul className="contact-list">
              <li>
                <span>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span>Telephone</span>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </li>
              <li>
                <span>Address</span>
                <address>
                  Caring Souls Foundation
                  <br />
                  {address.line1}
                  <br />
                  {address.line2}
                  <br />
                  {address.town}
                  <br />
                  {address.postcode}
                </address>
              </li>
              <li>
                <span>Registered charity</span>
                <a href={site.charityRegisterUrl} target="_blank" rel="noopener noreferrer">
                  No. {site.charityNumber}
                </a>
              </li>
            </ul>
            <p className="note">We aim to reply within two working days.</p>
          </div>

          <div className="panel">
            <h2>Send a message</h2>
            <FormspreeForm
              formId={site.formspree.contact}
              submitLabel="Send message"
              successMessage="Message sent. We’ll reply within two working days."
            >
              <div className="form-row">
                <div className="field">
                  <label htmlFor="c-name">Full name</label>
                  <input id="c-name" name="name" required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" name="email" type="email" required autoComplete="email" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-topic">What’s it about?</label>
                <select id="c-topic" name="topic" defaultValue="General enquiry">
                  <option>General enquiry</option>
                  <option>I need support</option>
                  <option>Volunteering</option>
                  <option>Partnership</option>
                  <option>Donations</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-msg">Message</label>
                <textarea id="c-msg" name="message" required />
              </div>
              <input type="hidden" name="_subject" value="New message from caringsouls.org.uk" />
            </FormspreeForm>
          </div>
        </div>
      </section>
    </>
  );
}
