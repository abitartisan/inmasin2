(function () {
  'use strict';

  // PasswordValidator service used for testing the password strength
  angular
    .module('users.services')
    .factory('PasswordValidator', PasswordValidator);

  PasswordValidator.$inject = ['$window'];

  function PasswordValidator($window) {
    var owaspPasswordStrengthTest = $window.owaspPasswordStrengthTest;
    owaspPasswordStrengthTest.config({
      allowPassphrases: true,
      maxLength: 15,
      minLength: 8,
      minPhraseLength: 8,
      minOptionalTestsToPass: 1
    });

    var service = {
      getResult: getResult,
      getPopoverMsg: getPopoverMsg
    };

    return service;

    function getResult(password) {
      var result = owaspPasswordStrengthTest.test(password);
      return result;
    }

    function getPopoverMsg() {
      var popoverMsg = 'Pon una contraseña con al menos 8 caracteres y que tenga un número o una mayuscula';

      return popoverMsg;
    }
  }

}());
