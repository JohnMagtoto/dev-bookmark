// libs
import {Store} from '@ngrx/store';
import {RouterState} from 'ngrx-store-router';

// app
import {AppStoreI} from '../../frameworks/app.framework/index';
import {RouteComponent} from '../../frameworks/core.framework/index';

@RouteComponent({
  selector: 'sd-navbar',
  templateUrl: './app/components/app/navbar.component.html',
  styleUrls: ['./app/components/app/navbar.component.css']
})
export class NavbarComponent {
  // TODO: remove when {N} router supports active states
  public activeLink: any = {
    // home: true,
    // about: false,
    folders : true,
    bookmarks : false
  };
  
  constructor(public store: Store<AppStoreI>) {  
    store.select('router').subscribe((router: RouterState) => {
      if (!router.navigating) {
        // switch (router.url) {
        //   case '':
        //     this.activeLink.home = true;
        //     this.activeLink.about = false;
        //     this.activeLink.bookmarks = false;
        //     break;
        //   case '/about':
        //     this.activeLink.home = false;
        //     this.activeLink.about = true;
        //     this.activeLink.bookmarks = false;
        //     break;
        //   case '/bookmarks':
        //     this.activeLink.home = false;
        //     this.activeLink.about = false;
        //     this.activeLink.bookmarks = true;
        //     break;
        // }
        // switch (router.url){
        //   case '' :
        //     this.activeLink.folders = true ;
        //     this.activeLink.bookmarks = false ;
        //     break ;
        //   case '/bookmarks' :
        //     this.activeLink.folders = false ;
        //     this.activeLink.bookmarks = true ;
        //     break ;
        // }
      }
    });
  }
}
