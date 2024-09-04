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