import "./signUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <header>Welcome To GroupChat</header>
      <main className="signUp-main">
        <form className="signUp-main-form">
          <div className="signUp-main-form-heading">Log In</div>
          <div>
            <div className="label" htmlFor="name">
              Name
            </div>
            <input type="text" name="name" />
          </div>
          <div>
            <div className="label" htmlFor="email">
              Email
            </div>
            <input type="email" name="email" />
          </div>
          <div>
            <div className="label" htmlFor="phone">
              Phone
            </div>
            <input type="number" name="phone" />
          </div>
          <div>
            <div className="label" htmlFor="password">
              Password
            </div>
            <input type="password" name="password" />
          </div>
          <button>Sign Up</button>
          <div>
            <span>Already have a account ? </span>
            <a href="/">Log In</a>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
