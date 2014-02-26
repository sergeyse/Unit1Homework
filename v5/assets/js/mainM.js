/**
 * Created by sergeyse on 25.02.14.
 */


//---------- JavaScript ---------//
window.onload= function(){ (function () {
 var searchButton = document.getElementById("searchButton");
 var featuredCarousel = document.getElementById('carousel-to-hide');
 var searchBlock = document.getElementById('hidden-search');
    var buttonB2=document.getElementById('b2');
    var nawBar=document.getElementsByClassName('container');
    var homeButton = document.getElementById('back-home')
   // buttonB2.addEventListener('click',hideCarousel,false);


 //searchButton.addEventListener('click',hideCarousel,true);
   buttonB2.addEventListener('click',hideCarousel);
 function hideCarousel(){
 featuredCarousel.style.display="none";
     searchBlock.style.display="block";

 }
   homeButton.addEventListener('click',showCarousel);
    function showCarousel(){
        featuredCarousel.style.display="block";
        searchBlock.style.display="none";
    }

 })();
}
//------------ JQuery example-----------//

/*(function($){
 $('#searchButton').on('click', showHide);
 function showHide(){
 $('#carousel-to-hide').toggle();


 };
 })(jQuery());*/
/*
$(function ($) {
    $('#hidden-search').toggle();
   */
/* $('#searchButton').on('click', showHide);
    function showHide() {
        $('#carousel-to-hide').toggle();
        $('#hidden-search').toggle();
*//*


    };

    $('.slider').slider('min', 10);
);
*/
