const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");
const darkBtn = document.getElementById("dark");

addBtn.addEventListener("click", function () {
  if (input.value === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  const edit = document.createElement("button");
  const del = document.createElement("button");

  span.textContent = input.value;
  edit.textContent = "✏️";
  del.textContent = "🗑️";


  edit.addEventListener("click", function () {
    const newText = prompt("Edit:", span.textContent);
    if (newText !== null) {
      span.textContent = newText;
    }
  });


  del.addEventListener("click", function () {
    li.remove();
  });

  li.append(span, edit, del);
  list.append(li);
  input.value = "";
});


darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
