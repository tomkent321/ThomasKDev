//play header video after a delay

document.addEventListener('DOMContentLoaded', function(event) {
  setTimeout(function() {
    document.getElementById('header-video').play();
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

// for skills bar graph
startChart = () => {
  setTimeout(function start() {
    $('.bar').each(function(i) {
      var $bar = $(this);

      $(this).append('<span class="count"></span>');
      setTimeout(function() {
        var pct = $bar.attr('data-percent');
        $bar.css('width', $bar.attr('data-percent'));
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
                level = 'SOME PRACTICE';
              } else if (now >= 50 && now < 80) {
                level = 'SIGNIFICANT PRACTICE';
              } else if (now >= 80) {
                level = 'HIGH EXPERIENCE';
              }
              $(this).text(`${level}`);
            }
          }
        );
    });
  }, 500);
};

//reset Chart
resetChart = () => {
  $('.bar').each(function(i) {
    var $bar = $(this);
    // $bar.attr('');
    // $(this).append('<span class="count"></span>');
    // $bar.attr('data-percent', '0%');
    $bar.css('width', '0%');
    $('.count').hide();
  });
};

// startChart();
