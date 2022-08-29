
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

const newUser = async (user) =>{ 
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(user)
    })
    const Data = response.json()
    return (Data)
}

export {fetchUsers, fetchUser , newUser}