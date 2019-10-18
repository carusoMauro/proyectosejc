import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['./contact-layout.component.css']
})
export class contactLayoutComponent implements OnInit {


vacas: string;
  constructor() { }

  ngOnInit() {
  	this.vacas = 'ya sabes';
  }

}
