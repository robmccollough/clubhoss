const router = require("express").Router();
const axios = require("axios")

const API_KEY = process.env.GOOGLE_API_KEY
//Just search title for now
const GOOGLE_URL = "https://www.googleapis.com/books/v1/volumes?q="

// Search body model?


router.post("/search", async (req, res) => {
    try {
      const query = req.body.query
        if (!query) throw new Error("Invalid query");

        const url = `${GOOGLE_URL}${query}`
        const { data: books } = await axios.get(url)

        res.status(200).json(books)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  module.exports = router;