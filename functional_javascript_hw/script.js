// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);


// 1
console.log('Task 1');

const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));



// 2
console.log('Task 2');

function createCounter() {
    let count = 0;
    const increment = () => ++count;
    const decrement = () => --count;

    return { increment, decrement }
}

const counter = createCounter();
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.increment());



// 3 - Решение из интернета
console.log('Task 3');

function findElementByClass(rootElement, className) {
    if (rootElement.classList.contains(className)) {
        return rootElement;
    }

    for (let i = 0; i < rootElement.children.length; i++) {
        const childElement = rootElement.children[i];
        const targetElement = findElementByClass(childElement, className);
        if (targetElement) {
            return targetElement;
        }
    }

    return null;
}


const rootElement = document.getElementById('root');
// console.log(rootElement);
const targetElement = findElementByClass(rootElement, 'text');
console.log(targetElement);

// ------------------------------------------------------------------------

// Функция findElementByClass используется для поиска элемента DOM (Document Object Model) по указанному классу вложенно внутри заданного корневого элемента.

// Параметры:

//  rootElement: Корневой элемент, с которого начинается поиск.
//  className: Имя класса, который нужно искать.

// Описание:

// 1. Функция сначала проверяет, содержит ли класс 'className' сам корневой элемент. Если да, то он возвращает корневой элемент.
// 2. Если корневой элемент не содержит класса 'className', она перебирает все дочерние элементы корневого элемента.
// 3. Для каждого дочернего элемента она рекурсивно вызывает findElementByClass, передавая ему дочерний элемент и имя класса.
// 4. Если какой-либо дочерний элемент содержит класс 'className', функция возвращает этот элемент.
// 5. Если ни один из дочерних элементов не содержит класс 'className', функция возвращает null.
