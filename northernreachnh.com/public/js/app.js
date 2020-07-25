window.addEventListener('load', function () {
  $('.loader').slideUp(1450, function () {
    $('.loader').remove();
    $('#fixedNavBar').fadeIn(650);
  });
});

jQuery(document.links)
  .filter(function () {
    return this.hostname != window.location.hostname;
  })
  .attr('target', '_blank');

// $(document).ready(function() {
//     window.onload = function () {
//         // $('.loaderText').fadeOut(1800);
//         $('.loader').slideUp(1700, function(){
//             $('.loader').remove();
//             $('#fixedNavBar').fadeIn(1000);
//          });
// }
// });

$(document).scroll(function () {
  const y = $(this).scrollTop();
  if (y > 800) {
    $('#upImage').fadeIn(600);
  } else {
    $('#upImage').fadeOut(400);
  }
});

//   $(window).on("scroll", function () {
//     if ($(this).scrollTop() > 800) {
//        #code here
//     } else {
//        #code here
//     }
//  });

$('#mentor-btn').on('click', function () {
  $('#intro').toggleClass('dim-background');
  // $('#mentor-btn').toggleClass('blueBackground');
  if ($('#mentor-container').css('display') == 'none') {
    $('#mentor-container').slideDown(500);
  } else if ($('#mentor-container').css('display') == 'block') {
    $('#mentor-container').slideUp(500);
  }
});

$('#exitMentor').on('click', function () {
  if ($('#mentor-container').css('display') == 'block') {
    $('#mentor-container').slideUp(500);
  }
  $('#intro').removeClass('dim-background');
});

// $('#mentor-btn').on('click', function(){

// });

$('#hamburger').on('click', function () {
  $('#hamburger').toggleClass('insetBackground');
});

$('a[href*="#"]').on('click', function () {
  $('#navbarNav').removeClass('show');
  $('#hamburger').removeClass('insetBackground');
});

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    700,
    'linear'
  );
});

$('#webmasterBtn').click(function () {
  if (
    $('#serviceCard1').css('opacity') == 1 &&
    $('#serviceCard2').css('display') == 'none' &&
    $('#serviceCard3').css('display') == 'none'
  ) {
    $('#serviceCard1').fadeOut(300, function () {
      $('#serviceCard2').fadeIn(300);
    });

    $('#webmasterBtn').animate(
      {
        top: '2px',
      },
      150,
      function () {
        $('#webmasterBtn').addClass('serviceSelected');
      }
    );
    $('#customBtn').animate(
      {
        top: '-2px',
      },
      150,
      function () {
        $('#customBtn').removeClass('serviceSelected');
      }
    );
  } else if (
    $('#serviceCard3').css('opacity') == 1 &&
    $('#serviceCard2').css('display') == 'none' &&
    $('#serviceCard1').css('display') == 'none'
  ) {
    $('#serviceCard3').fadeOut(300, function () {
      $('#serviceCard2').fadeIn(300);
    });

    $('#webmasterBtn').animate(
      {
        top: '2px',
      },
      150,
      function () {
        $('#webmasterBtn').addClass('serviceSelected');
      }
    );
    $('#moreBtn').animate(
      {
        top: '-2px',
      },
      150,
      function () {
        $('#moreBtn').removeClass('serviceSelected');
      }
    );
  }
  // else if ($('#webmasterBtn').hasClass('serviceSelected')){
  //     break;
  // };
});

$('#moreBtn').click(function () {
  if (
    $('#serviceCard1').css('opacity') == 1 &&
    $('#serviceCard2').css('display') == 'none' &&
    $('#serviceCard3').css('display') == 'none'
  ) {
    $('#serviceCard1').fadeOut(300, function () {
      $('#serviceCard3').fadeIn(300);
    });

    $('#moreBtn').animate(
      {
        top: '2px',
      },
      150,
      function () {
        $('#moreBtn').addClass('serviceSelected');
      }
    );
    $('#customBtn').animate(
      {
        top: '-2px',
      },
      150,
      function () {
        $('#customBtn').removeClass('serviceSelected');
      }
    );
  } else if (
    $('#serviceCard2').css('opacity') == 1 &&
    $('#serviceCard1').css('display') == 'none' &&
    $('#serviceCard3').css('display') == 'none'
  ) {
    $('#serviceCard2').fadeOut(300, function () {
      $('#serviceCard3').fadeIn(300);
    });

    $('#moreBtn').animate(
      {
        top: '2px',
      },
      150,
      function () {
        $('#moreBtn').addClass('serviceSelected');
      }
    );
    $('#webmasterBtn').animate(
      {
        top: '-2px',
      },
      150,
      function () {
        $('#webmasterBtn').removeClass('serviceSelected');
      }
    );
  }
  // else if ($('#moreBtn').hasClass('serviceSelected')) {
  //     break;
  // };
});

$('#customBtn').click(function () {
  if (
    $('#serviceCard2').css('opacity') == 1 &&
    $('#serviceCard1').css('display') == 'none' &&
    $('#serviceCard3').css('display') == 'none'
  ) {
    $('#serviceCard2').fadeOut(300, function () {
      $('#serviceCard1').fadeIn(300);
    });

    $('#customBtn').animate(
      {
        top: '2px',
      },
      150,
      function () {
        $('#customBtn').addClass('serviceSelected');
      }
    );
    $('#webmasterBtn').animate(
      {
        top: '-2px',
      },
      150,
      function () {
        $('#webmasterBtn').removeClass('serviceSelected');
      }
    );
  } else if (
    $('#serviceCard3').css('opacity') == 1 &&
    $('#serviceCard2').css('display') == 'none' &&
    $('#serviceCard1').css('display') == 'none'
  ) {
    $('#serviceCard3').fadeOut(300, function () {
      $('#serviceCard1').fadeIn(300);
    });

    $('#customBtn').animate(
      {
        top: '2px',
      },
      150,
      function () {
        $('#customBtn').addClass('serviceSelected');
      }
    );
    $('#moreBtn').animate(
      {
        top: '-2px',
      },
      150,
      function () {
        $('#moreBtn').removeClass('serviceSelected');
      }
    );
  }
  // else if ($('#customBtn').hasClass('serviceSelected')) {
  //     break;
  // };
});

//UpArrow Scroll Change Color
// $(window).scroll(function(){
//     var fixed = $("#upImage");

//     var fixed_position = $("#upImage").offset().top;
//     var fixed_height = $("#upImage").height();

//     var addClass = false;
//     $('.divCross').each(function(){

//         var toCross_position = $(this).offset().top;
//         var toCross_height = $(this).height();

//         if (fixed_position + fixed_height  < toCross_position) {
//             //fixed.removeClass('white');
//         } else if (fixed_position > toCross_position + toCross_height) {
//             //fixed.removeClass('white');
//         } else {
//             addClass = true;
//         }
//     });
//     if(addClass == true){
//         fixed.addClass('change-color');
//     }else{
//         fixed.removeClass('change-color');
//     }
// });
