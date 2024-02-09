let essaySubmission = document.getElementById('essay-submission');
let additionalContent = '<div class="overlay" id="loading-overlay" style="display: none;"></div>';
let useCount = localStorage.getItem("useCount")
if (useCount) {
    useCount = parseInt(useCount);
}

// ensure textbox can always be clicked
essaySubmission.addEventListener('input', function(event) {
    // Check if the innerHTML only contains the button
    if (this.innerHTML.trim() === additionalContent) {
        this.innerHTML = '&#8203;' + this.innerHTML; // Adds a zero-width space at the beginning
        essaySubmission.style.color = "black";
    } 
    
});

// remove placeholder text on focus
const placeholderText = "\u200B" + "Message PrincetonGPT..."; 
// const onboardingPlaceholder = "\u200B" + "Write your message here... try \"What should my new years resolution be as an aspiring prompt engineer?\""
const onboardingPlaceholder = "\u200B" + "Message PrincetonGPT..."
essaySubmission.addEventListener("focus", function () {
    let clone = essaySubmission.cloneNode(true);

    // Remove all child elements (keep only text nodes)
    Array.from(clone.childNodes).forEach(node => {
        if (node.nodeType !== Node.TEXT_NODE) {
            clone.removeChild(node);
        }
    });
    let textContent = clone.textContent.trim();
    if (textContent === placeholderText || textContent === onboardingPlaceholder) {
        essaySubmission.innerHTML = "\u200B" + additionalContent;
        essaySubmission.style.color = "black";
    } 
});

// Reload with last used prompts in place
let promptHist = localStorage.getItem("usageHistory");
if (promptHist) {
    promptArr = JSON.parse(promptHist);

    // let last = document.createElement('div')
    // document.appendChild(last)
}

// Settings menu
function toggleSettings() {
    let settings = document.getElementById("settings");
    if (settings.style.display === "block") {
        settings.style.display = "none";
    } else {
        settings.style.display = "block";
    }
}
var slider = document.getElementById('myRange');
if (slider && essaySubmission) {
    slider.addEventListener('input', function() {
        var sliderValue = this.value;
        var newHeight = 'calc(' + sliderValue + 'vh - 4em)';
        essaySubmission.style.height = newHeight;
    });
} else {
    console.error('Slider or essay submission element not found.');
}

var keyForm = document.getElementById('key-form');
var keyInput = document.getElementById('key');
var modelForm = document.getElementById('model-form');
var modelInput = document.getElementById('model-input');

var ONBOARDING = localStorage.getItem('ONBOARDING');


// the onboarding case
if (!ONBOARDING) {
    essaySubmission.style.color = "rgb(96 96 96)";
    document.getElementById("onboarding").style.display = "block"; 
    // localStorage.setItem("ONBOARDING", "done")   
}

function settingsHint() {
    document.getElementById("settings-button").classList.add("expand");

    info = document.createElement("button");
    info.classList.add("settings-toggle", "essay-button", "info", "extra");
    info.textContent = "Change settings";
    setTimeout(() => {
        document.getElementById("document-body").classList.add("hide-scroll");
        document.getElementById("document-body").prepend(info);
        info.addEventListener("click", toggleSettings);
    }, 8000);
    setTimeout(() => {
        info.style.opacity = '1';
        info.style.transform = 'translateX(0)';
    }, 8100);
    setTimeout(() => {
        document.getElementById("settings-button").classList.remove("expand");
        info.style.transition = "opacity 1s, transform 1s;"

        info.style.opacity = '0';
        info.style.transform = 'translateX(50%)';
    }, 11000)
    setTimeout(() => {
        info.remove();
        document.getElementById("document-body").classList.remove("hide-scroll");

    }, 12000)
}


// history of usage
function showHistory() {
    let historyDiv = document.getElementById("prompt-history");
    
    if (historyDiv.style.display === "block") {
        historyDiv.style.display = "none";
    } else {
        document.getElementById("settings").style.display = "none";
        historyDiv.style.display = "block";
        let usageHistory = localStorage.getItem("usageHistory");
        if (usageHistory) {
            usageArray = JSON.parse(usageHistory);
            console.log(usageArray);
            let fullHistory = `<button class="essay-button" style="position: absolute; top: 10px; right: 10px;" onclick="this.parentElement.style.display = 'none';">x</button>`
            let queries = [];
            for (let i = 0; i < usageArray.length; i++) {
                if (queries.length > 0 && queries[queries.length - 1].includes(usageArray[i][2])) {
                    fullHistory = fullHistory + `<p><strong>Prompt:</strong> ${usageArray[i][0]}</p>
                    <p><strong>Response:</strong> ${usageArray[i][1]}</p>
                    <div style="width: 90%; margin: auto; height: 1px; background-color: grey"></div>`;
                } else {
                    queries.push(usageArray[i][2])
                    fullHistory = fullHistory + `<div style="width: 90%; margin: auto; height: 3px; background-color: rgb(211, 214, 238)"></div>
                    <p style="font-size:13pt"><strong>Message: ${usageArray[i][2]}</strong></p>`;
                    fullHistory = fullHistory + `<p><strong>Prompt:</strong> ${usageArray[i][0]}</p>
                    <p><strong>Response:</strong> ${usageArray[i][1]}</p>
                    <div style="width: 90%; margin: auto; height: 1px; background-color: grey"></div>`;
                }
            }
            historyDiv.innerHTML = fullHistory
        } else {
            historyDiv.innerHTML = "<p>You haven't tried any prompts yet. Hit submit and current prompts will be saved to your cache!</p>"
        }
    }
    
}


// Hotkeys
let pastMessage = -1;
document.addEventListener('keydown', function(event) {
    // Check if 'B' is pressed along with 'Ctrl' or 'Command'
    if (event.key === 'b' || event.key === 'B') {
        if (event.ctrlKey || event.metaKey) {
            // Prevent the default action to stop things like opening the bookmarks bar
            event.preventDefault();

            // Call your function here
            addResponse();
        }
    } else if (event.key === 'e' || event.key === 'E') {
        if (event.ctrlKey || event.metaKey) {
            // Prevent the default action to stop things like opening the bookmarks bar
            event.preventDefault();

            // Call your function here
            addRow();
        }
    } else if (event.key === 'm' || event.key === 'M') {
        if (event.ctrlKey || event.metaKey) {
            // Prevent the default action to stop things like opening the bookmarks bar
            event.preventDefault();

            // Call your function here
            showHistory();
        }
    } else if (event.key === "ArrowUp" && document.activeElement === essaySubmission) {
        // scroll through past messages with arrow keys
        lastQuery = previousQuery(1);
        if (lastQuery) {
            essaySubmission.innerHTML = '&#8203;' + lastQuery;
        }
    } else if (event.key === 'ArrowDown' && pastMessage != -1 && pastMessage != 0 && document.activeElement === essaySubmission) {
        lastQuery = previousQuery(-1);
        if (lastQuery) {
            essaySubmission.innerHTML = '&#8203;' + lastQuery;
        }
    }
});

function previousQuery(bool) {
    let queryHist = localStorage.getItem("usageHistory");
    if (queryHist) {
        let queryArr = JSON.parse(queryHist);
        pastMessage = pastMessage + bool;
        let showMessage = pastMessage * numPrompts;
        if (showMessage < queryArr.length) {    
            return queryArr[showMessage][2];     
        }
    } 
    return "";
}


var errorMessage = document.getElementById("openAI-response");
var errorContent = document.getElementById("error-content");
// main function - handles prompts
function submitMultiplePrompts() {
    let paid = localStorage.getItem("PAYMENT");
    let followup = "FALSE";
    if (useCount > 3 && !paid) {
        document.getElementById("payment-menu").style.display = "block";
    }
    let inputChat = document.getElementById("essay-submission").innerText;
    const submitIndex = inputChat.lastIndexOf("Submit");
    if (submitIndex !== -1 && submitIndex === inputChat.length - "Submit".length) {
        inputChat = inputChat.slice(0, submitIndex);
    }
    if (inputChat && inputChat != "\u200B") {
        document.getElementById("openAI-loading").style.display = "inline-block";
        var overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.getElementById("essay-submission").appendChild(overlay);

        let fetchLink = "https://ai.fix.school/princeton-gpt";
        document.getElementById("onboarding").style.display = "none";

        let u = document.createElement('div')
        u.classList.add("user-message");
        u.innerHTML = "<p><strong>You: </strong>" + inputChat + "</p>";
        document.getElementById("chat-box").appendChild(u)
        
        fetch(fetchLink, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({input: inputChat, follow: followup})
            })
        .then(response => response.json())  // Parse the JSON from the response
        .then(data => {
            document.getElementById("openAI-loading").style.display = "none";
            overlay.remove();
            useCount++;
            localStorage.setItem('useCount', useCount);
            responseData = data.response;
            let p = document.createElement('div')
            p.classList.add("ai-message");
            p.innerHTML = "<p><strong>Tony 🐯: </strong></p>" + responseData;

            document.getElementById("chat-box").appendChild(p)
            document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
            let usageHistory = localStorage.getItem("usageHistory");
            if (usageHistory) {
                usageArray = JSON.parse(usageHistory);
                console.log(usageHistory);
                
                usageArray.unshift(inputChat);
                usageArray.unshift(responseData);
                
                localStorage.setItem("usageHistory", JSON.stringify(usageArray));
                
            } else {
                usageArray = [responseData, inputChat];
                localStorage.setItem("usageHistory", JSON.stringify(usageArray));
            }
            
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("openAI-loading").style.display = "none";
            overlay.remove();
            errorContent.innerHTML = "Ran into an error, sorry! Try again with a shorter prompt or email <a href='mailto:ben@fix.school?subject=ChatGPT Free Membership' style='display: inline-block'>ben@fix.school</a> with a message about your error.";
            errorMessage.style.display = "block";

        }); 
    } else {
        errorContent.innerHTML = "Add text below, then hit submit!";
        errorMessage.style.display = "block";

    }
}

