$(document).ready(function () {

  $(window).scroll(function () {

    // fixed header 

    if ($(this).scrollTop() > 0) {
      $('#header').addClass('header__scroll')
    } else {
      $('#header').removeClass('header__scroll')
    }

    if ($(this).scrollTop() > 400) {
      $('#back__top').fadeIn()
    } else {
      $('#back__top').fadeOut()
    }

  })


  // fixed header mobie 
  
  if( $(document).width() < 1224) {
    var lastScroll = 0;
    var header = document.getElementById("header");

    window.addEventListener('scroll', function () {
      var scrollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;
  
      if (scrollTop > lastScroll) {
        header.style.top = "-82px";
        console.log('hi')
      } else {
        header.style.top = "0px";
      }
  
      lastScroll = scrollTop;
    })
  
  }



  // backtop 

  $("#back__top").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      700
    );
  });

  //  menu mobie 

  var chungtoiEl = document.getElementById('chungtoi');
  var chungtoiTop = chungtoiEl.getBoundingClientRect().top;

  var sukienEl = document.getElementById('sukien');
  var sukienTop = sukienEl.getBoundingClientRect().top;

  var chiaseEl = document.getElementById('chiase');
  var chiaseTop = chiaseEl.getBoundingClientRect().top;

  var hoctapEl = document.getElementById('hoctap');
  var hoctapTop = hoctapEl.getBoundingClientRect().top;

  var lienheTop = $("#app").height();

 
  $(".header__navbarMobie-icon").click(function () {
    $("#header__mobie").addClass("active__MenuMobie")
    $("#app").css("position", "fixed")
  })

  $("#header__mobie-top-close").click(function () {
    $("#header__mobie").removeClass("active__MenuMobie")
    $("#app").css("position", "relative")
  })

  $(".header__mobie-menu ul a:nth-child(2)").click(function () {
    $("#header__mobie").removeClass("active__MenuMobie")
    $("#app").css("position", "relative")

    $("html, body").animate({
        scrollTop: chungtoiTop,
      },
      700
    );
  })

  $(".header__mobie-menu ul a:nth-child(3)").click(function () {
    $("#header__mobie").removeClass("active__MenuMobie")
    $("#app").css("position", "relative")

    $("html, body").animate({
        scrollTop: sukienTop,
      },
      700
    );
  })

  $(".header__mobie-menu ul a:nth-child(4)").click(function () {
    $("#header__mobie").removeClass("active__MenuMobie")
    $("#app").css("position", "relative")

    $("html, body").animate({
        scrollTop: chiaseTop,
      },
      700
    );
  })

  $(".header__mobie-menu ul a:nth-child(5)").click(function () {
    $("#header__mobie").removeClass("active__MenuMobie")
    $("#app").css("position", "relative")

    $("html, body").animate({
        scrollTop: hoctapTop,
      },
      700
    );
  })

  $(".header__mobie-menu ul a:nth-child(6)").click(function () {
    $("#header__mobie").removeClass("active__MenuMobie")
    $("#app").css("position", "relative")

    $("html, body").animate({
        scrollTop: lienheTop,
      },
      700
    );
  })

});
