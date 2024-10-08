// const homeNav = document.querySelector("#homeNav");
// const aboutNav = document.querySelector("#aboutNav");
// const menuNav = document.querySelector("#menuNav");
// const galleryNav = document.querySelector("#galleryNav");
// const bookTableNav = document.querySelector("#bookTableNav");
// const contactNav = document.querySelector("#contactNav");
const allBtn = document.querySelector("#all-btn");
const starterBtn = document.querySelector("#starters-btn");
const saladBtn = document.querySelector("#salads-btn");
const specialBtn = document.querySelector("#specials-btn");
const barrelBread = document.querySelector("#bread-barrel");
const mozzarella = document.querySelector("#mozzarella");
const lobsterBisque = document.querySelector("#lobster-bisque");
const caesar = document.querySelector("#caesar");
const cake = document.querySelector("#cake");
const greekSalad = document.querySelector("#greek-salad");
const tuscanGrilled = document.querySelector("#tuscan-grilled");
const spinachSalad = document.querySelector("#spinach-salad");
const lobsterRoll = document.querySelector("#lobster-roll");
const sideBar = document.querySelector(".sidebar");

function backToTop() {
  window.scrollTo(0, 0);
}

// homeNav.style.color = 'rgb(91, 145, 145)';
allBtn.style.color = "rgb(91, 145, 145)";

// homeNav.addEventListener("click", ()=>{
//     homeNav.style.color = 'rgb(91, 145, 145)';
//     aboutNav.style.color = 'white';
//     menuNav.style.color = 'white';
//     galleryNav.style.color = 'white';
//     bookTableNav.style.color = 'white';
//     contactNav.style.color = 'white';
// })
// aboutNav.addEventListener("click", ()=>{
//     aboutNav.style.color = 'rgb(91, 145, 145)';
//     homeNav.style.color = 'white';
//     menuNav.style.color = 'white';
//     galleryNav.style.color = 'white';
//     bookTableNav.style.color = 'white';
//     contactNav.style.color = 'white';
// })
// menuNav.addEventListener("click", ()=>{
//     menuNav.style.color = 'rgb(91, 145, 145)';
//     aboutNav.style.color = 'white';
//     homeNav.style.color = 'white';
//     galleryNav.style.color = 'white';
//     bookTableNav.style.color = 'white';
//     contactNav.style.color = 'white';
// })
// galleryNav.addEventListener("click", ()=>{
//     galleryNav.style.color = 'rgb(91, 145, 145)';
//     aboutNav.style.color = 'white';
//     homeNav.style.color = 'white';
//     menuNav.style.color = 'white';
//     bookTableNav.style.color = 'white';
//     contactNav.style.color = 'white';
// })
// bookTableNav.addEventListener("click", ()=>{
//     bookTableNav.style.color = 'rgb(91, 145, 145)';
//     aboutNav.style.color = 'white';
//     homeNav.style.color = 'white';
//     menuNav.style.color = 'white';
//     galleryNav.style.color = 'white';
//     contactNav.style.color = 'white';
// })
// contactNav.addEventListener("click", ()=>{
//     contactNav.style.color = 'rgb(91, 145, 145)';
//     aboutNav.style.color = 'white';
//     homeNav.style.color = 'white';
//     menuNav.style.color = 'white';
//     galleryNav.style.color = 'white';
//     bookTableNav.style.color = 'white';
// })

allBtn.addEventListener("click", () => {
  allBtn.style.color = "rgb(91, 145, 145)";
  saladBtn.style.color = "darkslategray";
  starterBtn.style.color = "darkslategray";
  specialBtn.style.color = "darkslategray";
  barrelBread.style.display = "flex";
  mozzarella.style.display = "flex";
  lobsterBisque.style.display = "flex";
  caesar.style.display = "flex";
  cake.style.display = "flex";
  greekSalad.style.display = "flex";
  tuscanGrilled.style.display = "flex";
  spinachSalad.style.display = "flex";
  lobsterRoll.style.display = "flex";
});
starterBtn.addEventListener("click", () => {
  allBtn.style.color = "darkslategray";
  saladBtn.style.color = "darkslategray";
  starterBtn.style.color = "rgb(91, 145, 145)";
  specialBtn.style.color = "darkslategray";
  barrelBread.style.display = "none";
  mozzarella.style.display = "flex";
  lobsterBisque.style.display = "flex";
  caesar.style.display = "none";
  cake.style.display = "flex";
  greekSalad.style.display = "none";
  tuscanGrilled.style.display = "none";
  spinachSalad.style.display = "none";
  lobsterRoll.style.display = "none";
});
saladBtn.addEventListener("click", () => {
  allBtn.style.color = "darkslategray";
  saladBtn.style.color = "rgb(91, 145, 145)";
  starterBtn.style.color = "darkslategray";
  specialBtn.style.color = "darkslategray";
  barrelBread.style.display = "none";
  mozzarella.style.display = "none";
  lobsterBisque.style.display = "none";
  caesar.style.display = "flex";
  cake.style.display = "none";
  greekSalad.style.display = "flex";
  tuscanGrilled.style.display = "none";
  spinachSalad.style.display = "flex";
  lobsterRoll.style.display = "none";
});
specialBtn.addEventListener("click", () => {
  allBtn.style.color = "darkslategray";
  saladBtn.style.color = "darkslategray";
  starterBtn.style.color = "darkslategray";
  specialBtn.style.color = "rgb(91, 145, 145)";
  barrelBread.style.display = "flex";
  mozzarella.style.display = "none";
  lobsterBisque.style.display = "none";
  caesar.style.display = "none";
  cake.style.display = "none";
  greekSalad.style.display = "none";
  tuscanGrilled.style.display = "flex";
  spinachSalad.style.display = "none";
  lobsterRoll.style.display = "flex";
});

let checker = true;

function displaySidebar() {
  if (checker === true) {
    sideBar.style.display = "block";
    checker = false;
  } else {
    sideBar.style.display = "none";
    checker = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav .navbar li a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector('nav .navbar li a[href*=' + id + ']')
            .classList.add("active");
        });
      }
    });
  };
});
