'use strict';

angular.module('loan.services', [])
.factory('loanService', [ '$http', 'API', function($http, API) {
	
	var service = {
		loans : []
	};
	
	service.getAll = function() {
		return $http.get(API + 'loans')
		.success(function(data) {
			angular.copy(data, service.loans);
		});
	};
	
	service.create = function(loan) {
		return $http.post(API + 'loans/', loan).success(function(data){
			service.loans.push(data);
		});
	};
	
	service.update = function(loan, id) {
		console.log('service put loan by id = %s', id);
		return $http.put(API + 'loans/' + id, loan).success(function(data){
			//service.loans.push(data);
			console.log('put return res=%j', data);
			return data;
		});
	};
	
	service.get = function(id) {
		console.log('service get loan by id = %s', id);
		return $http.get(API + 'loans/' + id).then(function(res) {
			return res.data;
		});
	};
	
	service.deleteById = function(id) {
		return $http.delete(API + 'loans/' + id).then(function(res) {
			return res.data;
		});
	};
	
	return service;
}]);