alert("hii welcome to my website enjoyy!")
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});



const fadeElements = document.querySelectorAll('.fade-in');

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // trigger on load


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.Name.value.trim();
  const email = this.email.value.trim();
  const subject = this.subject.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email address.");
    return;
  }

  alert("Message sent successfully!");
  this.reset();
});
