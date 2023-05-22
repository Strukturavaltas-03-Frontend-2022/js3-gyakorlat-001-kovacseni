
function getShortDate(date) {
    return new Intl.DateTimeFormat('hu-HU', {dateStyle: 'medium', timeStyle: 'short'}).format(date);
}

function getLongDate(date) {
    return new Intl.DateTimeFormat('hu-HU', {dateStyle: 'long', timeStyle: 'medium'}).format(date);
}

function customDateFormats(date) {
    return {
        short: getShortDate(date),
        long: getLongDate(date)
    };
}

export default customDateFormats;
