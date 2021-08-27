const buyBtns = document.querySelectorAll('.js-click-modal');
const modal = document.querySelector('.modal');

console.log(buyBtns);

function showModal() {
    modal.classList.add('open');
}

for(var item of buyBtns){
    item.addEventListener('click', showModal);
}