import {t} from '../../frameworks/test.framework/index';

declare var browser: any, element: any, by: any;

t.describe('App', function() {

  t.be(function() {
    browser.get('/');
  });

  t.it('should have a title', function() {
    t.e(browser.getTitle()).toEqual('Developer Bookmarker');
  });

  t.it('should have <nav>', function() {
      t.e(element(by.css('sd-app sd-navbar nav')).isPresent()).toEqual(true);
  });
  
  t.it('should have a button in navbar containing Folder_Name', function(){
    t.e(element(by.css('sd-app sd-navbar nav button a')).getText()).toEqual('Folder_Name')
  })
  
  t.it('should contain <sd-toolbar>', function(){
    t.e(element(by.css('sd-app sd-toolbar')).isPresent()).toEqual(true)
  })
  
  t.it('should contain Search input box within <sd-toolbar>', function(){
    t.e(element(by.css('sd-app sd-toolbar input:first-child')).isPresent()).toEqual(true)
  })
  
  t.it('should contain correct text for ADD in <sd-toolbar>', function(){
    t.e(element(by.css('sd-app sd-toolbar button:first-child')).getText()).toEqual('ADD')
  })

  // t.it('should have correct nav text for Home', function() {
  //     t.e(element(by.css('sd-app sd-navbar nav a:first-child')).getText()).toEqual('Home');
  // });

  // t.it('should have correct nav text for About', function() {
  //     t.e(element(by.css('sd-app sd-navbar nav a:last-child')).getText()).toEqual('About');
  // });

  // t.it('should contain a language switcher', function() {
  //   t.e(element(by.css('sd-app sd-toolbar lang-switcher')).isPresent()).toEqual(true);
  //   t.e(element.all(by.css('sd-app sd-toolbar lang-switcher option')).count()).toEqual(5);
  // });

});
