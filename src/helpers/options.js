import {ref} from 'vue'

const fieldScales = [
    {
        id: 5,
        val: '5X5',
        isChecked: true
    },
    {
        id: 6,
        val: '6X6',
        isChecked: false
    },
    {
        id: 7,
        val: '7X7',
        isChecked: false
    },
    {
        id: 8,
        val: '8X8',
        isChecked: false
    },
];
const cellScales = [
    {
        id: 50,
        val: '50X50',
        isChecked: true
    },
    {
        id: 60,
        val: '60X60',
        isChecked: false
    },
    {
        id: 70,
        val: '70X70',
        isChecked: false
    },
    {
        id: 80,
        val: '80X80',
        isChecked: false
    },
];

let startTime = 0;
const resultTime = ref(0);
const getMatrix = function (count) {
    let cur = [];
    let numbers = [...(new Array(count * count).keys())].sort(() => Math.random() - 0.5);
    for(let a = 0; a < count; a++){
        cur.push([]);
        for(let b = 0; b < count; b++){
            let val = numbers.pop();
            cur[a].push({
                number: val + 1,
                touched: false,
                scale: `${checkedCell.value}px`,
                wrong: false
            });
        }
    }
    return cur;
};
const checkedId = fieldScales.find(function (item) {
    if (item.isChecked) return true
});
const checkedCellId = cellScales.find(function (item) {
    if (item.isChecked) return true
});
const checked = ref(checkedId ? checkedId.id : 5);
const checkedCell = ref(checkedCellId ? checkedCellId.id : 50);
const currentNumber = ref(1);

const matrix = ref(getMatrix(checked.value));

const refreshMatrix = function () {
    startTime = 0;
    matrix.value = getMatrix(checked.value);
    currentNumber.value = 1
};

function touch(number) {
    let timeout;
    let cell = {};
    matrix.value.some(function (element) {
        let e = element.some(function (el) {
            if(el.number === number){
                cell = el;
                return true
            }
        });
        if (e){
            return e
        }
    });
    if(!startTime){
        startTime = new Date().getTime();
    }
    if (cell.number === currentNumber.value) {
        cell.touched = true;
        const limit = checked.value * checked.value;
        if (currentNumber.value < limit) {
            currentNumber.value += 1
        } else {
            resultTime.value = ((new Date()).getTime() - startTime)/(1000)
        }
    } else {
        window.clearTimeout(timeout);
        cell.wrong = true;
        timeout = window.setTimeout(() => {
            cell.wrong = false
        }, 300)
    }
}


export default {
    fieldScales, checked, checkedCell, currentNumber, cellScales,
    startTime, resultTime, refreshMatrix, matrix, touch
}