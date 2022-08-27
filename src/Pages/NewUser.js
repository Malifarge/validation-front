import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import H1 from "../Components/H1"
import Input from "../Components/Input"
import Button from "../Components/Button"

const NewUser = () =>{

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setMail] = useState("")
    const [city,setCity] = useState("")
    const [profile_picture,setProfilePicture] = useState("")
    const [errorDataName, setErrorDataName] = useState([])
    const [errorDataEmail, setErrorDataEmail] = useState([])
    const [errorDataPassword, setErrorDataPassword] = useState([])
    const [classNameName, setClassNameName] = useState("")
    const [classNamePassword, setClassNamePassword] = useState("")
    const [classNameEmail, setClassNameEmail] = useState("")


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

        setClassNameName("")
        setClassNamePassword("")
        setClassNameEmail("")

        const user = {
            name,
            email,
            password,
            city,
            profile_picture
        }

      const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(user)
    })
        const data = await response.json()
        if (data[0]){
            setErrorDataName(data.filter(d=>d.param === "name"))
            setErrorDataEmail(data.filter(d=>d.param === "email"))
            setErrorDataPassword(data.filter(d=>d.param === "password"))
            setName("")
            setPassword("")
            setMail("")
        }else{
            navigate(`/${data.slug}`)
        }

    }

    useEffect(()=> {
        if(errorDataName[0]){
            setClassNameName("erreur")
        }
    }, [errorDataName])

    useEffect(()=> {
        if(errorDataPassword[0]){
            setClassNamePassword("erreur")
        }
    }, [errorDataPassword])

    useEffect(()=> {
        if(errorDataEmail[0]){
            setClassNameEmail("erreur")
        }
    }, [errorDataEmail])

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
                error={errorDataName}
                className={classNameName}
            />

            <Input 
                label="password" 
                type="password"
                value={password}
                placeholder="password..."
                handleChange={handlePasswordChange}
                required
                error={errorDataPassword}
                className={classNamePassword}

            />

            <Input 
                label="email" 
                type="email"
                value={email}
                placeholder="email..."
                handleChange={handleMailChange}
                required
                error={errorDataEmail}
                className={classNameEmail}
            />

            <select required onChange={handleCityChange} value={city}>

                <option value="">Select a city</option>
                <option value="Paris">Paris</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Tokyo">Tokyo</option>

            </select>

            <Input 

                label="Profile picture" 
                type="texte"
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