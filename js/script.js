/*============== JQuery ==============*/
 wow = new WOW(
{
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       10,          // default
    mobile:       true,       // default
    live:         true        // default
}
)
wow.init();




/*==========JQ=========*/
$(document).ready(function(){
 // counterup
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

})