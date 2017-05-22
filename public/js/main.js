angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        
        // retira a necessidade do # na url, mas o servidor tem que ser adequado
        $locationProvider.html5Mode(true);

        // padrão de rotas para o angular 
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new',{
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        // define rota padrao quando usuario digitar qualquer outra rota inexistente
        $routeProvider.otherwise({ redirectTo: '/fotos'});
    
    });