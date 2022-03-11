function footer(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
    <footer class="footer">
    <a href="./index.html">
    <img src="./images/logositio.png" alt="" class="footer__logo" />
    </a>
        <div class="footer-socialmedia__container">
          <div class="footer-socialmedia">
            <a href="./index.html" class="footer-socialmedia__span">Instagram</a>
            <img
              src="./images/instagram.png"
              alt=""
              class="footer-socialmedia__logo"
            />
          </div>
          <div class="footer-socialmedia">
            <a href="./index.html" class="footer-socialmedia__span">Linkedin</a>
            <img
              src="./images/linkedin.png"
              alt=""
              class="footer-socialmedia__logo"
            />
          </div>
          <div class="footer-socialmedia">
            <a href="./index.html" class="footer-socialmedia__span">Github</a>
            <img
              src="./images/github.png"
              alt=""
              class="footer-socialmedia__logo"
            />
          </div>
        </div>
      </footer>
      `;

  el.appendChild(componentEl);
}
