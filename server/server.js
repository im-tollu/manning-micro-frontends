import express from "express"

console.log("Starting micro-frontends server...")

const app = express()

app.get("/", (request, response) => {
  response.send("Hello, World!")
})

app.listen(3000, () => {
  console.log("Express app started on port 3000.")
})
