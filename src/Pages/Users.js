
import { useState,useEffect } from "react"
import { fetchUsers } from "../api/users"

import H1 from "../Components/H1"
import Card from "../Components/Card"


const Users = () =>{

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        const data = await fetchUsers()
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