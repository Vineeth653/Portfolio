fetch('sidebar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
      });

fetch('topbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('topbar-container').innerHTML = data;
      });