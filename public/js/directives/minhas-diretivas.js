angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {

        // Directive Definition Object 
        var ddo = {};

        // Atibute Element diretiva podera ser utilizada de duas formas 1-Atributo 2-
        ddo.restrict = "AE";

        // Recebe Dados privados para diretiva como String
        ddo.scope = {
            titulo: '@titulo',
            url: '@url'
        }

        // Define para o ddo que mantenha seus elementos filhos, alem de ativar aqui temos que colocar ng-transclude
        // na div
        ddo.transclude = true;

        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    })
    .directive('meuBotaoPerigo', function () {
        var ddo = {};

        ddo.restrict = "E";

        ddo.scope = {
            nome: '@',
            acao: '&'
        }

        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;

    });