import { useState, useEffect } from "react";
import Filter from "./filter";
import Item from "./item";
import "./list.css";

const List = (props) => {
    const [users, setUsers] = useState(props.user);
    const [filteredUsers, setFilteredUsers] = useState(props.user);

    const filterUsers = (filterValue) => {
        if(filterValue === "all"){
            setFilteredUsers(users);
        }
        else{
            let newFilteredUsers = users.filter(user => user.gender === filterValue);
            setFilteredUsers(newFilteredUsers);
        }
    }

    useEffect(() => { setUsers(props.user) }, [props.user]);

    return ( 
        <section className="list">
            <h3>Lista svih korisnika</h3>
            <Filter filterUsers={filterUsers}/>
            {filteredUsers.map(item => 
                <Item key={item.id} user={item} deleteUser={props.deleteUser}/>
            )}
        </section>
    );
}
 
export default List;