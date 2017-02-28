'use strict';

angular.module('markNote', [ 'ngRoute', 'user', 'loan'])
.constant('API', '/api/v1.0/')
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		controller : 'UserCtrl',
	    templateUrl : '/views/user/list.html',
	}).otherwise('/');
	
}])
.run(function($http){
	$http.defaults.xsrfHeaderName = 'X-CSRFToken';
	$http.defaults.xsrfCookieName = 'csrftoken';
});
//'ui.router',.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider ) {
//	  
//	$stateProvider.state('users', {
//		url : '/users',
//		templateUrl : '/views/user/list.html',
//		controller : 'UserCtrl',
//		resolve: {
//			postPromise: ['userService', function(userService){
//				return userService.getAll();
//			}]
//		}
//	})
//	.state('loans', {
//		url : '/loans',
//		templateUrl : '/views/loan/list.html',
//		controller : 'LoanCtrl',
//		resolve: {
//			postPromise: ['loanService', function(loanService){
//				return loanService.getAll();
//			}]
//		}
//	});
	
	
//	.state('post-view', {
//		url : '/post/view/:id',
//		templateUrl : '/views/post/view.html',
//		controller : 'PostViewCtrl',
//		resolve : {
//			post : ['$stateParams', 'postService',
//			function($stateParams, postService) {
//				return postService.get($stateParams.id);
//			}]
//		}
//	})
//	.state('post-edit', {
//		url : '/post/edit/:id',
//		templateUrl : '/views/post/edit.html',
//		controller : 'PostEditCtrl',
//		resolve : {
//			post : ['$stateParams', 'postService',
//			function($stateParams, postService) {
//				return postService.get($stateParams.id);
//			}],
//			postPromise: ['postService', function(postService){
//				return postService.getTags();
//			}]
//		}
//	})
//	.state('post-add', {
//		url : '/post/add',
//		templateUrl : '/views/post/edit.html',
//		controller : 'PostAddCtrl',
//		resolve: {
//			postPromise: ['postService', function(postService){
//				return postService.getTags();
//			}]
//		}
//	});
	
//	$urlRouterProvider.otherwise('users');
	//$locationProvider.html5Mode(false);
//	 <base href="/"> '$locationProvider', 
//	$locationProvider.html5Mode({
//		enabled : true,
//		requireBase : true,
//	});
//}]);