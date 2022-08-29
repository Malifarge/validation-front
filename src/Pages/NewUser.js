import { useState } from "react"
import { useNavigate } from "react-router-dom"

import H1 from "../Components/H1"
import Input from "../Components/Input"
import Button from "../Components/Button"
import Select from "../Components/Select"
import { newUser } from "../api/users"

const NewUser = () =>{

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setMail] = useState("")
    const [city,setCity] = useState("")
    const [profile_picture,setProfilePicture] = useState("")
    const [errorData, setErrorData] = useState([])


    const navigate=useNavigate()

    const handleNameChange = e =>{
        setName(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleMailChange = e =>{
        setMail(e.target.value)
    }

    const handleCityChange = e =>{
        setCity(e.target.value)
    }

    const handleProfilePictureChange = e =>{
        setProfilePicture(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const user = {
            name,
            email,
            password,
            city,
            profile_picture
        }

        const data = await newUser(user)
        if (data[0]){
            setErrorData(data)
            setName("")
            setPassword("")
            setMail("")
        }else{
            navigate(`/${data.slug}`)
        }

    }


    return (
        <>
        <H1>New user</H1>
        <form onSubmit={handleSubmit} className="flex clmn g-30 aic m-t-30">
            <Input 
                label="name" 
                type="texte"
                value={name}
                placeholder="name..."
                handleChange={handleNameChange}
                required
                error={errorData.filter(d=>d.param === "name")}
            />

            <Input 
                label="password" 
                type="password"
                value={password}
                placeholder="password..."
                handleChange={handlePasswordChange}
                required
                error={errorData.filter(d=>d.param === "password")}

            />

            <Input 
                label="email" 
                type="email"
                value={email}
                placeholder="email..."
                handleChange={handleMailChange}
                required
                error={errorData.filter(d=>d.param === "email")}
            />

            <Select
                required
                handleChange={handleCityChange}
                value={city}
                options={["select a city", "Paris", "Los Angeles", "Tokyo"]} 
            />
            
            <Input 

                label="Profile picture" 
                type="url"
                value={profile_picture}
                placeholder="Link..."
                handleChange={handleProfilePictureChange}
                required

            />

            <Button
                text="Submit"
                type="submit" 
                disabled={!name || !email || !password || !city || !profile_picture }
            />
        </form>
        </>
    )
}

export default NewUser