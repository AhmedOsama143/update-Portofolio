import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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

export default function ContactSectionFormik({
  email = "ahmedkholief143@gmail.com",
  phone = "+201271989421",
  location = "Alexandria, Egypt",
  whatsapp = "https://wa.me/201271989421?text=Hi%20Ahmed,%20I%20want%20to%20discuss%20a%20project.",
}) {
  const [copied, setCopied] = useState(false);

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
    const body =
      `From: ${values.name} <${values.email}>%0A%0A` +
      encodeURIComponent(values.message);
    const href = `mailto:${email}?subject=New%20Project%20Inquiry&body=${body}`;
    window.location.href = href;

    resetForm();
    setSubmitting(false);
  };

  return (
    <section
      id="ContactMe"
      className="relative overflow-hidden bg-black text-white py-16 md:py-24"
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
          {/* بطاقة معلومات التواصل */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-[0_0_30px_rgba(59,130,246,0.10)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm tracking-wider border border-white/20">
              <span className="h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
              CONTACT
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold leading-tight">
              Let’s build something great.
            </h2>
            <p className="mt-2 text-white/80">
              I usually reply within{" "}
              <span className="text-primary-300">24h</span>.
            </p>

            <ul className="mt-6 space-y-5">
              <li className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/50">
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
                >
                  {copied ? " Copied!" : "Copy"}
                </button>
              </li>

              <li className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/50">
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
                  className="rounded-full px-3 py-1.5 text-sm border border-white/10 hover:border-white/20 hover:bg-white/5"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <div className="text-xs uppercase tracking-wide text-white/50">
                  Location
                </div>
                <div className="text-white">{location}</div>
              </li>
            </ul>

            <div className="mt-6 text-xs text-white/50">
              Prefer email? Use the form or click the address to open your mail
              app.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-[0_0_30px_rgba(59,130,246,0.10)]">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
              validateOnBlur
              validateOnChange
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-4">
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
                      aria-invalid={
                        touched.name && errors.name ? "true" : "false"
                      }
                      className={`w-full rounded-2xl bg-black/40 border outline-none px-4 py-3 text-white placeholder-white/40
                        ${
                          touched.name && errors.name
                            ? "border-red-400 focus:border-red-400"
                            : "border-white/10 focus:border-primary-400"
                        }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
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
                      aria-invalid={
                        touched.email && errors.email ? "true" : "false"
                      }
                      className={`w-full rounded-2xl bg-black/40 border outline-none px-4 py-3 text-white placeholder-white/40
                        ${
                          touched.email && errors.email
                            ? "border-red-400 focus:border-red-400"
                            : "border-white/10 focus:border-primary-400"
                        }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
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
                      aria-invalid={
                        touched.message && errors.message ? "true" : "false"
                      }
                      className={`w-full rounded-2xl bg-black/40 border outline-none px-4 py-3 text-white placeholder-white/40 resize-y
                        ${
                          touched.message && errors.message
                            ? "border-red-400 focus:border-red-400"
                            : "border-white/10 focus:border-primary-400"
                        }`}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-white
                                 bg-gradient-to-r from-primary-500 to-primary-400
                                 shadow-[0_0_25px_-6px_rgba(59,130,246,.8)] active:scale-[.98] disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                    </button>

                    <a
                      href={mailtoPrefill}
                      className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10"
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

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-12px) translateX(6px); }
        }
        .aurora {
          background:
            radial-gradient(closest-side, rgba(59,130,246,0.35), transparent 70%),
            radial-gradient(closest-side, rgba(29,78,216,0.30), transparent 60%);
          animation: float 8s ease-in-out infinite;
        }
        .aurora-2 {
          background:
            radial-gradient(closest-side, rgba(29,78,216,0.35), transparent 70%),
            radial-gradient(closest-side, rgba(59,130,246,0.25), transparent 60%);
          animation: float 10s ease-in-out infinite reverse;
        }
        .stars {
          background-image:
            radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.9), transparent 60%),
            radial-gradient(1.5px 1.5px at 80% 20%, rgba(255,255,255,0.8), transparent 60%),
            radial-gradient(1.8px 1.8px at 60% 70%, rgba(255,255,255,0.85), transparent 60%),
            radial-gradient(1.2px 1.2px at 30% 80%, rgba(255,255,255,0.8), transparent 60%),
            radial-gradient(1.3px 1.3px at 50% 50%, rgba(255,255,255,0.75), transparent 60%);
          background-repeat: no-repeat;
          background-size: cover;
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora, .aurora-2 { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
