
// -------------------------------------
//   Global Controller
// -------------------------------------

app.controller('AppCtrl', function($scope, $sce) {

  // Html Sanitize
  $scope.trustedHtml = function(_html) {
    return $sce.trustAsHtml(_html);
  };

});