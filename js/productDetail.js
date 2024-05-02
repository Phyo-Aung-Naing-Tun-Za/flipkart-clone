import { productDetailPageCategories } from "../Data/forProdutDetailPage/categories.js";
import {
  customerMightInterest,
  similarProducts,
} from "../Data/forProdutDetailPage/products.js";
import { customerUploadImgsAndReviews } from "../Data/forProdutDetailPage/customeruploadreviews.js";
import { generateScrollBtn, selectAnElement } from "./reuseablefuns.js";

productDetailPageCategories.forEach((category) => {
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

let leftImgsContainer = selectAnElement("#left-img-container");
let rightImg = selectAnElement("#right-img");
leftImgsContainer.addEventListener("mouseover", (e) => {
  if (e.target.getAttribute("src")) {
    rightImg.setAttribute("src", e.target.getAttribute("src"));
    leftImgsContainer.querySelector(".active").classList.remove("active");
    e.target.parentElement.classList.add("active");
  }
});

// for product details table hide show
let productDetailsToggler = selectAnElement("#prduct-details-toggler");
let productDetailsTable = selectAnElement("#productDetailsTable");

productDetailsToggler.addEventListener("click", (e) => {
  productDetailsTable.classList.toggle("hidden");
  selectAnElement("#prduct-details-toggler #plus-btn").classList.toggle(
    "hidden"
  );
  selectAnElement("#prduct-details-toggler #minus-btn").classList.toggle(
    "hidden"
  );
});

// for customer upload imgs sections

let customerUploadImgsContainer = selectAnElement(
  "#customerUploadImgsContainer"
);
customerUploadImgsAndReviews.forEach((data) => generateImgs(data));
function generateImgs(data) {
  let img = document.createElement("img");
  img.setAttribute("src", data.img);
  img.classList.add("w-[70px]", "h-[70px]", "rounded-sm", "cursor-pointer");
  customerUploadImgsContainer.appendChild(img);
}

//for customer might interest

let cardContainer = selectAnElement(
  "#customer-interest-section #card-container"
);

customerMightInterest.forEach((data) => {
  cardContainer.innerHTML += `<div style="box-shadow: 0 0 8px #e1dede;" class="min-w-[380px]  flex items-center">
    <div class="w-[140px] flex items-center my-auto h-full"><img  class=" my-auto w-full " src="${data.img}" alt="${data.name}"></div>
    <div class="p-[24px]">
      <h3 class=" text-[21px] font-bold text-[212121]">${data.name}</h3>
      <div class="text-[18px] text-[#878787] mt-[4px]">${data.dis}</div>
      <button style="padding: 8px 16px;" class="text-[15px] rounded-[2px] mt-[16px] bg-[#2874f0] font-bold text-white">Shop Now</button>
    </div>
  </div>`;
});
generateScrollBtn(
  selectAnElement("#customer-interest-section #card-container"),
  selectAnElement("#customer-interest-section #next-btn"),
  selectAnElement("#customer-interest-section #pre-btn")
);

// for product similar product

let similarProductsContainer = selectAnElement(
  "#similar-products-section #similar-products-container"
);

similarProducts.forEach((product) =>
  generateProductCards(product, similarProductsContainer)
);

generateScrollBtn(
  selectAnElement("#similar-products-section #similar-products-container"),
  selectAnElement("#similar-products-section #next-btn"),
  selectAnElement("#similar-products-section #pre-btn")
);

// for recent view product
let recentViewProductContainer = selectAnElement(
  "#recent-view-section #recent-view-container"
);
similarProducts.forEach((product) =>
  generateProductCards(product, recentViewProductContainer)
);
generateScrollBtn(
  selectAnElement("#recent-view-section #recent-view-container"),
  selectAnElement("#recent-view-section #next-btn"),
  selectAnElement("#recent-view-section #pre-btn")
);

function generateProductCards(product, container) {
  let cards = document.createElement("div");
  cards.classList.add(
    "min-w-[25%]",
    "similar-product-card",
    "h-[350px]",
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

  let brand = document.createElement("h2");
  brand.textContent = product.brand;
  brand.classList.add("font-bold", "text-gray-400", "truncate", "text-[14px]");
  infoContainer.appendChild(brand);

  let productNameContainer = document.createElement("div");

  let productName = document.createElement("h2");
  productName.textContent = product.name;
  productName.classList.add(
    "truncate",
    "text-[14px]",
    "text-black",
    "mb-1",
    "title"
  );
  productNameContainer.appendChild(productName);

  let priceContainer = document.createElement("div");
  priceContainer.classList.add("mb-2");
  let disPrice = document.createElement("span");
  disPrice.textContent = product.disprice;
  disPrice.classList.add(
    "text-[15px]",
    "text-[#212121]",
    "font-semibold",
    "me-2"
  );
  priceContainer.appendChild(disPrice);

  let normalPrice = document.createElement("span");
  normalPrice.textContent = product.normalprice;
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
  if (product.isSponser) {
    let sponserLabel = document.createElement("h2");
    sponserLabel.textContent = "Sponsered";
    sponserLabel.classList.add("text-gray-400", "text-xs");
    infoContainer.appendChild(sponserLabel);
  }

  cards.appendChild(imgContainer);
  cards.appendChild(infoContainer);
  container.appendChild(cards);
  cards.addEventListener("click", () => {
    window.location.href = "../pages/product-details.html";
  });
}
