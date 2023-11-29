const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors")
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome");
});

//Route for save a new Book



app.post('/books', async (req, res) => {
   try{
    if(
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
    ){
        return response.status(400).send({
            message: 'Send all required fields'
        })
    }
    const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
    }
    const book = await Book.create(newBook);

    return response.status(201).send(book);

}
catch(err){
    console.log('err.message');
    response.status(500).send({message: error.message})
}
})

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("sucess");
  })
  .catch((err) => {
    console.error("fail to connect db");
  });


app.listen(3000, () => console.log(`listing to port`));
