angular.module('siteControllers',[])

.config(['siteConfigProvider',
  function(siteConfigProvider){
	var siteConfig = {"siteName":"name of site", "siteID":5084220, "baseUrl":'json/site.json'};
	siteConfigProvider.siteSettings(siteConfig);

  }])

.controller('mainSiteController',['modelService', '$scope',function(modelService,$scope){
//var s = siteStage('json/site.json');

modelService.init().then(

	function(response){
		$scope.data =response;
		$scope.info = $scope.data.siteinfo(); 	
		$scope.article = $scope.data.article();
		$scope.section = $scope.data.section();
		$scope.contacts = $scope.data.contacts();

$scope.hypothesis = $scope.section.slice(0,3);
$scope.experiment = $scope.section.slice(4,5);
$scope.conclusion = $scope.section.slice(6);
console.log($scope.conclusion);
console.log($scope.experiment);
$scope.contactsA = $scope.contacts[0];
},function(response){
	$scope.error = response;
})


}])



