const LoginForm = () => {
  return (
    <>
      <form className="shadow-[#BECCFF26] text-left mt-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-sm">
            Email
          </label>
          <input
            className="xl:w-[412px] w-[300px] h-[48px] px-4 py-[14px] border-2 border-[#E6E7E7]"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor="password" className="font-medium text-sm">
            Password
          </label>
          <input
            className="xl:w-[412px] w-[300px] h-[48px] px-4 py-[14px] border-2 border-[#E6E7E7]"
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <button className="xl:w-[412px] w-[300px] h-[#48px] bg-[#01A3E0] px-6 py-[14px] rounded-xl mt-10 xl:mt-20 text-white">
            Log in
          </button>
          <p className="text-center font-medium text-sm mt-6">
            Forgot Password?
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
