import { useState } from "react";
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

    const headerMsg = () => {
        if(gender === "all"){
            return <h3>Lista svih korisnika</h3>
        }
        else if(gender === "m"){
            return <h3>Lista svih korisnika muškog pola</h3>
        }
        else{
            return <h3>Lista svih korisnika ženskog pola</h3>
        }
    }
    
    return ( 
        <section className="list">
            {headerMsg()}
            <Filter gender={gender} updateFilter={updateFilter}/>
            {filterUsers()}
            {filterUsers().length === 0 && <p className="emptyListMsg">Lista je prazna! Unesite novog korisnika ili učitajte ponovo stranicu.</p> }
        </section>
    );
}
 
export default List;