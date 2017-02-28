'use strict';

angular.module('loan.controllers', [ 'loan.services'])
.controller('LoanCtrl', ['$scope', 'loanService',
function($scope, loanService) {
	$scope.loans = loanService.loans;

	$scope.selectLoan = function(row) {
		$scope.selectedRow = row;
	};
	
	$scope.deleteLoan = function(loan, index) {
		//console.log('delete loan by id='+ loan._id);
		loanService.deleteById(loan._id);
		$scope.loans.splice(index, 1);
	};
}]);
//.controller('PostAddCtrl', ['$scope','$state', 'loanService', function($scope, $state, loanService) {
//	$scope.tags = loanService.tags;
//	
//	//console.log('tags= %j', tags);
//	$scope.savePost = function() {
//		if (!$scope.loan.title || $scope.loan.title === '') {
//			return;
//		}
//		if (!$scope.loan.id || $scope.loan.id === '') {
//			return;
//		}
//		
//		loanService.create({
//			id:$scope.loan.id,
//			tag:$scope.loan.tag,
//			title : $scope.loan.title,
//			content : $scope.loan.content
//		});
//		$scope.loan.id = '';
//		$scope.loan.title = '';
//		$scope.loan.content = '';
//		
//		$state.go('loans');
//	};
//}])
//.controller('PostViewCtrl', ['$scope', 'loan', function($scope,loan) {
//	$scope.loan = loan;
//	$scope.markdown_content = loan.content;
//}])
//.controller('PostEditCtrl', ['$scope', '$state', 'loan', 'loanService', function($scope, $state,loan, loanService) {
//	$scope.loan = loan;
//	$scope.tags = loanService.tags;
//	
//	$scope.savePost = function() {
//		if (!$scope.loan.title || $scope.loan.title === '') {
//			return;
//		}
//		if (!$scope.loan.id || $scope.loan.id === '') {
//			return;
//		}
//		
//		loanService.update({
//			id:$scope.loan.id,
//			tag:$scope.loan.tag,
//			title : $scope.loan.title,
//			content : $scope.loan.content
//		}, loan._id);
//		$scope.loan.id = '';
//		$scope.loan.title = '';
//		$scope.loan.content = '';
//		
//		$state.go('loans');
//	};
//}]);