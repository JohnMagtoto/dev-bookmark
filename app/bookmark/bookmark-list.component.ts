import { Component, OnInit } from 'angular2/core' ;

import { Alert, BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
// Service
import { BookmarkService, Bookmark } from './bookmark.service' ;

@Component({
  selector : 'bookmark-list-component',
  templateUrl : './app/bookmark/bookmark-list.component.html',
  directives : [
    Alert,
    BUTTON_DIRECTIVES
  ],
  providers : [
    BookmarkService
  ]
})

export class BookmarlListComponent implements OnInit {
  bookmarks : Bookmark[] ;

  constructor(
    private _boorkmarkService : BookmarkService
  ) {
    this.bookmarks = this._boorkmarkService.getBookmarks() ;
  }

  ngOnInit(){

  }


}
