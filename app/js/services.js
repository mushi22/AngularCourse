'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.value('FIREBASE_URL', 'https://waitandeat-sohaib.firebaseio.com/')
	.factory('authService', function($firebaseSimpleLogin, $location, FIREBASE_URL) {
		var authRef = new Firebase(FIREBASE_URL);
		var auth = $firebaseSimpleLogin(authRef);
		
		return {
			login: function(user) {
				auth.$login('password', user).then(function(data){
				console.log(data);
				//redirect to waitlist page
				$location.path('/waitlist');
			});
			}
		};
	});