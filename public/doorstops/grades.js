let useCount = localStorage.getItem("openAI-usage-essay");
    if (!useCount) {
        localStorage.setItem("openAI-usage-essay", 0);
        useCount = 0;
        
    }
function submitOpenAIQueryEssay() {
    console.log("running");

    let inputChat = document.getElementById("essay-submission").textContent;
    const submitIndex = inputChat.lastIndexOf("Submit");
    if (submitIndex !== -1 && submitIndex === inputChat.length - "Submit".length) {
        inputChat = inputChat.slice(0, submitIndex);
    }
    let value = document.getElementById("myRange").value;
    if (useCount > 4) {
        document.getElementById("openAI-response").innerHTML = "Sorry, you've reached our submission limit. If you want a free OpenAI membership, email <a href='mailto:ben@fix.school?subject=ChatGPT Free Membership' style='display: inline-block'>ben@fix.school</a>. We're working to get more funding ASAP!";
        console.log("overuse")
    } else if (inputChat) {
        document.getElementById("openAI-loading").style.display = "inline-block";
        // document.getElementById("loading-overlay").style.display = "block";
        var overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.getElementById("essay-submission").appendChild(overlay);
        fetch(`https://ai.fix.school/essay_feedback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({essay: inputChat, level: value})
        })
        .then(response => response.json())  // Parse the JSON from the response
        .then(data => {
            document.getElementById("openAI-loading").style.display = "none";
            overlay.remove();
            summaryResponse = data.summary.replace(/```/g, '');
            document.getElementById("openAI-response").innerHTML = summaryResponse.replace(/html/g, '');
            feedback = data.line.replace(/```json/g, '');
            feedback = feedback.replace(/```/g, '');
            feedbackData = JSON.parse(feedback);
            feedbackData.forEach(item => {
                highlightSentence(item.sentence, item.feedback);
                console.log(item.sentence + " feedback: " + item.feedback)
            });
            // useCount++;
            localStorage.setItem("openAI-usage", useCount);
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("openAI-loading").style.display = "none";
            overlay.remove();
            document.getElementById("openAI-response").innerHTML = "Ran into an error, sorry! Try again with a shorter prompt or email <a href='mailto:ben@fix.school?subject=ChatGPT Free Membership' style='display: inline-block'>ben@fix.school</a> with a message about your error.";
        }); 
    } else {
        document.getElementById("openAI-response").innerHTML = "Add text below, then hit submit!";

    }
}
essaySubmission = document.getElementById('essay-submission');
additionalContent = '<button id="submit-essay" class="essay-button" onclick="submitOpenAIQueryEssay()" contenteditable="false"><strong>Submit</strong></button><div class="overlay" id="loading-overlay" style="display: none;"></div>'
essaySubmission.addEventListener('input', function() {
    // Check if the innerHTML only contains the button
    if (this.innerHTML.trim() === additionalContent) {
        this.innerHTML = '&#8203;' + this.innerHTML; // Adds a zero-width space at the beginning
    } // else {
    //     console.log(this.innerHTML);
    // }
});

// remove placeholder text on focus
const placeholderText = "\u200B" + "Paste your essay here..."; 
essaySubmission.addEventListener("focus", function() {
    let clone = essaySubmission.cloneNode(true);

    // Remove all child elements (keep only text nodes)
    Array.from(clone.childNodes).forEach(node => {
        if (node.nodeType !== Node.TEXT_NODE) {
            clone.removeChild(node);
        }
    });
    let textContent = clone.textContent.trim();
    if (textContent === placeholderText) {
        essaySubmission.innerHTML = "\u200B" + additionalContent;
    } 
});

var comments = 0;
function highlightSentence(sentence, feedback) {
    const essayElement = document.getElementById("essay-submission");
    let essayText = essayElement.innerHTML;
    essayCompare = essayText.replace(/['"]+/g, '"');
    const sentenceIndex = essayCompare.indexOf(sentence.replace(/['"]+/g, '"'));

    if (sentenceIndex !== -1) {
        // Wrap the sentence in a span with a highlight class
        essayText = essayText.substring(0, sentenceIndex) + 
                    `<span class="highlight" id="${comments}">` + 
                    essayText.substring(sentenceIndex, sentenceIndex + sentence.length) + 
                    `</span>` + essayText.substring(sentenceIndex + sentence.length);

        // Update the essay text with the highlighted sentence
        essayElement.innerHTML = essayText;

        // Find the newly created span and calculate its distance from the top of the page
        const spanElement = document.getElementById(comments);
        let distanceFromTop = spanElement.getBoundingClientRect().top + window.scrollY;

        // Create a new div and position it at the same distance from the top of the page
        const newDiv = document.createElement("div");
        newDiv.textContent = feedback;
        newDiv.className = "feedback-div";
        newDiv.style.top = `${distanceFromTop}px`;
        document.body.appendChild(newDiv);

        // Adjust position if overlapping with existing feedback divs
        const feedbackDivs = document.querySelectorAll(".feedback-div");
        feedbackDivs.forEach(div => {
            if (div !== newDiv) {
                const rect = div.getBoundingClientRect();
                const divTop = rect.top + window.scrollY;
                const divHeight = rect.height;

                if (distanceFromTop >= divTop && distanceFromTop < divTop + divHeight) {
                    distanceFromTop = divTop + divHeight;
                    newDiv.style.top = `${distanceFromTop}px`;
                }
            }
        });

        comments++;
    }
}

// document.getElementById('essay-submission').addEventListener('focusout', function() {
//     setTimeout(() => this.focus(), 0);
// });
// // Select all elements with the class 'essay-button'
// const buttons = document.querySelectorAll('.essay-button');

// // Function to change color
// function changeColor(event) {
//     // 'event.target' refers to the clicked button
//     buttons.forEach(button => {
//         button.style.backgroundColor = 'white';
//     });
//     event.target.style.backgroundColor = 'rgb(211, 214, 238)'; // Replace 'newColor' with the color you want
// }

// // Add event listener to each button
// buttons.forEach(button => {
//     button.addEventListener('click', changeColor);
// });