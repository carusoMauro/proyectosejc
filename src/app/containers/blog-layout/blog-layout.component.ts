import { AfterViewInit, Component, OnInit } from "@angular/core";
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.css']
})
export class BlogLayoutComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    new WOW().init();
  }
  ngOnInit() {
  }

}
