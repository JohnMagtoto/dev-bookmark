import { OnInit, ChangeDetectionStrategy } from '@angular/core' ;
import { HTTP_PROVIDERS } from '@angular/http' ;
import { Observable } from 'rxjs/Rx' ;

import { BookmarksService, Bookmark } from '../../frameworks/app.framework/index' ;
// import {MultilingualService} from '../../frameworks/i18n.framework/index';

import {Store} from '@ngrx/store';

import {BaseComponent} from '../../frameworks/core.framework/index';

@BaseComponent({
    selector : "bookmarks",
    templateUrl : "./app/components/bookmarks/bookmarks.component.html"
})

export class BookmarksComponent implements OnInit {
    public bookmarks : any ;
    
    constructor(private _store: Store<any>, public bookmarkService : BookmarksService){
        this.bookmarks = this._store.select("bookmarks") ;
    }
    
    ngOnInit(){
        this.getBookmarks() ;
    }
    
    
    getBookmarks() {
        this.bookmarkService.getBookmarks() ;
    }
}