'use-strict';

const tabBtn = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabBtn.forEach(function (item) {
  item.addEventListener('click', setOpen);
});

function setOpen(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  tabBtn.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active');
  });
  tabContent.forEach(function (item) {
    item.classList.remove('tabs__content-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');
  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}
