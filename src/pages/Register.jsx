import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let schema = yup.object().shape({
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is Required"),
    mobile: yup.string().required("Required"),
    password: yup.string().required("Password is Required"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      role: "admin",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
        dispatch(register(values));
        setTimeout(()=>{
            navigate("/account-created");
        }, 1000)
    },
  });
  //   const authState = useSelector((state) => state);

  //   const { user, isError, isSuccess, isLoading, message } = authState.auth;

  //   useEffect(() => {
  //     if (!user == null || isSuccess) {
  //       navigate("admin");
  //     } else {
  //       navigate("");
  //     }
  //   }, [user, isError, isSuccess, isLoading]);
  return (
    <div className="py-1" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center title">Register</h3>
        <p className="text-center">Register your account to continue.</p>
        <div className="error text-center">
          {/* {message.message == "Rejected" ? "You are not an Admin" : ""} */}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="firstname"
            label="First Name"
            id="firstname"
            onChng={formik.handleChange("firstname")}
            onBlr={formik.handleBlur("firstname")}
            val={formik.values.firstname}
          />
          <div className="error mt-2">
            {formik.touched.firstname && formik.errors.firstname}
          </div>
          <CustomInput
            type="text"
            name="lastname"
            label="Last Name"
            id="lastname"
            onChng={formik.handleChange("lastname")}
            onBlr={formik.handleBlur("lastname")}
            val={formik.values.lastname}
          />
          <div className="error mt-2">
            {formik.touched.lastname && formik.errors.lastname}
          </div>
          <CustomInput
            type="text"
            name="email"
            label="Email Address"
            id="email"
            onChng={formik.handleChange("email")}
            onBlr={formik.handleBlur("email")}
            val={formik.values.email}
          />
          <div className="error mt-2">
            {formik.touched.email && formik.errors.email}
          </div>
          <CustomInput
            type="text"
            name="mobile"
            label="Mobile"
            id="mobile"
            onChng={formik.handleChange("mobile")}
            onBlr={formik.handleBlur("mobile")}
            val={formik.values.mobile}
          />
          <div className="error mt-2">
            {formik.touched.mobile && formik.errors.mobile}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            id="pass"
            onChng={formik.handleChange("password")}
            onBlr={formik.handleBlur("password")}
            val={formik.values.password}
          />
          <div className="error mt-2">
            {formik.touched.password && formik.errors.password}
          </div>
          {/* <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div> */}
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
