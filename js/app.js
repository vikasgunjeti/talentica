$(function() {
$(".scrollTo").on('click', function(e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');;
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 2000);
 });

 $("#book-now").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#contact_us').offset().top)
    }, 2000);
 });

 $("#get-started").on('click', function(e) {
    $('html, body').animate({
      scrollTop: ($('#benefits').offset().top)
    }, 2000);
 });

});

$(window).scroll(function() {    // this will work when your window scrolled.
    var height = $(window).scrollTop();  //getting the scrolling height of window
    if(height  > 100) {
        $(".site-header").addClass('sticky-header');
    } else{
        $(".site-header").removeClass('sticky-header');
    }
});

function sendContactData()
{
    var first_name= jQuery('#first_name').val();
	var email = jQuery('#email').val();
	var phone = jQuery('#phone').val();
    var message= jQuery('#message').val();

	
	if(validateFormFields(first_name,email))
	{
       alert("Form is Valid");
       document.getElementById("contactForm").reset();
     }
}

function validateFormFields(first_name,email)
{
	 if(first_name == "" && email == "")
	 {
		jQuery('span#first_name_error').css('visibility', 'visible');
		jQuery('span#email_error').css('visibility', 'visible');
		 return false;
	 }
	 if(first_name == "")
	 {
		jQuery('span#first_name_error').css('visibility', 'visible');
		return false;
	 }
	 if(email == "")
	 {
		jQuery('span#email_error').css('visibility', 'visible');
		return false;
	 }
	 if(email != "")
	 {
		var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		 if(!emailReg.test(email))
		 {
			jQuery('span#email_error').html("Please enter valid Email Address");
			jQuery('span#email_error').css('visibility', 'visible');
			return false;
		 }
		jQuery('span#email_error').html("Please enter valid Email Address");
		jQuery('span#email_error').css('visibility', 'hidden');
	 }
	 
	 return true;
}

function isNumberKey(evt)
{
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
}
	  
function lettersOnly() 
{
            var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)

                return true;
            else
                return false;
}