const express = require("express");

const router = express.Router();

const bookModel = require("../../models/book");

//get all books
router.get("/",(req,res)=>{
    bookModel.find()
    .then(books => res.json(books));
});

//get book by id
router.get("/:id",(req,res)=>{
    bookModel.findById(req.params.id)
    .then(book => res.json(book))
    .catch(()=>res.status(404).json({errorMessage:"book not found"}));
})

//get multiple books by id
router.post("/multiple",(req,res)=>{
    bookModel.find({
        _id:{
            $in:req.body.ids
        }
    })
    .then(books => res.json(books));
})

//insert a book
router.post("/",(req,res)=>{
    let newBook = new bookModel({
        name:req.body.name,
        author:req.body.author,
        genre:req.body.genre
    });

    newBook.save()
    .then(book=>res.json(book));
});

//delete a book by id
router.delete("/:id",(req,res)=>{
    bookModel.findById(req.params.id)//finds the document
    .then(book=>book.delete())//deletes the document
    .then(deleted => res.json(deleted))
    .catch(()=>res.status(404).json({errorMessage:"book not found"}));
});

//edit a book by id
router.put("/:id",(req,res)=>{
    bookModel.findOneAndUpdate({_id:req.params.id},{
        name:req.body.name,
        author:req.body.author,
        genre:req.body.genre
    })
    .then(book=>res.json(book))
    .catch(()=>res.status(404).json({errorMessage:"book not found"}));
})

module.exports = router;
