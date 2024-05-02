export function generateUi(data, createCart, selector) {
  selector.innerHTML = "";
  data.forEach((product) => {
    createCart(product, selector);
  });
}

export function creatProductCart(product, selector) {
  let div = `
    <div class=" mt-2 min-w-[200px] max-w-[200px] p-2 overflow-hidden h-[252px] border border-gray-300 rounded-md ">
    <a href="../pages/products.html">
    <img class="w-[170px] object-contain h-[170px] mx-auto" src="${product.img}" alt="${product.name}">
    <h2 class=" mt-3 text-center truncate">${product.name}</h2>
    <h1 class=" text-sm text-center text-gray-800 font-bold">${product.price}</h1>
    </a>
  </div>
    `;
  selector.innerHTML += div;
}

export function creatProductCartTwo(product, selector) {
  let div = `
      <div class=" min-w-[180px] max-w-[180px] p-3   overflow-hidden border border-gray-300 rounded-md ">
              <a href="../pages/products.html">
              <img class="w-[156px] h-[156px] object-contain mx-auto" src="${product.img}" alt="${product.name}">
              <h2 class=" mt-3  truncate text-lg text-gray-600">${product.name}</h2>
              <h1 class="font-bold tracking-wider text-green-700">${product.price}</h1>
              </a>
        </div>
    `;
  selector.innerHTML += div;
}

export function selectAnElement(data) {
  return document.querySelector(data);
}

export function createLinks(product, selector) {
  let a = `
    <a class="text-xs mb-0 text-[#565656]  border-[#333] border-e px-1" href="#">${product}</a>
  `;
  selector.innerHTML += a;
}

export function createParagraph(data, selector) {
  let div = `
    <div class=" text-[#878787] mb-3">
      <h1 class="font-bold mb-2">${data.title}</h1>
      <p class="text-xs">${data.body}</p>    
    </div>
  `;
  selector.innerHTML += div;
}

export function generateScrollBtn(container, nextBtnSlector, preBtnSelector) {
  let nextBtn = nextBtnSlector;
  let preBtn = preBtnSelector;
  preBtn.classList.add("hidden");
  nextBtn.addEventListener("click", (e) => {
    preBtn.classList.toggle("hidden");
    nextBtn.classList.toggle("hidden");
    container.scroll({ left: 1000 });
  });
  preBtn.addEventListener("click", (e) => {
    preBtn.classList.toggle("hidden");
    nextBtn.classList.toggle("hidden");
    container.scroll({ left: 0 });
  });
}

// for product page sidebar
export function toggleDropdownUi(btnOpen, btnClose, dropdown) {
  btnOpen.addEventListener("click", (e) => {
    btnOpen.classList.toggle("hidden");
    btnClose.classList.toggle("hidden");
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("flex");
  });

  btnClose.addEventListener("click", (e) => {
    btnOpen.classList.toggle("hidden");
    btnClose.classList.toggle("hidden");
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("flex");
  });
}
