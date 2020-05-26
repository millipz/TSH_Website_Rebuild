$(function(){


/* Rotating mobile side menu icon */

   $( ".toggle-btn" ).click(function() {
    //alert($( this ).css( "transform" ));
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(180deg)");
    } else {
        $(this).css("transform","" );
    }
});

/* Side menu show hide */

	$('#slide-submenu').on('click',function() {			        
        $(this).closest('.list-group').fadeOut('slide',function(){
        	$('.mini-submenu').fadeIn();	
        });
        
      });

	$('.mini-submenu').on('click',function(){		
        $(this).next('.list-group').toggle('slide');
        $('.mini-submenu').hide();
	})


	// check if there is a url hash, and if so, 
	// save it as a variable and prepend a '.' to the start - e.g. '.blue'
	// else, set variable as the default "all"


	var filterOnLoad = window.location.hash ? '.'+(window.location.hash).replace('#','') : 'all';

	var url = document.URL;
	$('#menu-content a[href="'+url+'"]').addClass('active');

	// Send variable to MixItUp on instantiation:
	
	$('#Container').mixItUp({
		load: {
			filter: filterOnLoad
		}
	});
});


/* Show hide the info divs */

$(document).ready(function(){

  $('#info'+$("#menu-content .active").attr('my-target')).show();
 
      		$('#all').click(function(){
               $('.info').hide();
        });
        
        $('.clicker').click(function(){
              $('.info').hide();
              $('#info'+$(this).attr('my-target')).show();

        });


});
