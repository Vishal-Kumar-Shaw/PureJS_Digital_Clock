const clock = document.querySelector('.my-clock');

const updateTime = () => {
    const time = new Date();
    const format = (num) => num.toString().padStart(2, '0');
    const digitalTime = `${format(time.getHours())}:${format(time.getMinutes())}:${format(time.getSeconds())}`;
    clock.innerText = digitalTime;
};
updateTime();
setInterval(updateTime, 1000)

