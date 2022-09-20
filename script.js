
function loadingCityInfo(element){
    alert("Loading weather report...");
}

function removeCookie(element){
    let policyContainer = document.querySelector (".cookiePolicy");
    policyContainer.remove(); //completely deletes the element from the DOM
    //policyContainer.classList.add("hideElement");  adds a class with css to the element
}

function changeTemp(element){
    let allDeg = document.querySelectorAll(".max, .min");
    // console.log(allDeg);
    if (element.value === "far"){
        for(let i=0; i<allDeg.length; i++){
            // console.log(Number(allDeg[i].textContent));  retrieves a string from html, so Number() used to make it a number
            let currentNum = Math.round(Number(allDeg[i].textContent) * 1.8 + 32);
            allDeg[i].textContent=currentNum;
        }
    }
    else{
        for(let i=0; i<allDeg.length; i++){
            let currentNum = Math.round(Number(allDeg[i].textContent));
            let newNumber = Math.round((currentNum - 32)* 0.556);
            allDeg[i].textContent=newNumber;
        }
    }
}