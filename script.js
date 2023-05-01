document.addEventListener('DOMContentLoaded', () => {
    // Get the sections and circlesnav elements
    const sections = document.querySelectorAll('section');
    const circlesnav = document.querySelector('.circlesnav');
  
    // Initialize the starting index based on the hash fragment or the first visible section
    let startIndex = -1;
    if (window.location.hash) {
      const sectionId = window.location.hash.slice(1);
      const section = document.getElementById(sectionId);
      if (section) {
        startIndex = [...sections].indexOf(section);
      } else if (sections.length > 0) {
        const rect = sections[0].getBoundingClientRect();
        const headerHeight = document.querySelector('.header').offsetHeight;
        if (rect.top - headerHeight <= window.innerHeight / 2) {
          startIndex = 0;
        }
      }
    }
    if (startIndex === -1 && sections.length > 0) {
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const headerHeight = document.querySelector('.header').offsetHeight;
        if (rect.top - headerHeight <= window.innerHeight / 2) {
          startIndex = i;
          break;
        }
      }
    }
  
    // Add a scroll event listener to the window
    window.addEventListener('scroll', () => {
      // Get the height of the header element
      const headerHeight = document.querySelector('.header').offsetHeight;
  
      // Loop through each section and check if it is in view
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top - headerHeight <= window.innerHeight / 2) {
          startIndex = i;
        }
      }
  
      // If the current index is 2 or greater, show the circlesnav
      if (circlesnav && sections.length > 0 && startIndex >= 1 && startIndex + 1 >= 2) {
        circlesnav.classList.add('visible');
      } else if (circlesnav) {
        circlesnav.classList.remove('visible');
      }
    });
  });
  
