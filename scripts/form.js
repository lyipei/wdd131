window.addEventListener('load', () => {
    const year = document.getElementById('currentyear');
    year.innerHTML = new Date().getFullYear();
});

window.addEventListener('load', () => {
    const modified = document.getElementById('lastModified');
    modified.innerHTML = document.lastModified;
});
const products = [
    { id: fc-1888, name: "flux capacitor", averagerating: 4.5 },
    { id: fc-2050, name: "power laces", averagerating: 4.7 },
    { id: fs-1987, name: "time circuits", averagerating: 3. },
    { id: ac-2000, name: "low voltage reactor", averagerating: 3. },
    { id: jj-1969, name: "warp equalizer", averagerating: 5. }
  ];
  
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById('productName');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
})