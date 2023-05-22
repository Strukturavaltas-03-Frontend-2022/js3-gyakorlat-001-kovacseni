

const HU = {
    date(dateParam) {
        return new Intl.DateTimeFormat('hu-HU').format(dateParam);
    },
    currency(currencyParam) {
        return new Intl.NumberFormat('hu-HU', {style: 'currency', currency: 'HUF'}).format(currencyParam);
    },
    list(stringArray) {
        return `${stringArray[0]}, ${stringArray[1]} és ${stringArray[2]}`;
    }
}

export default HU;
