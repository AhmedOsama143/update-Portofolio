import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import FloatingFAIcons from "../BubblesBackground/FloatingFAIcons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Name too short")
    .max(50, "Name too long")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  message: Yup.string()
    .trim()
    .min(10, "Message too short")
    .required("Message is required"),
});

// Check if EmailJS is configured via env vars
const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isEmailJSConfigured = Boolean(EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_KEY);

export default function ContactSectionFormik({
  email = "ahmedkholief143@gmail.com",
  phone = "+201271989421",
  location = "Alexandria, Egypt",
  whatsapp = "https://wa.me/201271989421?text=Hi%20Ahmed,%20I%20want%20to%20discuss%20a%20project.",
}) {
  const [copied, setCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const mailtoPrefill = `mailto:${email}?subject=Project%20Inquiry%20from%20Portfolio&body=Hi%20Ahmed,%0A%0AMy%20project%20is%20about:%20...%0ABudget:%20...%0ATimeline:%20...%0A%0AThanks!`;

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setSubmitStatus(null);

    if (isEmailJSConfigured) {
      // Send via EmailJS
      try {
        await emailjs.send(
          EMAILJS_SERVICE,
          EMAILJS_TEMPLATE,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          EMAILJS_KEY
        );
        setSubmitStatus("success");
        resetForm();
        setTimeout(() => setSubmitStatus(null), 5000);
      } catch {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } else {
      // Fallback: open mail client
      const body =
        `From: ${values.name} <${values.email}>%0A%0A` +
        encodeURIComponent(values.message);
      const href = `mailto:${email}?subject=New%20Project%20Inquiry&body=${body}`;
      window.location.href = href;
      resetForm();
    }

    setSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black text-white py-16 md:py-24"
      aria-label="Contact section"
    >
      <FloatingFAIcons
        icons={[faCode, faHtml5, faCss3Alt, faJs, faReact, faBootstrap]}
        count={10}
        colors={["#60A5FA", "#34D399", "#FBBF24", "#F472B6", "#A78BFA"]}
        sizeRange={[20, 34]}
        duration={[12, 20]}
        sway={22}
      />

      <div className="pointer-events-none absolute inset-0 stars opacity-20 md:opacity-40" />
      <div className="hidden md:block pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30 aurora" />
      <div className="hidden md:block pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 aurora-2" />

      <div className="relative container mx-auto px-6 md:px-20">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact info card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-[0_0_30px_rgba(59,130,246,0.10)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm tracking-wider border border-white/20">
              <span className="h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
              CONTACT
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold leading-tight">
              Let's build something great.
            </h2>
            <p className="mt-2 text-white/80">
              I usually reply within{" "}
              <span className="text-primary-300">24h</span>.
            </p>

            <ul className="mt-6 space-y-5">
              <li className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/60">
                    Email
                  </div>
                  <a
                    href={mailtoPrefill}
                    className="text-white hover:underline break-all"
                  >
                    {email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(email)}
                  className="rounded-full px-3 py-1.5 text-sm border border-white/10 hover:border-white/20 hover:bg-white/5 transition"
                  aria-label="Copy email address"
                >
                  {copied ? " Copied!" : "Copy"}
                </button>
              </li>

              <li className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/60">
                    Phone
                  </div>
                  <a
                    href={`https://wa.me/${phone.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {phone}
                  </a>
                </div>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-3 py-1.5 text-sm border border-white/10 hover:border-white/20 hover:bg-white/5"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <div className="text-xs uppercase tracking-wide text-white/60">
                  Location
                </div>
                <div className="text-white">{location}</div>
              </li>
            </ul>

            <div className="mt-6 text-xs text-white/60">
              Prefer email? Use the form or click the address to open your mail
              app.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-[0_0_30px_rgba(59,130,246,0.10)]">
            {/* Status messages */}
            {submitStatus === "success" && (
              <div
                role="alert"
                className="mb-4 rounded-xl bg-green-500/15 border border-green-400/30 px-4 py-3 text-sm text-green-300"
              >
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div
                role="alert"
                className="mb-4 rounded-xl bg-red-500/15 border border-red-400/30 px-4 py-3 text-sm text-red-300"
              >
                Failed to send. Please try again or email me directly.
              </div>
            )}

            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
              validateOnBlur
              validateOnChange
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-white/70 mb-1"
                    >
                      Your Name
                    </label>
                    <Field
                      id="name"
                      name="name"
                      placeholder="Ahmed Kholief"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={
                        touched.name && errors.name ? "true" : "false"
                      }
                      aria-describedby={
                        touched.name && errors.name ? "name-error" : undefined
                      }
                      className={`w-full rounded-2xl bg-black/40 border outline-none px-4 py-3 text-white placeholder-white/40
                        focus-visible:ring-2 focus-visible:ring-primary-400/60
                        ${
                          touched.name && errors.name
                            ? "border-red-400 focus:border-red-400"
                            : "border-white/10 focus:border-primary-400"
                        }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      id="name-error"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-white/70 mb-1"
                    >
                      Your Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={
                        touched.email && errors.email ? "true" : "false"
                      }
                      aria-describedby={
                        touched.email && errors.email
                          ? "email-error"
                          : undefined
                      }
                      className={`w-full rounded-2xl bg-black/40 border outline-none px-4 py-3 text-white placeholder-white/40
                        focus-visible:ring-2 focus-visible:ring-primary-400/60
                        ${
                          touched.email && errors.email
                            ? "border-red-400 focus:border-red-400"
                            : "border-white/10 focus:border-primary-400"
                        }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      id="email-error"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-white/70 mb-1"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell me about your project…"
                      aria-required="true"
                      aria-invalid={
                        touched.message && errors.message ? "true" : "false"
                      }
                      aria-describedby={
                        touched.message && errors.message
                          ? "message-error"
                          : undefined
                      }
                      className={`w-full rounded-2xl bg-black/40 border outline-none px-4 py-3 text-white placeholder-white/40 resize-y
                        focus-visible:ring-2 focus-visible:ring-primary-400/60
                        ${
                          touched.message && errors.message
                            ? "border-red-400 focus:border-red-400"
                            : "border-white/10 focus:border-primary-400"
                        }`}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      id="message-error"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-white
                                 bg-gradient-to-r from-primary-500 to-primary-400
                                 shadow-[0_0_25px_-6px_rgba(59,130,246,.8)] active:scale-[.98] disabled:opacity-60
                                 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                    </button>

                    <a
                      href={mailtoPrefill}
                      className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10
                                 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      Hire Me via Email
                    </a>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
