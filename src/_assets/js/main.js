// $(".slider").slick({
//   dots: false,
//   infinite: true,
//   arrows: false,
//   speed: 300,
//   autoplay: true,
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 1240,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true
//       }
//     }
//   ]
// });

// $(".slider-avis").slick({
//   infinite: true,
//   speed: 500,
//   autoplay: true,
//   adaptiveHeight: false,
//   adaptiveWidth: false,
//   responsive: [
//     {
//       breakpoint: 900,
//       settings: {
//         dots: true,
//         arrows: false
//       }
//     }
//   ]
// });

// barba.hooks.enter(data => {
//   $(".slider").slick({
//     dots: false,
//     infinite: true,
//     arrows: false,
//     speed: 300,
//     autoplay: true,
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 1240,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true
//         }
//       }
//     ]
//   });

//   $(".slider-avis").slick({
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     adaptiveHeight: false,
//     adaptiveWidth: false,
//     responsive: [
//       {
//         breakpoint: 900,
//         settings: {
//           dots: true,
//           arrows: false
//         }
//       }
//     ]
//   });
// });

barba.use(barbaPrefetch);

barba.init({
  debug: true,
  transitions: [
    {
      name: "switch",
      once({ current, next, trigger }) {
        return new Promise(resolve => {
          const images = document.querySelectorAll("img");

          gsap.set(next.container, { opacity: 0 });

          imagesLoaded(images, () => {
            const tl = gsap.timeline({
              onComplete() {
                resolve();
              }
            });

            tl.set(next.container, { opacity: 0 }).to(next.container, { opacity: 1, delay: 0.35 });
          });
        });
      },
      leave({ current, next, trigger }) {
        return new Promise(resolve => {
          const tl = gsap.timeline({
            onComplete() {
              //window.scrollTo(0, 0);
              current.container.remove();
              resolve();
            }
          });

          tl.to(current.container, { opacity: 0 });
        });
      },
      enter({ current, next, trigger }) {
        return new Promise(resolve => {
          const tl = gsap.timeline({
            onComplete() {
              resolve();
            }
          });

          tl.set(next.container, { opacity: 0 }).to(next.container, { opacity: 1 });
        });
      }
    }
  ]
});
