import { productPageCategories } from "../Data/forproductpage/categories.js";
import { links } from "../Data/forproductpage/paragraphs.js";
import { products } from "../Data/forproductpage/products.js";
import { selectAnElement, toggleDropdownUi } from "./reuseablefuns.js";

productPageCategories.forEach((category) => {
  createCategoriesItems(category);
});

function createCategoriesItems(category) {
  let div = document.createElement("div");
  div.textContent = category.name;
  div.classList.add(
    "px-4",
    "py-3",
    "category-drop-down",
    "text-gray-700",
    "font-bold",
    "z-30"
  );
  if (category.subCategories.length) {
    const i = document.createElement("i");
    i.classList.add(
      "fa-solid",
      "fa-angle-down",
      "text-xs",
      "ms-3",
      "text-gray-500",
      "dropdown-arrow"
    );
    div.appendChild(i);

    const categoryContainers = document.createElement("div");
    categoryContainers.classList.add(
      "absolute",
      "category-containers",
      "mx-4",
      "bg-transprance",
      "left-0",
      "right-0",
      "top-[45px]",
      "justify-between",
      "border",
      "border-gray"
    );
    div.appendChild(categoryContainers);
    categoryContainers.style.boxShadow = "0px 0px 10px 0px #8080804d";

    category.subCategories.forEach((category) => {
      let div = document.createElement("div");
      div.classList.add("w-[20%]", "p-4");
      let h1 = document.createElement("h1");
      h1.classList.add("font-semibold", "text-xs", "mb-3");
      h1.textContent = category.name;
      div.appendChild(h1);

      let ul = document.createElement("ul");
      category.subCategories.map((category) => {
        let li = document.createElement("li");
        li.classList.add("text-xs", "mb-3", "text-gray-500", "font-normal");
        li.textContent = category;
        ul.appendChild(li);
      });
      div.appendChild(ul);
      categoryContainers.appendChild(div);
    });
  }
  document.querySelector("#category-bar").appendChild(div);
}

// generating product cards
const productCardsContainer = selectAnElement(".product-cards-container");
products.forEach((product) => generateProductCards(product));

function generateProductCards(product) {
  let cards = document.createElement("div");
  cards.classList.add(
    "w-[25%]",
    "h-[400px]",
    "product-cards",
    "overflow-hidden",
    "relative"
  );

  let heart = document.createElement("i");
  heart.style.opacity = 0.4;
  heart.classList.add(
    "fa-solid",
    "fa-heart",
    "absolute",
    "text-2xl",
    "right-3",
    "top-5"
  );
  cards.appendChild(heart);

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("h-[240px]", "w-full", "px-2");
  let img = document.createElement("img");
  img.setAttribute("src", `${product.img}`);
  img.classList.add("w-full", "h-full", "object-contain");
  imgContainer.appendChild(img);

  let infoContainer = document.createElement("div");
  infoContainer.classList.add("p-2", "info-container", "bg-white", "h-full");
  if (product.isSponser) {
    let sponserLabel = document.createElement("h2");
    sponserLabel.textContent = "Sponsered";
    sponserLabel.classList.add("text-gray-400", "text-xs");
    infoContainer.appendChild(sponserLabel);
  }
  let brand = document.createElement("h2");
  brand.textContent = product.brand;
  brand.classList.add("font-bold", "text-gray-400", "truncate", "text-[14px]");
  infoContainer.appendChild(brand);

  let productNameContainer = document.createElement("div");

  let productName = document.createElement("h2");
  productName.textContent = product.name;
  productName.classList.add("truncate", "text-[14px]", "text-black", "mb-1");
  productNameContainer.appendChild(productName);

  if (product.subStatus) {
    let subStatus = document.createElement("h2");
    subStatus.innerText = product.subStatus;
    subStatus.classList.add("text-gray-400", "text-xs", "mb-1");
    productNameContainer.appendChild(subStatus);
  } else {
    productNameContainer.classList.add("flex", "items-center");
  }
  if (product.isassured) {
    let isassured = document.createElement("img");
    isassured.setAttribute(
      "src",
      `../images/for-productpage/products/assured.png`
    );
    isassured.classList.add("w-[66px]", "mb-1");
    productNameContainer.appendChild(isassured);
  }

  let priceContainer = document.createElement("div");
  priceContainer.classList.add("mb-2");
  let disPrice = document.createElement("span");
  disPrice.textContent = product.disPrice;
  disPrice.classList.add(
    "text-[15px]",
    "text-[#212121]",
    "font-semibold",
    "me-2"
  );
  priceContainer.appendChild(disPrice);

  let normalPrice = document.createElement("span");
  normalPrice.textContent = product.price;
  normalPrice.classList.add(
    "text-[14px]",
    "text-[#878787]",
    "line-through",
    "me-2"
  );
  priceContainer.appendChild(normalPrice);

  let dis = document.createElement("span");
  dis.textContent = product.dis;
  dis.classList.add("text-[#388e3c]", "text-[12px]", "font-semibold");
  priceContainer.appendChild(dis);

  infoContainer.appendChild(productNameContainer);
  infoContainer.appendChild(priceContainer);

  if (product.status) {
    let status = document.createElement("span");
    status.textContent = product.status;
    status.style.color = "rgb(38, 165, 65)";
    if (product.status.split(" ")[0] === "Hot") {
      status.style.backgroundColor = "rgba(38, 165, 65,0.2)";
    }
    status.classList.add("text-[12px]", "font-bold", "py-2", "px-1");
    infoContainer.appendChild(status);
  }

  if (product.warn) {
    let warn = document.createElement("span");
    warn.textContent = product.warn;
    warn.classList.add("text-[12px]", "font-bold", "text-red-600");
    infoContainer.appendChild(warn);
  }

  let sizeContainer = document.createElement("div");
  sizeContainer.textContent = "Size";
  sizeContainer.classList.add(
    "text-[#878787]",
    "font-bold",
    "text-[14px]",
    "mt-3"
  );
  let sizes = document.createElement("span");
  sizes.textContent = product.size;
  sizes.classList.add("text-[13px]", "text-[#212121]", "ms-1", "font-normal");
  sizeContainer.appendChild(sizes);

  infoContainer.appendChild(sizeContainer);

  cards.appendChild(imgContainer);
  cards.appendChild(infoContainer);
  productCardsContainer.appendChild(cards);
}

// for sidebar category lists

toggleDropdownUi( 
  selectAnElement("#side-bar-category #dropdown-btn-open"),
  selectAnElement("#side-bar-category #dropdown-btn-close"),
  selectAnElement("#product-page-sidebar-category-lists")
);

//for sidebar gender
toggleDropdownUi(
   selectAnElement('#gender #dropdown-btn-open'),
   selectAnElement('#gender #dropdown-btn-close'),
   selectAnElement('#gender #gender-lists'),
);

// for sidebar assured
const assuredDetailsOpenBtn =  selectAnElement('#assured #dropdown-btn-open');
const assuredDetailsContainer = selectAnElement('#assured-details');
assuredDetailsOpenBtn.addEventListener('click',()=>{
   assuredDetailsContainer.classList.toggle('hidden');
});

//for brands
toggleDropdownUi(
   selectAnElement('#brand #dropdown-btn-open'),
   selectAnElement('#brand #dropdown-btn-close'),
   selectAnElement('#brand #brands-container'),
);

// for discount
toggleDropdownUi(
   selectAnElement('#discount #dropdown-btn-open'),
   selectAnElement('#discount #dropdown-btn-close'),
   selectAnElement('#discount #discount-list'),
);

// for customer rating
toggleDropdownUi(
   selectAnElement('#customer-rating #dropdown-btn-open'),
   selectAnElement('#customer-rating #dropdown-btn-close'),
   selectAnElement('#customer-rating #customer-rating-list'),
);

// for offers
toggleDropdownUi(
   selectAnElement('#offers #dropdown-btn-open'),
   selectAnElement('#offers #dropdown-btn-close'),
   selectAnElement('#offers #offers-list'),
);

// for Availability
toggleDropdownUi(
   selectAnElement('#availability #dropdown-btn-open'),
   selectAnElement('#availability #dropdown-btn-close'),
   selectAnElement('#availability #availability-list'),
);

//for paragraph section
const linksContainer = selectAnElement('#paragraphs #links-container');
links.fore

function generateLinks(link){
   linksContainer.innerHtml += `<a href='#'>${link}</a>`;
}