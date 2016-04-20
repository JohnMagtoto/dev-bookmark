import { Injectable } from 'angular2/core';

export class Bookmark {
  constructor(title : String,
  url : String){}
}

@Injectable()
export class BookmarkService {

  getBookmarks() {
    return [
      { title : "youtube",  url : "www.youtube.com"},
      { title : "wikipedia",  url : "en.wikipedia.com"}
    ];
  }
}
