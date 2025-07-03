const burgerOpenerButton = document.querySelector("#burger-opener");
const burgerIcon = document.querySelector("#burger-icon");
const burger = document.querySelector("#burger");

const linksWrapperInBurger = document.querySelector("#burger ul");


let opened = false;

  function openBurgerMenu() {
   burgerIcon.setAttribute('src', 'img/burger-close.svg');
   burger.classList.remove("burger-closed");
   burger.classList.add("burger-opened");
   document.body.classList.add("no-scroll"); // блокируем скролл
  }
  
  function closeBurgerMenu() {
   burgerIcon.setAttribute('src', 'img/burger-open.svg');
   burger.classList.add("burger-closed");
   burger.classList.remove("burger-opened");
   document.body.classList.remove("no-scroll"); // возвращаем скролл
  }
  

  burgerOpenerButton.addEventListener("click", function(event){
  opened = !opened;

  if(opened)  openBurgerMenu();
   else closeBurgerMenu();
  });


linksWrapperInBurger.addEventListener('click', function(event) {
  if (event.srcElement.className === "burger-link") 
  {
    closeBurgerMenu()
  }
});