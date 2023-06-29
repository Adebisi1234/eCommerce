import { Link, useNavigate } from "react-router-dom";
import watch from "../../assets/watch.png";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <header
        className="h-10 mt-8"
        onClick={() => {
          navigate("..");
        }}
      >
        <svg
          className="fav"
          height={10}
          width={10}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M674.891852 133.404444 322.275556 498.536296c-1.137778 1.232593-2.085926 2.56-2.939259 3.982222-4.361481 7.205926-3.508148 16.592593 2.56 22.945185l352.616296 365.131852c7.395556 7.68 19.816296 7.774815 27.306667 0 7.205926-7.395556 6.826667-19.342222-0.379259-26.737778l-339.626667-351.762963c0 0 0 0 0-0.094815l340.005926-352.047407c7.205926-7.395556 7.49037-19.342222 0.379259-26.737778C694.708148 125.62963 682.287407 125.724444 674.891852 133.404444z" />
        </svg>
      </header>
      <img src={watch} className="mx-auto mt-9" alt="logo" />
      <h1 className="mt-6 mb-16">Log into your account</h1>

      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (
            [...document.getElementsByTagName("input")].every(
              (el: HTMLInputElement) => el.value.length > 0
            )
          ) {
            navigate("..");
          }
        }}
      >
        <div className="input">
          <input
            className="bg-[var(--bg-lightDark)] p-4 w-full block h-[60px] rounded-[20px]"
            placeholder="Email address"
            type="email"
          />
          <input
            className="bg-[var(--bg-lightDark)] p-4 my-7 w-full block h-[60px] rounded-[20px]"
            placeholder="password"
            type="password"
          />
        </div>
        <button className="bg-[var(--highlight)] w-full h-[60px] flex items-center justify-center rounded-[30px]">
          Log in
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/details">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
