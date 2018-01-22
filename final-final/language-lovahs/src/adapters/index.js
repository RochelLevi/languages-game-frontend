export const fetchUsers = () =>{
  return fetch('http://localhost:3000/api/users')
  .then(resp => resp.json())
}

export const fetchUser = (id) => {
  return fetch(`http://localhost:3000/api/users/${id}`)
    .then(resp => resp.json())
}
