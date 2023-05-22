
const objectConverter = {
    arrayToMap(array) {
        let result = new Map();
        for (let i = 0; i < array.length; i++) {
            result.set(i, array[i]);
        }
        return result;
    },
    arrayToSet(array) {
        return new Set(array);
    },
    setToMap(set) {
        let result = new Map();
        let values = set.values();
        for (let i = 0; i < set.size; i++) {
            result.set(i, values.next().value);
        }
        return result;
    },
    setToArray(set) {
        let result = [];
        let values = set.values();
        for (let i = 0; i < set.size; i++) {
            result.push(values.next().value);
        }
        return result;
    },
    mapToArray(map) {
        let result = [];
        let keys = map.keys();
        for (let i = 0; i < map.size; i++) {
            result.push(map.get(keys.next().value));
        }
        return result;
    },
    mapToSet(map) {
        let result = new Set;
        let keys = map.keys();
        for (let i = 0; i < map.size; i++) {
            result.add(map.get(keys.next().value));
        }
        return result;
    }
};

export default objectConverter;
