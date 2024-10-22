import { Form, Link, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import { useState } from "react";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Register() {
  const [showPass, setShowPass] = useState(false);

  function showPasswordHandler() {
    setShowPass((prev) => !prev);
  }

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>

        <FormRow type="text" name="name" placeholder="Name" />

        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          placeholder="Last name"
        />

        <FormRow type="text" name="location" placeholder="earth" />

        <FormRow type="email" name="email" placeholder="john@doe.com" />

        <FormRow
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="11111111"
          showPassword={true}
          showPasswordHandler={showPasswordHandler}
          showPass={showPass}
        />

        <SubmitBtn />
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Register;
