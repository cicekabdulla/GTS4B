//HEADER START
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-close");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
    document.body.classList.add("body-overlay");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("body-overlay");
});
//HEADER END  


// ========================== SUB MENU ==========================

const bgicon = document.querySelectorAll(".bg-icon");
bgicon.forEach(item => {
    let menu = item.parentElement;
    let icon=item.lastElementChild;
    const accordioncollapse = menu.nextElementSibling;

    item.addEventListener("click", () => {
        if (!menu.classList.contains("active")) {
            menu.classList.add("active");
        } else {
            menu.classList.remove("active");
        }
        if (menu.classList.contains("active")) {
            accordioncollapse.style.maxHeight = accordioncollapse.scrollHeight + "px";
            icon.style.transform='rotate(45deg)';
        } else {
            accordioncollapse.style.maxHeight = "0";
            icon.style.transform='rotate(0deg)';
        }
    });
});

// ========================== SUB MENU ==========================



//  ========================== LEAZY LOADING OF SECTIONS ==========================


// const sectionloading = document.querySelectorAll(".section-loading");

// window.onscroll = function () {
//     loading()
// }

// function loading() {
//     sectionloading.forEach(section => {
//         const sectionTop1 = section.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         if (sectionTop1 < windowHeight * 0.8) {
//             section.classList.add("show");
//         }
//     })
// }







//CIRCLE START
setInterval(() => {
    if (a < valint1) {
        progressValue1()
    }
}, 10)
setInterval(() => {
    if (k < valint2) {
        progressValue2()
    }
}, 10)
setInterval(() => {
    if (t < valint3) {
        progressValue3()
    }
}, 10)
setInterval(() => {
    if (f < valint4) {
        progressValue4()
    }
}, 10)

// circle 1
const circle1 = document.querySelector(".circle-1");

const value1 = document.querySelector(".value1").firstElementChild;
const valint1 = parseInt(value1.textContent)
let a = 0


function progressValue1() {
    a++;
    value1.textContent = a;
    let test = ((a * 100) / valint1)
    circle1.style["background-image"] = `conic-gradient(#552CED  ${test}%,rgb(237, 231, 231) ${0})`
}

// circle 2
const circle2 = document.querySelector(".circle-2");

const value2 = document.querySelector(".value2").firstElementChild.firstElementChild;
const valint2 = parseInt(value2.textContent)
let k = 0


function progressValue2() {
    k++;
    value2.textContent = k;
    let test = ((k * 100) / valint2)
    circle2.style["background-image"] = `conic-gradient(#552CED  ${test}%,rgb(237, 231, 231) ${0})`
}

// circle 3
const circle3 = document.querySelector(".circle-3");

const value3 = document.querySelector(".value3").firstElementChild.firstElementChild;
const valint3 = parseInt(value3.textContent)
let t = 0


function progressValue3() {
    t++;
    value3.textContent = t;
    let test = ((t * 100) / valint3)
    circle3.style["background-image"] = `conic-gradient(#552CED  ${test}%,rgb(237, 231, 231) ${0})`
}

// circle 4
const circle4 = document.querySelector(".circle-4");

const value4 = document.querySelector(".value4").firstElementChild.firstElementChild;
const valint4 = parseInt(value4.textContent)
let f = 0

function progressValue4() {
    f++;
    value4.textContent = f;
    let test = ((f * 100) / valint4)
    circle4.style["background-image"] = `conic-gradient(#552CED  ${test}%,rgb(237, 231, 231) ${0})`
}
// //CIRCLE END


// ======================  SERVICES  ======================

window.onload = () => {
    createServicesView()
    createPropertiesView()
    setParametrs(0)
}

const serviceTitles = document.querySelector(".service-titles")
async function getServicesData() {
    const services = await (await fetch(" http://localhost:3000/services")).json()
    return services
}
async function createServicesView() {
    const description = document.querySelector(".service-description")
    const services = await getServicesData();
    description.innerHTML = `<p>${services[0].description}</p>`
    // console.log(services[0].title)

    services.forEach(service => {
        serviceTitles.innerHTML += `<div id="${service.id}"><h5>${service.title}</h5></div>`
    });
    activeTitle1(serviceTitles, services, description)
}
function activeTitle1(serviceTitles, services, description) {

    for (let i = 0; i < serviceTitles.children.length; i++) {
        const element1 = serviceTitles.children[i];
        if (i == 0) {
            serviceTitles.children[0].classList.add("active-service");
        }
        element1.addEventListener("click", () => {

            for (let j = 0; j < serviceTitles.children.length; j++) {
                if (i !== j) {
                    serviceTitles.children[j].classList.remove("active-service");
                }
            }
            services.forEach(service => {
                if (element1.id == service.id) {
                    description.innerHTML = `<p>${service.description}</p>`
                    element1.classList.add("active-service")
                }
            });
        }
        )
    }
}
// services slider
const serviceshtml = document.getElementById("slider-wrapper")
async function servicesSlider(serviceTitles, services) {
    const servicesData = await getServicesData()
    servicesData.forEach(service => {
        serviceshtml.innerHTML += `
        <div class="service-slide">
            <div class="inner">
                <h5>${service.title}<div class="title-line"></div></h5>
                <p>
                    ${service.description}
                </p>
            </div>
        </div>`
    });
    getsize(serviceshtml)
}
servicesSlider()

function getsize(serviceshtml) {
    const prev = document.querySelector(".button-prev")
    const next = document.querySelector(".button-next")
    const cardwidth = parseInt(getComputedStyle(serviceshtml.firstElementChild).width, 10);
    const addim = serviceshtml.childElementCount - 1;
    let i = 0;
    let step = 0;
    prev.addEventListener("click", () => {
        i += cardwidth
        step--;
        serviceshtml.style.transform = `translateX(${i}px)`;
        if (step == 0) {
            prev.style.display = "none";
        }
        if (step < addim) {
            next.style.display = "block";
        }
    })
    next.addEventListener("click", prevfunc)
    function prevfunc() {
        step++;
        i -= cardwidth
        serviceshtml.style.transform = `translateX(${i}px)`;
        if (step >= 1) {
            prev.style.display = "block";
        }
        if (step == addim) {
            next.style.display = "none";
        }
    }
    // setInterval(() => {
    //     if (step < addim) {
    //         prevfunc()
    //     }
    // }, 1800)
}
//PROPERTY DESKTOP START
const propertyTitles = document.querySelector(".property-titles");
async function getPropertiesData() {
    const properties = await (await fetch(" http://localhost:3000/property")).json()
    return properties
}

async function createPropertiesView() {
    const properties = await getPropertiesData();
    const description2 = document.querySelector(".property-description");

    description2.innerHTML = `<p>${properties[0].description}</p>
    <div class="property-image">
        <img src="./images/image52.png" alt="">
   </div>`

    properties.forEach(property => {
        propertyTitles.innerHTML += `<div id="${property.id}"><h5>${property.title}</h5></div>`
        // console.log(property.id,property.title);
    });
    activeTitle(propertyTitles, properties, description2)
}


function activeTitle(propertyTitles, properties, description2) {

    for (let i = 0; i < propertyTitles.children.length; i++) {
        const element2 = propertyTitles.children[i];
        if (i == 0) {
            propertyTitles.children[0].classList.add("active-property");
        }
        element2.addEventListener("click", () => {
            for (let j = 0; j < propertyTitles.children.length; j++) {
                if (i !== j) {
                    propertyTitles.children[j].classList.remove("active-property");
                }
            }
            properties.forEach(property => {
                if (element2.id == property.id) {
                    description2.innerHTML = `<p>${property.description}</p>
                     <div class="property-image">
                         <img src="./images/image52.png" alt="">
                    </div>`
                    element2.classList.add("active-property")
                }
            });
        }
        )
    }
}

//PROPERTY DESKTOP END

//PROPERT SLIDER TABLET START

const propertyHtml = document.getElementById("property-slider-wrapper");

async function propertiesSlider() {
    const propertiesData = await getPropertiesData();
    propertiesData.forEach(property => {
        propertyHtml.innerHTML += `
        <div class="property-slide">
        <div class="inner">
          <h5>${property.title}</h5>
          <p class="property-paragraph">${property.description}</p>

          <div class="property-image">
            <img src="./images/image52.png" alt="">
          </div>
        </div>
      </div>
        `
    })
    getSizeProperty(propertyHtml)
}
propertiesSlider()

function getSizeProperty(propertyHtml) {
    const cardWidth = parseInt(getComputedStyle(propertyHtml.firstElementChild).width, 10);
    const prev = document.querySelector(".button-prev1");
    const next = document.querySelector(".button-next1");
    const addim = propertyHtml.childElementCount - 1;

    let i = 0;
    let step = 0;

    function prevFunc1() {
        step--;
        i += cardWidth;

        propertyHtml.style.transform = `translateX(${i}px)`;

        if (step == 0) {
            prev.style.display = "none";
        }
        if (step < addim) {
            next.style.display = "block";
        }
    }

    function nextFunc1() {
        step++;
        i -= cardWidth;

        propertyHtml.style.transform = `translateX(${i}px)`;

        if (step >= 1) {
            prev.style.display = "block";
        }
        if (step == addim) {
            next.style.display = "none";
        }
    }

    prev.addEventListener("click", prevFunc1);

    next.addEventListener("click", nextFunc1);

    // setInterval(() => {
    //     if (step < addim) {
    //         nextFunc();
    //     }
    // }, 2000)

}
//PROPERTY SLIDER TABLET END


// NEWS SLIDER START
const newsHtml = document.getElementById("news-slider-wrapper");
const newsDots = document.querySelectorAll(".dot-news");

async function getNewsData() {
    const news = await (await fetch(" http://localhost:3000/news")).json();
    return news
}




async function newsSlider() {
    const newsData = await getNewsData();
    newsData.forEach(news => {
        newsHtml.innerHTML += `
       <div class="news-slide">
       <div class="inner">
         <div class="news-image">
           <img src="images/${news.img}" alt="">

           <div class="news-content">
             <div class="content-inner">
               <span>${news.header}</span>
               <div>
                 <h3>${news.title}</h3>
                 <span>${news.date}</span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
        `
    })
    getSizeNews(newsHtml)
}
newsSlider()

function getSizeNews(newsHtml) {
    const cardWidth = parseInt(getComputedStyle(newsHtml.firstElementChild).width, 10);
    const prev = document.querySelector(".news-prev-button");
    const next = document.querySelector(".news-next-button");
    const section = document.querySelector('.news').offsetWidth;
    let addim = 0;

    if (section < 576) {
        addim = newsHtml.childElementCount - 1;
    } else if (section > 576 && section < 992) {
        addim = newsHtml.childElementCount - 2;
    } else if (section >= 992) {
        addim = newsHtml.childElementCount - 3;
        // console.log("ok");
        // console.log(addim);
    }

    let i = 0;
    let step = 0;

    function prevFunc() {
        console.log(newsHtml);
        step--;
        i += cardWidth;

        newsHtml.style.transform = `translateX(${i}px)`;

        if (step == 0) {
            prev.style.display = "none";
        }
        if (step < addim) {
            next.style.display = "block";
        }
    }

    function nextFunc() {
        step++;
        i -= cardWidth;

        newsHtml.style.transform = `translateX(${i}px)`;

        if (step >= 1) {
            prev.style.display = "block";
        }
        if (step == addim) {
            next.style.display = "none";
        }
    }

    prev.addEventListener("click", prevFunc);

    next.addEventListener("click", nextFunc);

    // setInterval(() => {
    //     if (step < addim) {
    //         nextFunc();
    //     }
    // }, 2000)

}

//NEWS SLIDER END


//REVIEWS SLIDER START

const reviewsProfile = document.querySelector(".reviews-profile");

async function getReviewsData() {
    const reviews = await (await fetch("http://localhost:3000/reviews")).json();
    return reviews
}

const getEmployee = getReviewsData();

let i = 0;
let prevbtn = document.querySelector(".prev-btn");
let nextbtn = document.querySelector(".next-btn");
let img = document.querySelector(".reviews-image").firstElementChild;
let author = document.querySelector("#author");
let job = document.querySelector("#job");
let content = document.querySelector("#info");
nextbtn.addEventListener("click", next);
prevbtn.addEventListener("click", prev);
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        setParametrs(index);
        console.log()
    });
});


async function next() {
    const employee = await getEmployee;
    i++;
    (i >= employee.length) ? (i = 0, setParametrs(i)) : setParametrs(i);
}
async function prev() {
    const employee = await getEmployee;
    i--;
    i < 0 ? (i = employee.length - 1, setParametrs(i)) : setParametrs(i);
}
async function setParametrs(i) {
    const employee = await getEmployee;

    if (i == 0) {
        content.textContent = employee[i].content
        author.textContent = employee[i].name
        job.textContent = employee[i].job
        img.src = employee[i].img
    }
    // console.log(i);
    // console.log(employee[i])
    content.textContent = employee[i].content
    author.textContent = employee[i].name
    job.textContent = employee[i].job
    img.src = employee[i].img


    dots.forEach((dot, index) => {
        dot.classList.remove("active");
        if (index === i) {
            dot.classList.add("active");
        }
    });

}



//REVIEWS SLIDER END
