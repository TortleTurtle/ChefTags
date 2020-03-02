const mobileNav = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    const navItems = document.querySelectorAll(".nav-item");
  
    //toggle nav
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      //fade in for links
      navItems.forEach((link, index) => {
        if(link.style.animation) {
          link.style.animation = '';
        }
        else {
          link.style.animation = `fade 0.5 ease forwards ${index * 1 + 2}s`;
        }
      });
  
      //animate burger
      if (burger.style.transform){
        burger.style.transform = '';
      }
      else {
        burger.style.transform = "rotate(90deg)";
      }
  
    });
}

const app = () => {
    mobileNav();
}

app();