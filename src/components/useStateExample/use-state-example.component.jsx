import React, { useState, useEffect } from "react";


const UseStateExample = () => { // Need to call the component in app.js when you want to check
    const [user, setUser] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect( () => { // When set setUser,setSearchQuery then component get re-render and useEffect called.
        if(searchQuery.length > 0) {
            const myFunc = async () => {
                console.log("hello");
                const response =  await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
                const resJson = await response.json();
                setUser(resJson[0]);
            }
            myFunc();
        }
    },[searchQuery]);

    return(
        <div className="card">
            <label>{user?user.name:""}</label>
            <input type='search' value={searchQuery} onChange={ event => setSearchQuery(event.target.value) }/>
            
            {
                user?(
                    <div>
                        <h3>{user.name}</h3>
                        <h3>{user.username}</h3>
                        <h3>{user.email}</h3>
                    </div>
                ):"Not found"
            }
        </div>
    )
}

export default UseStateExample;