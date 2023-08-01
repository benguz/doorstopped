        let frameNumber = 5;
        let totalFrames = 29;

        function loadFrame(frameNumber) {
            const frameContainer = document.getElementById("frameContainer");
            frameContainer.style.width = "192";
            frameContainer.style.height="50";
            // Fetch the SVG file
            fetch(`/assets/svg/logo/logo ${frameNumber}.svg`)
                .then(response => response.text())
                .then(data => {
                    // Replace the content of the frameContainer with the new SVG
                    data.height="50";
                    data.width ="192";
                    frameContainer.innerHTML = data;
                });
        }

        function animate() {
            frameNumber = (frameNumber + 1);
            if (frameNumber < 5 + totalFrames) {
            // Load the next frame
            loadFrame(frameNumber);
            
            // Schedule the next frame
            setTimeout(animate, 35);
            }
        }

        // Start the animation
        animate();