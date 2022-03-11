function contactComp(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <form class="contact" action="https://apx-api.vercel.app/api/utils/dwf" method="post">
        <h2 class="contact__title">Contacto</h2>

        <div class="contact__item-container">
          <div class="contact__item">
            <label for="" class="contact__item-label">NOMBRE</label>
            <input id="name" name="name" type="text" class="contact__item-input" />
          </div>
          <div class="contact__item">
            <label for="" class="contact__item-label">EMAIL</label>
            <input id="email" name="email" type="text" class="contact__item-input" />
          </div>
          <div class="contact__item">
            <label for="" class="contact__item-label">MENSAJE</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              class="contact__item-input-message"
            ></textarea>
          </div>
          <button class="button-contact">Enviar</button>
        </div>
      </form>
    `;

  el.appendChild(componentEl);

  function form() {
    const formEl = document.querySelector(".contact");
    formEl.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;

      const data = {
        to: "moracastillo97@gmail.com",
        message: `Nombre: ${name}. Email: ${email}. Mensaje: ${message}`,
      };

      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
  }
  form();
}
