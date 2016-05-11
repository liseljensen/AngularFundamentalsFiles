'use strict';

eventsApp.controller('EventController', EventController);

function EventController($scope, eventData) {

    $scope.sortorder = "name";
    $scope.event = eventData.event;

    $scope.myStyle = {
        color: 'green'
    };

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    }
    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    }

    $scope.snippet = '<span class="red">Hi</span>';
    $scope.boolValue = true;
}