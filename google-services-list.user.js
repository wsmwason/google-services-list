// ==UserScript==
// @name        Google Services List
// @namespace   wsmwason.google.services.list
// @description List all Google services on support page, and auto redirect to product url.
// @include     https://support.google.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @auther      wsmwason
// @version     1.1
// @license     MIT
// @grant       none
// ==/UserScript==

// hide show all icon
$('.show-all').hide();

// display hide container
$('.all-hc-container').addClass('all-hc-container-shown');

// add link redirect param for next page
$('a').each(function(){
    var stid = $(this).attr('st-id');
    if (typeof stid !== typeof undefined && stid !== false) {
        $(this).attr('href', $(this).attr('href')+'&redirect=1').attr('target', '_blank');
    }
});

// auto redirect to product url
if (location.search.indexOf('redirect=1') > 0) {
    // find product-icon link
    var productIcon = $('a.product-icon');
    if (productIcon.length == 1) {
        var productUrl = productIcon.attr('href');
        location.href = productUrl;
    }
}
