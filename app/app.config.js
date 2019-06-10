'use strict';

//instatiate an AngularJS module named uiApp
//inject an dependancy modules
var app = angular.module('appName', ['ui.router', 'ngAnimate']);
 
//Configure application states and routes
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $stateProvider
      .state('main', {
          url: '',
          templateUrl: 'main/main.html',
          controller: 'MainCtrl',
        })
        .state('main.component1', {
          url: '/component1',
          templateUrl: 'component1/component1.html',
          controller: 'Component2Ctrl'
        })
        .state('main.component2', {
          url: '/component2',
          templateUrl: 'component2/component2.html',
          controller: 'Component2Ctrl'
        });
    $urlRouterProvider.otherwise('/');
  });//END config
