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
      './ecjProyectos/assets/js/jquery-2.1.1.min.js',
      './ecjProyectos/assets/js/bootstrap.min.js',
      './ecjProyectos/assets/js/wow.min.js',
      './ecjProyectos/assets/js/fancybox/jquery.fancybox.pack.js',
      './ecjProyectos/assets/js/jquery.easing.1.3.js',
      './ecjProyectos/assets/js/jquery.bxslider.min.js',
      './ecjProyectos/assets/js/jquery.prettyPhoto.js',
      './ecjProyectos/assets/js/jquery.isotope.min.js',
      './ecjProyectos/assets/js/functions.js'
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
