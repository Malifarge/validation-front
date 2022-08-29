
const fetchUsers = async () =>{
    const response = await fetch('http://localhost:5000/users')
    const data = await response.json()
    return(data)

}

const fetchUser = async (slug) =>{
    const response = await fetch(`http://localhost:5000/users/${slug}`)
    const data = await response.json()
    return(data)

}

export {fetchUsers, fetchUser}