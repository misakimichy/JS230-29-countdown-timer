(function(){
    let countdown;
    const timeDisplay = document.querySelector('.display-timer-left');
    const endTime = document.querySelector('.display-end-time');
    const buttons = document.querySelectorAll('[data-time]');

    const timer = (seconds, countdown) => {
        const now = Date.now();
        displayTimeLeft(seconds);
        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if(secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000);
    };

    const displayTimeLeft = seconds => {
        const minutes = Math.floor(seconds / 60);
    };
    
    const startTimer = () => {
        console.log('hello');
    };
    
    buttons.forEach(button => button.addEventListener('click', startTimer));
}());