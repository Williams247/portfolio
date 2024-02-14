import { Formik } from "formik";
import { TextInput, TextArea } from "../input";
import { Button } from "../button";
import { contactValidation } from "./validation";

export const ContactForm = () => {
  const handleSendMessage = () => {};
  return (
    <div id="message" className="mt-14 py-6 md:px-5 lg:px-8">
      <div>
        <div>
          <Formik
            validationSchema={contactValidation}
            validateOnChange
            validateOnBlur
            initialValues={{ email: "", from: "", message: "" }}
            onSubmit={handleSendMessage}
          >
            {({ values, errors, handleChange, handleSubmit, touched }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <div>
                    <TextInput
                      label="Email"
                      isRequired
                      htmlFor={"email"}
                      name={"email"}
                      changeEvent={handleChange}
                      inputType="email"
                      errors={errors}
                      touched={touched}
                      inputValue={values.email}
                      placeHolder="Email"
                    />
                  </div>
                  <div>
                    <TextInput
                      label="From Who"
                      isRequired
                      htmlFor={"from"}
                      name={"from"}
                      changeEvent={handleChange}
                      inputType="text"
                      errors={errors}
                      touched={touched}
                      inputValue={values.from}
                      placeHolder="From who"
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <TextArea
                    label="Message"
                    isRequired
                    htmlFor={"message"}
                    name={"message"}
                    changeEvent={handleChange}
                    errors={errors}
                    touched={touched}
                    inputValue={values.message}
                    placeHolder="Leave a message"
                  />
                </div>
                <div className="mt-6">
                  <Button label="Send message" variant="primary" />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
