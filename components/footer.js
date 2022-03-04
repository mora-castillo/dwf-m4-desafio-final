function footer(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
    <footer class="footer">
        <img src="images/logositio.png" alt="" class="footer__logo" />
        <div class="footer-socialmedia__container">
          <div class="footer-socialmedia">
            <span class="footer-socialmedia__span">Instagram</span>
            <img
              src="images/instagram.png"
              alt=""
              class="footer-socialmedia__logo"
            />
          </div>
          <div class="footer-socialmedia">
            <span class="footer-socialmedia__span">Linkedin</span>
            <img
              src="images/linkedin.png"
              alt=""
              class="footer-socialmedia__logo"
            />
          </div>
          <div class="footer-socialmedia">
            <span class="footer-socialmedia__span">Github</span>
            <img
              src="images/github.png"
              alt=""
              class="footer-socialmedia__logo"
            />
          </div>
        </div>
      </footer>
      `;

  el.appendChild(componentEl);
}
footer();
