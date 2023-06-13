function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
  
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  
    if (menu.classList.contains('active')) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  }
  
  // Close the menu when a menu item is clicked
  const menuItems = document.querySelectorAll('.menu li a');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const menu = document.querySelector('.menu');
      const hamburger = document.querySelector('.hamburger');
  
      menu.style.display = 'none';
      menu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
  