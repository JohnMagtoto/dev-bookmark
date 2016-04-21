System.register(['angular2/core', 'ng2-bootstrap/ng2-bootstrap', './bookmark.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_bootstrap_1, bookmark_service_1;
    var BookmarlListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (bookmark_service_1_1) {
                bookmark_service_1 = bookmark_service_1_1;
            }],
        execute: function() {
            BookmarlListComponent = (function () {
                function BookmarlListComponent(_boorkmarkService) {
                    this._boorkmarkService = _boorkmarkService;
                    this.bookmarks = this._boorkmarkService.getBookmarks();
                }
                BookmarlListComponent.prototype.ngOnInit = function () {
                };
                BookmarlListComponent = __decorate([
                    core_1.Component({
                        selector: 'bookmark-list-component',
                        templateUrl: './app/bookmark/bookmark-list.component.html',
                        directives: [
                            ng2_bootstrap_1.Alert,
                            ng2_bootstrap_1.BUTTON_DIRECTIVES
                        ],
                        providers: [
                            bookmark_service_1.BookmarkService
                        ]
                    }), 
                    __metadata('design:paramtypes', [bookmark_service_1.BookmarkService])
                ], BookmarlListComponent);
                return BookmarlListComponent;
            }());
            exports_1("BookmarlListComponent", BookmarlListComponent);
        }
    }
});
//# sourceMappingURL=bookmark-list.component.js.map