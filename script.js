const clock = document.querySelector('.my-clock-ind');
const usClock = document.querySelector('.my-clock-us');

const updateTime = () => {
    const time = new Date();
    const format = (num) => num.toString().padStart(2, '0');
    const digitalISTTime = `${format(time.getHours())}:${format(time.getMinutes())}:${format(time.getSeconds())}`;
    
    clock.innerText = digitalISTTime;

    // ET Time
    const etTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(time);
   
    usClock.innerText = etTime;
    
};
updateTime();
setInterval(updateTime, 1000)

