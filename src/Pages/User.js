/* eslint-disable react-hooks/exhaustive-deps */

import { useState,useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'

import H1 from "../Components/H1"
import H2 from "../Components/H2"


const User = () =>{

    const [user, setUser] = useState([])
    const params = useParams()
    const navigate= useNavigate()

    useEffect(()=>{
        fetchUser()
    },[])

    const fetchUser = async () =>{
        const response = await fetch(`http://localhost:5000/users/${params.slug}`)
        const data = await response.json()
        setUser(data)
        if(!data.name){
            navigate('*')
        }

    }

    const {name,profile_picture,city,password,email} = user

    return (
        <>
            <article className="flex wrap jcsb m-t-30">

                <img src={profile_picture} alt={name} className="imguser"/>

                <div className="flex clmn jcsb">
                    <H1>{name}</H1>
                    <H2>infos</H2>
                    <small>From {city}</small>
                    <p>password: {password}</p>
                    <p>email: {email}</p>
                </div>
                
            </article>
            
        </>

    )
}

export default User