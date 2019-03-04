class Countdown {
    constructor(domselector, year, month, day, hour, minute) {
        this.htmlContainer = document.querySelector(domselector);
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.showEndDate()
    }

    showEndDate() {
        let endDate = `${this.year}-${this.month}-${this.day} ${this.hour}:${this.minute}`;
        console.log(endDate);
    }
}
const currentCountdown = new Countdown('#countdown', '2020', '04', '23', '23', '42')