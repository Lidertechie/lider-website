document.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
  
  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };

  const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuButton.classList.toggle('rotate');
});

document.onscroll = () => {
  navbar.classList.remove('show');
  menuButton.classList.remove('rotate');
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

/*product*/
var btn = document.querySelector('.btn');
var content = document.querySelector('.content');

btn.addEventListener('click', function () {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    btn.innerHTML = "Show More";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    btn.innerHTML = "Show Less";
  }
});
