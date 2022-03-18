const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

const movies = [
    { id: 67, title: "Spiderman", year: 2021 },
    { id: 88, title: "Batman", year: 2022 },
    { id: 99, title: "Doctor Strange", year: 2022 },
]

app.use(express.json());

app.get("/", (request, response) => {
    response.json("Hello ini dari express")
});

app.get("/movies", (request, response) => {
    response.json({
        "message": "success get all data movies",
        "movies": movies
    });
});

app.get("/movies/:id", (request, response) => {
    const { id } = request.params

    const movie = movies.find(item => (item.id == id))

    response.json({
        "message": "success get single data movie",
        "movie": movie
    });
});

app.post("/movies", (request, response) => {
    const data = request.body

    movies.push(data)

    response.json({
        "message": "success adding new data",
        "movies": movies
    });
});

app.put("/movies/:id", (request, response) => {
    const {id} = request.params;
    const data = request.body;

    const findMovie = movies.find(item => item.id == id);

    findMovie.data = data;

    response.json({
        "message": `updating data ${id}`,
        "movieUpdate": findMovie.data
    });
});

app.delete("/movies/:id", (request, response) => {
    const { id } = request.params

    const movie = movies.filter(item => (item.id != id))

    response.json({
        "message": `success deleting data ${id}`,
        "movies": movie
    });
});

app.listen(PORT, () => {
    console.log(`server running on port : ${PORT}`);
});