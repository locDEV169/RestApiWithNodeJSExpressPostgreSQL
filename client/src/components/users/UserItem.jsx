import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
// import axios from 'axios';

function UserItem(props) {
    const { account } = props
    //console.log(account)

    const handleRemove = async (id) => {
        // console.log(id);
        try {
            //const deletelist = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`
            const deletelist = await fetch(`http://localhost:8000/api/users/${id}`,{
                method: "DELETE"
            })
            console.log(deletelist)
        } catch (error) {
            console.log(error.message)
        }
        
        //console.log(url)
        // axios.delete(url)
    }

    return (
        <tr key={account.user_id}>
            <td>{account.username}</td>
            <td>{account.email}</td>
            <td>*******</td>
            <td>{account.created_on}</td>
            <td>
                <Link to={"/users/" + account.user_id}><FontAwesomeIcon icon={faEdit} style={{ color: "green", marginRight:"15px"}} /></Link>
                <FontAwesomeIcon icon={faTrashAlt} style={{ color: "red" }} onClick={() => handleRemove(account.user_id)}/>
            </td>
            
        </tr>
    )
}
export default UserItem;