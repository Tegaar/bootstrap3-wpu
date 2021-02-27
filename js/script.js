// pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan =$(this).attr('href');
    // Tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);


    // pindahkan scroll
    $('body, html').animate({ 
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});

// Paralax
// about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
        
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });
    


    // portfolio
    if( wScroll > $('.portfolio').offset().top - 250 ) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
                // console.log('ss');
            }, 300 * (i+1));
        })
    };
    
    if( wScroll > $('.project').offset().top - 250 ) {
        $('.kotak .teks').each(function(i){
            setTimeout(function(){
                $('.kotak .teks').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
    };
    if( wScroll > $('.project').offset().top - 250 ) {
        $('.kotak .teksp').each(function(i){
            setTimeout(function(){
                $('.kotak .teksp').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
    };
    
    
});

