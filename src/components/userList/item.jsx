import { useState } from "react";
import avatarM from "../../images/avatar-m.png";
import avatarF from "../../images/avatar-f.png";
import Modal from "../modal/modal";
import "./item.css";

const Item = (props) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState(props.user.username);
    const [email, setEmail] = useState(props.user.email);
    const [gender, setGender] = useState(props.user.gender);

    const showModal = () => setModal(true);
    const hideModal = () => setModal(false);

    const handerEditUser = () => {
        if(name && email && gender){
            let editedUserObj = {
                id: props.user.id,
                gender: gender,
                username: name,
                email: email,
            }
    
            props.editUser(editedUserObj);
            hideModal();
        }
        else{
            alert("Popunite sva polja!");
        }
    }

    const radioBtnChecked = () => {
        if(gender === "m"){
            return (
                <div>
                    <input type="radio" name="pol" value="m" defaultChecked/>
                    <label>Muško</label>
                    <input type="radio" name="pol" value="f" />
                    <label>Žensko</label>
                </div>
            );
        }
        else{
            return (
                <div>
                    <input type="radio" name="pol" value="m"/>
                    <label>Muško</label>
                    <input type="radio" name="pol" value="f" defaultChecked/>
                    <label>Žensko</label>
                </div>
            );
        }
    }

    return (
        
        <section className="item">
            <div className="item-userContent">
                <img className="item-avatar" src={props.user.gender === "m" ? avatarM : avatarF} alt="User" />
                <p className="item-username">{props.user.username}</p>
                <p className="item-mail">{props.user.email}</p>
            </div>
            <div className="item-options">
                <i className="fa fa-pencil item-option-icon" onClick={showModal}></i>
                <i className="fa fa-trash item-option-icon" onClick={() => props.deleteUser(props.user.id)}></i>
            </div>

            <Modal show={modal} handleClose={hideModal}>
                <p className="modal-header">Ažuriraj selektovanog korisnika</p>
                <form className="modal-form">
                    <input type="text" maxLength="12" className="modal-form-input-name" value={name} onChange={e => setName(e.target.value)} placeholder="Unesite ime korisnika" required/>
                    <input type="email" maxLength="25" className="modal-form-input-email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Unesite E-mail korisnika" required/>
                    <label className="modal-form-label">Odaberite pol korisnika</label>
                    <div className="modal-form-radio" onChange={e => setGender(e.target.value)}>
                        {radioBtnChecked()}
                    </div>
                </form>
                <button className="modal-addBtn" onClick={handerEditUser}>Ažuriraj</button>
            </Modal>
        </section>
    );
}

export default Item;