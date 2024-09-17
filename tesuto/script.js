const carousel = document.querySelector(".carousel")

let isDragging = false;

const dragStart = () => {
    isDragging = true;
    carousel.classList.add("dragging");
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mousemove", dragStop);