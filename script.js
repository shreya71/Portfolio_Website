const cursor = document.querySelector('.custom-cursor');

// Move cursor
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Add hover effect on interactive elements
const hoverElements = document.querySelectorAll('button, a, btn');

hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});


  const btn = document.querySelector('.btn-r');
  const text = document.getElementById('text');

  const originalText = text.innerHTML;
  const newText = "I spend most of my time talking to my computer in a mix of confidence and confusion sometimes it listens, sometimes it throws errors 😄. I enjoy writing code, breaking things on purpose (and sometimes by accident), and figuring out why it didn’t work at 2 AM.";

  // When pressed (mouse)
  btn.addEventListener('mousedown', () => {
    text.innerHTML = newText;
  });

  // When released (mouse)
  btn.addEventListener('mouseup', () => {
    text.innerHTML = originalText;
  });

  // If mouse leaves button while holding
  btn.addEventListener('mouseleave', () => {
    text.innerHTML = originalText;
  });

  // Touch support (mobile)
  btn.addEventListener('touchstart', () => {
    text.innerHTML = newText;
  });

  btn.addEventListener('touchend', () => {
    text.innerHTML = originalText;
  });


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


const skills = {
  frontend: [
    "loading languages & frameworks...",
  "✔ C++",
  "✔ C / C#",
  "✔ JavaScript",
  "✔ Python",
  "✔ .NET",
  "✔ React",
  "✔ Node.js",
  "✔ Express"
  ],
  backend: [
    "initializing development stack...",
  "✔ HTML, CSS",
  "✔ RESTful APIs",
  "✔ CRUD Operations",
  "✔ JSON Handling",
  "✔ SQL",
  "✔ PostgreSQL",
  "✔ DBMS Concepts"
  ],
  tools: [
    "booting devops tools...",
  "✔ Git & GitHub",
  "✔ GitHub Actions (CI/CD)",
  "✔ Docker",
  "✔ Kubernetes",
  "✔ AWS",
  "✔ GCP",
  "✔ Postman",
  "✔ VS Code"
  ],
  other: [
    "loading core fundamentals...",
  "✔ Data Structures & Algorithms",
  "✔ Object-Oriented Programming (OOP)",
  "✔ Operating Systems",
  "✔ DBMS",
  "✔ Mathematics",
  "✔ Problem Solving"
  ]
};

function typeLine(container, text, speed = 30) {
  return new Promise(resolve => {
    let i = 0;
    const line = document.createElement("div");
    container.appendChild(line);

    function typing() {
      if (i < text.length) {
        line.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else {
        resolve();
      }
    }
    typing();
  });
}

async function runTerminal(id) {
  const container = document.getElementById(id);
  container.innerHTML = ""; // clear previous output

  for (let line of skills[id]) {
    await typeLine(container, "> " + line);
  }
}


 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
     delay : 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .skill-container, .portfolio-box, .contact form, .category', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1,.ab-content, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
  strings: ["Developer", "Problem Solver", "Gamer 😏"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
  }
);