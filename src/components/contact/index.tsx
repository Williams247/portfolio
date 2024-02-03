import { Formik } from "formik";
import { TextInput, TextArea } from "../input";
import { Button } from "../button";

import { contactValidation } from "../../utils/validation";
import styles from "./styles.module.scss";

export const Contact = () => {
  const handleSendMessage = () => {};
  return (
    <div id="message" className="mt-20">
      <div>
        <div className={"mt-10"}>
          <Formik
            validationSchema={contactValidation}
            validateOnChange
            validateOnBlur
            initialValues={{ email: "", from: "", message: "" }}
            onSubmit={handleSendMessage}
          >
            {({ values, errors, handleChange, handleSubmit, touched }) => (
              <form onSubmit={handleSubmit}>
                <div className={styles.contactContainer}>
                  <div className={styles.shortFormSection}>
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
                  <div className={styles.shortFormSection}>
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
