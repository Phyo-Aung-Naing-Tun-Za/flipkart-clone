import { productDetailPageCategories } from "../Data/forProdutDetailPage/categories.js";
import { selectAnElement } from "./reuseablefuns.js";

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

  let leftImgsContainer = selectAnElement('#left-img-container');
    let rightImg = selectAnElement('#right-img');
  leftImgsContainer.addEventListener('mouseover',(e)=>{
    if(e.target.getAttribute('src')){
        rightImg.setAttribute('src',e.target.getAttribute('src'));
        leftImgsContainer.querySelector('.active').classList.remove('active');
        e.target.parentElement.classList.add('active');
    }
    
  });