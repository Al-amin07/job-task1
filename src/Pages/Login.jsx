
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImSpinner5 } from "react-icons/im";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  
  const [loading, setLoading] = useState(false)
  const { logIn, goolgeSignIn } = useAuth()
  const location = useLocation();
  const navigate = useNavigate()
  const path = location?.state ? location?.state : '/'
  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value
    const password = e.target.password.value
    try {
      const result = await logIn(email, password)
      console.log(result.user)
      toast.success('Login Successfull!!!')
      navigate(path)
    } catch (error) {
      toast.error(error.messgage)
    } finally{
      setLoading(false)
    }
  }
  const handleGoogleLogin = async () => {
    setLoading(true)
    try {
      const result = await goolgeSignIn()
      console.log(result.user)
      toast.success('Login Successfull!!!')
      navigate(path)
    } catch (error) {
      toast.error(error.messgage)
    } finally{
      setLoading(false)
    }
  }
  return (
    <section className="min-h-[600px] flex items-center justify-center ">
      <div className="w-full max-w-md mx-auto border border-teal-500 bg-base-200 p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-600">
          Dont have account?
          <Link to={"/signup"} className="focus:underline hover:underline">
            Sign up here
          </Link>
        </p>
        <button
         onClick={handleGoogleLogin}
            className="flex bg-white w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </button>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Email Address
            </label>
            <input
              name="email"
              required
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-teal-300"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forget Password?
                </a>
              </div>

              <input
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-teal-300"
                type="password"
                placeholder="************"
              />
            </div>
          <button
          disabled={loading}
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-teal-400 text-white px-8 disabled:bg-teal-300 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            {loading ? <ImSpinner5 size={24} className=" animate-spin m-auto" /> : 'Sign in'}
          </button>
        </form>
      </div>
    </section>
    // <div>
    //   ll
    // </div>
  );
};

export default Login;
