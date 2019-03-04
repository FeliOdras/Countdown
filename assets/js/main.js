class Countdown {
    constructor(domselector, endDate) {
        this.htmlContainer = document.querySelector(domselector);
        this.endDate = endDate;
        this.showEndDate()
    }

    showEndDate() {
        console.log(this.endDate)
    }

}

const currentCountdown = new Countdown('#countdown', '2019-04-23T:23:42')