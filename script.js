//Using async await
const jokes = document.querySelector("#joke")
const button = document.querySelector("#jokeBtn")

const getJoke = async () => {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                "Accept": "application/json"
            }
        })
        const data = await response.json()
        console.log("Data: ", data)
        const {joke} = data
        console.log(joke)
        jokes.innerText = joke
    } catch (error) {
        console.error(error)
    }
}

getJoke()
button.addEventListener("click", () => getJoke())


// Using promises
// const jokes = document.querySelector("#joke")
// const button = document.querySelector("#jokeBtn")

// fetch('https://icanhazdadjoke.com/', {
//     headers: {
//         "Accept": "application/json"
//     }
// })
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log("Data: ", data)
//     const {joke} = data
//     console.log(joke)
//     jokes.innerText = joke
//     button.addEventListener("click", () => window.location.reload())
// })
// .catch()
