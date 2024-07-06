// // Домашнее задание

// // Задание 1. Получение данных о пользователе.

// // Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// // Подсказка, с последовательностью действий:
// // getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// // Работа должна быть выполнена с API: https://reqres.in/

// console.log('Task 1');

// const urlReqre = 'https://reqres.in/api/users?page=2/';

// async function getUserData(id) {
//     try {
//         const response = await fetch(urlReqre);// GET-запроc

//         if (!response.ok) {// true или false
//             throw new Error(error.message);
//         }

//         const usersData = await response.json();

//         let coincidence = 0;
//         /* cчётчик совпадений id, 
//         использую чтобы каждую итерацию цикла не выводить
//          одинаковые сообщения об отсутствии пользователя */

//         usersData.data.forEach(obj => {
//             /* в usersData получаем объект, пользователи находятся в массиве data,
//             переходим к нему и бежим циклом по объектам, сравнивая id */
//             if (obj.id === id) {
//                 console.log(obj);
//                 coincidence ++;
//             } 
//         });

//         if (coincidence === 0) {
//             console.log(`Пользователя с ID:${id} не существует.`);            
//         }
//         // return usersData;
//     } catch (error) {
//         console.log(`Что-то пошло не так - ошибка: ${error.message}.`);
//     }
// }

// console.log(getUserData(8));
// console.log(getUserData(1));

//-------------------------------------------------------------------------------------------------------------------

// // Задание 2. Отправка данных на сервер.

// // Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// // *Подсказка *

// // // Пример использования функции
// // const user = {
// //   "name": "John Doe",
// //   "job": "unknown"
// // };

// // saveUserData(user)
// //   .then(() => {
// //     console.log('User data saved successfully');
// //   })
// //   .catch(error => {
// //     console.log(error.message);
// //   });
// // saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// // Работа должна быть выполнена с API: https://reqres.in/

// console.log('Task 2');

// const urlReqres = 'https://reqres.in/api/users/';

// async function saveUserData(userdata) {
//     try {
//         const response = await fetch(urlReqres, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify(userdata)
//         });

//         if (!response.ok) {
//             throw new Error(error.message);
//         }

//         console.log(`User data saved successfully`);
        
//         response.json().then((data) => {// проверим прошёл ли Post запрос
//         console.log(data);
//         });

//     } catch (error) {
//         console.log(`Что-то пошло не так, ошибка: ${error.message}`);
//     }
// }

// // Пример использования функции
// const user = {
//     name: "John Doe",
//     job: "unknown"
// };

// saveUserData(user);

//-------------------------------------------------------------------------------------------------------------------

// // Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

// // Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

// // Пример использования функции
// // changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

// console.log('Task 3');

// function changeStyleDelayed(id, delay) {
//     setTimeout(() => {
//       document.getElementById(id).style.color = 'olive';
//     }, delay);
//   }
  
//   changeStyleDelayed('myElement', 2000);