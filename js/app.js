import {
  carouselData,
  mainCategories,
} from "../Data/forhomepage/categories.js";
import {
  beautyToyAndMore,
  bestElectronic,
  essentialsForHobby,
  festivSpecials,
  grommingBookAuto,
  latestSummerStyle,
  pickYourStyle,
  studentEssentials,
  summerEssentials,
  trandingGadgesAndAppli,
} from "../Data/forhomepage/product-data.js";
import { aboutFlipKart, topStories } from "../Data/forhomepage/sideData.js";
import {
  creatProductCart,
  creatProductCartTwo,
  createLinks,
  createParagraph,
  generateScrollBtn,
  generateUi,
  selectAnElement,
} from "./reuseablefuns.js";

// for nav bar
const sideBarOpenBtn = selectAnElement("#side-bar-open");
const sideBar = selectAnElement("#side-bar");
const sideBarCloseBtn = selectAnElement("#side-bar-close");

sideBarOpenBtn.addEventListener("click", (e) => {
  sideBar.classList.remove("hidden");
  sideBar.classList.add("flex");
});
sideBarCloseBtn.addEventListener("click", (e) => {
  sideBar.classList.add("hidden");
  sideBar.classList.remove("flex");
});

// for category section

mainCategories.forEach((category) => createCategoryLists(category));

function createCategoryLists(category) {
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  div2.classList.add(
    "border-black",
    "w-[100%]",
    "h-[100%]",
    "absolute",
    "bg-transparent",
    "cover-div"
  );
  div.appendChild(div2);
  div.classList.add("category-box", "relative");

  const img = document.createElement("img");
  img.classList.add("mx-auto", "mb-4");
  img.setAttribute("src", category.img);
  img.style.width = "64px";

  const h3 = document.createElement("h3");
  h3.textContent = category.name;
  h3.classList.add("text-sm", "font-bold", "text-center");

  if (category.subCategories.length) {
    const i = document.createElement("i");
    i.classList.add(
      "fa-solid",
      "fa-angle-down",
      "ms-3",
      "text-gray-500",
      "main-cat-dropdown"
    );
    h3.appendChild(i);

    const cateListsContainer = document.createElement("div");
    if (category.id == mainCategories.length) {
      cateListsContainer.style.right = "4px";
      cateListsContainer.style.width = "200px";
    } else {
      cateListsContainer.style.width = "240px";
    }
    cateListsContainer.style.boxShadow = "0px 0px 10px 0px #8080804d";
    cateListsContainer.classList.add(
      "rounded-lg",
      "absolute",
      "category-list",
      "text-start"
    );

    const ul = document.createElement("ul");
    ul.classList.add("first-dropdown-list");

    category.subCategories.forEach((category) => {
      const li = document.createElement("li");
      li.classList.add(
        "flex",
        "items-center",
        "justify-between",
        "px-5",
        "py-4",
        "text-xs",
        "cate-lists",
        "hover:font-bold"
      );
      li.textContent = category.name;
      if (category.subCategories.length) {
        const i = document.createElement("i");
        i.classList.add(
          "fa-solid",
          "fa-angle-left",
          "ms-auto",
          "text-gray-500",
          "main-cat-dropdown"
        );
        li.appendChild(i);

        const ringtDiv = document.createElement("div");
        ringtDiv.style.width = "240px";
        ringtDiv.classList.add(
          "absolute",
          "right-category-list",
          "text-start",
          "rounded-lg"
        );
        const h2 = document.createElement("h2");
        h2.textContent = `More in ${category.name}`;
        h2.classList.add("px-5", "py-4", "text-xs", "font-bold");
        ringtDiv.appendChild(h2);

        const ul = document.createElement("ul");
        const listAll = document.createElement("li");
        listAll.textContent = "All";
        listAll.classList.add(
          "px-5",
          "py-4",
          "text-xs",
          "right-cate-lists",
          "font-normal"
        );
        ul.appendChild(listAll);
        category.subCategories.forEach((cate) => {
          const li = document.createElement("li");
          li.classList.add(
            "px-5",
            "py-4",
            "text-xs",
            "right-cate-lists",
            "font-normal"
          );
          li.textContent = cate;
          ul.appendChild(li);
        });
        ringtDiv.appendChild(ul);

        li.appendChild(ringtDiv);
      }

      ul.appendChild(li);
    });
    cateListsContainer.appendChild(ul);

    div.appendChild(cateListsContainer);
  }

  div.appendChild(img);
  div.appendChild(h3);

  selectAnElement("#categories-section").appendChild(div);
}

//for best of electronic section
generateUi(
  bestElectronic,
  creatProductCart,
  selectAnElement("#electronic-product-container")
);
generateScrollBtn(
  selectAnElement("#electronic-product-container"),
  selectAnElement("#best-of-electronic #next-btn"),
  selectAnElement("#best-of-electronic #pre-btn")
);

//for beauty, toy and more section
generateUi(
  beautyToyAndMore,
  creatProductCart,
  selectAnElement("#beauty-food-toy-container")
);
generateScrollBtn(
  selectAnElement("#beauty-food-toy-container"),
  selectAnElement("#beauty-food-toy #next-btn"),
  selectAnElement("#beauty-food-toy #pre-btn")
);

// for latest summer style section
generateUi(
  latestSummerStyle,
  creatProductCartTwo,
  selectAnElement("#latest-summer-style-container")
);

//for student essential section
generateUi(
  studentEssentials,
  creatProductCartTwo,
  selectAnElement("#student-essential-container")
);

//for festive essential section
generateUi(
  festivSpecials,
  creatProductCartTwo,
  selectAnElement("#festive-special-container")
);

//for essentials for all hobbies section
generateUi(
  essentialsForHobby,
  creatProductCartTwo,
  selectAnElement("#essential-for-hobby-container")
);

//for home and kitchen essentials section
generateUi(
  beautyToyAndMore,
  creatProductCart,
  selectAnElement("#home-kitchen-essential-container")
);
generateScrollBtn(
  selectAnElement("#home-kitchen-essential-container"),
  selectAnElement("#home-kitchen-essential #next-btn"),
  selectAnElement("#home-kitchen-essential #pre-btn")
);

//For Trending Gadgets & Appliances and Summer Essentials
generateUi(
  trandingGadgesAndAppli,
  creatProductCartTwo,
  selectAnElement("#gadgets-and-appliances-container")
);
generateUi(
  summerEssentials,
  creatProductCartTwo,
  selectAnElement("#summer-essential-container")
);

// For Summer Decor & Furnishing and Cricket Must-Haves

generateUi(
  summerEssentials,
  creatProductCartTwo,
  selectAnElement("#summer-deco-container")
);

generateUi(
  latestSummerStyle,
  creatProductCartTwo,
  selectAnElement("#cricket-container")
);

// For Grooming, Books, Auto & more
generateUi(
  grommingBookAuto,
  creatProductCart,
  selectAnElement("#gromming-books-auto-container")
);
generateScrollBtn(
  selectAnElement("#gromming-books-auto-container"),
  selectAnElement("#gromming-books-auto #next-btn"),
  selectAnElement("#gromming-books-auto #pre-btn")
);

// Pick Your Styles
generateUi(
  pickYourStyle,
  creatProductCart,
  selectAnElement("#pick-your-styles-container")
);
generateScrollBtn(
  selectAnElement("#pick-your-styles-container"),
  selectAnElement("#pick-your-styles #next-btn"),
  selectAnElement("#pick-your-styles #pre-btn")
);

//for top stories
let idLists = [
  "most-search",
  "mobiles",
  "laptops",
  "tvs",
  "large-appliances",
  "clothing",
  "footwear",
  "gorceries",
  "best-selling",
  "furniture",
  "bgmh",
];

idLists.forEach((id) =>
  generateUi(topStories.mostSearch, createLinks, selectAnElement(`#${id}`))
);

// for about filpkart
generateUi(aboutFlipKart, createParagraph, selectAnElement("#aboutFlipkart"));
