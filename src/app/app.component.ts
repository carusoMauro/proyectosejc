import { AfterViewInit, Component } from "@angular/core";
import { WOW } from 'wowjs/dist/wow.min';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    new WOW().init();
  }


  loadScripts() {
    const dynamicScripts = [
      './assets/js/jquery-2.1.1.min.js',
      './assets/js/bootstrap.min.js',
      './assets/js/wow.min.js',
      './assets/js/fancybox/jquery.fancybox.pack.js',
      './assets/js/jquery.easing.1.3.js',
      './assets/js/jquery.bxslider.min.js',
      './assets/js/jquery.prettyPhoto.js',
      './assets/js/jquery.isotope.min.js',
      './assets/js/functions.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
