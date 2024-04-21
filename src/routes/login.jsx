import logo from "../assets/login.png";
import LoginForm from "../component/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen m-auto w-[460px] h-[494px] flex flex-col items-center justify-center">
      <div className="text-base font-semibold leading-8">
        Join <span className="text-[#01A3E0]">Pacific Hunt</span> today
      </div>

      <div className="flex flex-col items-center">
        <img src={logo} alt="" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
