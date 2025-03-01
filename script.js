function generateNumbers() {
    const num1 = Math.ceil(Math.random() * 20);
    const num2 = Math.ceil(Math.random() * 20);
    const num3 = Math.ceil(Math.random() * 20);

    const biggest = Math.max(num1, num2, num3);

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = num1 > 0 ? alphabet[num1 - 1] : 'N/A';

    const totalMin = num2 * num3;
    const hrs = Math.floor(totalMin / 60);
    const mins = totalMin % 60;

    if (hrs == 0) {
        timeBreakdown = mins == 1 ? "1 minute" : `${mins} minutes`;
    } else if (hrs == 1) {
        if (mins == 0) {
            timeBreakdown = "1 hour";
        } else if (mins == 1) {
            timeBreakdown = "1 hour and 1 minute";
        } else {
            timeBreakdown = `1 hour and ${mins} minutes`;
        }
    } else {
        if (mins == 0) {
            timeBreakdown = `${mins} hours`;
        } else if (mins == 1) {
            timeBreakdown = `${mins} hours and 1 minute`;
        } else {
            timeBreakdown = `${mins} hours and ${mins} minutes`;
        }
    }

    document.getElementById('biggest').innerText = `The biggest number is: ${biggest}`;
    document.getElementById('letter').innerText = `The hidden letter is: ${letter}`;
    document.getElementById('time').innerText = `Your journey has lasted for: ${totalMin} minutes (${timeBreakdown})`;
}