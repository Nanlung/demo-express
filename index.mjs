import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Running on Heroku!!!')
})


app.listen(PORT, () => {`Server Running on PORT: ${PORT}`});