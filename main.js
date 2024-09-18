document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const toggleIcon = document.getElementById('toggle-icon');

    sidebar.classList.toggle('collapsed');
    content.classList.toggle('expanded');
    
    if (sidebar.classList.contains('collapsed')) {
      toggleIcon.classList.remove('bi-chevron-left');
      toggleIcon.classList.add('bi-chevron-right');
    } else {
      toggleIcon.classList.remove('bi-chevron-right');
      toggleIcon.classList.add('bi-chevron-left');
    }
  });


const relatorieBtn = document.getElementById('generate-relatorie-btn');
const modal = document.querySelector('dialog');
const generateRelatorieBtn = document.querySelector('dialog button')

relatorieBtn.addEventListener('click', function() {
  modal.show();
})  

generateRelatorieBtn.addEventListener('click', function() {
  modal.close();
})  