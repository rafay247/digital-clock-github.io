let a, date, time, seconds;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    seconds = String(a.getSeconds()).padStart(2, '0');
    time = a.getHours() + ':' + a.getMinutes() + ':' + seconds;
    document.getElementById('time').innerHTML = time + "<br>on " + date;
}, 1000);