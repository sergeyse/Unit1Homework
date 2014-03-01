/**
 * Created by sergeyse on 25.02.14.
 */


//---------- JavaScript ---------//
/*window.onload= function(){ (function () {
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
}*/
//------------ JQuery example-----------//
      /*  avoiding page refresh*/
$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault(); //prevent default form submit

    });
});


jQuery(function($){


//   -------------------- priseSlider-----------//

    $('#priceSlider').slider().on("slide",function(e){
        $('#price-start').val(e.value[0]);
        $('#price-end').val(e.value[1]);
    });

    $('#datepicker').datepicker({
        startDate: "-1d",
        todayBtn: "linked",
        todayHighlight: true
    });


                         /*-----setting up a global error handler */
    $(function() {
        $.ajaxSetup({
            error: function(jqXHR, exception) {
                if (jqXHR.status == 404) {
                    alert('Requested resource not found. [404]');
                } else if (jqXHR.status == 500) {
                    alert('Internal Server Error [500].');
                } else if (exception === 'parsererror') {
                    alert('JSON parsing failed.');
                } else {
                    alert('Got This Error:\n' + jqXHR.responseText);
                }
            }
        });
    });

           /*----retreaving json data and iterating it like A JS literal Object ----*/
function loadJsonData(dataURL,rootElement,target) {
    $.getJSON(dataURL, function (data) {
        var optionsHTML = '';
        $.each(data[rootElement], function(index) {
            optionsHTML+='<p>'+data[rootElement][index].moto+' ! '+data[rootElement][index].todo+' '+
                data[rootElement][index].message+'</p>'
        });
        var targetCurrentHTML = target.html();
        var targetNewHTML = targetCurrentHTML + optionsHTML;
        target.html(targetNewHTML);
    });

}

    /*------- event hendlers---------*/
/*-----------remember a css selector  display:none for #hidden-search------*/

$("#searchButton").click(function(){
        $("#carousel-to-hide").slideToggle();
        console.log("finish");
        $("#hidden-search").slideToggle();
        loadJsonData('assets/data/products.json','content',$('#msg'));
        $("#searchButton").hide();
    });

    $('#back-home').click(function(){
        $("#carousel-to-hide").slideToggle();
        console.log("finish");
        $("#hidden-search").slideToggle();
        $("#searchButton").show();
        $("#msg p").remove();


    });
});
