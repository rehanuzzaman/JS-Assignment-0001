function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return 'Invalid';
    }

    for (let time of times) {
        if (typeof time !== "number") {
            return 'Invalid';
        }
    }

    let totalSeconds = 0;

    for (let time of times) {
        totalSeconds +=time;
    }

    let hour = 0;
    let minute = 0;
    let second = 0;

    while (totalSeconds >= 3600) {
        totalSeconds -= 3600;
        hour++;
    }

    while (totalSeconds >= 60) {
        totalSeconds -= 60;
        minute++;
    }

    second = totalSeconds;

    return {hour, minute, second};
}