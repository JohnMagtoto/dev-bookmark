// libs
import {provideStore} from '@ngrx/store';
import {routerReducer, routerMiddleware, RouterState} from 'ngrx-store-router';

// app
import {nameListReducer} from './services/name-list.service';
import {MULTILINGUAL_PROVIDERS, MultilingualStateI, multilingualReducer} from '../i18n.framework/index';

// app - custom
import { bookmarksReducer, Bookmark } from './services/bookmarks.service' ;
export * from "./services/bookmarks.service" ;

// state definition
export interface AppStoreI {
  router: RouterState;
  i18n: MultilingualStateI;
  names: Array<string>;
  bookmarks : Array<Bookmark>
};

export const APP_PROVIDERS: any[] = [
  MULTILINGUAL_PROVIDERS,
  provideStore({ 
    router: routerReducer, 
    i18n: multilingualReducer,
    names: nameListReducer,
    bookmarks: bookmarksReducer
  }),
  routerMiddleware
];

// services
export * from './services/app-config.service';
export * from './services/name-list.service';
