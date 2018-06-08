// how to create jquery function


$(function () {
    //declare function 
    $.fn.myfunction = function () {
        return true;
    };
});

$(document).ready(function () {
    //call function
    $("#my_div").myfunction();
});


// ready function


// زر اظهار كلمة مرور بتغيير نوع حقل الباسوورد
// <!--  -->
//     <form>
// <input id="my-input" type="password" placeholder="yes" />
// </form>
// <button id="my-button">Show password</button>

// <!--  -->

var myButton = document.getElementById('my-button');
var myInput = document.getElementById('my-input');

myButton.onclick = function (){
if (this.textContent === 'Show password') {
    myInput.setAttribute( 'type' , 'text')
    this.textContent = 'Hide password'
}else{
    myInput.setAttribute( 'type' , 'password')
    this.textContent = 'Show password'
    
}

}

// تأثير الالة الكاتبة
//  <div id="type" ></div>
//  <br>
// <button id="button" >button</button>   

myText = "My name is amjad hamid and I  wanted to learn web page developer",

 i = 0,
 mybuttom = document.getElementById('button');

 mybuttom.onclick = function(){
'use stricr';

var typewriter = setInterval(function(){
document.getElementById('type').textContent += myText[i];
i = i + 1 ;
if(i > myText.length - 1){
    clearInterval(typewriter);
}
}
, 100);


 }
//scroll to top


// <style>
// .up{
//     position: fixed;
//     bottom: 10px;
//     right: 10px;
// }
// </style>

// <button class="up" id="up">Go up</button>

var myButton = document.getElementById('up');

window.onscroll = function(){
    'use stricr';
if (window.pageXOffset <= 200) {
    this.console.log('good')
    myButton.style.display = 'block';
}else{
    myButton.style.display = 'none';
    
}

}

myButton.onclick = function(){
window.scrollTo(0,0);

}

// counter
var counter = 0;
function animateCounter() {
  var duration = 1000,
      $counters = $(".counter-container");
  
  $counters.children().first().addClass("rotate");
  setTimeout(function() {
    counter++;
    $counters.children().first().text(counter);
  }, duration / 3);
  setTimeout(function() {
    $counters.children().first().removeClass("rotate");
  }, duration);
}
// counter







jQuery.fn.extend({
    zigzag: function () {
        var text = $(this).text();
        var zigzagText = '';
        var toggle = true; //lower/uppper toggle
			$.each(text, function(i, nome) {
				zigzagText += (toggle) ? nome.toUpperCase() : nome.toLowerCase();
				toggle = (toggle) ? false : true;
			});
	return zigzagText;
    }
});
// console.log($('#tagline').zigzag());
//output: #1 jQuErY BlOg fOr yOuR DaIlY NeWs, PlUgInS, tUtS/TiPs & cOdE SnIpPeTs.

//chained example
// console.log($('#tagline').zigzag().toLowerCase());
//output:

 (function($){

// maintain a to the existing function
var oldEachFn = $.fn.each;

$.fn.each = function() {

    // original behavior - use function.apply to preserve context
    var ret = oldEachFn.apply(this, arguments);
	
	// add custom behaviour
	try {
		// change background colour
		$(this).css({'background-color':'orange'});
		
		// add a message
		var msg = 'Danger high voltage!';
		$(this).prepend(msg);
	}
	catch(e) 
	{
		console.log(e);
	}
	
    // preserve return value (probably the jQuery object...)
    return ret;
}
})(jQuery);



JQUERY4U = {
	multiply: function(x,y) {
		return (x * y);
	}
}


var JQUERY4U = {};
JQUERY4U.UTIL = {
formatVarString: function()
	{
		var args = [].slice.call(arguments);
		if(this.toString() != '[object Object]')
		{
			args.unshift(this.toString());
		}

		var pattern = new RegExp('{([1-' + args.length + '])}','g');
		return String(args[0]).replace(pattern, function(match, index) { return args[index]; });
	}
}
JQUERY4U.UTIL.formatVarString('{1} is a {2} aimed to help you learn {3}.', 'jQuery4u', 'blog', 'jQuery');