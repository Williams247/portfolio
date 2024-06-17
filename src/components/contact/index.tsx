import { ContactForm } from "../contact-form";
import { Container } from "../container";
import { Caption } from "../caption";

export const Contact = () => (
  <section>
    <Container>
      <div className={"mt-10"}>
        <Caption label="Contact" />
        <div className={"flex flex-wrap justify-between -mt-8"}>
          <div className={"w-full md:w-[49.5%]"}>
            <div id="contact">
              <div className="mt-20">
                <iframe
                  width={"100%"}
                  height={500}
                  title={"Location"}
                  className="mt-14 border-2 border-primary-blue-100 rounded-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.898608491927!2d3.2787666359789363!3d6.55480843635338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e524cb7ffff%3A0x328e8fc639c06a53!2sEjigbo%2C%20Lagos!5e0!3m2!1sen!2sng!4v1591898080725!5m2!1sen!2sng"
                ></iframe>
              </div>
            </div>
          </div>
          <div className={"w-full md:w-[49.5%] pt-6"}>
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  </section>
);
