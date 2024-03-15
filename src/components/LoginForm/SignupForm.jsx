import loginImage from "../../images/login-image.png";
import "./loginform.css";
import "../buttons/buttons.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enableModal, disableModal } from "../../store/slices/modalSlice";
import Modal from "../modal/modal";

const SignupForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userData, setUserData] = useState(initialValues);
  const [userDataError, setUserDataError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserDataError(validate(userData));
    setIsSubmit(true);
  };

  const signup = async () => {
    if (Object.keys(userDataError).length === 0 && isSubmit) {
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
        }),
      });
      if (response.status === 200) {
        dispatch(enableModal());
      } else {
        console.log("Server Error");
      }
    }
  };

  useEffect(() => {
    signup();
  }, [userDataError]);

  const validate = (values) => {
    const error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      error.username = "Username is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      error.email = "Invalid email";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    if (!values.confirmPassword) {
      error.confirmPassword = "Confirm password is required";
    } else if (values.confirmPassword !== values.password) {
      error.confirmPassword = "Confirm password and password doesn't matched";
    }

    return error;
  };

  const modal = useSelector((state) => state.modal);
  const redirect = () => {
    navigate("/login");
  };

  return (
    <div className="form-container">
      {modal.isActive ? (
        <Modal message="User created!" execution={redirect} />
      ) : null}
      <section className="col">
        <form action="none" onSubmit={handleSubmit}>
          <span className="brand-logo">
            <h2>S</h2>TYLE <h1>C</h1>ITY
          </span>
          <div>
            <div>
              <p>Username</p>
              <p className="error" id="error-username">
                {userDataError.username}
              </p>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div>
              <p>Email</p>
              <p className="error">{userDataError.email}</p>
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
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
              />
            </div>
            <div>
              <p>Confirm Password</p>
              <p className="error" id="error-confirm-password">
                {userDataError.confirmPassword}
              </p>
              <input
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="btn-login-container">
              <button type="submit" className="primary-button">
                Sign up
              </button>
            </div>
            <hr />
            <div className="link-signup-login">
              <p>
                Already have an account? <Link to="/login">Login</Link>
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

export default SignupForm;
