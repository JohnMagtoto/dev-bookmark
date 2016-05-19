import { Injectable } from '@angular/core' ;
import { Http, Response } from '@angular/http' ;

import {Store, Reducer, Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

//-------------------------------------------------------------------
// Bookmark Store (Reducer)
//-------------------------------------------------------------------
export const bookmarksReducer:Reducer<any> = (state: any = [], action: Action) => {
    switch (action.type) {
        case "ADD_BOOKMARK" :
            return state ;
        case "DELETE_BOOKMARK" :
            return state ;
        case "GET_BOOKMARKS" :
            return action.payload ;
        default:
            return state;
    }
}

export interface Bookmark {
    title : string,
    url : string
}

@Injectable()
export class BookmarksService {
    // bookmarks : Observable<any>
    private _url : string ;
    
    constructor(private _store: Store<any>, private _http : Http){
        // this.bookmarks = _store.select<Bookmark[]>('bookmarks') ;
        this._url = './app/frameworks/app.framework/services/bookmarks.json' ;
    }
    
    getBookmarks(){
        this._http.get(this._url)
            .map((response : Response) => <Bookmark[]>response.json().data)
            .subscribe(
                data => this._store.dispatch({type:"GET_BOOKMARKS", payload:data}),
                err => console.log(err)
            ) ;
            // .catch(this.handleError)
            // .do(data => this._store.dispatch({type:"GET_BOOKMARKS", payload:data}))
            
    }
    
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    
    
}