import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({message: "Show me off"})
})


app.listen(PORT, () => {`Server Running on PORT: ${PORT}`});