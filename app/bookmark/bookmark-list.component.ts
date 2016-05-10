import { Component, OnInit } from '@angular/core' ;

// Service
import { BookmarkService, Bookmark } from './bookmark.service' ;

@Component({
  selector : 'bookmark-list-component',
  templateUrl : './app/bookmark/bookmark-list.component.html',
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
