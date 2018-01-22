export const fetchUsers = () =>{
  return fetch('http://localhost:3000/api/users')
  .then(resp => resp.json())
}

export const fetchLanguages = () =>{
  return fetch('http://localhost:3000/api/languages')
  .then(resp => resp.json())
}


export const fetchUser = (id) => {
  return fetch(`http://localhost:3000/api/users/${id}`)
    .then(resp => resp.json())
}

export const getLangWords = (languageId, userId) => {
  let url = `http://localhost:3000/api/words?language_id=${languageId}&user_id=${userId}`
  return fetch(url)
    .then(resp => resp.json())
}

export const createUser = (userDetails) =>{
  return fetch('http://localhost:3000/api/users',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(userDetails)
  })
}
