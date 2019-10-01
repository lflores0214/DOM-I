let counter;

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 100;
    displayTimeElapsed(seconds);

    counter = setInterval(() => {
        const secondsPassed = Math.round((then + Date.now()) * 100);
        //check if we should stop it 
        if(secondsPassed >= 10){
            clearInterval(counter);
        return;
    }
    //display it
    displayTimeElapsed(secondsPassed)
    }, 100);
};

function displayTimeElapsed(secondsPassed){
    console.log(secondsPassed);
}