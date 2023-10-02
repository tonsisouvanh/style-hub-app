import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingIntro from "./components/LandingIntro";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";

interface LoginObj {
  emailId: string;
  password: string;
}

const initialState = {
  name: "auth",
  token: "aljsfo3u029",
  roles: [2001, 201],
};
// const initialState = {
//   name: "",
//   token: "",
//   roles: [],
// };

function Login() {
  const INITIAL_LOGIN_OBJ: LoginObj = {
    password: "",
    emailId: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState<LoginObj>(INITIAL_LOGIN_OBJ);
  const navigate = useNavigate();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { token: "slajf029380rh8ahs" };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/admin/dashboard");
    // setErrorMessage("");

    // if (loginObj.emailId.trim() === "")
    //   return setErrorMessage("Email Id is required! (use any value)");
    // if (loginObj.password.trim() === "")
    //   return setErrorMessage("Password is required! (use any value)");
    // else {
    //   setLoading(true);
    //   // Call API to check user credentials and save token in localstorage
    //   localStorage.setItem("token", "DumyTokenHere");
    //   setLoading(false);
    //   navigate("/admin/dashboard");
    // }
  };
  const updateFormValue = (updateType: string, value: string) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  useEffect(() => {
    if (initialState) navigate("/admin/dashboard");
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center bg-base-200">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  grid-cols-1 rounded-xl  bg-base-100 md:grid-cols-2">
          <div className="">
            <LandingIntro />
          </div>
          <div className="px-10 py-24">
            <h2 className="mb-2 text-center text-2xl font-semibold">Login</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  type="emailId"
                  defaultValue={loginObj.emailId}
                  updateType="emailId"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
              </div>

              <div className="text-right text-primary">
                <Link to="/forgot-password">
                  <span className="inline-block  text-sm  transition duration-200 hover:cursor-pointer hover:text-primary hover:underline">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn-primary btn mt-2 w-full" + (loading ? " loading" : "")
                }
              >
                Login
              </button>

              <div className="mt-4 text-center">
                Don't have an account yet?
                <Link to="/register">
                  <span className="  inline-block  transition duration-200 hover:cursor-pointer hover:text-primary hover:underline">
                    Register
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
