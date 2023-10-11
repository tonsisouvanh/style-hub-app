import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LandingIntro from "./components/LandingIntro";
import { useAppDispatch } from "../../hook/hooks";
import { signIn } from "../../feature/auth/AuthSlice";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { SpinnerButton } from "../../components/Ui/index";
import ErrorMessage from "../../components/Typography/ErrorMessage";
import ThemeSwitch from "../../components/theme/ThemeSwitch";
import { useEffect } from "react";

interface LoginObject {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginObject>();

  const { status } = useSelector((state: RootState) => state.user);
  const userStr = sessionStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
  const handleSubmitForm: SubmitHandler<LoginObject> = async (data, e) => {
    e?.preventDefault();
    const userInput = { ...data };
    try {
      await dispatch(signIn(userInput));
      if (status === "succeeded") {
        // Redirect to dashboard if the sign-in is successful
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Sign-in error =>", error);
    }
  };

  useEffect(() => {
    if (user?.token) {
      navigate("/admin/dashboard");
    }
  }, [navigate, user]);

  return (
    <div className="flex min-h-screen items-center bg-base-200">
      <div className="absolute right-10 top-10">
        <ThemeSwitch />
      </div>
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  grid-cols-1 rounded-xl  bg-base-100 md:grid-cols-2">
          <div className="">
            <LandingIntro />
          </div>
          <div className="px-10 py-24">
            <h2 className="mb-2 text-center text-2xl font-semibold">Login</h2>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <div className="mb-4 space-y-6">
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                      },
                    })}
                    type="text"
                    className="input-bordered input w-full max-w-full"
                  />
                  <ErrorMessage error={errors?.email} />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must have at least 8 characters",
                      },
                    })}
                    type="password"
                    className="input-bordered input w-full max-w-full"
                  />
                  <ErrorMessage error={errors?.password} />
                </div>
              </div>
              <div className="text-right text-primary">
                <Link to="/forgot-password">
                  <span className="inline-block  text-sm  transition duration-200 hover:cursor-pointer hover:text-primary hover:underline">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <button
                disabled={status === "loading" && true}
                type="submit"
                className={`btn-primary btn mt-2 w-full`}
              >
                {status === "loading" ? <SpinnerButton /> : "Login"}
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
