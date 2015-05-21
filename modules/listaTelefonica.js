angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope) {
    $scope.app = "Lista Telefonica";
    
    $scope.contatos = [
        {nome: "Pedro", telefone: "999-999-99", cor: "blue"},
        {nome: "Ana", telefone: "888-999-99", cor: "yellow"},
        {nome: "Maria", telefone: "777-999-99", cor: "red"}
	];
    $scope.operadoras = [
    	{nome: "Oi", codigo: 14, categoria: "Celular"},
    	{nome: "Vivo", codigo: 15, categoria: "Celular"},
    	{nome: "Tim", codigo: 41, categoria: "Celular"},
    	{nome: "GVT", codigo: 25, categoria: "Fixo"},
    	{nome: "Embratel", codigo: 21, categoria: "Fixo"}
    ];
        
    $scope.adicionarContato = function(contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };
    
    $scope.apagarContato = function(contatos) {
        $scope.contatos = contatos.filter(function(contato) {
            if(!contato.selecionado) return contato;
        });
    };
    
    $scope.isContatoSelecionado = function(contatos) {
        return isContatoSelecionado = contatos.some(function(contato) {
           return contato.selecionado; 
        });
    };
});