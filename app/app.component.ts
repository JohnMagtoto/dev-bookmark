import { Component } from 'angular2/core' ;
import { RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';

import { BookmarkListComponent } from './bookmark/bookmark-list.component';
import { BookmarkComponent } from './bookmark/bookmark.component' ;
import { BookmarkService } from './bookmark/bookmark.service' ;



@Component({
  selector : 'my-app',
  template: `
    <h1>{{Title}}</h1>
    <router-outlet></router-outlet>
    `,
    directives : [
      ROUTER_DIRECTIVES,
      BookmarkListComponent
    ],
    providers : [
        Location,
        BookmarkService
    ]
})

@RouteConfig([
  {
    path : '/bookmark-list',
    name : 'BookmarkList',
    component : BookmarkListComponent,
    useAsDefault : true
  },
  {
    path : '/bookmark',
    name : 'Bookmark',
    component : BookmarkComponent
  }
])

export class AppComponent {
  title = "Tour of Heroes" ;

  constructor(private _location : Location) {
    _location.go("/bookmark-list") ;
  }
}
