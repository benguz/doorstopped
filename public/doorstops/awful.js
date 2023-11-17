let useCount = localStorage.getItem("openAI-usage");
    if (!useCount) {
        localStorage.setItem("openAI-usage", 0);
        useCount = 0;
    }
    function submitOpenAIQuery() {
        let inputChat = document.getElementById("api-textbox").value;
        if (useCount > 4) {
            document.getElementById("openAI-response").innerHTML = "Sorry, you've reached our submission limit. If you want a free OpenAI membership, email <a href='mailto:ben@fix.school?subject=ChatGPT Free Membership' style='display: inline-block'>ben@fix.school</a>. We're working to get more funding ASAP!";

        } else if (inputChat) {
            
            document.getElementById("openAI-loading").style.display = "inline-block";
            fetch(`https://ai.fix.school/parse_minutes`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({input: inputChat})
            })
            .then(response => response.json())  // Parse the JSON from the response
            .then(data => {
                document.getElementById("openAI-loading").style.display = "none";
                document.getElementById("openAI-response").textContent = data;
                useCount++;
                localStorage.setItem("openAI-usage", useCount);
            })
            .catch(error => {
                console.error("Error:", error);
                document.getElementById("openAI-loading").style.display = "none";
                document.getElementById("openAI-response").innerHTML = "Ran into an error, sorry! Try again with a shorter prompt or if you want a free OpenAI membership, email <a href='mailto:ben@fix.school?subject=ChatGPT Free Membership' style='display: inline-block'>ben@fix.school</a>.";
            }); 
        }
    }