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

const checkedId = fieldScales.find(function (item) {
    if (item.isChecked) return true
});
const checkedCellId = cellScales.find(function (item) {
    if (item.isChecked) return true
});

const checked = ref(checkedId ? checkedId.id : 5);
const checkedCell = ref(checkedCellId ? checkedCellId.id : 50);

const currentNumber = ref(1);

export default {fieldScales, checked, checkedCell, currentNumber, cellScales}