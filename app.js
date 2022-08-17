let a, date, time, seconds,minutes,session;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    session = 'AM'
    a = new Date();
    if(a.getHours() > 12){
        session = 'PM'
    }
    date = a.toLocaleDateString(undefined, options);
    seconds = String(a.getSeconds()).padStart(2, '0');
    minutes = String(a.getMinutes()).padStart(2, '0');
    time = a.getHours() + ':' + minutes + ':' + seconds + " " + session;
    document.getElementById('time').innerHTML = time + "<br>on " + date;
}, 1000);