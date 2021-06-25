import { useState, useEffect } from "react";
import Filter from "./filter";
import Item from "./item";
import "./list.css";

const List = (props) => {
    const [gender, setGender] = useState("all");

    const filterUsers = () => {
        if(gender === "all"){
            return props.user.map(item =>
                <Item key={item.id} user={item} deleteUser={props.deleteUser} editUser={props.editUser}/>
        )}
        else{
            return props.user.filter(user => user.gender === gender).map(item =>
                <Item key={item.id} user={item} deleteUser={props.deleteUser} editUser={props.editUser}/>
        )}
    }

    const updateFilter = (filterStatus) => {
        setGender(filterStatus);
    }
    
    return ( 
        <section className="list">
            <h3>Lista svih korisnika</h3>
            <Filter gender={gender} updateFilter={updateFilter}/>
            {filterUsers()}
        </section>
    );
}
 
export default List;