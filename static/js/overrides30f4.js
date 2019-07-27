$(document).ready(function(){

    $.ajax({
    	type: 'GET',
    	url: 'http://shop.beargrylls.com/cart.json',
    	dataType: 'jsonp',
    	success: function(data) {
            var item_count = data['item_count'];
            if (item_count > 0) {
                $('#nav-bag').addClass('has-items');
            }
    	}
    });

    //Dirty hack to change bag colour
    var menu = $($('#menu-bg-wrap')[0]);
    setInterval(function(){
        var menuOpen = menu.hasClass('go') && !menu.hasClass('go-reverse');
        if(menuOpen) {
            $('body').addClass('menu-open');
        }else{
            $('body').removeClass('menu-open');
        }
    }, 50)

    var oldScrollPos = 0;
    $(document).scroll(function(e){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 0){
            $('.nav-background').addClass('show');
            $('#nav-logo').addClass('dark');
            $('#nav-bag').addClass('dark');
            $('#nav-account').addClass('dark');
            $('#nav-burger').addClass('dark');
        }else{
            $('.nav-background').removeClass('show');
            $('#nav-logo').removeClass('dark');
            $('#nav-bag').removeClass('dark');
            $('#nav-account').removeClass('dark');
            $('#nav-burger').removeClass('dark');
        }

        if(oldScrollPos < scrollTop && scrollTop > 300){
            $('.nav-collapser').addClass('closed');
        } else {
            $('.nav-collapser').removeClass('closed');
        }
        oldScrollPos = scrollTop;
    })

    var oldUrl = "";
    setInterval(function(){
        var url = window.location.pathname;
        if(url != oldUrl) {
            if (url.indexOf('speaker') > -1
            || url.indexOf('television') > -1
            || url.indexOf('philanthropy') > -1
            || url.indexOf('about') > -1
        ) {
            $('#nav-logo').removeClass('force-dark');
            $('#nav-bag').removeClass('force-dark');
            $('#nav-account').removeClass('force-dark');
            $('#nav-burger').removeClass('force-dark');
            } else {
                $('#nav-logo').addClass('force-dark');
                $('#nav-bag').addClass('force-dark');
                $('#nav-account').addClass('force-dark');
                $('#nav-burger').addClass('force-dark');
            }
        }
    }, 100)

})
