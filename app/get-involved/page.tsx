import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FormspreeForm from "@/components/FormspreeForm";
import { finances, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Volunteer with Caring Souls Foundation, or partner with us as a church, charity or voluntary organisation.",
};

export default function GetInvolved() {
  return (
    <>
      <PageHero
        title="Powered by people who care"
        intro="Whether you can give a few hours, a particular skill or simply a willingness to help, there may be a place for you here."
        next="#f2f7f9"
      />

      <section className="section band-mist" style={{ paddingTop: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="wrap split">
          <div>
            <h2>Volunteer with us</h2>
            <p>
              {finances.volunteers} volunteers currently support our work. From community outreach and
              practical assistance to helping run charitable activities, volunteers help us extend our
              reach and serve people in our communities.
            </p>
            <ul className="values">
              <li>
                <strong>Community outreach</strong>
                <span>Help with food and clothing support and community assistance.</span>
              </li>
              <li>
                <strong>Mentoring and guidance</strong>
                <span>Spend time with young people and people facing difficult circumstances.</span>
              </li>
              <li>
                <strong>Pastoral and wellbeing support</strong>
                <span>Offer a listening ear alongside our pastoral care activities.</span>
              </li>
              <li>
                <strong>Skills and admin</strong>
                <span>Teaching, design, finance, fundraising or office support.</span>
              </li>
            </ul>

            <h2 id="partner" style={{ marginTop: "2.5rem" }}>
              Partner with us
            </h2>
            <p>
              We work with churches, charities and voluntary organisations to improve access to
              services and support. Working together lets organisations share knowledge, resources and
              experience, and reach people who might otherwise struggle to get help.
            </p>
            <p>
              If your organisation would like to explore a partnership, choose “Partnership” on the
              form and we’ll be in touch.
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
                  <select id="v-area" name="interest" defaultValue="Community outreach">
                    <option>Community outreach</option>
                    <option>Mentoring and guidance</option>
                    <option>Pastoral and wellbeing support</option>
                    <option>Skills and admin</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="v-msg">Tell us a little about yourself</label>
                <textarea
                  id="v-msg"
                  name="message"
                  placeholder="Where you’re based, when you’re free, and anything you’d like us to know"
                />
              </div>
              <input type="hidden" name="_subject" value="New volunteer / partner enquiry" />
            </FormspreeForm>
          </div>
        </div>
      </section>
    </>
  );
}
