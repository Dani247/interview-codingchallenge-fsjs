import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  addBook(title,author,genre){
    fetch("http://localhost:3001/books",{
      headers:{
        "Content-Type":"application/json"
      },
      method:"POST",
      body:JSON.stringify({
        "name":title,
        "author":author,
        "genre":genre
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        Swal("Book added","","success")
        .then(()=>{
          location.reload()
        })
      }
    })
  }
}
