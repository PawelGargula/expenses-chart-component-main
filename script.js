import objects from './data.json' assert { type: 'json' };

const bars = document.querySelectorAll('.bar');
const barMaxHeight = document.querySelector('.bar-placeholder').offsetHeight;

const amounts  = objects.map(object => object.amount);
const maxAmount = Math.max(...amounts);

bars.forEach(bar => {
    const { amount } = objects.find(object => object.day === bar.dataset.day);
    bar.dataset.amount = `$${amount}`;

    let height = amount / maxAmount * barMaxHeight;
    // Want it to grow from 1px
    height = (isNaN(height) || height < 1) ? 1 : height;
    bar.style.height = `${height}px`;
});