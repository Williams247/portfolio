import { useState } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { TextInput, TextArea } from "../input";
import { Button } from "../button";
import { contactFormSchema, PayloadProps, contactConstant } from "./utils";

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
    <div id={"message"} className={"mt-14 py-6 md:px-5 lg:px-8"}>
      <div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div>
                <TextInput
                  label={"Email"}
                  isRequired
                  htmlFor={"email"}
                  name={"email"}
                  changeEvent={formik.handleChange}
                  inputType="email"
                  errors={formik.errors}
                  touched={formik.touched}
                  inputValue={formik.values.email}
                  placeHolder={"Email"}
                />
              </div>
              <div>
                <TextInput
                  label={"From Who"}
                  isRequired
                  htmlFor={"from"}
                  name={"from"}
                  changeEvent={formik.handleChange}
                  inputType="text"
                  errors={formik.errors}
                  touched={formik.touched}
                  inputValue={formik.values.from}
                  placeHolder={"From who"}
                />
              </div>
            </div>
            <div className="mt-1">
              <TextArea
                label="Message"
                isRequired
                htmlFor={"message"}
                name={"message"}
                changeEvent={formik.handleChange}
                errors={formik.errors}
                touched={formik.touched}
                inputValue={formik.values.message}
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
        </div>
      </div>
    </div>
  );
};
