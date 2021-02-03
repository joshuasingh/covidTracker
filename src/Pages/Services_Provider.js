import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const checErr = (values) => {
  console.log("checking errors");
  var errors = {};

  if (values.email.length === 0) errors.email = "required";

  if (values.firstName.length === 0) errors.firstName = "required";

  return errors;
};

const Services_Provider = () => {
  useEffect(() => {
    console.log("in rendereing of form");
  });

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      console.log("values", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        {...formik.getFieldProps("email")}
      />

      <div style={{ height: "30px" }}>
        {formik.touched.email ? formik.errors.email : ""}
      </div>
      <label htmlFor="email">first Name</label>
      <input
        id="fname"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        onBlur={formik.handleBlur}
      />
      <div>{formik.touched.firstName ? formik.errors.firstName : ""} </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Services_Provider;
