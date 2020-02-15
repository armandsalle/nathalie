// var ratio = 0.05;

// var options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: ratio
// };

// var handleIntersct = function(entries, observer) {
//   entries.forEach(function(entry) {
//     if (entry.intersectionRatio > ratio) {
//       entry.target.classList.remove("reveal");
//       observer.unobserve(entry.target);
//     }
//   });
// };

// document.documentElement.classList.add("reveal-loaded");

// var observer = new IntersectionObserver(handleIntersct, options);
// var targets = document.querySelectorAll(".reveal");
// targets.forEach(function(target) {
//   observer.observe(target);
// });

barba.init({});
