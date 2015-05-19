angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope) {
    $scope.app = "Lista Telefonica";
    
    $scope.contatos = [
            {nome: "Pedro", telefone: "999-999-99"},
            {nome: "Ana", telefone: "888-999-99"},
            {nome: "Maria", telefone: "777-999-99"}
        ];
});