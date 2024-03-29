const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");

const container = document.getElementById("container");

tab1.addEventListener("click", () => {
    container.innerText = "TAB 1 Selected";
});

tab2.addEventListener("click", () => {
    container.innerText = "TAB 2 Selected";
});

tab3.addEventListener("click", () => {
    container.innerText = "TAB 3 Selected";
});
