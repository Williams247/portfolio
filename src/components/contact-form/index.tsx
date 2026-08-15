import { useState } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { contactFormSchema, PayloadProps, contactConstant } from "./utils";

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden>
    <path d="M20 21a8 8 0 0 0-16 0" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden>
    <path d="m22 2-7 20-4-9-9-4z" />
    <path d="M22 2 11 13" />
  </svg>
);

const fieldClass =
  "block w-full rounded-xl border border-white/20 bg-[#0a1020] py-3.5 pl-11 pr-4 text-base font-medium text-white caret-white shadow-inner shadow-black/20 outline-none transition placeholder:text-primary-gray-200/75 focus:border-primary-blue-100/70 focus:bg-[#0c1428] focus:ring-2 focus:ring-primary-blue-100/35";

function FormField({
  icon,
  error,
  touched,
  children,
}: {
  icon: React.ReactNode;
  error?: string;
  touched?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary-gray-200/80">
          {icon}
        </span>
        {children}
      </div>
      {touched && error ? <p className="mt-2 text-sm text-red-400">{error}</p> : null}
    </div>
  );
}

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: contactConstant,
    validationSchema: contactFormSchema,
    onSubmit: (payload) => handleSendMessage(payload),
  });

  const handleSendMessage = async (payload: PayloadProps) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_PUBLIC_BASE_URL}/V2/info/send-message`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      setLoading(false);

      formik.resetForm();
      toast.success(data.message, { position: "top-right" });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div id="message">
      <div>
        <h3 className="font-gotham-rounded-bold text-2xl text-white md:text-[1.65rem]">
          Send a{" "}
          <span className="bg-gradient-to-r from-primary-blue-100 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
            Message
          </span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-primary-gray-200 md:text-[15px]">
          Fill out the form below and I&apos;ll respond as soon as possible.
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="mt-8 space-y-4">
        <FormField
          icon={<UserIcon />}
          error={formik.errors.from}
          touched={formik.touched.from}
        >
          <input
            type="text"
            name="from"
            placeholder="Your Name"
            value={formik.values.from}
            onChange={formik.handleChange}
            className={fieldClass}
          />
        </FormField>

        <FormField
          icon={<MailIcon />}
          error={formik.errors.email}
          touched={formik.touched.email}
        >
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={fieldClass}
          />
        </FormField>

        <div>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-4 text-primary-gray-200/80">
              <MessageIcon />
            </span>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              className={`${fieldClass} min-h-[140px] resize-y pt-3`}
            />
          </div>
          {formik.touched.message && formik.errors.message ? (
            <p className="mt-2 text-sm text-red-400">{formik.errors.message}</p>
          ) : null}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary-blue-100/40 bg-primary-blue-100/[0.06] px-6 py-3.5 text-sm font-semibold text-primary-blue-100 transition hover:border-primary-blue-100/60 hover:bg-primary-blue-100/[0.12] disabled:opacity-50 md:w-auto"
          >
            <SendIcon />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};
