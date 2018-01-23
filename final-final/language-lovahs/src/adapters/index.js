export const fetchUsers = () =>{
  return fetch('http://localhost:3000/api/users')
  .then(resp => resp.json())
}

export const fetchLanguages = () =>{
  return fetch('http://localhost:3000/api/languages')
  .then(resp => resp.json())
}

// export const animateCards = () => {
//   $('.special.cards .image').dimmer({
//   on: 'hover'
//   })
// }

export const fetchUser = (id) => {
  let url = `http://localhost:3000/api/users/${id}`
  return fetch(url)
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

export const createLearnedWords = (userId, wordId) =>{
  return fetch('http://localhost:3000/api/learned_words',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({user_id: userId, word_id: wordId })
  })
}

export const updatePoints = (newTotal, id) =>{
  return fetch(`http://localhost:3000/api/points/${id}`,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify({total: newTotal})
  })
}
