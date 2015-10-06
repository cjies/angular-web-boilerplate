
/*** Page Route ***/ 

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // Main Container
  .state('app', {
    url: '',
    abstract: true,
    views: {
      'appContainer': {
        templateUrl: 'views/common/layout.html',
      }
    }
  })

  // Home
  .state('app.home', {
    url: '/home',
    views: {
      'mainContainer': {
        templateUrl: 'views/home/home-index.html',
        controller: 'HomeCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
