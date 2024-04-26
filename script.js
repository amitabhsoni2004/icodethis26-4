document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
  });
  
  let submit = document.getElementById("submit");
  let email = document.getElementById("email");
  let loginmess = document.querySelector(".loginmess");
  let greenTimer = document.querySelector(".greenTimer");
  
  submit.addEventListener("click", () => {
    let inputValue = email.value.trim();
    if (inputValue !== "") {
      loginmess.style.display = "flex";
    }
  });
  
  greenTimer.addEventListener("animationend", () => {
    loginmess.style.display = "none";
    location.reload();
  });
  
  const imgElement = {
    first: {
      url: "https://images.unsplash.com/photo-1540396776447-f2a5b9a020cf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
      author: "Aline Rai",
      date: "1 year ago",
    },
    second: {
      url: "https://images.unsplash.com/photo-1543360612-e5f79385ef18?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
      author: "Jamini Luni",
      date: "2 year ago",
    },
    third: {
      url: "https://images.unsplash.com/photo-1544408649-a2f9b76ca32d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
      author: "Aruli Jain",
      date: "3 year ago",
    },
    fourth: {
      url: "https://images.unsplash.com/photo-1550586875-6ef206d9b42c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
      author: "Adam Jampi",
      date: "4 year ago",
    },
    fifth: {
      url: "https://images.unsplash.com/photo-1566228075280-70e167d08f78?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
      author: "Pat Cummins",
      date: "5 year ago",
    },
  };
  
  let members = document.querySelector(".members");
  let userCard1 = document.createElement("div");
  let icons = document.querySelectorAll(".icons");
  let card = document.querySelector(".card");
  
  icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      card.style.display = "none";
      userCard1.style.display = "flex";
      userCard1.classList.add("userCard");
      userCard1.innerHTML = `
        <img src="${imgElement[Object.keys(imgElement)[index]].url}" alt="">
        <p>${imgElement[Object.keys(imgElement)[index]].author}</p>
        <small>${imgElement[Object.keys(imgElement)[index]].date}</small>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none" class="close">
          <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      `;
      members.appendChild(userCard1);
  
      let close1 = document.querySelector(".close");
      function hide() {
        userCard1.style.display = "none";
      }
      function show() {
        card.style.display = "flex";
      }
      close1.addEventListener("click", () => {
        hide();
        show();
      });
    });
  });