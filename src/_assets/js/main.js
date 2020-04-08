const initSliders = () => {
  $(".slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });

  $(".slider-avis").slick({
    infinite: true,
    speed: 500,
    autoplay: true,
    adaptiveHeight: false,
    adaptiveWidth: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
};

initSliders();

const toggles = document.querySelectorAll(".toggle__link");

const toggle = (e) => {
  e.preventDefault();
  toggles.forEach((link) => {
    link.classList.remove("active");
  });
  e.target.classList.add("active");
  document.querySelectorAll(".toggle__item").forEach((item) => {
    item.classList.add("d-none");
  });
  document.querySelector(e.target.hash).classList.remove("d-none");
};

toggles.forEach((el) => el.addEventListener("click", (e) => toggle(e)));

$(".btn-decouvrir").on("click", function () {
  var page = $(this).attr("href");
  var speed = 750;
  $("html, body").animate({ scrollTop: $(page).offset().top }, speed);
  return false;
});

const bodyTag = document.querySelector("body");

barba.init({
  transitions: [
    {
      name: "fade",
      leave({ current, next, trigger }) {
        const body = document.querySelector("body");
        body.classList.add("no-events");

        return new Promise((resolve) => {
          const tl = gsap.timeline({
            onComplete() {
              current.container.remove();
              resolve();
            },
          });

          tl.to(".links", { opacity: 0 }, 0).to(
            ".section",
            { opacity: 0 },
            0.1
          );
        });
      },
      enter({ current, next, trigger }) {
        const links = document.querySelectorAll("a[href]");
        const cbk = function (e) {
          if (e.currentTarget.href === window.location.href) {
            e.preventDefault();
            e.stopPropagation();
          }
        };

        for (var i = 0; i < links.length; i++) {
          links[i].addEventListener("click", cbk);
        }

        const body = document.querySelector("body");
        body.classList.remove("no-events");

        return new Promise((resolve) => {
          const tl = gsap.timeline({
            onComplete() {
              resolve();
            },
          });

          initSliders();

          if (trigger.classList.contains("btn-contact")) {
            var page = "#links";
            var speed = 850;
            $("html, body").animate({ scrollTop: $(page).offset().top }, speed);
            return false;
          }

          tl.from(".links", { opacity: 0 }, 0)
            .from(".section", { opacity: 0 }, 0)
            .to(".section", { opacity: 1 }, 0.1);
        });
      },
    },
  ],
});
