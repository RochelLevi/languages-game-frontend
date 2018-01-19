export const fetchUsers = () =>{
  return fetch('http://localhost:3000/api/users')
  .then(resp => resp.json())
}
