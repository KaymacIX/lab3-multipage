// Theme toggle (on all pages)
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}

// Contact form (only on contact.html)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (name === "" || message === "") {
      alert("Please fill out all fields.");
    } else {
      document.getElementById(
        "response"
      ).innerText = `Thanks, ${name}. We'll get back to you soon!`;
      // Optional: reset form
      e.target.reset();
    }
  });
}

// Load users button (only on pages with this button)
const loadUsersBtn = document.getElementById("loadUsersBtn");
if (loadUsersBtn) {
  loadUsersBtn.addEventListener("click", async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      const userList = document.getElementById("userList");
      userList.innerHTML = "";
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
      });
    } catch (err) {
      console.error("Failed to load users:", err);
    }
  });
}

// FAQ questions (only on pages with FAQ)
const questions = document.querySelectorAll(".question");
if (questions.length > 0) {
  questions.forEach((q) => {
    q.addEventListener("click", () => {
      q.nextElementSibling.classList.toggle("visible");
    });
  });
}

// Add this to your script.js file

// Back to Top button functionality
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    
    if (backToTopBtn) {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }
  }
  
  // When the button is clicked, scroll to the top of the document
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function() {
      // For a smooth scroll effect
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }