'use strict';

console.log('Testing task by Ivan Sychev for Coolbet')

// Burger nav

$(document).ready(function(){
  $('.top-nav__burger').click(function(event) { // При клике на %selector%
     $('.top-nav__list, .top-nav__wrapper').toggleClass('active'); // Добавляет active к %.selector%
  });
});

// let screenHeight = window.innerHeight; // Получаем внутренний размер окна брузера

// window.onload = function fullSizeHeader(){
//  	// Получаем эллемент с .header и устанавлием стиль height c высотой экрана + px
//  	document.querySelector(".header").style.height = screenHeight+"px"; // 100% Высота
//    document.querySelector(".user-counter").style.height = screenHeight+"px";
// 	function reportWindowSize() {
//   		document.querySelector(".header").style.height = window.innerHeight+"px";
//       document.querySelector(".user-counter").style.height = window.innerHeight+"px";
// 	}
// 	window.onresize = reportWindowSize;  // Динам. отслеживание
// }

// console.log(screenHeight)