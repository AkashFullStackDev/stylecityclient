import "./loader.css";
import Spinner from "react-spinner-material";

const Loader = () => {
return (
    <div className="loader-container">
        <Spinner className="loader" radius={60} stroke={6} color="#00FFC5"/>
    </div>
)
}

export default Loader;