 window.onload = function() { 
	 var swiper = new Swiper('.swiper-container1', {
	   slidesPerView: 1,
	   spaceBetween: 30,
	   loop: true,
	   // pagination: {
	   //   el: '.swiper-pagination',
	   //   clickable: true,
	   // },
	   navigation: {
	     nextEl: '.swiper-button-next1',
	     prevEl: '.swiper-button-prev1',
	   },
	 });
	 
	
	 var swiper = new Swiper('.swiper-container2', {
	   slidesPerView: 3,
	   spaceBetween: 0,
	   slidesPerGroup: 3,
	   loop: true,
	   loopFillGroupWithBlank: true,
	   // pagination: {
	   //   el: '.swiper-pagination',
	   //   clickable: true,
	   // },
	   navigation: {
	     nextEl: '.swiper-button-next2',
	     prevEl: '.swiper-button-prev2',
	   },
	 });
	 
	 var swiper = new Swiper('.swiper-container3', {
	   slidesPerView: 3,
	   spaceBetween: 0,
	   slidesPerGroup: 3,
	   loop: true,
	   loopFillGroupWithBlank: true,
	   // pagination: {
	   //   el: '.swiper-pagination',
	   //   clickable: true,
	   // },
	   navigation: {
	     nextEl: '.swiper-button-next3',
	     prevEl: '.swiper-button-prev3',
	   },
	 });
 }
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				// var box4=document.querySelector('.box4');
				// var oimg=box4.querySelectorAll('img');
				// var box6=document.querySelector('.box6');
				// var box7=document.querySelector('.box7');
				// var i=0;
				// var obj=oimg[0];
				
				
				// function banner(){
				// 	i++
				// 	if(i==oimg.length){
				// 		i=0;
				// 	}
				// 	fn();
				// }
				// function fn(){
				// 	obj.style.opacity=0;
				// 	oimg[i].style.opacity=1;
				// 	obj=oimg[i];
				// }

		




// function left()
// {
	
// 	box6.onclick=function(){
// 		i--;
// 		if(i<0){
// 			i=oimg.length-1;
// 		}

// 		obj.style.opacity=0;
// 		oimg[i].style.opacity=1;
// 		obj=oimg[i];	
// 		console.log("执行a方法")
// 	}
// }

// function right()
// {
	
// 	box7.onclick=function(){
// 		i++;
// 		if(i==oimg.length){
// 			i=0;
// 		}
// 		obj.style.opacity=0;
// 		oimg[i].style.opacity=1;
// 		obj=oimg[i];
// 	}
// console.log("执行b方法")
// }