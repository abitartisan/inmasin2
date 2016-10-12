(function () {
  'use strict';

  angular
    .module('core.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path();
      var hasTrailingSlash = path.length > 1 && path[path.length - 1] === '/';

      if (hasTrailingSlash) {
        // if last character is a slash, return the same url without the slash
        var newPath = path.substr(0, path.length - 1);
        $location.replace().path(newPath);
      }
    });

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/core/client/views/home.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'modules/core/client/views/about.view.html'
      })
      .state('team', {
        url: '/team',
        templateUrl: 'modules/core/client/views/team.client.view.html'
      })
      .state('terms', {
        url: '/terms',
        templateUrl: 'modules/core/client/views/terms.client.view.html'
      })
      .state('faq', {
        url: '/faq',
        templateUrl: 'modules/core/client/views/faq.client.view.html'
      })
      .state('legal', {
        url: '/legal',
        templateUrl: 'modules/core/client/views/legal.client.view.html'
      })
      .state('privacidad', {
        url: '/privacidad',
        templateUrl: 'modules/core/client/views/privacidad.client.view.html'
      })
      .state('como-funciona', {
        url: '/como-funciona',
        templateUrl: 'modules/core/client/views/como_funciona.client.view.html'
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: 'modules/core/client/views/404.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Not-Found'
        }
      })
      .state('bad-request', {
        url: '/bad-request',
        templateUrl: 'modules/core/client/views/400.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Bad-Request'
        }
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'modules/core/client/views/403.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Forbidden'
        }
      });
  }
}());
