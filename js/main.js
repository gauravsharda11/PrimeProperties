(function ($) {
    "use strict";
    $('.inputcontct').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');                
            }
        })    
    })

    var input = $('.valid-input .inputcontct');
    $('.valid-form').on('submit',function(){
        var check = true;
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }        
        return check;
    });

    $('.valid-form .inputcontct').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');        
    }   

    function reset () {
        $("#toggleCSS").attr("href", "css/alertify.default.css");        
        alertify.set({
           labels : {
              ok     : "OK",
              cancel : "Cancel"
           },
           delay : 5000,
           buttonReverse : false,
           buttonFocus   : "ok"
        });
     }

     $("#confirm").on( 'click', function () {  
        var emailid = document.getElementsByName("email")[0].value;
        var messagedata = document.getElementsByName("message")[0].value;
        var nm = document.getElementsByName("name")[0].value;
        var phone = document.getElementsByName("name")[0].value;
        if(emailid!="" && nm!="" && messagedata!="" && phone!="")
        { 
            reset();
          alertify.confirm("This is a confirm dialog", function (e) {
             if (e) {
                alertify.success("You've clicked OK");
             } else {
                alertify.error("You've clicked Cancel");
             }
          });        
          return false;
        }
       });

})(jQuery);




