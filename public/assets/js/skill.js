document.querySelectorAll('.aesthetic-button').forEach((button, index) => {
    button.addEventListener('click', function(){
      if (button.textContent === "Negotiating") {
        window.location.href = "/skills/negotiating";

      } else if (button.textContent === "Networking") {
        window.location.href = "/skills/networking";
      } else if (button.textContent === "Building a brand") {
        window.location.href = "/skills/brand";
      } else if (button.textContent === "Emotional Availability") {
        window.location.href = "/skills/emotions";
      } else if (button.textContent === "Proactive Communication") {
          window.location.href = "/skills/comms";
      } else if (button.textContent === "Pitching yourself") {
        window.location.href = "/skills/pitch";
      } else if (button.textContent === "Comfort under stress") {
        window.location.href = "/skills/stress";
      } else if (button.textContent === "Building relationships") {
        window.location.href = "/skills/relationships";
      } else if (button.textContent === "Subversion") {
        window.location.href = "/skills/subversion";
      } else if (button.textContent === "Power Plays") {
        window.location.href = "/skills/plays";
      } else if (button.textContent === "Cold Emailing") {
        window.location.href = "/skills/coldemail";
      } 
    });
  });