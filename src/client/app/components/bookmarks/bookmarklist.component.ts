import { Input, Output, EventEmitter } from '@angular/core' ;
import { BaseComponent } from '../../frameworks/core.framework/index' ;

import { Bookmark } from '../../frameworks/app.framework/index' ;

@BaseComponent({
    selector : 'bookmark-list',
    templateUrl : './app/components/bookmarks/bookmarklist.component.html',
})

export class BookmarkListComponent {
    @Input() bookmarks : Bookmark[] ;
    @Output() edit = new EventEmitter() ;
    @Output() delete = new EventEmitter() ;
}