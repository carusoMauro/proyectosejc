import { AfterViewInit, Component, OnInit } from "@angular/core";
import { WOW } from 'wowjs/dist/wow.min';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new WOW().init();

    this.initializeBxslider();

  }


  private initializeBxslider() {
    $(".bxslider").bxSlider({
      auto: true
    });
  }
}
