function addPortfolioItem(params = {}) {
  const template = document.querySelector("#portfolio__item-template");
  const container = document.querySelector(".portfolio__item-container");

  template.content.querySelector(".portfolio__item-img").src = params.img;
  template.content.querySelector(".portfolio__item-title").textContent =
    params.title;
  template.content.querySelector(".portfolio__item-description").textContent =
    params.description;
  template.content.querySelector(".portfolio__item-link").href = params.url;

  const clone = document.importNode(template.content, true);

  container.appendChild(clone);
}

function getPortfolioItem() {
  return fetch(
    " https://cdn.contentful.com/spaces/bgneoaj9i7le/environments/master/entries?access_token=pCz_CFq21uHmg-6wU6NkCOhwGUMymsvG_27NxBBiR5o&&content_type=m4FinalPortfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const fieldsColl = json.items.map((item) => {
        const imgId = item.fields.img.sys.id;
        const img = getImg(imgId, json);
        return {
          img: img.fields.file.url,
          title: item.fields.title,
          description: item.fields.description,
          url: item.fields.url,
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

function portfolio() {
  const headerCont = document.querySelector(".header__container");
  header(headerCont);

  const footerCont = document.querySelector(".footer__container");
  footer(footerCont);

  getPortfolioItem().then((item) => {
    for (const i of item) {
      addPortfolioItem(i);
    }
  });
}
portfolio();
