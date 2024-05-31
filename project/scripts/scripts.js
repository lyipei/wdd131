window.addEventListener('load', () => {
  const year = document.getElementById('currentyear');
  year.innerHTML = new Date().getFullYear();
});



const places = [
    {
      attractions:"Keelung Zhengbin Fishing Harbor",
      location: "Keelung City",
      introduction: "It is a fishing pier that is mainly for holiday, leisure and nostalgia. Its biggest feature is the row of colorful huts next to the pier. Each one has a unique appearance and bright colors, adding a lot of vitality to the pier. breath",
      imageUrl:"https://www.welcometw.com/wp-content/uploads/2021/07/%E5%9F%BA%E9%9A%86%E6%AD%A3%E6%BF%B1%E6%BC%81%E6%B8%AF@sonia_chen322-e1627635649593.jpg",
    },
    {
      attractions: "Chiang Kai-Shek Memorial Hall",
      location: "Taipei City",
      introduction: "The Chiang Kai-shek Memorial Hall was built to commemorate Chiang Kai-shek, the first president of the Republic of China. He passed away in 1975. The following year, the Executive Yuan broke ground to build the Chiang Kai-shek Memorial Hall. The designer was Yang Zhuocheng, who designed the Grand Hotel.",
      imageUrl:"https://www.travel.taipei/image/222956/?r=1638166401625",
    },
    {
      attractions: "The Queen's Head",
      location: "Taipei City",
      introduction: "Yehliu Queen's Head is a famous geological rock formation located in Yehliu Geopark, Taiwan. It resembles the profile of a queen's head, hence the name. This unique natural sculpture has been formed over thousands of years due to coastal erosion and weathering processes, making it a popular tourist attraction for visitors to admire the fascinating beauty of nature's artwork.",
      imageUrl:"https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_A12-00268_3.jpg&sizetype=3",
    },
    {
      attractions: "Jiufen Old Street",
      location: "New Taipei City",
      introduction: "Jiufen Old Street slowly climbs up the hillside. Various shops gather in the narrow streets. The aroma of traditional food is fragrant. Be sure to try Jiufen’s classic snacks such as taro balls, meat balls, grass cakes, etc., as well as small and cute antique toys, rich Taiwanese special commemorative gifts",
      imageUrl:"https://newtaipei.travel/content/images/attractions/25411/1024x768_attractions-image-spliqtzae0q8byeeqgqdfw.jpg",
    },
    {
      attractions: "Taipei 101",
      location: "Taipei City",
      introduction: "It is a super high-rise skyscraper located in Xinyi Planning District, Taipei City, Taiwan, with a height of 508 meters, 101 floors above ground and 5 floors underground[5]. It was the tallest building in the world from its completion on December 31, 2004 to January 4, 2010. It is currently the tallest building in Taiwan and the only building in Taiwan with a height of more than 500 meters and more than 100 floors.",
      imageUrl:"https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock554492527huge-1675684456325.jpg",    
    },
    {
      attractions: "Qingtiangang Grassland",
      location: "Taipei City",
      introduction: "Qingtian Post is located in the center of the Datun volcanic peaks. It is a lava terrace formed by the early lava from Penny Mountain that erupted to the north. Because of its gentle and open terrain,",
      imageUrl:"https://www.popdaily.com.tw/shaper/u/202211/115fdde9-0001-4180-98eb-b57b8a47cd5f.jpeg?resize-w=900&resize-h=468",
    },
    {
      attractions: "Xpark",
      location: "Taoyuan City",
      introduction: "Xpark was established by Yokohama Hakkeijima, which has been operating aquariums in Japan for more than 30 years. It is Taiwan's first urban aquatic park.  In Xpark, there are more than 30,000 aquatic and terrestrial animals of 300 different species on earth living here.",
      imageUrl:"https://img.ltn.com.tw/Upload/playing/page/2020/08/07/200807-23853-3-exsmm.jpg",
  },
    {
      attractions: "Hsinchu City God Temple ",
      location: "Hsinchu City",
      introduction: "The temple is listed as a city-designated historic site, and its main deity is the City God of the City God. There are many famous snacks nearby",
      imageUrl:"https://data.boch.gov.tw/upload/representImageFile/2021-04-23/c85737ea-960f-43af-9df8-db51a32fbdb5/%E4%BB%A3%E8%A1%A8%E5%9C%96.jpg",
  },
    {
      attractions: "17-km Coastline",
      location: "Hsinchu City",
      introduction: "The coastline of Hsinchu City stretches from Nanliaoli in the north to Nangang in the south, and is about 17 kilometers long. It attracts a large number of tourists to ride bicycles here.",
      imageUrl:"https://bobby.tw/wp-content/uploads/pixnet/1bbbd2ed9ada113147b3f417a79049cf.jpg",
  },
    {
      attractions: "Gaomei Wetlands",
      location: "Taichung City",
      introduction: "Due to the combination of muddy and sandy beaches, and the mosaic with the estuary swamp area, a rich and complex wetland ecology has been nurtured. The ecological species are also quite complex. The main species are birds, fish, crabs and other inorganic species. vertebrates and other organisms",
      imageUrl:"https://travel.taichung.gov.tw/content/images/articles/34666/1024x768_image3637227165494659987.jpg",
    },
    {
      attractions: "Shen Ji New Village",
      location: "Taichung City",
      introduction: "The employee residence of the Audit Office during the provincial government period became an idle space after the provincial freeze and was abandoned for many years. Now, after government re-planning, it has been successfully transformed into a youth entrepreneurship base. Through youth vitality and creativity, it has created a dazzling space with charm and charm. Unique atmosphere.",
      imageUrl:"https://travel.taichung.gov.tw/Image/24408?r=637837893165827270",
    },
    {
      attractions: "Yizhong Street",
      location: "Taichung City",
      introduction: "There are many food stalls and restaurants, and all kinds of trendy and popular information can be seen everywhere and easily obtained. Every holiday, there are many people and it's very lively!",
      imageUrl:"https://travel.taichung.gov.tw/image/31557/1024x768",
    },
    {
      attractions: "Wuling Farm",
      location: "Taichung City",
      introduction: "The four seasons have different styles; plum blossoms, cherry blossoms, peach blossoms, pear blossoms, apple blossoms and azaleas bloom in spring; summer and autumn are the harvest periods of peaches, pears and apples; in winter, if you are lucky, you can see snow",
      imageUrl:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_971/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/u37f5yvnik1gg7mxrrrs/%E5%8F%B0%E4%B8%AD%EF%BD%9C%E6%AD%A6%E9%99%B5%E8%BE%B2%E5%A0%B4%E6%A3%AE%E5%91%BC%E5%90%B8%E4%B8%80%E6%97%A5%E9%81%8A%EF%BD%9C%E5%8F%B0%E5%8C%97%E5%87%BA%E7%99%BC.webp",
    },
    {
      attractions: "Baguashan",
      location: "Changhua City",
      introduction: "The environment is very elegant and the view is very vast. It is one of the eight scenic spots in Taiwan. When the Japanese army took over Taiwan and advanced to Changhua in 1895, the volunteers defended Bagua Mountain and fought fiercely with the Japanese army. Behind Bagua Mountain, there was an Anti-Japanese Martyrs Monument Park to guard two ancient cannons.",
      imageUrl:"https://photo.travelking.com.tw/scenery/649A5DBB-6D50-4E69-A599-1A4A1771CF0D_e.jpg",
    },
    {
      attractions: "Qingjing Farm",
      location: "Nantou City",
      introduction: "Surrounded by mountains, the scenery is beautiful and you can see a variety of flora and fauna.",
      imageUrl:"https://images.chinatimes.com/newsphoto/2022-04-05/1024/20220405000036.jpg",
    },
    {
      attractions: "Sun Moon Lake",
      location: "Nantou City",
      introduction: "This is Taiwan's largest freshwater lake, surrounded by stunning mountain scenery, offers visitors beautiful lake views and a range of water activities.",
      imageUrl:"https://image.kkday.com/v2/image/get/h_650%2Cc_fit/s1.kkday.com/product_28441/20190718050541_U0XD8/jpg",
    },
    {
      attractions: "921 Earthquake Museum",
      location: "Taichung City",
      introduction: "It commemorates the devastating 1999 Jiji earthquake, showcasing exhibits about earthquake science, disaster prevention, and the recovery efforts following the earthquake. The park includes preserved structures damaged during the quake, providing visitors with a somber yet educational experience about the earthquake's impact and lessons learned from it.",
      imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/21/5a/c9/3f/921.jpg",
    },
    {
      attractions: "Alishan Forest",
      location: "Chiayi City",
      introduction: "It is renowned for its breathtaking sunrise views from Alishan National Scenic Area, encompassing lush forests and ancient trees like the iconic Alishan Sacred Tree. Visitors can also enjoy the Alishan Forest Railway, a historic narrow-gauge train journey through picturesque landscapes, adding to the charm of this mountainous retreat.",
      imageUrl:"https://gcp-obs.line-scdn.net/0hp-8MYQJZLwIFND1kVr1QVTxiI3M2RikKfExoYSRjeDYuBnRROVRneCU8d2Y0DWEDME4ybCM8JjYtA2gGbFU/w1200",
    },
    {
      attractions: "Yushan National Park",
      location: "Nantou City",
      introduction: "Yushan National Park is home to Taiwan's highest peak, Yushan Mountain, offering spectacular alpine landscapes, diverse flora and fauna, and challenging hiking trails for outdoor enthusiasts. The park's rich biodiversity includes endemic species like the Formosan Black Bear, making it a haven for nature lovers and adventure seekers alike. ",
      imageUrl:"https://www.ysnp.gov.tw/FileDownload/ContentManagement/20200917185611616637714.jpg",
    },
    {
      attractions: "Janhusun Fancyworld",
      location: "Yunlin City",
      introduction: "Jianguo Lake World Theme Park in Taiwan is a captivating destination featuring thrilling rides, entertaining shows, and delightful attractions for visitors of all ages. With its picturesque setting and diverse entertainment offerings, it promises a fun-filled and memorable experience",
      imageUrl:"https://www.janfusun.com.tw/upload/place/show/206/01643009460.jpg",
    },
    {
      attractions: "Chimei Museum",
      location: "Tainan City",
      introduction: "The Chimei Museum in Taiwan is a renowned cultural institution showcasing an extensive collection of Western art, musical instruments, historical artifacts, and natural history exhibits. Its elegant architecture and diverse exhibits make it a must-visit destination for art and history enthusiasts visiting Taiwan.",
      imageUrl:"https://i0.wp.com/www.segreene.com/wp-content/uploads/2023/03/052-%E6%8A%BD%E6%8F%9B_%E5%A5%87%E7%BE%8E%E5%8D%9A%E7%89%A9%E9%A4%A8.jpg?w=1280&ssl=1",
    },
    {
      attractions: "Tainan Confucius",
      location: "Tainan City",
      introduction: "It is a historical and cultural landmark dedicated to the teachings and legacy of Confucius. It features traditional Chinese architecture, serene gardens, and educational exhibitions, offering visitors a glimpse into ancient Chinese philosophy and traditions.",
      imageUrl:"https://www.twtainan.net/content/images/attractions/17552/1024x768_Filedata635593488485210998.jpg",
    },
    {
      attractions: "Yuguang Island",
      location: "Tainan City",
      introduction: "It is a picturesque destination known for its pristine beaches, crystal-clear waters, and vibrant marine life. It's a paradise for snorkeling, diving, and enjoying peaceful coastal scenery, making it a must-visit for nature lovers and beach enthusiasts.",
      imageUrl:"https://www.twtainan.net/content/images/attractions/91908/1024x768_attractions-image-stfsq32-9uugcrwwhbyewg.jpg",
    },
    {
      attractions: "Sicao Green Tunnel",
      location: "Tainan City",
      introduction: "The Sihcao Green Tunnel in Taiwan is a stunning natural attraction formed by lush green mangrove trees lining the waterway. It offers a serene and picturesque environment for leisurely boat rides, bird-watching, and experiencing the beauty of Taiwan's coastal ecosystems.",
      imageUrl:"https://www.swcoast-nsa.gov.tw/image/13062/1024x768",
    },
    {
      attractions: "Navy Destroyer Museum",
      location: "Tainan City",
      introduction: "it offers a unique blend of historical significance and romantic ambiance. The Love Pier is a charming waterfront spot ideal for leisurely strolls and scenic views, while the De-Yang Battleship Museum Park showcases a historic battleship and artifacts, providing visitors with a glimpse into Taiwan's maritime heritage.",
      imageUrl:"https://www.welcometw.com/wp-content/uploads/2020/11/%E5%BE%B7%E9%99%BD%E8%89%A65.jpg",
    },
    {
      attractions: "Love River",
      location: "Kaohsiung City",
      introduction: "Kaohsiung's Love River, Taiwan, is a beloved urban waterway famous for its romantic atmosphere, scenic boat tours, and vibrant waterfront cafes and shops. It's a must-visit destination for couples and travelers seeking a charming blend of nature and city life in Taiwan.",
      imageUrl:"https://khh.travel/image/34289/?r=1620201037150",
    },
    {
      attractions: "Sizihwan Bay",
      location: "Kaohsiung City",
      introduction: "A picturesque coastal area renowned for its stunning sunsets, scenic views of the sea and mountains, and vibrant cultural atmosphere. It's a popular destination for leisurely walks, waterfront dining, and enjoying the natural beauty of Taiwan's southern coast.",
      imageUrl:"https://i0.wp.com/hoolee.tw/wp-content/uploads/20220710175131_89.jpg?resize=900%2C600&quality=100&ssl=1",
    },
    {
      attractions: "The pier-2 Art Center",
      location: "Kaohsiung City",
      introduction: "The Pier-2 Art Center in Taiwan's Kaohsiung is a vibrant hub of creativity, featuring a mix of contemporary art installations, galleries, studios, and cultural events. It's a dynamic space where art enthusiasts can immerse themselves in innovative artworks, workshops, and performances, showcasing the city's thriving arts scene.",
      imageUrl:"https://bobby.tw/wp-content/uploads/pixnet/6adea40c35257f7ca52700cd1c68297b.jpg",
    },
    {
      attractions: "National Museum of Marine Biology",
      location: "Pingtung City",
      introduction: "Here is an immersive educational facility showcasing a diverse range of marine life and ecosystems. Visitors can explore interactive exhibits, learn about marine conservation, and observe fascinating sea creatures up close, making it an engaging and informative experience for all ages.",
      imageUrl:"https://facts.net/wp-content/uploads/2023/09/9-enigmatic-facts-about-national-museum-of-marine-biology-and-aquarium-1694758799.jpg",
    },
    {
      attractions: "Eluanbi Cap Lighthouse",
      location: "Pingtung City",
      introduction: "a historic landmark located in Kenting National Park, Taiwan. It stands proudly as a symbol of maritime navigation and offers panoramic views of the surrounding coastline, making it a popular attraction for visitors interested in Taiwan's maritime history and natural beauty.",
      imageUrl:"https://img.ltn.com.tw/Upload/art/page/800/2021/06/16/70.jpg",
    },
    {
      attractions: "Kenting National Park",
      location: "Pingtung City",
      introduction: "Kenting National Park, situated in southern Taiwan, is a renowned natural reserve celebrated for its stunning coastal landscapes, pristine beaches, and diverse ecosystems. It offers a plethora of outdoor activities such as hiking, snorkeling, and surfing, making it a popular destination for nature lovers and adventure seekers alike. ",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Nanwan_%28South_Bay%29.jpg",
    },
    {
      attractions: "Mr.Brown Avenue",
      location: "Taitung City",
      introduction: "It is famous for its beautiful rows of Sakura cherry blossom trees, which bloom in spring, creating a stunning pink canopy along the avenue. Brown Boulevard is a popular spot for leisurely walks, photography, and enjoying the natural beauty of Taiwan's cherry blossoms during the flowering season.",
      imageUrl:"https://taitunghotels.tw/photodata/20210930164917_d7923e.jpg",
    },
    {
      attractions: "Bunun Tribe Leisure Farm",
      location: "Taitung City",
      introduction: "Bunun Leisure Farm is a tranquil retreat located in the heart of Taiwan's indigenous Bunun tribe territory. It offers a unique cultural experience where visitors can immerse themselves in the traditional way of life of the Bunun people, including hands-on activities like weaving, traditional dances, and enjoying authentic Bunun cuisine.",
      imageUrl:"https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/kqmjbuu3sp98yyeang9u.webp",
    },
    {
      attractions: "Farlory Oceanpark",
      location: "Hualien Country",
      introduction: "offering a wide range of attractions and entertainment for visitors of all ages. From thrilling rides and water slides to marine animal exhibits and educational shows, the park provides a fun-filled experience centered around oceanic themes. It's a popular destination for families and adventure seekers looking to enjoy a day of excitement and exploration in a vibrant coastal setting.",
      imageUrl:"https://pic.easytravel.com.tw/Attachments/23/1514/m/081.JPG",
    },
    {
      attractions: "Taroko Gorge",
      location: "Hualien Country",
      introduction: "Taroko National Park, situated in eastern Taiwan, is a spectacular natural wonderland renowned for its stunning marble gorges, lush forests, and towering cliffs. Visitors can explore a network of hiking trails that lead to breathtaking viewpoints, serene waterfalls, and cultural landmarks such as the Eternal Spring Shrine",
      imageUrl:"https://res.klook.com/image/upload/c_fill,w_1081,h_608/q_65/Taroko-2_i6jepw.webp",
    },
    {
      attractions: "Ci Sing Tan Scenic Spot",
      location: "Hualien Country",
      introduction: "It located on the eastern coast of Taiwan, is a designated coastal beauty spot known for its picturesque landscapes and serene ambiance. Visitors can enjoy panoramic views of the Pacific Ocean, sandy beaches, and unique rock formations. The area is popular for leisurely walks, beachcombing, and enjoying the natural beauty of Taiwan's coastline.",
      imageUrl:"https://margaret.tw/wp-content/uploads/2020/08/nEO_IMG_DSC06666.jpg",
    },
    {
      attractions: "National Center for Traditional Arts",
      location: "Yilan Country",
      introduction: "It features exhibitions, workshops, and demonstrations showcasing a variety of traditional techniques such as pottery, weaving, and woodworking. Visitors can immerse themselves in the rich heritage of Taiwan's artisanal traditions and even participate in hands-on activities to learn these ancient crafts firsthand.",
      imageUrl:"https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/whvgawu2eecspmezzkrm.webp",
    },
    {
      attractions: "Lanyang Museum",
      location: "Yilan Country",
      introduction: "It is a striking architectural marvel designed to resemble the cuestas (steep, sloping hills) of the nearby Guihou area. It showcases the natural and cultural history of the Lanyang Plain region, featuring exhibits on geology, ecology, indigenous cultures, and the development of Yilan. ",
      imageUrl:"https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/psolofv7o9e4ryloe4g8.webp",
    },
    {
      attractions: "Bambi Land",
      location: "Yilan Country",
      introduction: "It is a charming recreational farm known for its picturesque landscapes and friendly deer that roam freely. Visitors can interact with and feed the deer, making for a delightful and memorable experience, especially for families and children. The farm also offers various outdoor activities, scenic walking paths, and opportunities to learn about local wildlife and agriculture, providing a serene escape into nature.",
      imageUrl:"https://images-tw.girlstyle.com/wp-content/uploads/2020/06/S__307027987.jpg?auto=format&w=1053",
    },
    {
      attractions: "Jimmy Park",
      location: "Yilan Country",
      introduction: "It is a whimsical and artistic park inspired by the works of renowned Taiwanese illustrator Jimmy Liao. The park features vibrant, life-sized installations and sculptures from Jimmy's beloved storybooks, creating an enchanting environment that appeals to both children and adults. ",
      imageUrl:"https://travelababies.com/wp-content/uploads/2018/01/%E5%B9%BE%E7%B1%B3%E5%BB%A3%E5%A0%B4%EF%BC%91_5.jpg",
    },
    {
      attractions: "Waiao Beach",
      location: "Yilan Country",
      introduction: "It is a popular destination known for its wide sandy shores, clear waters, and excellent surfing conditions. The beach offers stunning views of Guishan Island and is a great spot for water sports, sunbathing, and enjoying the coastal scenery. With its relaxed atmosphere and beautiful natural surroundings, Waiao Beach is a favorite spot for both locals and tourists seeking a beachside getaway.",
      imageUrl:"http://www.tonyhuang39.com/tony/tony1338/20180725_02.JPG",
    },
  ];

  const renderAttraction = (place) => {
    const container = document.querySelector('.attraction-container');
    const figure = document.createElement('figure');
    figure.classList.add('hover');

    const img = document.createElement('img');
    img.src = place.imageUrl;
    img.alt = place.attractions;
    img.loading = "lazy";
    figure.appendChild(img);

    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `
        <h3>${place.attractions}</h3>
        <p>Location: ${place.location}</p>
        <p>Introduction: ${place.introduction}</p>
    `;
    figure.appendChild(figcaption);

    container.appendChild(figure);
};

// Function to display attractions based on filters
const displayAttractions = (filteredAttractions) => {
    const container = document.querySelector('.attraction-container');
    container.innerHTML = ''; // Clear existing content
    filteredAttractions.forEach(renderAttraction);
};

document.getElementById('home').addEventListener('click', () => {
  // Display all attractions
  displayAttractions(places);
});

// Filter attractions based on the "North" region when the button is clicked
document.getElementById('north').addEventListener('click', () => {
    const northPlaces = places.filter(place => {
        const northernCities = ["Taipei City", "New Taipei City", "Keelung City", "Hsinchu City", "Taoyuan City", "Heinchu Country", "Yilan Country"];
        return northernCities.includes(place.location);
    });
    displayAttractions(northPlaces);
});

document.getElementById('south').addEventListener('click', () => {
  const southPlaces = places.filter(place => {
      const southernCities = ["Chiayi City", "Tainan City", "Kaohsiung City", "Pingtung City"];
      return southernCities.includes(place.location);
  });
  displayAttractions(southPlaces);
});

document.getElementById('east').addEventListener('click', () => {
  const eastPlaces = places.filter(place => {
      const easternCities = ["Hualien Country", "Taitung City"];
      return easternCities.includes(place.location);
  });
  displayAttractions(eastPlaces);
});

document.getElementById('center').addEventListener('click', () => {
  const centerPlaces = places.filter(place => {
      const centralCities = ["Taichung City", "Changhua City", "Nantou City","Yunlin CIty"];
      return centralCities.includes(place.location);
  });
  displayAttractions(centerPlaces);
});


// Initial display of all attractions
displayAttractions(places);

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});