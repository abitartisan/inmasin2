(function () {
  'use strict';

  angular
    .module('properties')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Oportunidades',
      state: 'properties',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'properties', {
      title: 'Inmuebles',
      state: 'properties.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'properties', {
      title: 'Proyectos',
      state: 'properties.list'
    });
  }
}());
