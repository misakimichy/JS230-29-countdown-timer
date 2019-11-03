(function(){
    let countdown;
    const timeDisplay = document.querySelector('.display-time-left');
    const endTime = document.querySelector('.display-end-time');
    const buttons = document.querySelectorAll('[data-time]');

    const timer = (seconds) => {
        // Clear the existing timers
        clearInterval(countdown);

        const now = Date.now();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayEndTime(then);
        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if(secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000);
    };

    const displayTimeLeft = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        if (timeDisplay) {
            timeDisplay.textContent = display;
        }
        // Update the browser title
        document.title = display;
    };

    const displayEndTime = (timestamp) => {
        const end = new Date(timestamp);
        const hour = end.getHours();
        const minutes = end.getMinutes();
        if (endTime) {
            // 24h
            // endTime.textContent = `Be back at ${hour}:${minutes}`;
            
            // 12 h
            const adjustedHour = hour > 12 ? hour - 12 : hour;
            endTime.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
        }
    };
    
    const startTimer = (e) => {
        const seconds = parseInt(e.currentTarget.dataset.time);
        timer(seconds);
    };
    
    buttons.forEach(button => button.addEventListener('click', startTimer));
    document.customForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const mins = e.currentTarget.minutes.value;
        timer(mins * 60);
        e.currentTarget.reset();
    });
}());