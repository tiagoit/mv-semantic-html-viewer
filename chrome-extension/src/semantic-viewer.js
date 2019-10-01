let tags = [
  { name: "Header", borderWidth: '3px', borderColor: '#03a9f4' },
  { name: "Nav", borderWidth: '3px', borderColor: '#9c27b0' },
  { name: "Main", borderWidth: '3px', borderColor: '#f44336' },
  { name: "Article", borderWidth: '3px', borderColor: '#ff9800' },
  { name: "Section", borderWidth: '3px', borderColor: '#4caf50' },
  { name: "Aside", borderWidth: '3px', borderColor: '#e91e63' },
  { name: "Footer", borderWidth: '3px', borderColor: '#673ab7' },
  { name: "H1", borderWidth: '2px', borderColor: '#cddc39' },
  { name: "H2", borderWidth: '2px', borderColor: '#cddc39' },
  { name: "H3", borderWidth: '2px', borderColor: '#cddc39' },
  { name: "H4", borderWidth: '2px', borderColor: '#cddc39' },
  { name: "H5", borderWidth: '2px', borderColor: '#cddc39' },
  { name: "H6", borderWidth: '2px', borderColor: '#cddc39' },
  { name: "H7", borderWidth: '2px', borderColor: '#cddc39' },
];

// Adds colored borders and titles to each semantic element
tags.forEach((tag) => {
  let tags = document.getElementsByTagName(tag.name.toLowerCase());
  for (let i = 0; i < tags.length; i++) {
    tags[i].style.border = tag.borderWidth + ' solid ' + tag.borderColor;
    tags[i].title = tag.name;
  }
});



// add a floating box with the element / color map.
let box = document.createElement("div")
// box.innerHTML = "Some arb ddtext";
box.style.display = "block";
box.style.position = "fixed";
box.style.top = "16px";
box.style.right = "16px";
box.style.textAlign = "right";
box.style.padding = "16px";
box.style.backgroundColor = "rgba(0,0,0,0.7)";
box.style.borderRadius = "4px";
box.style.color = "#fff";
box.style.zIndex = "999999";

tags.forEach((tag) => {
  let colorSpan = document.createElement("span");
  colorSpan.style.height = "12px";
  colorSpan.style.width = "12px";
  colorSpan.style.display = "inline-block";
  colorSpan.style.marginLeft = "8px";
  colorSpan.style.backgroundColor = tag.borderColor;

  let div = document.createElement("div");
  div.innerHTML = tag.name;
  div.appendChild(colorSpan);

  box.appendChild(div);
});

document.body.appendChild(box);