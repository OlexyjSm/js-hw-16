document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");

  const navLeft = document.createElement("div");
  navLeft.className = "nav-left";
  navLeft.innerHTML = `
      <a href="#">WOMAN</a>
      <a href="#">MEN</a>
      <a href="#" class="active">ALL</a>
  `;

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<a href="#" class="gradient-text">YOUR SNEAKER</a>`;

  const navRight = document.createElement("div");
  navRight.className = "nav-right";
  navRight.innerHTML = `
      <a href="#" id="userIcon"><img src="img/user.svg" alt="User"></a>
      <a href="#"><img src="img/search.svg" alt="Search"></a>
      <a href="#" id="cartIcon"><img src="img/shopping.svg" alt="Cart"></a>
  `;

  header.appendChild(navLeft);
  header.appendChild(logo);
  header.appendChild(navRight);

  // Модальні вікна
  const userIcon = document.getElementById("userIcon");
  const cartIcon = document.getElementById("cartIcon");

  const registerModal = document.getElementById("registerModal");
  const loginModal = document.getElementById("loginModal");
  const cartModal = document.getElementById("cartModal");

  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  userIcon.addEventListener("click", () => {
    loginModal.style.display = "block";
  });

  cartIcon.addEventListener("click", () => {
    cartModal.style.display = "block";
  });

  document.getElementById("openRegisterModal").addEventListener("click", () => {
    loginModal.style.display = "none";
    registerModal.style.display = "block";
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const modalId = e.target.getAttribute("data-close");
      document.getElementById(modalId).style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const main = document.getElementById("main");

  main.className = "content";
  main.innerHTML = `
    <div class="banner">
      <img src="img/Frame 10.png" alt="Search">
      <img src="img/Rectangle.png" alt="Search">
      <img src="img/Group 19.png" alt="Search">
    </div>
    <div class="container"> 
    <div class="product-card">
    <h1 class = "new-label"> NEW </h1>
    <p class = "product-name"> AIR JORDAN 1 MID LIGHT SMOKE GREY </p>
      <img class="product-card-1" src="img/Rectangle 1141.png" alt="Sneaker 1">
      <img id="sneaker1" class="picture" src="img/nike-air-max-270-sunset-dq7625-600_w380-removebg-preview 3.png" alt="Sneaker 1">
      <img class="arrow" src="img/arrow.svg" alt="Sneaker 2">
    </div>
    <div class="product-card">
    <h1 class = "new-label"> NEW </h1>
    <p class = "product-action"> Air Max 200 SE </p>
      <img class="product-card-2" src="img/Rectangle 1141.png" alt="Sneaker 2">
      <img id="sneaker2" src="img/Red Shoe.png" alt="Sneaker 2">
      <img class="arrow" src="img/arrow.svg" alt="Sneaker 2">
    </div> </div>
    
  `;

  // Функція для обертання кросівок
  function rotateSneakers() {
    const sneaker1 = document.getElementById("sneaker1");
    const sneaker2 = document.getElementById("sneaker2");
    let rotation = 0;

    setInterval(() => {
      rotation += 30;
      sneaker1.style.transform = `rotate(${rotation}deg)`;
      sneaker2.style.transform = `rotate(${rotation}deg)`;
    }, 8000);
  }

  // Запуск функції обертання
  rotateSneakers();
});

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.innerHTML = `
    <div class="nav">
      <a href="#">ALL</a>
      <a href="#">WOMAN</a>
      <a href="#">MEN</a>
    </div>
    <div class="logo-container">
      <img src="img/Vector.svg" alt="Logo" class="logo" />
    </div>
    
    <div class="nav">
      <a href="#">WORKOUT</a>
      <a href="#">RUN</a>
      <a href="#">FOOTBALL</a>
    </div>
  `;

  document.getElementById("app").appendChild(footer);
});
