function addPresentationItem(params = {}) {
  const template = document.querySelector("#presentation__template");
  const container = document.querySelector(".presentation__container");

  template.content.querySelector(".presentation__img").src = params.img;
  template.content.querySelector(".presentation__section-title").textContent =
    params.title;
  template.content.querySelector(".presentation__section-description").src =
    params.description;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getPresentationItem() {
  return fetch(
    "https://cdn.contentful.com/spaces/bgneoaj9i7le/environments/master/entries?access_token=pCz_CFq21uHmg-6wU6NkCOhwGUMymsvG_27NxBBiR5o&&content_type=m4FinalPresentation"
  )
    .then((res) => res.json())
    .then((json) => {
      const fieldsColl = json.items.map((item) => {
        const imgId = item.fields.img.sys.id;
        const img = getImg(imgId, json);
        return {
          img: img.fields.file.url,
          title: item.fields.title,
          description: item.fields.description,
        };
      });

      function getImg(id, json) {
        return json.includes.Asset.find((item) => {
          return item.sys.id == id;
        });
      }
      return fieldsColl;
    });
}

function addWelcomeServicesItem(params = {}) {
  const template = document.querySelector("#services__item-template");
  const container = document.querySelector(".services__item-container");

  template.content.querySelector(".services__item-img").src = params.img;
  template.content.querySelector(".services__item-title").textContent =
    params.title;
  template.content.querySelector(".services__item-description").src =
    params.description;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWelcomeServicesItem() {
  return fetch(
    "https://cdn.contentful.com/spaces/bgneoaj9i7le/environments/master/entries?access_token=pCz_CFq21uHmg-6wU6NkCOhwGUMymsvG_27NxBBiR5o&&content_type=m4FinalWelcomeServices"
  )
    .then((res) => res.json())
    .then((json) => {
      const fieldsColl = json.items.map((item) => {
        const imgId = item.fields.img.sys.id;
        const img = getImg(imgId, json);
        return {
          img: img.fields.file.url,
          title: item.fields.title,
          description: item.fields.description,
        };
      });

      function getImg(id, json) {
        return json.includes.Asset.find((item) => {
          return item.sys.id == id;
        });
      }
      return fieldsColl;
    });
}

function main() {
  const headerCont = document.querySelector(".header__container");
  header(headerCont);

  const contactCont = document.querySelector(".contact__container");
  contactComp(contactCont);

  const footerCont = document.querySelector(".footer__container");
  footer(footerCont);

  getPresentationItem().then((item) => {
    for (const i of item) {
      addPresentationItem(i);
    }
  });

  getWelcomeServicesItem().then((item) => {
    for (const i of item) {
      addWelcomeServicesItem(i);
    }
  });
}
main();
