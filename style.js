startTestBtn=document.querySelector("#start");


// Event listener for the start test button
startTestBtn.addEventListener('click', () => {
            // Hide the instructions page
            instructionsPage.style.display = 'none';

            // Start the timer
            startTimer(4.50); // 5 minutes timer
        });

        // Function to start the timer
        function startTimer(minutes) {
            let seconds = minutes * 60;
            const timerDisplay = document.getElementById('timertwo');

            const timerInterval = setInterval(() => {
                const minutesDisplay = Math.floor(seconds / 60);
                const secondsDisplay = seconds % 60;

                timerDisplay.textContent = `${minutesDisplay.toString().padStart(2, '0')}:${secondsDisplay.toString().padStart(2, '0')}`;

                if (seconds === 0) {
                    clearInterval(timerInterval);
                    // Handle timer completion (e.g., submit test)
                } else {
                    seconds--;
                }
            }, 1000);
        }