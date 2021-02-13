/* Put your javascript in here */

let width = 150;
let count = 3;
let list = package.querySelector("ul")
let listElems = package.querySelectorAll("li")
let position = 0;

package.querySelector(".left").onclick = function () {
    position += width * count;
    position = Math.min(position, 0);
    list.style.marginLeft = position + "px";
};

package.querySelector(".right").onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - ciunt));
    list.style.marginLeft = position + "px";
};