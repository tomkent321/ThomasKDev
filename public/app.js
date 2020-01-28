//play header video after a delay
document.addEventListener('DOMContentLoaded', function(event) {
  setTimeout(function() {
    document.getElementById('header-video').play();
    console.log('header video commanded');
  }, 2000);
});

//run the navigation page

(function() {
  // cache DOM element
  const nav = document.querySelector('.navigation');
  const navCheck = nav.querySelector('#navi-toggle');
  const navLinks = nav.querySelectorAll('.navigation__link');

  // on link click, toggle checkbox 'checked' state
  navLinks.forEach(link => link.addEventListener('click', _ => (navCheck.checked = false)));
})();

let chartLoaded = false;

// for skills bar graph
startChart = () => {
  setTimeout(function start() {
    $('.bar').each(function(i) {
      var $bar = $(this);

      $(this).append('<span class="count"></span>');
      setTimeout(function() {
        let winWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

        let ww = $bar.attr('data-percent');

        if (winWidth < 750) {
          let wpct = parseFloat($bar.attr('data-percent'));
          if (wpct > 0 && wpct < 35) {
            ww = '55%';
          } else if (wpct >= 35 && wpct < 50) {
            ww = '65%';
          } else if (wpct >= 50 && wpct < 80) {
            ww = '75%';
          } else if (wpct >= 80) {
            ww = '85%';
          }
        }
        $bar.css('width', ww);
      }, i * 100);
    });

    $('.count').each(function() {
      $(this)
        .prop('Counter', 0)
        .animate(
          {
            Counter: $(this)
              .parent('.bar')
              .attr('data-percent')
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
              // $(this).text(Math.ceil(now) +'%');
              let level = '';
              if (now > 0 && now < 35) {
                level = 'LEARNING';
              } else if (now >= 35 && now < 50) {
                level = 'KNOWLEDGABLE';
              } else if (now >= 50 && now < 80) {
                level = 'HIGH';
              } else if (now >= 80) {
                level = 'VERY HIGH';
              }
              $(this).text(`${level}`);
            }
          }
        );
    });
  }, 500);

  chartLoaded = true;
};

//reset Chart
resetChart = () => {
  $('.bar').each(function(i) {
    var $bar = $(this);
    $bar.css('width', '0%');
    $('.count').hide();
  });
};

// see if skills chart is in viewport
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  if ($('.wrap').isInViewport()) {
    if (!chartLoaded) {
      startChart();
    }
  } else {
    resetChart();
    chartLoaded = false;
  }
});

//handle contact message

$('#submit-contact').click(function(e) {
  console.log('Submit pushed!');
});
