function header(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <header class="header">
  <a href="./index.html">
  <img src="/images/logositio.png" alt="logo" class="header__logo" />
  </a>
  <div class="header__menu">
     <img src="images/menu.png" alt="" class="header__menu-icono" />
   </div>
   <div class="header__window">
     <img src="/images/close.png" alt="" class="header__window-close" />
     <div class="header__window-links">
       <a href="./portfolio.html" class="header__window-links-item">Portafolio</a>
       <a href="./services.html" class="header__window-links-item">Servicios</a>
       <a href="./contact.html" class="header__window-links-item">Contacto</a>
     </div>
   </div>
   <div class="header__links">
     <a href="./portfolio.html" class="header__links-item">Portafolio</a>
     <a href="./services.html" class="header__links-item">Servicios</a>
     <a href="./contact.html" class="header__links-item">Contacto</a>
   </div>
 </header>
 `;
  el.appendChild(componentEl);

  const openWindow = document.querySelector(".header__menu");
  const closeWindow = document.querySelector(".header__window-close");
  const window = document.querySelector(".header__window");

  openWindow.addEventListener("click", () => {
    window.style.display = "inherit";

    closeWindow.addEventListener("click", () => {
      window.style.display = "none";
    });
  });
}
