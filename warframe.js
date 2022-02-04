let json = [
  {
    name: "ash",
    sexe: "masculin",
    img: "./img/warframes/Ash.webp",
  },
];
console.log(json);
let wframes = JSON.parse(json);

for (let i = 0, l = wframes.length; i < l; i++) {
  var wframe = wframes[i];
  var div = document.createElement("div");
  div.innerHTML =
    "Hello " +
    wframes.name +
    " your sex is: " +
    wframes.sexe +
    "and seems like: " +
    wframes.img;
  document.body.appendChild(div);
}
