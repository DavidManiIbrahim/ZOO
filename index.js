$(document).ready(function(){
    $('.menu').click(function(){
        $('.content').show();
        // $(".content").animate({right: "+=130px"});
        
        // $('.content').fadeIn();
    // $('#menu').addClass('slide')
    })
    $(".close-menu").click(function(){
        $(".content").hide();
        // $("close-menu").animate({left: "+=100px"});
    alert("clicked")

        
});

// $("div .hero-img-container").hover(function(){
//     $(this).css("opacity", "90%");
//     $(this).css("cursor", "pointer");
// }, function(){
//     $(this).css("opacity", "100%");
//     $(this).to();
    
//   });





  $("div .contactus-hero-section").hover(function(){
    $(this).css("opacity", "90%");
    $(this).css("cursor", "pointer");
}, function(){
    $(this).css("opacity", "100%");
    $(this).to();
    
  });

})


// var close = document.getElementsByClassName("close-menu")
// function close(){
//     addEventListener(click, function(){
//         close.hide();
//     })
// }