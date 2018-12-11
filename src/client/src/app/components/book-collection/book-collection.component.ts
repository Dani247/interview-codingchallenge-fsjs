import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent implements OnInit {
  public books;
  public loading:boolean = true;

  constructor() { }

  ngOnInit() {
    //get all books
    fetch("http://localhost:3001/books")
    .then(res=>res.json())
    .then(data =>{
      this.books = data;
      this.loading = false;
    });
  }

  deleteBook(id){
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        fetch("http://localhost:3001/books/"+id,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          if(data){
            Swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ).then(()=>{
              location.reload();
            })
          }
        })
      }
    })
  }

}
