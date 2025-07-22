const text = "I am a Front-End Developer";
const typingElement = document.getElementById("typing");
let index = 0;
let isDeleting = false;

function typeText() {
    if (!isDeleting) {
        typingElement.textContent = text.substring(0, index + 1);
        index++;
        if (index === text.length) {
            isDeleting = true;
            setTimeout(typeText, 1000); // pause before deleting
            return;
        }
    } else {
        typingElement.textContent = text.substring(0, index - 1);
        index--;
        if (index === 0) {
            isDeleting = false;
        }
    }
    setTimeout(typeText, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeText);

let darkMode=document.querySelector('.dark-mode');
let lightMode=document.querySelector('.light-mode');

darkMode.addEventListener("click",()=>{
    document.body.style.backgroundColor="#082230";
    document.body.style.color="#E0E0E0";
    

})
lightMode.addEventListener("click",()=>{
    document.body.style.backgroundColor="white";
    document.body.style.color="rgb(25,25,25)";
})


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission for validation

    const name = document.querySelector('.name').value.trim();
    const phone = document.querySelector('.phone').value.trim();
    const subject = document.querySelector('.subject').value.trim();
    const message = document.querySelector('textarea').value.trim();

    if (name === '' || phone === '' || subject === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^[0-9]{11,15}$/.test(phone)) {
        alert('Please enter a valid phone number with 11-15 digits.');
        return;
    }

    // If validation passes, submit the form
    this.submit();
    name.value="";
    phone.value="";
    subject.value="";
    message.value="";

});
