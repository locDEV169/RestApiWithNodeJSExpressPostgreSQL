import React, { Component } from 'react';
import "./users.css"
import axios from 'axios';
import FormError from '../Error/FormError';

class userDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: [],
            username: '',
            email: '',
            password: '',
            user_id: '',
            message: '',
            formErrors: {},
        }
        this.handleValue = this.handleValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const getId = this.props.match.params.id;
        console.log(getId)
        //let url = "http://localhost:8000/api/users/"
        //let url = "https://jsonplaceholder.typicode.com/users/" + getId;
        let url = "http://localhost:8000/api/users/" + getId;
        axios.get(url)
            .then(res => {
                const detail = res.data;
                this.setState({
                    detail: res.data,
                    username: res.data.username,
                    email: res.data.email,
                    userId: res.data.id,
                })
                console.log("didMount", { detail })
            })
            .catch(error => console.log(error))
    }

    handleValue(e) {
        let nameInput = e.target.name;
        let value = e.target.value;
        this.setState({
            [nameInput]: value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let check = true;
        let { username } = this.state;
        let errorsSubmit = this.state.formErrors;
        if (username === "") {
            check = false;
            errorsSubmit.username = "Username ko được để trống"
        } else {
            check = true;
            errorsSubmit.username = ""
        }
        if (!check) {
            this.setState({
                formErrors: errorsSubmit
            })
        }
        else {
            const getId = this.props.match.params.id;
            let formData = new FormData();
            formData.append("name", this.state.username);
            //let url = "http://localhost:8000/api/users/"
            //link test user https://jsonplaceholder.typicode.com/users
            let url = "http://localhost:8000/api/users/" + getId
            axios.post(url, formData)
                .then(res => {
                    if (res.data.errors) {
                        this.setState({
                            formErrors: res.data.errors
                        })
                    }else{
                        this.setState({
                            errorsSubmit: "sucessful !!"
                        })
                    }
                })
        }

    }

    render() {
        console.log("render", this.state)
        return (
            <div className="col-sm-9">
                <h4>Edit User</h4>
                <FormError formErrors={this.state.formErrors} />
                <div className="col-sm-3">
                    <label style={{ margin: "10px" }}>ID</label>
                    <br></br>
                    <label style={{ margin: "10px" }}>UserName</label>
                    <br></br>
                    <label style={{ margin: "10px" }}>Email</label>
                    <br></br>
                    <label style={{ margin: "10px" }}>Password</label>
                </div>
                <div className="col-sm-6">
                    <form className="formUser" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Id"
                            name="user_id"
                            value={this.state.userId}
                            onChange={this.handleValue}
                            style={{ margin: "10px" }}
                        />
                        <br></br>
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleValue}
                            style={{ margin: "10px" }}
                        />
                        <br></br>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleValue}
                            style={{ margin: "10px" }}
                        />
                        <br></br>
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleValue}
                            style={{ margin: "10px" }}
                        />
                        <br></br>
                        <button type="submit" className="btn btn-default">
                            Edit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default userDetail