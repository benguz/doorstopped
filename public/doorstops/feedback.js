var usage = localStorage.getItem("usage");
var lastEmail = "";
if (!usage) {
    usage = 0;
} else {
    usage = parseInt(usage);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// prevent double submitting same email
function containsSwearWords(text) {
    lowercaseText = text.toLowerCase()
    const swearWords = ['fuck', 'shit', 'fag', 'cunt', 'bitch', 'hoe', 'whore', 'pussy']; // Add more words as needed
    return swearWords.some(swearWord => lowercaseText.includes(swearWord));
}

function submitToGoogleForm() {
    const email = document.getElementById('emailInput').value;
    const body = document.getElementById('bodyInput').value;
    usage++;
    
    if (localStorage.getItem('swore') === 'true') {
        alert('You submitted a response that contained swear words and have lost access. If you feel this was an error, please email ben@fix.school.');
        return;
    }
    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (email == lastEmail) {
        alert('Please stop spamming.');
        localStorage.setItem("blocked", "yes");
        return;
    } else {
        lastEmail = email;
    }

    if (usage > 3) {
        alert('You have reached a usage limit.');
        return;
    }

    // Check for swear words in body
    if (containsSwearWords(body) || email == "Petja@stude.cc" || email == "petja@stude.cc") {
        localStorage.setItem('swore', 'true');
        alert('Your response contains swear words, so you will not be allowed to continue using this tool. If you feel this was an error, please email ben@fix.school.');
        return;
    }
    document.getElementById("openAI-loading").style.display = "inline-block";

    // URL of the Google Form
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdj0vJ2i6ysA5VojhihgRsbfOo3QJQt83eIUnY-QfEb7O9LwQ/formResponse"

    // Data to be sent
    const formData = new FormData();
    formData.append('entry.1286752894', email);
    formData.append('entry.1457037727', body);

    // Send POST request
    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors', // Important to avoid CORS issues
        body: formData
    }).then(response => {
        console.log('Form submitted successfully');
        document.getElementById("openAI-loading").style.display = "none";
        document.getElementById('successful-response').style.display = "inline-block";
        document.getElementById('fail-response').style.display = "none";

        // Handle successful submission here (e.g., clear the form, display a success message)
    }).catch(error => {
        console.error('Error in submitting the form:', error);
        document.getElementById("openAI-loading").style.display = "none";
        document.getElementById('successful-response').style.display = "none";
        document.getElementById('fail-response').style.display = "inline-block";

        // Handle errors here
    });
}