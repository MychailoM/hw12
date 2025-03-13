class CountdownTimer {
constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timer = document.querySelector(this.selector);
    this.daysEl = this.timer.querySelector('[data-value="days"]');
    this.hoursEl = this.timer.querySelector('[data-value="hours"]');
    this.minsEl = this.timer.querySelector('[data-value="mins"]');
    this.secsEl = this.timer.querySelector('[data-value="secs"]');
    this.start();
}

start() {
    this.updateTimer();
    this.intervalId = setInterval(() => this.updateTimer(), 1000);
}

updateTimer() {
    const time = this.targetDate - new Date();

    if (time <= 0) {
    clearInterval(this.intervalId);
        this.daysEl.textContent = "00";
        this.hoursEl.textContent = "00";
        this.minsEl.textContent = "00";
        this.secsEl.textContent = "00";
    return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.daysEl.textContent = String(days).padStart(2, "0");
    this.hoursEl.textContent = String(hours).padStart(2, "0");
    this.minsEl.textContent = String(mins).padStart(2, "0");
    this.secsEl.textContent = String(secs).padStart(2, "0");
}
}

new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2025"),
});
