document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    for (const link of navLinks) {
      link.addEventListener("click", clickHandler);
    }
  
    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;
  
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });

  function navigateToDashboard() {
    window.location.href = "dashSplash.html";
  }
  function navigateToAbout() {
    window.location.href = "index.html#about";
  }
  function navigateToBook() {
    window.location.href = "index.html#book";
  }
  function navigateToContact() {
    window.location.href = "index.html#footer";
  }
  function navigateToHome() {
    window.location.href = "index.html";
  }


  function navigateToAdminLogin() {
    window.location.href = "adminlogin.html";
  }

  function navigateToUserLogin() {
    window.location.href = "userlogin.html";
  }
  function navigateToUserSignin() {
    window.location.href = "usersignup.html";
  }



