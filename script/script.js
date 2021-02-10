
$(document).ready(function(){
   var controller = new ScrollMagic.Controller();
   $('#menu-icon').click(function(){
$('#menu').toggleClass('nav-toggle')
   });
   $('#menu li').click(function(){
      $('#menu').addClass('nav-toggle');
   })
   $('.work-button .buttons').click(function(){
$(this).siblings('.work-button .buttons').removeClass('work-active')
    $(this).toggleClass('work-active')
       });
       $('#WebApp').click(function (){
        $('#chatBot-items').addClass('sample-toggle');
        $('#andriod-items').addClass('sample-toggle');     
$('#web-items').removeClass('sample-toggle');
       });
       $('#Andriod').click(function (){
        $('#web-items').addClass('sample-toggle');
        $('#chatBot-items').addClass('sample-toggle');
        $('#andriod-items').removeClass('sample-toggle');
               });
               $('#chatBot').click(function (){
                $('#web-items').addClass('sample-toggle');
                $('#andriod-items').addClass('sample-toggle');
                $('#chatBot-items').removeClass('sample-toggle');
                       });

                       // about scene
	var scene = new ScrollMagic.Scene({triggerElement: "#about", duration: 404})
					.on("enter", function () {
						// trigger animation by changing inline style.
                  $('#about').addClass('heading-decore-about');
					})
					.on("leave", function () {
						// reset style
                  $('#about').removeClass('heading-decore-about');
					})
               .addTo(controller);
               
               
                       // Skills scene
	var scene = new ScrollMagic.Scene({triggerElement: "#skills", duration: 370})
   .on("enter", function () {
      // trigger animation by changing inline style.
      $('#skills').addClass('heading-decore-skills');
   })
   .on("leave", function () {
      // reset style
      $('#skills').removeClass('heading-decore-skills');
   })
   .addTo(controller);
//
//   
   //                     // works scene
	var scene = new ScrollMagic.Scene({triggerElement: "#works", duration: 1250})
   .on("enter", function () {
      // trigger animation by changing inline style.
      $('#works').addClass('heading-decore-work');
   })
   .on("leave", function () {
      // reset style
      $('#works').removeClass('heading-decore-work');
   })
   .addTo(controller);
                       // contact scene
	var scene = new ScrollMagic.Scene({triggerElement: "#contact", duration: 700})
   .on("enter", function () {
      // trigger animation by changing inline style.
      $('#contact').addClass('heading-decore-contact');
   })
   .on("leave", function () {
      // reset style
      $('#contact').removeClass('heading-decore-contact');
   })
   .addTo(controller);
   //TimelineLite
   const python = document.querySelector('#python')
const php = document.querySelector('#php')
const c = document.querySelector('#c')
const sql = document.querySelector('#sql')
const html = document.querySelector('#html')
const css = document.querySelector('#css')
const javascript = document.querySelector('#javascript')

var t1 = new TimelineLite()
t1.fromTo(python,0.7, {width: "0%"},{width: "calc(100% - 4px)", ease: Power4.easeOut})
   .fromTo(php,0.7, {width: "0%"},{width: "calc(90% - 4px)", ease: Power4.easeOut})
    .fromTo(c,0.7, {width: "0%"},{width: "calc(70% - 4px)", ease: Power4.easeOut})
    .fromTo(sql ,0.7, {width: "0%"},{width: "calc(90% - 4px)", ease: Power4.easeOut})
    .fromTo(html ,0.7, {width: "0%"},{width: "calc(90% - 4px)", ease: Power4.easeOut})
    .fromTo(css ,0.7, {width: "0%"},{width: "calc(90% - 4px)", ease: Power4.easeOut})
    .fromTo(javascript ,0.7, {width: "0%"},{width: "calc(90% - 4px)", ease: Power4.easeOut})
    var scenet = new ScrollMagic.Scene({
      triggerElement: "#social",
    triggerHook: 0
})
scenet.setTween(t1)
.addTo(controller)

// Contact
$('#name').val('');
$('#mail').val('');
$('#sub').val('');
$('#message').val('');
$('#submit').click(function(event){
   event.preventDefault();
  var name = $('#name').val();
  var mail = $('#mail').val();
  var subject = $('#sub').val();
  var message = $('#message').val();
  var mailError = '';
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
if(reg.test(mail)){
   mailError=true;
}else{
   mailError=false;
}
  if(name=='' ||mail==''||subject==''||message ==''|| mailError ==false){
   swal("Error", "Please fill input field correctly", "error", {
      button: "Close",
    });
  }else{
   var dataString = 'name1='+name+'&email1='+mail+'&subject1='+subject+'&message1='+message;
   $.ajax({
      url:'mail.php',
      type:'POST',
      data:dataString,
      cache:false,
      success: function(response){
         swal(response, "Thank you for reaching out!", "success", {
            button: "Close",
          });
         $('#myContact')[0].reset();
      }
   });
  
  }
});
});
// Swiper
var swiper = new Swiper('.swiper-container', {
   centeredSlides: true,
   spaceBetween: 30,
   centeredSlides:true,
   autoplay:{
     delay:2500,
     disableOnInteration:false,
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`#web-items img`, {
    interval: 200
})