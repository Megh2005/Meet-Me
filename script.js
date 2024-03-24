document.addEventListener("contextmenu",function(e){
    e.preventDefault()
},false)

var typed = new Typed(".auto-type", {
    strings: ["Android Developer", "Rising Entrepreneur", "Tech Article Writer", "Engineering Student", "Success Aspirant"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxIhVblouu48_dfb5DbJgNbMDWmrlUcIkKCUpae-71u1W07yuv_0FTze2W8DbZOCLk/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Your Enquiry Has Been Listed"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

document.addEventListener("contextmenu",function(x){
    x.preventDefault()
},false);
