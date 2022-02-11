import { doc } from 'prettier';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const btnElement = document.createElement('button');
    btnElement.innerHTML = 'Удали меня';
    document.body.appendChild(btnElement);

    btnElement.addEventListener('click', () => {
        btnElement.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    arr.forEach((el) => (ulElement.innerHTML += `<li>${el}</li>`));
    let lis = document.querySelectorAll('li');
    lis.forEach((el) => {
        el.addEventListener('mouseover', (e) => {
            e.target.setAttribute('title', e.target.textContent);
        });
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.innerHTML = 'tensor';
    document.body.appendChild(link);

    let clicks = 0;

    link.addEventListener('click', (e) => {
        if (clicks > 0) {
            e.target.preventDefault();
            clicks++;
        } else {
            e.target.innerHTML += ' ' + e.target.getAttribute('href');
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.innerHTML =
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>';

    let lis = document.querySelectorAll('li');
    let lisCount = lis.length;
    lis.forEach((el, index) => {
        el.addEventListener('click', (e) => {
            if (el || index >= lisCount) {
                e.target.innerHTML += '!';
            }
        });
    });

    document.querySelector('button').addEventListener('click', () => {
        let newLi = document.createElement('li');
        newLi.innerHTML = 'Пункт';
        document.body.querySelector('ul').appendChild(newLi);
    });
}
