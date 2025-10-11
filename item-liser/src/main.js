const itemName = document.getElementById("item-name");
const itemAdd = document.getElementById("item-add");
const list = document.getElementById("list");
const message = document.getElementById("message");
const search = document.getElementById("search");
let items = [];

document.addEventListener("load", display(items));

itemAdd.addEventListener("click", (event) => {
  event.preventDefault();
  if (itemName.value.trim().length >= 3) {
    if (items.includes(itemName.value.trim())) {
      message.classList.remove("hidden");
      setTimeout(() => {
        message.classList.add("hidden");
      }, 2000);
    } else {
      items.push(itemName.value.trim());
      itemName.value = "";
      display(items);
    }
  } else {
    console.log("INVALID");
  }
});

list.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    items.splice(
      items.indexOf(event.target.previousElementSibling.textContent),
      1
    );
    display(items);
  }
});

search.addEventListener("input", function () {
  display(
    items.filter((item) =>
      item.toLowerCase().startsWith(this.value.toLowerCase())
    )
  );
});

function display(things) {
  list.innerHTML = "";
  list.append(...things.map((item) => createItem(item)));
}

function createItem(name) {
  const newItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const itemName = document.createElement("span");
  itemName.textContent = name;
  deleteBtn.textContent = "X";
  deleteBtn.setAttribute(
    "class",
    "size-7 rounded-sm bg-red-700 text-white cursor-pointer"
  );
  newItem.setAttribute(
    "class",
    "flex justify-between items-center rounded-md hover:bg-slate-200 py-2 px-3 cursor-pointer"
  );
  newItem.append(itemName, deleteBtn);
  return newItem;
}
