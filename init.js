jQuery(function(f){
    var element = f('.about-me');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 20 ? 'In': 'Out')](500);           
    });
})