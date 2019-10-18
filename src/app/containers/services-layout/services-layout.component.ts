import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-layout',
  templateUrl: './services-layout.component.html',
  styleUrls: ['./services-layout.component.css']
})
export class ServicesLayoutComponent implements OnInit {


vacas: string;
  constructor() { }

  ngOnInit() {
  	this.vacas = 'ya sabes';
  }

}
