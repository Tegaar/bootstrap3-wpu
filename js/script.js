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

// project
$('.project-scroll').on('click', function(e){

    // ambil isi href
    var tujuan =$(this).attr('href');
    // Tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);


    // pindahkan scroll
    $('body, html').animate({ 
        scrollTop: elemenTujuan.offset().top - -90
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

// Contact Form to Excel
const scriptURL = 'https://script.google.com/macros/s/AKfycbynxecEUwX3N09YQb8GCGYFDVs2IZzP7xU6p86yxtAAZZwPO0y8qOdqhVuq_tf8-xF8/exec'
const form = document.forms['wpu-bt3-contact']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const alertContact = document.querySelector('.alert-contact')

form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol submit diklik
    // tampilkan tombol loading,hilangkan tombol kirim
    btnLoading.classList.toggle('d-none')
    btnKirim.classList.toggle('d-none')

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // tampilkan kirim loading,hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert-contact
            alertContact.classList.toggle('d-none');
            // reset form
            form.reset();

            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})

