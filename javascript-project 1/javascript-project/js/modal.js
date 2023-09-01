
function showModal() {
    alert("Модальное окно отображено!");
}


function checkScrollPosition() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showModal();
        window.removeEventListener('scroll', checkScrollPosition);
    }
}

window.addEventListener('scroll', checkScrollPosition);
