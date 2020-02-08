let toggle = 2;

changeBack = () => {
  if (toggle === 1) {
    const bike = {
      background: 'url(/img/skillsbac.png) no-repeat center fixed',
      backgroundSize: '85vw auto'
    };

    $('#skillsBack').css(bike);
    toggle = 2;
  } else {
    const skier = {
      background: 'url(/img/skier.png) no-repeat center fixed',
      backgroundSize: '85vw auto'
    };

    $('#skillsBack').css(skier);
    toggle = 1;
  }
};

changeBack();

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
      changeBack();
      startChart();
    }
  } else {
    resetChart();
    chartLoaded = false;
  }
});

//change skills background

// $('.skills_chart').css('background', 'url(/img/skier.png) no-repeat center fixed');

//handle contact message

$('#submit-contact').click(function() {
  // e.prevenDefault();

  // const name = $('#name').val();
  const email = $('#email').val();
  // const phone = $('#phone').val();
  // const message = $('#message').val();

  // const NewContact = {
  //   name: this.name,
  //   email: this.email,
  //   phone: this.phone,
  //   message: this.message
  // };

  console.log('Submit pushed!');
  console.log(email);
  // console.log(email);
});

// if (email === '' || name === '') {
//   setAlert('Please enter all fields', 'danger');
// } else {
//   login({
//     email,
//     password
//   });
// }
// });

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
// router.post(
//   '/contact',
//   [
//     auth,
//     [
//       check('name', 'Name is required')
//         .not()
//         .isEmpty()
//     ]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { name, email, phone, type } = req.body;
//     try {
//       const newContact = new Contact({
//         name,
//         email,
//         phone,
//         message,
//         user: req.user.id
//       });

//       const contact = await newContact.save();
//       res.json(contact);
//     } catch (err) {
//       console.error('err.message');
//       res.status(500).send('Server Error');
//     }
//   }
// );
