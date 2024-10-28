// Создать div
const div = document.createElement('div');
// Добавить к нему класс wrapper
div.classList.add('wrapper');
// Поместить его внутрь тэга body
const body = document.body;
body.appendChild(div);
console.log(body)

// Создать заголовок H1 "DOM (Document Object Model)"
const header =document.createElement('h1');
// console.log(header);
header.textContent = 'Document Object Model';
// Добавить H1 перед DIV с классом wrapper

div.insertAdjacentElement('beforebegin',header)

console.log(body)
// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const list = document.createElement('ul');

const itemOne = document.createElement('li');
itemOne.textContent = 'один';
const itemTwo = document.createElement('li');
itemTwo.textContent = 'два';

const itemThree = document.createElement('li');
itemThree.textContent = 'три';

list.appendChild(itemOne);
list.appendChild(itemTwo);
list.appendChild(itemThree);
console.log(list)

// Поместить список внутрь элемента с классом wrapper
div.appendChild(list)

// =================================================
// Создать изображение
const img = document.createElement('img');

// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.srs ='https://picsum.photos/240';
console.log (img);
// 2. Добавить атрибут width со значением 240
img.width =240;
// 3. Добавить класс super
img.classList.add('super')
// 4. Добавить свойство alt со значением "Super Man"
img.alt ='Super Man'
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img)
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
const elemHTML = `<div class="pDiv">
<p>Первый параграф.</p>
<p>Второй параграф.</p>
</div>`

// Поместить этот DIV до элемента <ul></ul>
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML ('beforebegin',elemHTML); //insertAdjacentHTML потому что переменная не элемент,а разметка

// Добавить для 2-го параграфа класс text
const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
// console.log(pDiv.children);
// Удалить 1-й параграф
pDiv.firstElementChild.remove();
// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year
const generateAutoCard = (brand, color, year) => {
    const curDate = new Date() ;
    const curYear = curDate.getFullYear()
    return `
        <div class="autoCard">
            <h2> ${ brand.toUpperCase()}  ${color} ${year}</h2>  
            <p>Автомобиль  ${brand.toUpperCase()} - ${year}года. Возраст авто - ${curYear-year} лет.</p>
            <button type='button'class= 'btn' >Удалить</button>
        
            </div>
    `; //toUpperCase в верхний регистр
} 
// чтобы посчитать возраст авто применим объект date: 
// const test= new Date ();
// console.log(test); //получаем Mon Oct 28 2024 22:54:03 GMT+0300 (Москва, стандартное время) и потом уже можно получить отдедьные свойства
// const year = test.getFullYear();
// console.log (year); напишем всё это в 74-1 строке

// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');
console.log (carsDiv);
// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
]
const carsHtml = carsList.map(car =>{
    return generateAutoCard( car.brand, car.color, car.year)
}).join('');
console.log(carsHtml)
// Поместить эти 3 карточки внутрь DIV с классом autos

carsDiv.innerHTML = carsHtml;
console.log(carsDiv);



// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
const nDiv = document.querySelector('.wrapper');
nDiv.insertAdjacentElement('beforebegin', carsDiv); // отлтчно) но у нас одинаковые заголовки, исправим) для этого в коде 74 добавим ${} чтобы использовать переменнеы

// Добавить кнопку Удалить на каждую карточку авто
// сделаем в разметке сразу( код выше на 76 строке)


// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку

// пока при клике на кнопки ничего не происходить, сейчас это исправлю)))

const buttons = document.querySelectorAll('.btn') //All потому что все элементы нужны
function handleClick(e) {
    const currentButton = e.currentTarget;//свойство объекта event, которое указывает на элемент, к которому привязано обработчик события, то есть элемент, на котором в данный момент происходит событие.
    currentButton.closest('.autoCard').remove()
    // console.log(currentButton)
    // closest() - это метод JavaScript, который позволяет вам найти ближайшего предка элемента, который соответствует указанному селектору. 
}

// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку

buttons.forEach(button=> {
    button.addEventListener ('click', handleClick) // при срабатывании(клике) запускается функция handleClick
})