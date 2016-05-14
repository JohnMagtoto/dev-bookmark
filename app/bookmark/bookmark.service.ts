import { Injectable } from '@angular/core';

export interface Bookmark {
  title : string ;
  url : string ;
}

@Injectable()
export class BookmarkService {

  getBookmarks() : Bookmark[] {
    return [
      { title : "youtube",  url : "www.youtube.com"},
      { title : "wikipedia",  url : "en.wikipedia.com"}
    ];
  }
}
