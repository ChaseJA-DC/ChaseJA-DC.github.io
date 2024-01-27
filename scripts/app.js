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
    //Create a function for click events with variables for different buttons and logic


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