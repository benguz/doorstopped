document.querySelectorAll('.aesthetic-button').forEach((button, index) => {
    button.addEventListener('click', function(){
      if (button.textContent === "Negotiating") {
        window.location.href = "/skills/negotiating.html";

      } else if (button.textContent === "Networking") {
        window.location.href = "/skills/networking.html";
      } else if (button.textContent === "Building a brand") {
        window.location.href = "/skills/brand.html";
      }
    });
  });