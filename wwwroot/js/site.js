// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
   $('#carouselWidgets').css('height');
    // now apply this height as a max-height on all the image items; css will handle the rest;
    $('#carouselWidgets').find('.carousel-item img').css('max-height', $('#carouselwithIndicators').css('height'))
});