import Item from "./item";
import "./list.css";

const list = (props) => {
    return ( 
        <section className="list">
            <h3>Lista svih korisnika</h3>
            {props.user.map(item => 
                <Item key={item.id} user={item} deleteUser={props.deleteUser}/>
            )}
        </section>
    );
}
 
export default list;