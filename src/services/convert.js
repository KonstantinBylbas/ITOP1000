export default function handlerConvert(contextRate, index, input) {
    const findRate = (search) => {
        return contextRate.find(rateCurrency => rateCurrency.cc === search).rate;
    }

    const roundNumber = (number) => {
        return Math.floor(number * 100) / 100;
    }

    const calculate = (value, from, to) => {
        return +value * (findRate(from) / findRate(to));
    }

    const writeResult = (input, result) => {
        input.value = result === 0 ? '' : roundNumber(result);
    }

    if (index && input) {
        let anotherInput = document.querySelector(`.column:nth-of-type(${index}) input`);

        let from = input.dataset.currency;
        let to = anotherInput.dataset.currency;
        let result = calculate(input.value, from, to);

        writeResult(anotherInput, result);
    }
    else {
        let firstInput = document.querySelector(`.column:first-of-type input`);
        let lastInput = document.querySelector(`.column:last-of-type input`);

        if (firstInput.value) {
            let result = calculate(firstInput.value, firstInput.dataset.currency, lastInput.dataset.currency);
            writeResult(lastInput, result);
        }
        else if (lastInput.value) {
            let result = calculate(lastInput.value, lastInput.dataset.currency, firstInput.dataset.currency);
            writeResult(firstInput, result);
        }
    }
}