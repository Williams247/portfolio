import { useState } from "react";
import toast from "react-hot-toast";
import { Formik } from "formik";
import { TextInput, TextArea } from "../input";
import { Button } from "../button";
import { contactValidation, PayloadProps, contactConstant } from "./utils";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
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
      console.log(data.message);
      setLoading(false);
      toast.success(data.message, { position: "top-right" });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div id={"message"} className={"mt-14 py-6 md:px-5 lg:px-8"}>
      <div>
        <div>
          <Formik
            validationSchema={contactValidation}
            validateOnChange
            validateOnBlur
            initialValues={contactConstant}
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
                    placeHolder={"Leave a message"}
                  />
                </div>
                <div className="mt-6">
                  <Button
                    disabled={loading}
                    label={`${loading ? "Loading...." : "Send message"}`}
                    variant={"primary"}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
