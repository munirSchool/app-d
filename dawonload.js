let botton = document.querySelector(".d-button");
let link = document.querySelector("a");
let span = document.querySelector(".prog");
let spanProg = document.querySelector(".prog > span");
let thankMsg = document.querySelector(".thank");
botton.onclick = () => {
  span.classList.add("active");
  console.log("true");
  let width = 0;
  let count = setInterval(() => {
    width++;
    spanProg.style.width = `${width}%`;
    if (width < 30) {
      spanProg.style.backgroundColor = "#EE5622";
    } else if (width > 30 && width < 70) {
      spanProg.style.backgroundColor = "#ECA72C";
    } else {
      spanProg.style.backgroundColor = "#56c553";
    }
    if (width === 100) {
      link.click();
      botton.classList.add("done");
      botton.innerText = "لقد بدأ التحميل";
      thankMsg.classList.add("active");
      span.style.display = "none";
      clearInterval(count);
    }
  }, 70);
};
