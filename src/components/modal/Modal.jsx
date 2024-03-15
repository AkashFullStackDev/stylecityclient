import "./modal.css";
import "../buttons/buttons.css";
import { useDispatch } from "react-redux";
import { disableModal } from "../../store/slices/modalSlice";


const Modal = (props) => {
const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(disableModal());
        props.execution();
    }

  return (
    <section className="modal-container">
      <div className="modal">
        <div className="success-message-container">
          <p>
            {props.message
              ? props.message
              : "Pass a message as props (message=<string>)"}
          </p>
        </div>
        <div className="close-button-container">
            <button className="close-button" onClick={closeModal}>Close</button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
