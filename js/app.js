window.addEventListener('DOMContentLoaded', () => {

const navigation_items = {
  'Past': 'section1',
  'Present': 'section2',
  'Future': 'section3',
  'Next': 'section4',
};

const ul = document.querySelector('.menuitems');
for (const item in navigation_items) {
  const li = document.createElement('li');
  const a = document.createElement('a')
  a.href = "#" + navigation_items[item];
  a.appendChild(document.createTextNode(item));
  li.appendChild(a);

  ul.appendChild(li);
}
  const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
  const id = entry.target.getAttribute('id');
  if (entry.intersectionRatio > 0) {
  document.querySelector(`.navbar__menu li a[href="#${id}"]`).parentElement.classList.add('active');
  } else {
  document.querySelector(`.navbar__menu li a[href="#${id}"]`).parentElement.classList.remove('active');
  }
  });
  });
  document.querySelectorAll('section[id]').forEach((section) => {
  observer.observe(section);
  });
  document.querySelector('#backbtn')
  .style.backgroundColor = "blueviolet";
  const button = document.getElementById("backbtn")
  button.addEventListener( 'click', function( event ) {
  window.location.href = "#" ;
  });

  });
