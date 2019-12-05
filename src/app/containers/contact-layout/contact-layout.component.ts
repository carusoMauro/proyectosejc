import { AfterViewInit, Component, OnInit } from "@angular/core";
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['./contact-layout.component.css']
})
export class ContactLayoutComponent implements OnInit, AfterViewInit{

  ngAfterViewInit(): void {
    new WOW().init();
  }

  ngOnInit() {
  }

}
