angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home.html');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'aboutCtrl'
      })
      .state('details', {
        url: '/details',
        templateUrl: 'details.html',
        
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html',
        controller: 'contactCtrl'
      })



      .state('exit', {
        url: '/exit',
        templateUrl: 'exit.html',
        controller: 'exitCtrl'
        
      })
  }])