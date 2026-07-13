var width = $(window).width();

$(document).ready(function () {


    $('[data-toggle="tooltip"]').tooltip();

    
    $('#demo-htmlselect').ddslick();
    $('#demo-htmlselect2').ddslick();


    $(function () {
        $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            $(this).siblings().toggleClass("show");


            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

        });
    });

    $(document).on("click", function (event) {
        if ($(this).width() <= 991) {
            var $trigger = $(".navbar");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                $("#navbarContent").removeClass('show');
                $('.navbar-toggler').addClass("collapsed");
            }
        }
    });

    $('.search_box_popup .search_input').focus(function(){
        $('.search_box_popup .search_btn').css({
            'visibility':'visible',
            'opacity':'1'
        })
        $(this).css('margin-bottom','20px');
    })


    var scrollButton = $(".scroll_top");
    $(window).scroll(function () {
        if($(this).scrollTop() > 500) {
            scrollButton.css({
                'opacity': '1',
                'visibility': 'visible',
                'right': '50px'
            })
        }
        else {
            scrollButton.css({
                'opacity': '0',
                'visibility': 'hidden',
                'right': '0px'
            })
        }
    });

    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });



    $(window).scroll(function () {
        if ($(this).width() > 991) {
            var sc = $(this).scrollTop();
            if (sc > 10) {
                $('.headSection').css({'display': 'none'});
                $('.navbar').css({
                    'top': '0',
                    'box-shadow':'0px 3px 10px #0000001a'
                });
            }    
            else {
                $('.headSection').css({'display': 'block'});
                $('.navbar').css({
                    'top': '46px',
                    'box-shadow':'unset'
                });
            }
        }
    });


    $(window).resize(function () {
        if ($(this).width() != width) {
            if ($(window).width() <= 991) {
                $('.headSection').css({'display': 'none'});
                $('.navbar').css({'top': '0'});
            } 
            else {
                $('.headSection').css({'display': 'block'});
                $('.navbar').css({'top': '46px'});
            }
            width = $(window).width();
        }
    });


    var FavIcon = 0;  
    $('.ProductItem .favLinks ul li img.unselected_Fav').click(function(){
        if (FavIcon == 0) {
            $(this).attr('src', 'images/favblue.png');
            FavIcon = 1;
        } 
        else if(FavIcon == 1) {
            $(this).attr('src', 'images/unselected_Fav.png');
            FavIcon = 0;
        }
    });
   


    $('#Newsteller .content .email-box .subscribeInp').focus(function(){
        $('#Newsteller .content .email-box i').css({
            'color':'#5EC6C9'
        })
    })
    $('#Newsteller .content .email-box .subscribeInp').focusout(function(){
        $('#Newsteller .content .email-box i').css({
            'color':'#878787'
        })
    })

 


    $(".categoryItem .image img,.ProductItem .image img").on("error", function () {
        $(this).attr('src', 'images/NoImage.png');
    });

});






