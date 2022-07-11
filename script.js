import objects from './data.json' assert { type: 'json' };

const bars = document.querySelectorAll('.bar');
const barMaxHeight = document.querySelector('.bar-placeholder').offsetHeight;

const amounts  = objects.map(object => object.amount);
const maxAmount = Math.max(...amounts);

bars.forEach(bar => {
    const foundObject = objects.find(object => object.day === bar.dataset.day);
    const amount = foundObject.amount;
    bar.dataset.amount = `$${amount}`;

    const height = amount / maxAmount * barMaxHeight;
    bar.style.height = `${amount / maxAmount * barMaxHeight}px`;
});