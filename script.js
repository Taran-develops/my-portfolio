// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Create overlay element
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Project card functionality
document.addEventListener('DOMContentLoaded', function() {
  const projectButtons = document.querySelectorAll('.project-button');
  const projectCards = document.querySelectorAll('.project-card');
  const closeButtons = document.querySelectorAll('.close-btn');
  const navLinks = document.querySelectorAll('.navbar a');

  // Open project cards
  projectButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      const projectCard = document.getElementById(projectId);
      
      // Add modal-open class to body
      document.body.classList.add('modal-open');
      
      // Show overlay and card
      overlay.style.display = 'block';
      projectCard.style.display = 'block';
      
      // Scroll to top of card
      window.scrollTo(0, 0);
    });
  });

  // Close project cards
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectCard = this.closest('.project-card');
      closeModal(projectCard);
    });
  });

  // Close when clicking overlay
  overlay.addEventListener('click', function() {
    projectCards.forEach(card => {
      if (card.style.display === 'block') {
        closeModal(card);
      }
    });
  });

  // Close modal function
  function closeModal(element) {
    element.style.display = 'none';
    overlay.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  // Smooth scrolling for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // Close any open modals first
      projectCards.forEach(card => {
        if (card.style.display === 'block') {
          closeModal(card);
        }
      });
      
      // Scroll to section
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
});
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for navbar height
          behavior: "smooth"
        });
      }
    });
   
    // Function to open a project card
function openProject(projectId) {
  // First close any open cards
  const allCards = document.querySelectorAll('.project-card');
  allCards.forEach(card => {
    card.style.display = 'none';
  });
  
  // Then open the selected one
  const projectCard = document.getElementById(projectId);
  if (projectCard) {
    projectCard.style.display = 'block';
    
    // Smooth scroll to the card
    projectCard.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  // Get all elements
  const projectButtons = document.querySelectorAll('.project-button');
  const projectCards = document.querySelectorAll('.project-card');
  const closeButtons = document.querySelectorAll('.close-btn');

  // Add click event to project buttons
  projectButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      const projectCard = document.getElementById(projectId);
      
      // Show the card and overlay
      projectCard.style.display = 'block';
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  });

  // Add click event to close buttons
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectCard = this.closest('.project-card');
      projectCard.style.display = 'none';
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling
    });
  });

  // Close when clicking overlay
  overlay.addEventListener('click', function() {
    projectCards.forEach(card => {
      card.style.display = 'none';
    });
    this.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});
  });