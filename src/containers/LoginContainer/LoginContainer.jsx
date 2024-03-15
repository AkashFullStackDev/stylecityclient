import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/LoginForm/SignupForm";
import Loader from "../../components/loader/Loader";
import "./loginContainer.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const LoginContainer = (props) => {
  const user = useSelector(state=>state.user);
  const navigate = useNavigate();
  
  return (
    <section id="login-container">
    {user.isLoading?<Loader />:null}
    {props.requirement==="login"?<LoginForm />:<SignupForm />}
    </section>
  );
};

export default LoginContainer;
