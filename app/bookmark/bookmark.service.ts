import { Injectable } from 'angular2/core';


export class Bookmark {
  constructor(title : String,
  url : String){}
}

@Injectable()
export class BookmarkService {
  private _bookmarkdb : any;

  constructor(){
    this._bookmarkdb = new PouchDB("bookmarks");
  }
  getBookmarks() {
    this._bookmarkdb.info().then(function (info) {
      console.log(info);
    })
    return [
      { title : "youtube",  url : "www.youtube.com"},
      { title : "wikipedia",  url : "en.wikipedia.com"}
    ];
  }
}
