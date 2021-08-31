/* ================================ CLOCK ================================ */
const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document. getElementById('clock-seconds');
    
const clock = function() {
    textSeconds = document. getElementById('text-seconds');
    let date = new Date();
    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
    if(textSeconds) {
        // textSeconds.classList.toggle('show-seconds');
    }
}

setInterval(clock, 1000)

/* ================================ CLOCK AND DATE TEXT ================================ */
const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textAmpm = document.getElementById('text-ampm'),
    datedate = document.getElementById('date-date'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year');

const clockText = function() {
    let date = new Date();
    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        dd = date.getDay(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()
        // we change the hours from 24 to 12 hours and establist whether it is AM or PM
        if(hh > 12) {
            hh = hh - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }
        // we detect when it's 0 AM and transfrom to 12 AM
        if(hh === 0){hh = 12;}
        // show a zero before hour
        if(hh < 10) {
            hh = `0${hh}:`;
        }
        // show time 
        textHour.innerHTML = `${hh}`;
        // show time minutes 
        if(mm < 10) {
            mm = `0${mm}`;
        }
        textMinutes.innerHTML = `${mm}`;
        // show am or pm
        textAmpm.innerHTML = `${ampm}`;
        let months = ['01 /', '02 /', '03 /', '04 /', '05 /', '06 /', '07 /', '08 /', '09 /', '10 /', '11 /', '12 /']
        let dates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        //show the day, the month and the year 
        datedate.innerHTML = dates[dd - 1];
        dateDay.innerHTML = `${day} /`;
        dateMonth.innerHTML = months[month];
        dateYear.innerHTML = year
}

setInterval(clockText, 1000)
/* ================================ DARK LIGHT THEME  ================================ */
// <i class='bx bxs-sun' ></i>
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const icontheme = 'bxs-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = function() {
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}
const getCurrentIcon = function() {
    themeButton.classList.contains(icontheme) ? 'bxs-moon' : 'bxs-sun';
}

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](icontheme);
}
themeButton.addEventListener('click', function() {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(icontheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// show sound 
const audio = document.getElementById('sound');
themeButton.onclick = function() {
    audio.play();
}