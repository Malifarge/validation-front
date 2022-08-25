/* eslint-disable react-hooks/exhaustive-deps */

import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom'

import H1 from "../Components/H1"
import H2 from "../Components/H2"
import H3 from "../Components/H3"


const User = () =>{

    const [user, setUser] = useState([])
    const params = useParams()

    useEffect(()=>{
        fetchUser()
    },[])

    const fetchUser = async () =>{
    const response = await fetch(`http://localhost:5000/users/${params.slug}`)
    const data = await response.json()
    setUser(data)

    }

    const {name,profile_picture,city,password,email} = user

    return (
        <>
            <H1>user</H1>
            <article>
                <H2>{name}</H2>
                <img src={profile_picture} alt={name} />

                <H3>User info</H3>
                <small>From {city}</small>
                <p>password:{password}</p>
                <p>email:{email}</p>
            </article>
            
        </>

    )
}

export default User