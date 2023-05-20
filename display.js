document.addEventListener("DOMContentLoaded", function() {
    let setting = document.querySelector(".setting");
    let displaying = document.querySelector("#display");
    let blur = document.querySelector(".blur");
    let id = document.querySelector("#id");
    let background = document.createElement("div");
    let body = document.querySelector("body");
    let bgSET = document.querySelector(".bgSET");

    body.appendChild(background);

    setting.addEventListener("click", function() {
        displaying.style.display = "block";
        setting.style.display = "none"
        bgSET.style.display = "none";

        background.classList.add("display-blur");
    });

    let submit = document.querySelector(".OnClickSubmit");
    submit.addEventListener("click", function() {
        displaying.style.display = "none";
        setting.style.display = "block";
        bgSET.style.display = "block";

        bgSET.style.top = "339px"
        bgSET.style.left = "737px"

        let input = document.querySelector(".input");
        let number = input.value;

        console.log(number);
    });

    let close = document.querySelector(".close");
    close.addEventListener("click", function() {
        displaying.style.display = "none";
        setting.style.display = "block";
        bgSET.style.display = "block";

        bgSET.style.top = "339px"
        bgSET.style.left = "737px"
    });

    let visiblity = document.querySelector("#visiblity")
    bgSET.addEventListener("click", function() {
        visiblity.style.display = "block";
        displaying.style.display = "none";
        bgSET.style.display = "none";
        setting.style.display = "none";
    })

    let OnClickSubmeet = document.querySelector(".OnClickSubmeet")
    let closebtn = document.querySelector(".closebtn")
    let input_submit = document.querySelector(".input_submit")

    OnClickSubmeet.addEventListener("click", function() {
        visiblity.style.display = "none";
        displaying.style.display = "none";
        bgSET.style.display = "block";
        setting.style.display = "block";

        bgSET.style.top = "339px"
        bgSET.style.left = "737px"

        let input_submit_int = input_submit.value
        document.body.style.background = input_submit_int
    })
    closebtn.addEventListener("click", function() {
        visiblity.style.display = "none";
        displaying.style.display = "none";
        bgSET.style.display = "block";
        setting.style.display = "block";

        bgSET.style.top = "339px"
        bgSET.style.left = "737px"


    })
});
