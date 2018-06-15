import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    name:'';
    surname:'';
    email:'';
    date:'';

    pages =[
    {name: 'EVENT', page:'event'},
    {name: 'VIEW', page:'view'},
    {name: 'PAGE', page:'page'}
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
      this.route.queryParams.subscribe(params=> {
      this.name=params['name'];
      this.surname=params['surname'];
      this.email=params['email'];
      this.date=params['date']
  });
  console.log(this.email);
 }

}
