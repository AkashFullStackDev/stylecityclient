import loginImage from "../../images/login-image.png";
import "./loginform.css";
import "../buttons/buttons.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateUser } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal";

const LoginForm = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialValue);
  const [userDataError, setUserDataError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const validate = (values) => {
    const error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      error.email = "Invalid email";
    }
    if (!values.password) {
      error.password = "Password is required";
    }

    return error;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserDataError(validate(userData));
    setIsSubmit(true);
  };

  const login = async () => {
    if (Object.keys(userDataError).length === 0 && isSubmit) {
      dispatch(validateUser(userData));
      navigate("/");
    }
  };

  useEffect(() => {
    user.isLoggedIn ? navigate("/") : null;
  }, []);

  useEffect(() => {
    login();
  }, [userDataError]);

  return (
    <div className="form-container">
      <section className="col">
        <form action="none" onSubmit={handleSubmit}>
          <span className="brand-logo">
            <h2>S</h2>TYLE <h1>C</h1>ITY
          </span>
          <div>
            <div>
              <p>Email</p>
              <p className="error">{userDataError.email}</p>
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div>
              <p>Password</p>
              <p className="error" id="error-password">
                {userDataError.password}
              </p>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="link-forgot-password">
              <p>Forgot your password?</p>
            </div>
            <div className="btn-login-container">
              <button type="submit" className="primary-button">
                Log in
              </button>
            </div>
            <hr />
            <div className="link-signup-login">
              <p>
                Don't have an account yet? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </div>
        </form>
      </section>

      <section className="col">
        <img src={loginImage} width={400} alt="" />
      </section>
    </div>
  );
};

export default LoginForm;
