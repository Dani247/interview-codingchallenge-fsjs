import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//router module
import { RouterModule, Routes} from '@angular/router';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { componentFactoryName } from '@angular/compiler';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { InfoComponent } from './components/info/info.component';

//router routes
const appRoutes: Routes = [
  {path:'', component:BookCollectionComponent},
  {path:'bookCollection', component: BookCollectionComponent},
  {path:'addBook', component:AddBookComponent},
  {path:'editBook/:id', component:EditBookComponent},
  {path:'info', component:InfoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookCollectionComponent,
    AddBookComponent,
    EditBookComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
