var totalWork;
var selectedWork = 1;
var minLoadingTime = 750;
var startTime = new Date().getTime();
var posnume =  $("#intro").height($(window).height());
$(document).ready(function ()
{ 

    //set heights
    $("#intro").height($(window).height());
    $("#name").css('top', ($(window).height() * 0.8) * 0.3 + "px");
    $("#main").css('top', $(window).height() * 0.8 + "px");
    $(".workleft").height($(window).height() * 0.3);
    $('textarea[name="contactmessage"]').height($(window).height() * 0.3);
    $("#loadingfill").height($(window).height());

    //footer scroll to top
    $("#scrolltotop").click(function ()
    {
        $('html, body').animate(
        {
            scrollTop: 0
        }, 1250);
    });

   
});



$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});









// if($(window).width() < 767)
// {
//    Media(480);
// } else {
//    Media(620);
// }

// function Media(wid){

// $(window).scroll(function () {
//     if ($(window).scrollTop() > wid) {
//        $('.main-nav').css({
//             position: 'fixed',
//             left: '0'
//         })
//        $('#social').css({
//         margin:'0'
//        });
//     } else {
//         $('.main-nav').css({
//             position: 'relative'
//         });
//     }
//     }

// );
// }

////firebase angular ////////////////////////////////
var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl",  ["$scope", "$firebaseArray",
        function($scope, $firebaseArray) {
          var ref = new Firebase("https://kawai.firebaseio.com/Gif");
          $scope.messages = $firebaseArray(ref);
}]);
