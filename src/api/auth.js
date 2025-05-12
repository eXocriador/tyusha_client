const BASE_URL = 'https://tyusha-server.onrender.com/api' // якщо у тебе інша адреса, поміняєш

export async function loginWithGoogle(token) {
  const response = await fetch(`${BASE_URL}/auth/google`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })
  return response.json()
}

export async function loginWithApple(token) {
  const response = await fetch(`${BASE_URL}/auth/apple`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })
  return response.json()
}
// export async function loginWithFacebook(token) {
//   const response = await fetch(`${BASE_URL}/auth/facebook`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ token }),
//   })
//   return response.json()
// }
// export async function loginWithGithub(token) {
//   const response = await fetch(`${BASE_URL}/auth/github`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ token }),
//   })
//   return response.json()
// }
// export async function loginWithTwitter(token) {
//   const response = await fetch(`${BASE_URL}/auth/twitter`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ token }),
//   })
//   return response.json()
// }
// export async function loginWithLinkedin(token) {
//   const response = await fetch(`${BASE_URL}/auth/linkedin`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ token }),
//   })
//   return response.json()
// }
// export async function loginWithDiscord(token) {
//   const response = await fetch(`${BASE_URL}/auth/discord`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ token }),
//   })
//   return response.json()
// }
