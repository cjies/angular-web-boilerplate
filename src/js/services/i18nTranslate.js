
// -------------------------------------
//   i18n Configuration
// -------------------------------------

var DEFAULT_LANGUAGE = 'en-US';

app.config(['$translateProvider', function ($translateProvider) {

  $translateProvider.useStaticFilesLoader({
    prefix: 'locales/locale-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage(DEFAULT_LANGUAGE);
  $translateProvider.useSanitizeValueStrategy('escaped');

  document.getElementsByTagName('html')[0].setAttribute('lang', DEFAULT_LANGUAGE);

}]);


/*** i18n Services ***/

app.factory('GlobalI18n', function($timeout, $translate) {

  var _currentLanguage = null;

  // i18n Initial
  var _init = function() {
    var _lang = _getCurrentLanguage();
    document.getElementsByTagName('html')[0].setAttribute('lang', _lang);
  }

  // Get Current Used Language
  var _getCurrentLanguage = function() {
    return _currentLanguage || $translate.preferredLanguage();
  }

  // Set or Change Used Language
  var _setLanguage = function(_lang, _callback, _failCallback) {
    $translate.use(_lang).then(function() {
      document.getElementsByTagName('html')[0].setAttribute('lang', _lang);
      _currentLanguage = _lang;
      _callback();
    }, function(_res) {
      console.log('Language not found: ' + _res, 'assertive');
      _failCallback();
    }); 
  }

  // Export
  return {
    init: function() {
      return _init();
    },
    default: function() {
      return angular.copy(DEFAULT_LANGUAGE);
    },
    getCurrent: _getCurrentLanguage,
    setLang: _setLanguage
  };

});


/*** i18n Initial ***/

app.run(function(GlobalI18n) {
  GlobalI18n.init();
});