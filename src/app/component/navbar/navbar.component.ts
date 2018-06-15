import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Input() name;
    @Input() page;
    @Input() fname;
    @Input() firstname;
    @Input() surname;
    @Input() email;
    @Input() date;
    
  
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fname=params['name'];
      this.surname=params['surname'];
      this.email=params['email'];
      this.date=params['date'];
    });
    console.log(this.surname);
  }
  navigator(){
    if(this.name === 'Event'){
      this.router.navigate(['detail/event']);
    }else if (this.name === 'VIEW'){
      this.router.navigate(['detail/view'], {queryParams:{name: this.fname,surname: this.surname,email: this.email,date: this.email}});
    }
  }

}
