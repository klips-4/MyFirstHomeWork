class ArrayOperation {
    _delimiter = 2;

    /**
     * Конструктор для инициализации массива
     * @param array массив
     * @param startDigit первый элемент массива
     * @param finishDigit конечный элемент массива
     * @param delimiter число, введенное пользователем
     */
    constructor(array = [], startDigit = 0,
                finishDigit = 0, delimiter = null)
    {
        this.array = array;
        this.startDigit = startDigit;
        this.finishDigit = finishDigit;
        this.delimiter = delimiter;
    }

    /**
     * Вызов функции для заполнение массива чётными числами
     */
    inputOddDigit() {
        this._process(this._delimiter, true);
    }

    /**
     * Вызов функции для заполнения массива нечётными числами
     */
    inputNotOddDigit() {
        this._process(this._delimiter,);
    }

    /**
     * Ввод делителя пользователем
     */
    inputManualDelimiterDigit () {
        if (!this.delimiter) {
            console.error('Не задано свойство delimiter');
            return;
        }

        this._process(this.delimiter);
    }

    /**
     * Вывод массива в консоль
     */
    printArray() {
        console.log(this.array);
    }

    /**
     * Проверка массива на заполненность и его очистка
     * @private
     */
    _checkArray() {
        if (this.array.length) {
            this.array = [];
            console.warn('Данные в массиве были удалены');
        }
    }

    /**
     * Проверка начального и конечного элементов массива: начальный элемент должен быть меньше конечного,
     * диапазон не должен быть равен 0
     * @private
     */
    _checkStartAndFinishDigit() {
        if (this.startDigit === this.finishDigit) {
            console.warn('Диапазон равен 0');
        } else if (this.startDigit > this.finishDigit) {
            let temp = this.startDigit;
            this.startDigit = this.finishDigit;
            this.finishDigit = temp;
            console.warn('Значение начала диапазон больше его конца. ' +
                'Они будут заменены');
        }

        if (this.startDigit < 0) {
            this.startDigit = -this.startDigit;
            console.warn('Значение начала диапазона будет взято по модулю');
        }

        if (this.finishDigit < 0) {
            this.finishDigit = -this.finishDigit;
            console.warn('Значение конца диапазона будет взято по модулю');
        }
    }

    /**
     * Заполнение массива четными или нечетными числами
     * @param delimiter делитель
     * @param isNot условие (flag) для заполнения массива четными или нечетными числами
     * @private
     */
    _process(delimiter, isNot = false) {
        this._checkArray();
        this._checkStartAndFinishDigit();

        for (let i = this.startDigit; i <= this.finishDigit; i++) {
            if (isNot ? !(i % delimiter) : i % delimiter) {
                this.array.push(i);
            }
        }
    }
}