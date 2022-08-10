function highlightLink() {
  const page = document.URL.split('/').pop();
  const links = document.querySelectorAll('.header nav a');
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  })
}
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  highlightLink()