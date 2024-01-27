"use strict";

//Create a function that hides the current element

function textSlider() {
    var hiddenSocial = document.getElementById("hidden-social");
    var hiddenSocialInfo = document.querySelector(".hidden-social-info");
    var exploreButton = document.querySelector(".ExploreBtn");

    // Check if hidden-social is already visible
    if (hiddenSocial.style.display === "none") {
        hiddenSocial.style.display = "block";
        hiddenSocial.style.animation = "1s slide-right forwards";
        exploreButton.style.display = "none";

        // Slide in hidden-social-info
        hiddenSocialInfo.style.bottom = "50%"; // Adjust as needed to position correctly
    } else {
        hiddenSocial.style.animation = "1s slide-left forwards";
        setTimeout(() => {
            hiddenSocial.style.display = "none";
            exploreButton.style.display = "block";

            // Slide out hidden-social-info
            hiddenSocialInfo.style.bottom = "-100%";
        }, 1000);
    }
}


(function () {

    let accordion_btns  = document.querySelectorAll('.accordion_container .accordion .header'),
        accordion_bodys = document.querySelectorAll('.accordion_container .accordion .body');

    if(accordion_btns && accordion_bodys)
    {
        accordion_btns = Array.isArray(accordion_btns) ? accordion_btns : Object.values(accordion_btns);
        accordion_btns.forEach(accordion_btn=>{
            accordion_btn.addEventListener('click', function(){
                process_accordion(this);
            });
        });

        function process_accordion(x) {
            set_height_0();

            let next_sibling = x.nextElementSibling;
            if(next_sibling.offsetHeight>0)
            {
                next_sibling.style.height = '0px';
                x.closest('.accordion').classList.remove('active');
            } else {
                next_sibling.style.height = next_sibling.scrollHeight+30+'px';
                x.closest('.accordion').classList.add('active');
            }
        }

        function set_height_0() {
            accordion_bodys = Array.isArray(accordion_bodys) ? accordion_bodys : Object.values(accordion_bodys);
            accordion_bodys.forEach(accordion_body=>{
                accordion_body.style.height = '0px';
                accordion_body.closest('.accordion').classList.remove('active');
            });
        }
    }

    //Create a function for click events with variables for different buttons and logic

    let currentProjects = 0;
    const projectsPerLoad = 3; // Number of projects to load each time
    const allProjects = [
        { title: "Blog Platform", description: "A simple blog where users can create,edit and delete blog posts.", imageUrl: "image1.jpg" },
        { title: "Weather App", description: "An application that displays real-time weather information based on the user's location", imageUrl: "image2.jpg" },
        { title: "E-Commerce Storefront", description: "A mock e-commerce website with product listings and a shopping cart.", imageUrl: "image3.jpg" },
        { title: "Interactive Quiz App", description: "An interactive web-based quiz application", imageUrl: "image3.jpg" },
        { title: "Event Planner Tool", description: "An event planning tool that allows users to create and manage events.", imageUrl: "image3.jpg" },
        { title: "Restaurant Reservation System", description: "A web application for a fictional restaurant that allows customers to make online reservations.", imageUrl: "image3.jpg" },

    ];

    function createProjectCard(project, index) {
        const card = document.createElement("div");
        card.className = "project-card glass fade-in";
        card.style.marginBottom = "40px";
        card.style.marginTop = "10px";

        // Determine the FontAwesome icon class based on the project type
        let iconClass;
        switch (project.title) {
            case "Blog Platform":
                iconClass = "fa-solid fa-blog";
                break;
            case "Weather App":
                iconClass = "fa-solid fa-cloud";
                break;
            case "E-Commerce Storefront":
                iconClass = "fa-solid fa-store";
                break;
            case "Interactive Quiz App":
                iconClass = "fa-solid fa-question";
                break;
            case "Event Planner Tool":
                iconClass = "fa-solid fa-calendar";
                break;
            case "Restaurant Reservation System":
                iconClass = "fa-solid fa-utensils";
                break;
            // Add more cases for other projects with their corresponding icons
            default:
                iconClass = "fa-solid fa-circle-question"; // Default icon if none match
        }

        card.innerHTML = `
        <h3>${project.title}</h3>
        <br>
        <i class="${iconClass} icon"></i>
        <p>${project.description}</p>
    `;
        return card;
    }

    function loadProjects() {
        const portfolio = document.getElementById("portfolio");
        const totalLoad = Math.min(currentProjects + projectsPerLoad, allProjects.length);

        for (; currentProjects < totalLoad; currentProjects++) {
            portfolio.appendChild(createProjectCard(allProjects[currentProjects], currentProjects));
        }
    }

    document.getElementById("loadMore").addEventListener("click", loadProjects);

    // Initial load
    loadProjects();
    function DisplayHomePage() {
        console.log("Called DisplayHomePage()");
        let ExploreBtn = document.getElementById("ExploreBtn");
        let AboutUsSection = document.getElementById("AboutUsSection");


    }


    function DisplayProductPage(){
        console.log("Called DisplayProductPage()");
    }

    function DisplayAboutUsPage(){
        console.log("Called DisplayAboutUsPage()");
    }

    function DisplayServicePage(){
        console.log("Called DisplayServicePage()");
    }

    function DisplayContactUsPage(){
        console.log("Called DisplayContactUdPage()");

        let sendButton = document.getElementById("submitButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function (){

            if(subscribeCheckbox.checked){
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize()){
                   let key = contact.fullName.substring(0,1) + Date.now();
                   localStorage.setItem(key, contact.serialize());
                }
            }

        });

    }
    function DisplayContactListPage(){
        console.log("Called DisplayContactListPage()");

        if(localStorage.length > 0){

            let contactList = document.getElementById("contactList");
            let data ="";

            let keys = Object.keys(localStorage);
            let index = 1;

            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contact = new Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                    <td>${contact.fullName}</td>
                    <td>${contact.contactNumber}</td>
                    <td>${contact.emailAddress}</td>
                    <td></td>
                    <td></td>
                    </tr>`;
                index++;
            }
            contactList.innerHTML = data;
        }
    }


    function Start(){
        console.log("App Started");

        switch(document.title){
            case "Home":
                DisplayHomePage();
                myFunction();
                break;
            case "Our Products":
                DisplayProductPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Our Services":
                DisplayServicePage();
                break;
            case "Contact List":
                DisplayContactListPage();
                break;
            case "Contact Us":
                DisplayContactUsPage();
                break;
        }


    }
    window.addEventListener("load", Start);


})()