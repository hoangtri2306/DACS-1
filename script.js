let menu = document.querySelector("#menu-bars");
      let navbar = document.querySelector(".navbar");

      menu.onclick = () => {
        menu.classList.toggle("fa-times");
        navbar.classList.toggle("active");
      };

      $(document).ready(function () {
        $(".wrapper").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          autoplay: true,
          prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });

      var shoppingCart = {};

// Step 2
function addToCart(item, quantity) {
  if (shoppingCart[item]) {
    shoppingCart[item] += quantity;
  } else {
    shoppingCart[item] = quantity;
  }
}
function showNotification() {
  alert("Thêm Vào Giỏ Hàng Thành Công !");
}
