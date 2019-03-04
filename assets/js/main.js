class Countdown {
    constructor(domselector, year, month, day, hour, minute) {
        this.htmlContainer = document.querySelector(domselector);
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.endDate = `${year}-${month}-${day} ${hour}:${minute}`;
        this.render();
    }

    showCountdown() {
        const curDate = new moment()
        const endDate = new moment(this.endDate)
        const years = endDate.diff(curDate, 'years');
        const months = endDate.diff(curDate, 'month');
        const days = endDate.diff(curDate, 'days');
        const hours = endDate.diff(curDate, 'hours');
        const monthsOutput = months - (years * 12);
        const daysOutput = days - (months * 30.5);
        const hoursOutput = hours - (days * 24);
        const minutes = endDate.diff(curDate, 'minutes') - (hours * 60);
        return `<p><strong>Time to apply: </strong></p>
        <p>${years} ${years == 1 ? 'year' : 'years'}<br>
        ${monthsOutput} ${monthsOutput == 1 ? 'month' : 'months'}<br>
        ${daysOutput} ${daysOutput == 1 ? 'day' : 'days'}<br>
        ${hoursOutput} ${hours == 1 ? 'hour' : 'hours'}<br>
        ${minutes} ${minutes == 1 ? 'minute' : 'minutes'}`
    }

    render() {
        let endDateOutput = moment(this.endDate).format('MMMM Do YYYY, h:mm a')
        let output = ``;
        let countdown = this.showCountdown()
        output += `<h3>The contest application ends on ${endDateOutput}</h3>`
        output += countdown;
        this.htmlContainer.innerHTML = output;
    }
}
const currentCountdown = new Countdown('#countdown', '2020', '06', '03', '23', '42')