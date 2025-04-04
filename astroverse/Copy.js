let navbar = document.getElementById("navbar");
navbar.innerHTML = `
             <div class="container-fluid">
                <h1 class="nav-title">
                    <a class="navbar-brand fs-2" href="./index.html"><u>Astro<span class="hstyle">Verse</span></u></a>
                    <span class="com-text">.com</span>
                </h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav  mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="planets.html">Planets</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="./comet.html">Comets</a></li>
                                <li><a class="dropdown-item" href="./bigbang.html">Big Bang</a></li>
                                <li>
                                </li>
                                <li><a class="dropdown-item" href="./constellation.html">Constellations</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="./index.html#developments" tabindex="-1" aria-disabled="true">Developments</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="./observation.html#observe" tabindex="-1" aria-disabled="true">Observation</a>
                        </li>
                    </ul>
                    <button onclick="toggleTheme()" class='butn'>
                        Light Mode
                    </button>
                </div>
            </div> 
            `
let footer = document.getElementById("footer");
footer.innerHTML = `
        <div class="footer">
        <div class="foot-title">
            <a href="./index.html"><u>Astro<span class="hstyle">Verse</span></u></a>
            <span class="com-text">.com</span>
        </div>

        <span>
            <p>AstroVerse is a PK space and technological website and company.<a href="" style="font-weight: bold;">
                    <a class="foot-link">Visit Our corporate
                        site</a></p>
        </span>
        <hr>
        <div class="foot-items d-flex justify-content-center">
            <div class="row m-0 p-0 " style="width: 70vw;">
                <div class="col-md-3 col-sm-6">
                    <a href="./index.html">Home</a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="./index.html#gallery">Gallery</a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="./planets.html">Planets</a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="./comet.html">Comets</a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="./bigbang.html">Latest Developments</a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="./constellation.html">Constellation</a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="./observation.html">Observation</a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="./index.html#developments">Big Bang</a>
                </div>

            </div>
        </div>
        <hr>
        <span style="display: flex; justify-content: center; color: #f8f9fa;">
            <p><a class="foot-link">&copy; 2025 Astro Verse. </a>

            <p style="margin-left: 5px;"> Follow AstroVerse</p>
            <div class="social-icons">
                <a href="https://www.instagram.com/" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <i class="fab fa-x-twitter"></i>
                </a>
            </div>

            </p>
        </span>

    </div>
`            
let card = document.getElementById('card');
const cardcontent = [
    {
        img: "./images/Sun.webp",
        refrence: "./planets.html#sun",
        heading: "The Sun – The Fiery Heart of the Solar System",
        text: " The Sun is a blazing ball of fire and energy, giving life to everything in the Solar System. It is so massive that it makes up 99.8% of the system’s total mass. Without its warmth and light, life on Earth wouldn’t exist."
    },
    {
        img: "./images/Mercury.jpg",
        refrence: "./planets.html#mercury",
        heading: "Mercury – The Swift Messenger",
        text: "The smallest and fastest planet, zooming around the Sun in just 88 days. It faces scorching heat by day and freezing cold by night."
    },
    {
        img: "./images/Venus.jpg",
        refrence: "./planets.html#venus",
        heading: "Venus – The Fiery Queen",
        text: "  A world of intense heat and crushing pressure, wrapped in thick clouds of toxic gas. It’s Earth’s twin in size but a complete opposite in conditions."
    },
    {
        img: "./images/Earth.jpg",
        refrence: "./planets.html#earth",
        heading: "Earth – The Blue Gem of Life",
        text: "The only planet known to host life. Covered in vast oceans, lush forests, and buzzing with energy—Earth is a miracle of nature."
    },
    {
        img: "./images/Mars.jpg",
        refrence: "./planets.html#mars",
        heading: "Mars – The Red Warrior",
        text: "A dusty, cold desert world with towering volcanoes and ancient riverbeds. Scientists dream of making it humanity’s second home."
    },
    {
        img: "./images/Jupiter.jpg",
        refrence: "./planets.html#jupiter",
        heading: "Jupiter – The Mighty Giant",
        text: "A planet so huge that all the other planets could fit inside it. Its Great Red Spot is a storm larger than Earth, raging for centuries."
    },
    {
        img: "./images/Saturn.jpg",
        refrence: "./planets.html#saturn",
        heading: "Saturn – The Lord of the Rings",
        text: "Saturn is famous for its stunning rings, made of ice and rock particles. It is a gas giant with a unique beauty."
    },
    {
        img: "./images/Uranus.jpg",
        refrence: "./planets.html#uranus",
        heading: "Uranus – The Tilted Ice King",
        text: "This mysterious planet spins sideways. Its pale blue color comes from frozen methane in its atmosphere, making it a true ice giant."
    },
    {
        img: "./images/Neptune.jpg",
        refrence: "./planets.html#neptune",
        heading: "Neptune – The Stormy Deep Blue",
        text: "The windiest planet in the Solar System, with storms that rage faster than a jet plane. Its deep blue color makes it one of the most stunning planets."
    },
]
for (let i = 0; i < 9; i++) {
    card.innerHTML += `
    <div class="col-3">
        <a href="${cardcontent[i].refrence}">
            <div class="card" style="width: 18rem">
                <img src="${cardcontent[i].img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${cardcontent[i].heading}</h5>
                    <p class="card-text">
                        ${cardcontent[i].text}
                    </p>
                </div>
            </div>
        </a>
    </div>
`
}
// let bigcards = document.getElementById('card2')
// const bigcardscontent = [
//     {
//         img: "./images/Sun.webp",
//         refrence: "./planets.html#sun",
//         heading: "The Sun – The Fiery Heart of the Solar System",
//         text: " The Sun is a blazing ball of fire and energy, giving life to everything in the Solar System. It is so massive that it makes up 99.8% of the system’s total mass. Without its warmth and light, life on Earth wouldn’t exist."
//     },
// ]
// for (let i = 0; i < 9; i++) {
//     bigcardscard.innerHTML += `
//     // <div class="col-3">
//     //     <a href="${cardcontent[i].refrence}">
//     //         <div class="card" style="width: 18rem">
//     //             <img src="${cardcontent[i].img}" class="card-img-top">
//     //             <div class="card-body">
//     //                 <h5 class="card-title">${cardcontent[i].heading}</h5>
//     //                 <p class="card-text">
//     //                     ${cardcontent[i].text}
//     //                 </p>
//     //             </div>
//     //         </div>
//     //     </a>
//     // </div>
// `
// }