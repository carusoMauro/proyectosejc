import { AfterViewInit, Component } from "@angular/core";
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-services-layout',
  templateUrl: './services-layout.component.html',
  styleUrls: ['./services-layout.component.css']
})
export class ServicesLayoutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new WOW().init();
  }
}
