((i) => {
  const products = document.querySelector(".products");
  const wrap = document.createElement("div");
  wrap.classList.add("wrap");
  for (let k = 0; k < i; k++) {
    const item = document.createElement("div");
    item.classList.add("products__item");
    // img creation
    const img = document.createElement("div");
    img.classList.add("products__img");
    item.append(img);
    // textBlock creation
    const textBlock = document.createElement("div");
    textBlock.classList.add("products__textBlock");
    item.append(textBlock);
    // title creation
    const title = document.createElement("h3");
    title.classList.add("products__title");
    title.textContent = `Canon EOS 5D Mark III Body`;
    textBlock.append(title);
    // description creation
    const description = document.createElement("p");
    description.classList.add("products__description");
    description.innerHTML = `<span class='first'>Полнокадровая цифровая зеркальная камера</span><span class='second'>, предназначенная для опытных любителей</span><span class='third'> профессиональных фотографов</span><span class='fourth'> и видеооператоров. Преемник успешной модели EOS 5D Mark II. Фотоаппарат имеет 22.3 Мп</span><span class='fifth'> . <span style="white-space: nowrap;">CMOS-сенсор</span> размером 36х24 мм, <span style="white-space: nowrap;">14-битный</span> процессор DIGIC 5+, <span style="white-space: nowrap;">61-точечный</span>  автофокус</span>.`;
    textBlock.append(description);
    //withoutDiscount creation
    const withoutDiscount = document.createElement("div");
    withoutDiscount.classList.add("products__withoutDiscount");
    withoutDiscount.textContent = `4 400,00 руб.`;
    textBlock.append(withoutDiscount);
    // price creation
    const price = document.createElement("div");
    price.classList.add("products__price");
    //cost creation
    const cost = document.createElement("p");
    cost.classList.add("products__price-cost");
    cost.textContent = `3 200,00 руб.`;
    price.append(cost);
    //costImg creation
    const costImg = document.createElement("div");
    costImg.classList.add("products__price-img");
    price.append(costImg);
    textBlock.append(price);
    wrap.append(item);
  }

  products.append(wrap);
})(11);

const lowerPrice = document.getElementById("lowerPrice");
const highPrice = document.getElementById("highPrice");
lowerPrice.addEventListener("input", formatPrice);
highPrice.addEventListener("input", formatPrice);

function formatPrice(event) {
  const target = event.target;
  let value = target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  target.value = value;
}

const filterBurger = document.querySelector(".filter__burger");
filterBurger.addEventListener("click", () => {
  popup.classList.toggle("active");
});
const popupClose = document.querySelector(".popup__close");
popupClose.addEventListener("click", () => {
  popup.classList.toggle("active");
});
function toggleOptions(event) {
  const selectWrapper = event.target.closest(".custom-select-wrapper");
  selectWrapper.classList.toggle("open");
}

const headerLoupe = document.querySelector(".header__loupe");
headerLoupe.addEventListener("click", () => {
  toggle(searchInput);
});




const shadow = document.querySelector(".shadow");
shadow.addEventListener("click", closePanel);

const logoBurger = document.querySelector(".logo__burger");
logoBurger.addEventListener("click", () => {
  toggle(navBar);
  shadowToggle()
});

function toggle(item) {
  item.classList.toggle("open");
  
}
function shadowToggle() {
  const shadow = document.querySelector(".shadow");
  shadow.classList.toggle("true");
}
function closePanel() {
  const open = document.querySelector(".open");
  open.classList.remove("open");
  shadowToggle()
}
