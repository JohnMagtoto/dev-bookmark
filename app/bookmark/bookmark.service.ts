import { Injectable } from '@angular/core';

export class Bookmark {
  constructor(title : String,
  url : String){}
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
