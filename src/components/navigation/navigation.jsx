import { useState } from "react";
import Modal from "../modal/modal";
import "./navigation.css"

const Navigation = (props) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");

    const showModal = () => setModal(true);
    const hideModal = () => setModal(false);

    const handlerAddUser = () => {
        if(name && email && gender){
            let newUserObj = {
                id: Math.random(),
                gender: gender,
                username: name,
                email: email,
            }
    
            props.addUser(newUserObj);
            hideModal();
            setName("");
            setEmail("");
            setGender("");
        }
        else{
            alert("Popunite sva polja!");
        }
        
    }

    return (
        <nav className="navigation">
            <h1 className="navigation-logo">CRUD-User</h1>
            <button className="navigation-newUser" onClick={showModal}>Dodaj novog korisnika</button>

            <Modal show={modal} handleClose={hideModal}>
                <p className="modal-header">Dodaj novog korisnika</p>
                <form className="modal-form">
                    <input type="text" maxLength="12" className="modal-form-input-name" value={name} onChange={e => setName(e.target.value)} placeholder="Unesite ime korisnika" required/>
                    <input type="email" maxLength="25" className="modal-form-input-email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Unesite E-mail korisnika" required/>
                    <label className="modal-form-label">Odaberite pol korisnika</label>
                    <div className="modal-form-radio" onChange={e => setGender(e.target.value)}>
                        <input type="radio" name="pol" value="m" />
                        <label>Muško</label>
                        <input type="radio" name="pol" value="z" />
                        <label>Žensko</label>
                    </div>
                </form>
                <button className="modal-addBtn" onClick={handlerAddUser}>Dodaj</button>
            </Modal>
        </nav>
    );
}

export default Navigation;