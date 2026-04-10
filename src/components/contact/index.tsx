import { ContactForm } from "../contact-form";
import { Container } from "../container";
import { Caption } from "../caption";

export const Contact = () => (
  <section className="pb-12 pt-6 md:pb-16 md:pt-8">
    <Container>
      <div className="relative mx-auto w-full max-w-5xl text-left">
        <Caption label="Contact" />
        <div className="mt-12 grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          <div id="contact" className="flex min-h-0 w-full flex-col">
            <p className="text-sm font-medium text-primary-gray-200">Location</p>
            <iframe
              width="100%"
              height={400}
              title="Location"
              className="mt-4 min-h-[320px] flex-1 rounded-2xl border border-white/10 bg-slate-900/30 shadow-inner"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.898608491927!2d3.2787666359789363!3d6.55480843635338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e524cb7ffff%3A0x328e8fc639c06a53!2sEjigbo%2C%20Lagos!5e0!3m2!1sen!2sng!4v1591898080725!5m2!1sen!2sng"
            />
          </div>
          <div className="flex w-full flex-col">
            <p className="text-sm font-medium text-primary-gray-200">Send a message</p>
            <div className="mt-4 flex-1 rounded-2xl border border-white/10 bg-slate-900/25 p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
