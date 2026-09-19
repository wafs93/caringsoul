import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FormspreeForm from "@/components/FormspreeForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get involved",
  description: "Volunteer with Caring Souls Foundation, or partner with us as a church or organisation.",
};

export default function GetInvolved() {
  return (
    <>
      <PageHero
        title="Get involved"
        intro="Whether you have an hour a month or a skill to share, there’s a place for you here."
        next="#f2f7f9"
      />

      <section className="section band-mist" style={{ paddingTop: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="wrap split">
          <div>
            <h2>Ways to volunteer</h2>
            <ul className="values">
              <li>
                <strong>Events and worship</strong>
                <span>Set up, welcome guests, sing, play or help run the sound desk.</span>
              </li>
              <li>
                <strong>Youth mentoring</strong>
                <span>Spend time with young people and help them build confidence. DBS checks apply.</span>
              </li>
              <li>
                <strong>Community support</strong>
                <span>Pack and deliver essentials, or visit people who are isolated.</span>
              </li>
              <li>
                <strong>Skills and admin</strong>
                <span>Teaching, design, finance, fundraising or office help.</span>
              </li>
            </ul>
            <h2 style={{ marginTop: "2.5rem" }}>Churches and partners</h2>
            <p>
              If you lead a church or organisation and want support with outreach, pastoral care or an
              event, use the form and choose “Partnership”.
            </p>
          </div>

          <div className="panel">
            <h2>Register your interest</h2>
            <FormspreeForm
              formId={site.formspree.volunteer}
              submitLabel="Send my details"
              successMessage="Thank you. We’ve received your details and will be in touch soon."
            >
              <div className="form-row">
                <div className="field">
                  <label htmlFor="v-name">Full name</label>
                  <input id="v-name" name="name" required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="v-email">Email</label>
                  <input id="v-email" name="email" type="email" required autoComplete="email" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="v-phone">Phone (optional)</label>
                  <input id="v-phone" name="phone" type="tel" autoComplete="tel" />
                </div>
                <div className="field">
                  <label htmlFor="v-area">I’m interested in</label>
                  <select id="v-area" name="interest" defaultValue="Events and worship">
                    <option>Events and worship</option>
                    <option>Youth mentoring</option>
                    <option>Community support</option>
                    <option>Skills and admin</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="v-msg">Tell us a little about yourself</label>
                <textarea id="v-msg" name="message" placeholder="Where you’re based, when you’re free, and anything you’d like us to know" />
              </div>
              <input type="hidden" name="_subject" value="New volunteer / partner enquiry" />
            </FormspreeForm>
          </div>
        </div>
      </section>
    </>
  );
}
