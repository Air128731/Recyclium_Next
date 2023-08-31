import { Formik, FormikProps, Form } from "formik";
import React from "react";
import TextField from "../TextField/TextField";
import * as Yup from "yup";

import Image from "next/image";
import Button from "../Button/Button";

export interface Values {
  email: string;
  password: string;
}

// const loginSchema = Yup.object().shape({
//   password: Yup.string().min(2, "Too Short!").required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });

type props = {
  onClick: () => void;
};

const LoginForm = ({ onClick }: props) => {
  return (
    <div className="rounded-2xl border-2 border-gray bg-white p-10">
      <div className="flex justify-center">
        <Image
          src={"/assets/images/textlogo.svg"}
          alt="logo"
          width="217"
          height="50"
        />
      </div>
      <Button
        type="button"
        onClick={onClick}
        className="mt-10 rounded-xl bg-primary font-primary text-white"
      >
        Login
      </Button>
      {/* <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          submit(values);
          actions.setSubmitting(false);
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form className="mt-8">
            <TextField
              name="email"
              type="email"
              label="Email"
              className="rounded-xl text-sm"
              placeholder="john.doe@mail.com"
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              className=" rounded-xl text-sm"
              labelclassName="mt-4"
            />
            <Button
              type="submit"
              className="mt-10 rounded-xl bg-primary font-primary text-white"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik> */}
    </div>
  );
};

export default LoginForm;
