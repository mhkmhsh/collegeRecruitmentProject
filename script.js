function myFunction() {
  const userInput = document.querySelector("#userInput");
  const message = document.querySelector("#message");

  message.innerHTML = "So " + userInput.value + ", you want to go to Princeton.";
  localStorage.setItem('userName', userInput.value);
  displaySavedInput();
}

function displaySavedInput() {
  const savedName = localStorage.getItem('userName');
  const message = document.querySelector("#message");

  if (savedName) {
    message.innerHTML = "So " + savedName + ", you want to go to Princeton.";
  }
}

window.onload = function() {
  displaySavedInput();
};
  // js remembers the users name through reloads ( found the user input on google, multiple sources and the message from Rock Paper Scissors Project)
  // add smth to make the top disappear when submit is clicked and so the body appears 
  function handleClick() {
    const greetingCard = document.getElementById('greeting');
    const content = document.getElementById('content');

    // Animate greetingCard to slide up and fade out
    greetingCard.animate([
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-100%)' }
    ], {
      duration: 1000,
      iterations: 1
    }).onfinish = () => {
      // Hide the greetingCard and show the content
      greetingCard.style.display = 'none';
      content.style.display = 'block';
      content.style.opacity = 1;
    };
  }

  // If you want to display content from the start if it's already in localStorage
  window.onload = function() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      const message = document.querySelector("#message");
      message.innerHTML = "So " + savedName + ", you want to go to Princeton.";
      const content = document.getElementById('content');
      content.style.display = 'block';
      content.style.opacity = 1;
      document.getElementById('greeting').style.display = 'none';
    }
  };


  // CAR SWIPER STUFF FROM THEIR JS FILE
  const swiper = new Swiper('.slider-wrapper', {
  
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    //responsive breakpoints
    breakpoints:{
      0: {
      slidesPerView:1
    },

    620: {
      slidesPerView:2
    },
    1024: {
      slidesPerView:3
    },
    }

  });