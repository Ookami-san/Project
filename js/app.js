var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl",  ["$scope", "$firebaseArray",
        function($scope, $firebaseArray) {
          var ref = new Firebase("https://pcpw.firebaseio.com/About");
          $scope.blog = $firebaseArray(ref);
}]);
 
 var myDataRef = new Firebase('https://pcpw.firebaseio.com/');
var myChild =myDataRef.child('About');         


function check_empty() {
 if (document.getElementById('HeaderInput').value == ""  || 
  document.getElementById('DescInput').value == "") {
 alert("Fill All Fields !");
 } else {
   butononclick();
  alert("GIf added Successfully...");
 }
}


function butononclick() {
    var Head = $('#HeaderInput').val();
    var Desc = $('#DescInput').val();
    myChild.push({Head: Head, Desc: Desc});
    
    $('#HeaderInput').val('');
    $('#DescInput').val('');
};




