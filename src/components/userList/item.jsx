import avatarM from "../../images/avatar-m.png";
import avatarF from "../../images/avatar-f.png";
import "./item.css";

const item = (props) => {
    return (
        <section className="item">
            <div className="item-userContent">
                <img className="item-avatar" src={props.user.gender === "m" ? avatarM : avatarF} alt="User" />
                <p className="item-username">{props.user.username}</p>
                <p className="item-mail">{props.user.email}</p>
            </div>
            <div className="item-options">
                <i className="fa fa-pencil item-option-icon"></i>
                <i className="fa fa-trash item-option-icon" onClick={() => props.deleteUser(props.user.id)}></i>
            </div>
        </section>
    );
}

export default item;