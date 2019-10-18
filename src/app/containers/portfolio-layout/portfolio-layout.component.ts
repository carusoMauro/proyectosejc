import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-layout',
  templateUrl: './portfolio-layout.component.html',
  styleUrls: ['./portfolio-layout.component.css']
})
export class portfolioLayoutComponent implements OnInit {


vacas: string;
  constructor() { }

  ngOnInit() {
  	this.vacas = 'ya sabes';
  }

}
