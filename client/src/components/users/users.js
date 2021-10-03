import React, { Component } from 'react';
import "./users.css"
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// import { Link } from "react-router-dom";
import UserItem from './UserItem';

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: [],
            blog: [],
        }
        this.listUser = this.listUser.bind(this)
        this.handleRemoveUser = this.handleRemoveUser.bind(this)
    }
    componentDidMount() {
        //let url = "http://localhost:8000/api/users/"
        //link test user https://jsonplaceholder.typicode.com/users
        axios.get(`http://localhost:8000/api/users/`)
            .then(res => {
                this.setState({
                    account: res.data
                });
                //console.log("test", this.state.account)
            })
            .catch(error => console.log(error))
    }

    handleRemoveUser(id){
        console.log(id)
    }

    listUser() {
        const { account } = this.state;
        if (account.length > 0) {
            return account.map((value, key) => {
                //console.log(value)
                // return <tr key={key}>
                //     <td>{value.username}</td>
                //     <td>{value.email}</td>
                //     <td>*******</td>
                //     <td>{value.id}</td>
                //     <td>
                //         <Link to={"/users/" + value.id}><FontAwesomeIcon icon={faEdit} style={{ color: "green" }} /></Link>
                //         <FontAwesomeIcon icon={faTrashAlt} style={{ color: "red" }} onClick={this.handleRemoveUser(value.id)}/>
                //     </td>
                // </tr>
                return <UserItem account={value}/>
            });
        }
    }

    render() {
        return (
            <div className="col-sm-9">
                <h4>List User</h4>
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <td>Username</td>
                            <td>Email</td>
                            <td>Password</td>
                            <td>Created On</td>
                            <td>Option</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listUser()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Users;