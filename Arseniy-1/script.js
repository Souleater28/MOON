const newItem = document.createElement("div");
newItem.classList.add("item");
newItem.appendChild(document.createElement("div"));

const elem = document
  .getElementById("abc")
  .insertBefore(newItem, document.getElementsByClassName("modal")[0]);

const cookData = object => {
  let result = "";
  if (descriptions[object])
    Object.keys(descriptions[object]).map(e => {
      if (descriptions[object][e] !== undefined)
        result += `${e} : ${descriptions[object][e]} <br />`;
    });

  return result;
};

function bigpic(event) {
  changestatus(event);
  const modal_content = document.getElementById("modal_content");
  modal_content.innerHTML = cookData(event.target.id);
}
function changestatus(event) {
  const shad = document.getElementById("abc");
  if (shad.classList.contains("n")) {
    shad.classList.replace("n", "s");
  } else {
    shad.classList.replace("s", "n");
  }
}

const items = Array.from(document.getElementsByClassName("item"));
console.log(items);

items.map((item, index) => {
  if (!item.classList.contains("urina")) {
    item.addEventListener("click", () => bigpic(event));
  }
});

const descriptions = {
  redmi: {
    description: "redmi redmi redmi",
    hyi: "arseniy"
  },
  winPhone: {
    description: "win phoe"
  },
  smartWatch: {
    title: "SMART WATCH",
    description: "smart watch",
    price: "23901293$"
  },
  Mac: {
    title: "MAC",
    description: "Mac air pro",
    price: "one kidney"
  },
  Mystic: {
    title: "UNKNOWN",
    description: "UNKNOWN",
    price: "ERRORERRORERRORERRORERROR"
  }
};

// <div class="modal n" id="modal">
//   <div class="mtitle">
//     <p style="font-size:30px; top:20%">Modal title</p>
//   </div>
//   <div class="content" id="modal"></div>
// </div>;
