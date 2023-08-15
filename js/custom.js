// ------------------------------------------------
// Project Name: Marvio - Coming Soon & Portfolio Template
// Project Description: Marvio - awesome coming soon and portfolio template to kick-start your project
// Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
// Version: 1.0.1
// Build Date: May 2022
// Last Update: October 2022
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader
//  2. Swiper Slider
//  3. Typed.js Plugin Settings
//  4. Skillbars
//  5. Magnific Popup Video
//  6. KBW-Countdown
//  7. Vegas Kenburns
//  8. Mailchimp Notify Form
//  9. Contact Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function () {

  "use strict";

  // --------------------------------------------- //
  // Loader Start
  // --------------------------------------------- //
  $(".loader__circle").addClass('fade');

  setTimeout(function () {
    $(".loader").addClass('loaded');
    $("#main").addClass('animate-in');
    $("#header").addClass('animate-in');
  }, 300);

  setTimeout(function () {

    // --------------------------------------------- //
    // Swiper Slider Main Screen Start
    // --------------------------------------------- //
    var mainSlider = $('.swiper');

    if (mainSlider.length) {
      var swiper = new Swiper('.swiper', {
        preventClicks: false,
        preventClicksPropagation: false,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        parallax: true,
        speed: 1300,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    };
    // --------------------------------------------- //
    // Swiper Slider Main Screen End
    // --------------------------------------------- //

  }, 800);
  // --------------------------------------------- //
  // Loader End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Typed.js Plugin Settings Start
  // --------------------------------------------- //
  var animatedHeadline = $(".animated-headline");
  if (animatedHeadline.length) {
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      loop: true,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2500
    });
  }
  // --------------------------------------------- //
  // Typed.js Plugin Settings End
  // --------------------------------------------- //

});

$(function () {

  "use strict";

  // --------------------------------------------- //
  // Skillbars Settings Start
  // --------------------------------------------- //
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbars Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $('#inner-video-trigger').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function () { $('body').addClass('overflow-hidden'); },
      close: function () { $('body').removeClass('overflow-hidden'); }
    }
  });

  $('#showreel-trigger').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function () { $('body').addClass('overflow-hidden'); },
      close: function () { $('body').removeClass('overflow-hidden'); }
    }
  });
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({ until: $.countdown.UTCDate(+10, 2023, 0, 23), format: 'D' });
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if (bgndKenburns.length) {
    bgndKenburns.vegas({
      timer: false,
      delay: 8000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/960x1440/636363/ffffff" },
        { src: "https://dummyimage.com/960x1440/636363/ffffff" },
        { src: "https://dummyimage.com/960x1440/636363/ffffff" }
      ],
      animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']
    });
  }
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900'
  });

  function mailchimpCallback(resp) {
    if (resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if (resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('#contact').find('.form').addClass('is-hidden');
      $('#contact').find('.reply-group').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('#contact').find('.reply-group').removeClass('is-visible');
        $('#contact').find('.form').delay(300).removeClass('is-hidden');
        th.trigger("reset");
      }, 5000);
    });
    return false;
  });
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Backgrounds Start
  // --------------------------------------------- //
  // Triangles BG - particlesJS
  var bgndTriangles = $('#triangles-js');
  const colors = ["#f0ecb2", "#5115b2", "#FF5959", "#526CFF"]
  if (bgndTriangles.length) {
    particlesJS('triangles-js', {
      "particles": {
        "number": {
          "value": 313,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          //"value": "#f0ecb2" // IdeaSprint
          // "value": "#5115b2" // DesignSprint
          // "value": "#FF5959" // BuildSprint
          // "value": "#526CFF" // SprintPitch
          "value": colors[Math.round(Math.random() * (colors.length - 1))] // All Phases end
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 3
          },
          "image": {
            "src": "",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 300,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 32,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.2,
          "direction": "top-right",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 244,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  };

  // Particles BG - particlesJS
  var bgndParticles = $('#particles-js');
  if (bgndParticles.length) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  };
  // --------------------------------------------- //
  // ParticlesJS Backgrounds End
  // --------------------------------------------- //


  // -------------------------------------------- //
  // Trippetto form
  // -------------------------------------------- //
  var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoielErblBQelJzNjlLYjhET2NTU0h6MGZ5bzJCVkplL0M3V0tIMHhLN0FmWT0iLCJkZWZpbml0aW9uIjoieWlvcTQ1TzhVa0l6UTFwb09TTmV6enpHdWUvWGRmSng0cEk5MWpqTUsvcz0iLCJ0eXBlIjoiY29sbGVjdCJ9.Ae-hB4W1NAg06yK6Ka_dwWx-BE-VUn9WAMI9OC9NzRw" });

  TripettoChat.run({
    element: document.getElementById("tripetto"),
    definition: tripetto.definition,
    styles: tripetto.styles,
    l10n: tripetto.l10n,
    locale: tripetto.locale,
    translations: tripetto.translations,
    attachments: tripetto.attachments,
    onSubmit: tripetto.onSubmit,
    snapshot: tripetto.snapshot,
    onPause: tripetto.onPause,
    persistent: true
  });

  // -------------------------------------------- //
  // Force check url and redirect the user
  // -------------------------------------------- //
  const registerURL = window.location.href.split("/#")[1]
  if (registerURL === "register") {
    document.getElementById("contact-trigger").click()
  } else if (registerURL === "ideasprint") {
    document.getElementById("project-trigger-1").click()
  } else if (registerURL === "designsprint") {
    document.getElementById("project-trigger-2").click()
  } else if (registerURL === "buildsprint") {
    document.getElementById("project-trigger-3").click()
  } else if (registerURL === "sprintpitch") {
    document.getElementById("project-trigger-4").click()
  }

  // -------------------------------------------- //
  // custom counter
  // -------------------------------------------- //
  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  // -------------------------------------------- //
  // Phases Page transition
  // -------------------------------------------- //
  $("#portfolio-trigger-2").on("click", function () {
    document.getElementById("portfolio-trigger").click()
  })

  // -------------------------------------------- //
  // Phases Page transition
  // -------------------------------------------- //
  $("#merch-store-trigger").on("click", function () {
    document.getElementById("store-trigger").click()
    document.getElementById("home-trigger").click()
  })
});
