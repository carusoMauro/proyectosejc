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
  numberOfImages: Object;
  tabDescription: Array<string> = [];
  arr=Array;
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.homeNumber = 1;
    this.images = ["1", "2", "3", "4", "5", "6", "7", "8"];
    this.numberOfImages = {1: 7, 2: 8, 3: 2, 4:2};
    this.tabDescription = [
      'Barbacoa 32 m2 con baño - Maldonado (Tiempo estimado 25 días)',
      'Vivienda 44 m2 Ciudad de la Costa (Tiempo estimado 30 días)',
      'Baño social 1.15 x 1.72 ( armado en 2 días) - Canelones',
      'Atelier planta alta  15 M2 ( tiempo estimado 25 días) Costa de Oro'
    ];

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
