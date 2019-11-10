// Sticky Header



	$(function(){

	 //   	$('.nav_menu nav > ul > li > a').click(function(){
	 //			$("html, body").animate({ scrollTop: $(this.hash).offset().top-100 }, 1000);
	 //			return false;
		//	});
		
			$('.top').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 1200);
			});



	    	$('.scroll-down').click(function(){
	 			$("html, body").animate({ scrollTop: $('#about').offset().top+100 }, 1500);
	 			return false;
			});

			

		});
		
		
		

            $(document).ready(function(){

                $(document).scroll(function() {
                    var top = $(document).scrollTop();
                    if (top > 300) {
                        $(".top").addClass("top_show");
                        $(".head-bar").addClass("head-sticky");
                        $(".head-bar").addClass("anime");
                      //  $(".header_top").addClass("paddin");
                    }
                    else if (top < 300) {
                        $(".top").removeClass("top_show");
                        $(".head-bar").removeClass("head-sticky");
                        $(".head-bar").removeClass("anime");
                       // $(".header_top").removeClass("paddin");
                    } 
                });
            });


var list = $("nav>ul li > a"); //Liste de tout les liens
//Gestion du clique sur le boutton des trois bars afin d'afficher le menu dans les support avec un width <769
$("nav > a").click(function(event){
    $("nav>ul").slideToggle();
		return false;
});

//Gestion des cliques sur les liens avec élimination du comportement par défaut du a dans le cas où il existe un sous menu
list.click(function (event) {
    var submenu = this.parentNode.getElementsByTagName("ul").item(0);
    //S'il existe un sous menu sinon c'est un lien terminal
    if(submenu!=null){
        event.preventDefault();
        $(submenu).slideToggle();
    }
});
//Gestion du resize de la fenetre pour eliminer le style ajouté par la méthode .slideToggle()

$(window).resize(function () {
    if ($(window).width() > 767) {
        $("nav > ul, nav > ul  li  ul").removeAttr("style");
        $("nav").addClass("style0");
		
    }
});



$(window).load(function() {

  $('.fancyTabs').each(function() {
    var highestBox = 0;
    $('.fancyTab a', this).each(function() {

      if ($(this).height() > highestBox)
        highestBox = $(this).height();
    });

    $('.fancyTab a', this).height(highestBox);

  });
});




