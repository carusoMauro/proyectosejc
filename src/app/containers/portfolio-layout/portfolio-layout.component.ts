import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef, AfterViewInit
} from "@angular/core";
import { WOW } from 'wowjs/dist/wow.min';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: "app-portfolio-layout",
  templateUrl: "./portfolio-layout.component.html",
  styleUrls: ["./portfolio-layout.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioLayoutComponent implements OnInit, AfterViewInit{
  homeNumber: number;
  images: Array<string> = [];
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.homeNumber = 1;
    this.images = ["1", "2", "3", "4", "5", "6", "7", "8"];
  }

  ngAfterViewInit(): void {
    new WOW().init();
    this.initializePrettyPhoto();
    // $("area[rel^='prettyPhoto']").prettyPhoto();
  }


  private initializePrettyPhoto() {
    $("a[rel^='prettyPhoto']").prettyPhoto({
      autoplay_slideshow: false,
      show_title: true,
      default_width: 800, //I have tried playing with these values
      default_height: 600, //I have tried playing with these values
      theme: "pp_default",
      overlay_gallery: false,
      social_tools: false
    });
  }

  changeImages(houseIndex: number) {
    console.log(houseIndex);
    this.homeNumber = houseIndex;
    this.ref.detectChanges();
  }
}
