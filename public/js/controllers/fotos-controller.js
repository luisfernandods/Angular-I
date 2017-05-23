angular.module('alurapic').controller('FotosController', function ($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';

    // Essas são duas formas validas de fazer a requisição para o backend

    // var promisse = $http.get('/v1/fotos');
    // promisse.then(function (retorno) {
    //     $scope.fotos = retorno.data;
    // }).catch(function(error) {
    //     console.log(error)
    // });

    $http.get('v1/fotos')
        .success(function (fotos) {
            $scope.fotos = fotos;
        })
        .error(function (error) {
            console.log(error);
        });


    $scope.remover = function (foto) {
        $http.delete('v1/fotos/' + foto._id)
            .success(function () {
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto , 1);
                console.log('A foto ' + foto.titulo + ' Foi Removida');
            }).error(function (erro) {
                console.log(erro);
            });
    }



});