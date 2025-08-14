'use strict';

// Sidebar & Topbar Loaders

fetch('sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar-container').innerHTML = data;
  });

fetch('topbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('topbar-container').innerHTML = data;
  });


// Sidebar Toggle

const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});


//Form Validation
  
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}
