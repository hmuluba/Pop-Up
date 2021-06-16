const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modalContainer = document.querySelector(".modal-container");

openBtn.addEventListener("click", () => {
    modalContainer.classList.add('show');
})

closeBtn.addEventListener("click", () =>{
    modalContainer.classList.remove  ('show');
})