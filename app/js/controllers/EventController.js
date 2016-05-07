'use strict';

eventsApp.controller('EventController', EventController);

function EventController($scope) {
	$scope.event = {
		name: 'Angular Boot Camp',
		date: '1/1/2013',
		time: '10:30 am',
		location: {
			address: 'Google Headquarters',
			city: 'Mountain View',
			province: 'CA'
		},
		imageUrl: 'img/angularjs-logo.png',
		sessions: [
			{
				name: 'Directives Masterclass',
				upVoteCount: 0
			},
			{
				name: 'Scopes for fun and profit',
				upVoteCount: 0
			},
			{
				name: 'Well Behaved Controllers',
				upVoteCount: 0
			}
		]
	}

	$scope.myStyle = {
		color: 'green'
	};

	$scope.upVoteSession = function (session) {
		session.upVoteCount++;
	}
	$scope.downVoteSession = function (session) {
		session.upVoteCount++;
	}

	$scope.snippet = '<span class="red">Hi</span>';
	$scope.boolValue = true;
}