import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.css']
})
export class blogLayoutComponent implements OnInit {


vacas: string;
  constructor() { }

  ngOnInit() {
  	this.vacas = 'ya sabes';
  }

}
