class Countdown {
    constructor(domselector, year, month, day, hour, minute) {
        this.htmlContainer = document.querySelector(domselector);
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.endDate = `${year}-${month}-${day} ${hour}:${minute}`;
        this.updateInterval = 1000;
        this.render();
    }

    showCountdown() {
        const curDate = new moment()
        const endDate = new moment(this.endDate)
        const days = endDate.diff(curDate, 'days');
        const hours = endDate.diff(curDate, 'hours');
        const minutes = endDate.diff(curDate, 'minutes');
        const seconds = endDate.diff(curDate, 'seconds');
        const daysOutput = days;
        const hoursOutput = hours - (days * 24);
        const minutesOutput = minutes - (hours * 60);
        const secondsOutput = seconds - (minutes * 60);
        return `<p><strong>Time to apply: </strong></p>
        <div class="flexbox countdownDisplay">
            <div class="flexbox-item">
                <div class="label">${daysOutput == 1 ? 'day' : 'days'}</div>
                <div class="number">${daysOutput}</div>
            </div>
            <div class="flexbox-item">
                <div class="label">${hours == 1 ? 'hour' : 'hours'}</div>
                <div class="number">${hoursOutput < 10 ? '0' : ''}${hoursOutput}</div>
            </div>
            <div class="flexbox-item">
                <div class="label">${minutesOutput == 1 ? 'minute' : 'minutes'}</div>
                <div class="number">${minutesOutput < 10 ? '0' : ''}${minutesOutput}</div>
            </div>
            <div class="flexbox-item">
                <div class="label">${secondsOutput == 1 ? 'second' : 'seconds'}</div>
                <div class="number">${secondsOutput < 10 ? '0' : ''}${secondsOutput} </div>
            </div>
        </div>`
    }

    render() {
        setInterval(() => {
            let endDateOutput = moment(this.endDate).format('MMMM Do YYYY, h:mm a')
            let output = ``;
            let countdown = this.showCountdown()
            output += `<h3>The contest application ends on <br> ${endDateOutput}</h3>`
            output += countdown;
            this.htmlContainer.innerHTML = output;
        }, this.updateInterval)
    }
}
new Countdown('#countdown', '2020', '04', '03', '23', '42')