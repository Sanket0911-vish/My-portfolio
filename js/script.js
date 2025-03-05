// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 95,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// Bootstrap progress circular bar 
let bootstrapProgress = document.querySelector(".bootstrap"),
  bootstrapValue = document.querySelector(".bootstrap-progress");

let bootstrapStartValue = 0,
  bootstrapEndValue = 80,
  bootstrapSpeed = 30;

let progressBootstrap = setInterval(() => {
  bootstrapStartValue++;

  bootstrapValue.textContent = `${bootstrapStartValue}%`;
  bootstrapProgress.style.background = `conic-gradient(#20c997 ${
    bootstrapStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (bootstrapStartValue == bootstrapEndValue) {
    clearInterval(progressBootstrap);
  }
}, bootstrapSpeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 65,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    message: document.getElementById("message").value,
  };

  fetch("https://your-backend-url.com/store-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      showMessage("Your message has been submitted successfully!", "success");
      document.getElementById("contactForm").reset(); // Reset form
    })
    .catch((error) => {
      showMessage("An error occurred. Please try again later.", "error");
      console.error("Error:", error);
    });
});

// Function to show message
function showMessage(message, type) {
  const responseMessage = document.getElementById("responseMessage");
  responseMessage.innerText = message;
  responseMessage.style.display = "block";
  responseMessage.style.padding = "10px";
  responseMessage.style.borderRadius = "5px";

  if (type === "success") {
    responseMessage.style.color = "#155724";
    responseMessage.style.backgroundColor = "#d4edda";
    responseMessage.style.border = "1px solid #c3e6cb";
  } else {
    responseMessage.style.color = "#721c24";
    responseMessage.style.backgroundColor = "#f8d7da";
    responseMessage.style.border = "1px solid #f5c6cb";
  }

  // Hide message after 5 seconds
  setTimeout(() => {
    responseMessage.style.display = "none";
  }, 5000);
}


