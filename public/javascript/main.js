(function () {
    angular.module('MainModule', [])
        .controller('IndexController', function ($scope) {
            $scope.mensaje = "Hola Mundo";
        })
        .controller('FooterController', function ($scope) {

        });
})();