import "./modal.css";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <section className={showHideClassName}>
            <div className="modal-main">
                {children}
                <button className="modal-cancelBtn" type="button" onClick={handleClose}>
                    Odustani
                </button>
            </div>
        </section>
    );
}

export default Modal;