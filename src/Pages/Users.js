
import { useState,useEffect } from "react"

import H1 from "../Components/H1"
import Card from "../Components/Card"


const Users = () =>{

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetchUsers()
    },[])

    const fetchUsers = async () =>{
        const response = await fetch('http://localhost:5000/users')
        const data = await response.json()
        setUsers(data)

    }

    return (
        <>
            <H1>users</H1>
            <section className="flex wrap g-30 m-t-30">
                {users.map(user =>{
                return <Card key={user.name} user={user} />
                })}
            </section>
        </>
    )
}

export default Users