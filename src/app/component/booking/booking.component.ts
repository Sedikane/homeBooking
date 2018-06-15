import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  name=" ";
  surname=" ";
  email=" ";
  date=" ";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLogin(){
    console.log(this.name);
    console.log(this.surname);
    console.log(this.email);
    console.log(this.date);
    
  }
  book()
  {
  console.log(this.name);
  /*
    console.log(this.name);
    console.log(this.surname);
    console.log(this.email);
    console.log(this.date);*/
    this.router.navigate(['detail'], {queryParams:{name: this.name,surname: this.surname,email: this.email,date: this.date}});
  }

}
