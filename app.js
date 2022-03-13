const { response } = require("express")
const express = require("express")
const res = require("express/lib/response")
const app = express()

const PORT = process.env.PORT || 3000

const movies = [
    {id: 67, title: "Spiderman", year: 2021},
    {id: 88, title: "Batman", year: 2022},
    {id: 99, title: "Doctor Strange", year: 2022},
]

app.use(express.json())

app.get("/", (request, response) => {
    response.json("Hello ini dari express")
})

app.get("/movies", (request, response) => {
    response.json(movies);
})

app.get("/movies/:id", (request, response) => {
  const { id } = request.params

  const movie = movies.find(item => (item.id == id))

  response.json(movie)
})

app.post("/movies", (request, response) => {
    const data = request.body

    movies.push(data)

    response.json("data berhasil ditambahkan")
})

app.delete("/movies/:id", (request, response) => {
    const { id } = request.params

    const movie = movies.find(item => (item.id == id))

    response.json("data sudah dihapus");
})

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
})