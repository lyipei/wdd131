var currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = '©' + currentYear + 'Yipei Lin';

var lastModified = document.lastModified;
document.getElementById('lastModified').textContent = 'Last Modified:' + lastModified;