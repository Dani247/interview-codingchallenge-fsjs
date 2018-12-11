import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  public params;
  public title1:String;
  public author1:String;
  public genre1:String;
  public id:Number;

  constructor(private route: ActivatedRoute) {
    this.route.params
    .subscribe(params => this.params = params)
   }

  ngOnInit() {
    this.id = this.params.id;

    fetch("http://localhost:3001/books/"+this.id)
    .then(res=>res.json())
    .then(data => {
      this.title1 = data.name.toString();
      this.author1 = data.author.toString();
      this.genre1 = data.genre.toString();
    });
  }

  editBook(title,author,genre){
    fetch("http://localhost:3001/books/"+this.id,{
      headers:{
        "Content-Type":"application/json"
      },
      method:"PUT",
      body:JSON.stringify({
        "name":title,
        "author":author,
        "genre":genre
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        Swal("Book edited","","success")
        .then(()=>{
          location.reload()
        })
      }
    })
  }

}
