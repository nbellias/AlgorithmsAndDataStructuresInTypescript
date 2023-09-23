namespace CalculateExecutionTime {

    function generateRandomArray(size: number): number[] {
        const min = 1000000.00001;
        const max = 100000000.00001;
        const randomArray = [];

        for (let i = 0; i < size; i++) {
            const randomValue = Math.random() * (max - min) + min;
            randomArray.push(randomValue);
        }

        return randomArray;
    }

    function bubbleSort(arr: number[]): number[] {
        const n = arr.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    const temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);

        return arr;
    }

    function insertionSort(arr: number[]): number[] {
        const n = arr.length;
        for (let i = 1; i < n; i++) {
            const key = arr[i];
            let j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }

        return arr;
    }

    function mergeSort(arr: number[]): number[] {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left: number[], right: number[]): number[] {
        let result: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    const arraySize = 100000;
    const randomArray = generateRandomArray(arraySize);

    // Measure bubble sort execution time
    const bubbleSortStart = performance.now();
    bubbleSort(randomArray.slice());
    const bubbleSortEnd = performance.now();
    console.log(`Bubble Sort Execution Time: ${bubbleSortEnd - bubbleSortStart} milliseconds`);

    // Measure insertion sort execution time
    const insertionSortStart = performance.now();
    insertionSort(randomArray.slice());
    const insertionSortEnd = performance.now();
    console.log(`Insertion Sort Execution Time: ${insertionSortEnd - insertionSortStart} milliseconds`);

    // Measure merge sort execution time
    const mergeSortStart = performance.now();
    mergeSort(randomArray.slice());
    const mergeSortEnd = performance.now();
    console.log(`Merge Sort Execution Time: ${mergeSortEnd - mergeSortStart} milliseconds`);

}