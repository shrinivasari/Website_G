let emailValidated = false;
let phoneValidated = false;

function validateEmail() {
    let email = document.getElementById("user-email").value;
    let emailFeedback = document.getElementById("email-feedback");

    if (email.includes("@") && email.includes(".")) {
        emailValidated = true;
        emailFeedback.innerText = "✔ Email Verified";
        emailFeedback.style.color = "lightgreen";
    } else {
        emailFeedback.innerText = "❌ Invalid Email";
        emailFeedback.style.color = "red";
        emailValidated = false;
    }
    checkVerification();
}

function validatePhone() {
    let phone = document.getElementById("user-phone").value;
    let phoneFeedback = document.getElementById("phone-feedback");

    if (/^\d{10}$/.test(phone)) {
        phoneValidated = true;
        phoneFeedback.innerText = "✔ Mobile Verified";
        phoneFeedback.style.color = "lightgreen";
    } else {
        phoneFeedback.innerText = "❌ Invalid Mobile Number";
        phoneFeedback.style.color = "red";
        phoneValidated = false;
    }
    checkVerification();
}

function checkVerification() {
    if (emailValidated && phoneValidated) {
        console.log(emailValidated, phoneValidated);
        document.querySelector('.navbar').classList.remove('blur');
        document.getElementById('verification-overlay').style.display = 'none';
        document.getElementById('form-section').style.filter = 'none';
    }
}

function focusInput() {
    const emailInput = document.getElementById('user-email');
    const phoneInput = document.getElementById('user-phone');
  
    if (emailInput) {
      emailInput.focus();
    }
  
    if (phoneInput) {
      phoneInput.addEventListener('focus', function() {
        this.placeholder = '';
      });
  
      phoneInput.addEventListener('blur', function() {
        this.placeholder = 'Enter your mobile number';
      });
    }
  }