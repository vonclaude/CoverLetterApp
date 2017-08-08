angular
	.module('letter', ['ngMaterial'])
	.controller('letterCtrl', function($scope) {
		$scope.letter = {
			position: '',
			source: '',
			intro: '',
			conclusion: '',
			qual_1: '',
			qual_2: '',
			qual_3: '',
			qual_4: '',
			name: '',
			phone: '',
			email: ''
		};
	});