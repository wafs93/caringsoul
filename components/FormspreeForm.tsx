"use client";

import { FormEvent, ReactNode, useState } from "react";

type Props = {
  formId: string;
  submitLabel: string;
  successMessage: string;
  children: ReactNode;
};

// Posts to Formspree from the browser, so it works on a static site (Vercel or Webfort).
export default function FormspreeForm({ formId, submitLabel, successMessage, children }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (formId.startsWith("YOUR_")) {
      setState("err");
      setError("This form isn't connected yet. Please email us directly for now.");
      return;
    }

    setState("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      form.reset();
      setState("ok");
    } catch {
      setState("err");
      setError("Your message didn't send. Check your connection and try again, or email us directly.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <div aria-live="polite">
        {state === "ok" && <p className="form-status ok">{successMessage}</p>}
        {state === "err" && <p className="form-status err">{error}</p>}
      </div>
      <div>
        <button className="btn btn-primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
