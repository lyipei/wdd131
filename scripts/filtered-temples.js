window.addEventListener('load', () => {
    const year = document.getElementById('currentyear');
    year.innerHTML = new Date().getFullYear();
});

window.addEventListener('load', () => {
    const modified = document.getElementById('lastModified');
    modified.innerHTML = document.lastModified;
});
// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const attraction = [
    {
      attractions: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/attractionldsorg/bc/attraction/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      attractions: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/attractionldsorg/bc/attraction/photo-galleries/manti-utah/400x250/manti-temple-766504-wallpaper.jpg"
    },
    {
      attractions: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/attractionldsorg/bc/attraction/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
    },
    {
      attractions: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/attractionldsorg/bc/attraction/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      attractions: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/attractionldsorg/bc/attraction/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      attractions: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/attractionldsorg/bc/attraction/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      attractions: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/attractionldsorg/bc/attraction/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        attractions: "Taipei Taiwan",
        location: "Taipei, Taipei, Taiwan",
        dedicated: "1984, November, 17",
        area: 9945,
        imageUrl:
        "https://content.churchofjesuschrist.org/attractionldsorg/bc/attraction/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-459051-wallpaper.jpg"
    },
    {
        attractions: "Calgray Alberta",
        location: "Calgary, Alberta, Canada",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl:
        "https://content.churchofjesuschrist.org/attractionldsorg/bc/attraction/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-before-open-house-1033408-wallpaper.jpg"
    },
    {
        attractions: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl:
        "https://content.churchofjesuschrist.org/attractionldsorg/bc/attraction/photo-galleries/laie-hawaii/400x250/laie-temple-775370-wallpaper.jpg"
    },

  ];
  (function() {
    // Constants for DOM elements
    const container = document.querySelector('.temple-container');
    const homeLink = document.getElementById('home');
    const oldLink = document.getElementById('old');
    const newLink = document.getElementById('new');
    const largeLink = document.getElementById('large');
    const smallLink = document.getElementById('small');

    // Function to render a single temple element
    const renderTemple = (temple) => {
        const figure = document.createElement('figure');
        figure.classList.add('hover');

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.attractions;
        img.loading = "lazy";
        figure.appendChild(img);

        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
            <h3>${temple.attractions}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${formatDate(temple.dedicated)}</p>
            <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        `;
        figure.appendChild(figcaption);

        container.appendChild(figure);
    };

    // Function to display attraction based on filters
    const displayattraction = (filteredattraction) => {
        container.innerHTML = ''; // Clear existing content
        filteredattraction.forEach(renderTemple);
    };

    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        return `${year}, ${month}, ${day}`;
    };

    // Event listeners for navigation links
    homeLink.addEventListener('click', () => displayattraction(attraction));
    oldLink.addEventListener('click', () => displayattraction(attraction.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)));
    newLink.addEventListener('click', () => displayattraction(attraction.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)));
    largeLink.addEventListener('click', () => displayattraction(attraction.filter(temple => temple.area > 90000)));
    smallLink.addEventListener('click', () => displayattraction(attraction.filter(temple => temple.area < 10000)));

    // Initial display of all attraction
    displayattraction(attraction);
})();