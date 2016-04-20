import { Component } from 'angular2/core' ;
import { BookmarlListComponent } from './bookmark/bookmark-list.component';
import { BookmarkService } from './bookmark/bookmark.service' ;

@Component({
  selector : 'my-app',
  template: `
    <h1>{{Title}}</h1>
    <bookmark-list-component></bookmark-list-component>
    `,
    directives : [BookmarlListComponent],
    providers : [
        BookmarkService
    ]
})

export class AppComponent {
  title = "Tour of Heroes" ;
}
