import React, { useState } from "react";
import './Home.css';

const Home = () => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch('https://gorest.co.in/public/v1/users' )
            .then((result) => result.json())
            .then((result) => { setUsers(result.data) })
            .catch((error) => error.message)
    }
    return (
        <div>
            <header> Users Status </header>
            <div className="inputDiv">
                <input
                    type="button"
                    value="User Status"
                    onClick={getUsers}
                />
            </div>
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <li className="usersList" style={user.status === 'inactive' ? { "color": "red" } : { "color": "green" }}>
                                {user.name} : {user.status}
                            </li>
                        </div>
                    )
                })
            }
        </div>

    )
}
export default Home;