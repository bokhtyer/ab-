(function ($) {
	
    //Start Menu Area
	// Off Canvas Open close
	$(".mobile-menu-btn").on('click', function () {
		$("body").addClass('fix');
		$(".off-canvas-wrapper").addClass('open');
	});
	$(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".off-canvas-wrapper").removeClass('open');
	});

	// offcanvas mobile menu
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
	});
    // End Menu Area

    // Search Area Responsive
    $('.MObile_HEader_Search_area a').on("click",function( e ){
        e.preventDefault();
        $('.Header_SEArch_area_Full').slideToggle();
    });

    // SHare Button
    $('.singe-blog-post-share .SHARE_btn').on("click",function( e ){
        e.preventDefault();
        $('.single-blog-share').slideToggle('avs');
    });
	

    $('.hero-slider-active').slick({
        fade: true,
        speed: 1000,
        dots: false,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [{
            breakpoint: 676,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });
    new WOW().init();

    // Scroll Area
    $('.scroll').click(function(){
        $('html').animate({
            'scrollTop': 0
            
        },700);
        return false;
    });
    $(window).scroll(function(){
        var a = $(window).scrollTop();
        $('').text(a);
        
        if(a>0){
            $('.scroll').slideDown(1300);
            
        }else{
            $('.scroll').slideUp(700);
        }   
    });

    // Latest News Slider
    $(document).ready(function(){
      $(".latest_news_full").owlCarousel({
        loop                :true,
        autoplay            :true,
        smartSpeed          :1500,
        autoplayHoverPause  :true,
        autoplayTimeout     :1500,
        items               :4,
        margin              :5,
        responsive          :{
            0:{
                items:1,
            },
            500:{
                items:2,
            },
            800:{
                items:4,
            }
        }
      });
    });

})(jQuery);

