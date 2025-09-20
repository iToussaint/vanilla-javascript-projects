import { createIcons, icons } from "lucide";
createIcons({ icons });

const container = document.getElementById("container");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

let array = [...Array(5).keys()];
const title = `Title`;
const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nemo eos fugiat laudantium assumenda repellat delectus harum! Earum ipsa incidunt excepturi, maiores praesentium, temporibus voluptatum beatae ratione impedit animi illum! Saepe rem obcaecati id, accusantium, tempora, reprehenderit iure possimus asperiores fuga cum provident eligendi. Aut numquam, et voluptates nesciunt libero, cum dignissimos, sunt ab aperiam culpa molestiae iure magni officiis.";

  const object = {
  title,
  paragraph,
};


array = array.fill(object);
array = array.map((element, index) =>
  Object.fromEntries(
    Object.entries(element).map((el, ind) =>
      ind === 0 ? el.map((e, i) => (i === 1 ? `${e} ${index + 1}` : e)) : el
    )
  )
);


console.log(array)

function search(input) {
  return array.filter((element) => element.title.toLowerCase().includes(input.toLowerCase()));
}

function displayResults(input) {
  const documentFragment = new DocumentFragment();
  search(input).forEach((element) => {
    const resultContainer = document.createElement("div")
    const resultTitle = document.createElement("h1")
    resultTitle.classList.add("text-2xl", "text-slate-700", "font-semibold");
    resultTitle.textContent = element.title
    const resultDescription = document.createElement("p");
    resultDescription.textContent = element.paragraph
    documentFragment
      .appendChild(resultContainer)
      .append(resultTitle, resultDescription);
  });
  
}

searchBtn.addEventListener("click", () => {
    const resultsContainer = document.createElement("div")
    resultsContainer.classList.add("grid", "grid-cols-3", "gap-10")
    console.log(searchInput.value)
  container.appendChild(resultsContainer).appendChild(displayResults(searchInput.value));
});
