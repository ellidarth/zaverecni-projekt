// кнопка действия(pridat)
const btn = document.getElementById("pridat");


// функция для отрисовки Storage при загрузке страницы
function RenderStorage() {
    let obj = JSON.parse(localStorage.getItem("pridat")) // получаем объект из Storage
    // тоже самое что и в методе render()
    const clone = document.querySelector('.clone').cloneNode(true) 
    clone.children[0].innerHTML = obj.name
    clone.children[1].innerHTML = obj.surname
    clone.children[2].innerHTML = obj.age
    clone.children[3].innerHTML = obj.phone
    document.querySelector('table').append(clone)
}
RenderStorage()

//функция получения данный с импутов и передача их в классовый компонент База для создания объекта //
const responsive = () => {
    const arrData = Array.from(document.querySelectorAll('.input_data')) // собираем данные со всех инпутов
    const obj = new Baza(arrData[0].value, arrData[1].value, arrData[2].value, arrData[3].value) // используем конструктор класса и генерируем из класса (уникальный) объект
    localStorage.setItem("pridat", JSON.stringify(obj)) // отправка в storage последнего объекта
    obj.render()// вызываем метод класса(объекта)
}

// слушатель события на кнопку (pridat)
btn.addEventListener("click", responsive)

// классовый компонент
class Baza {
    //конструктор класса для создания объекта
    constructor(name, surname, age, phone) { // встроенный метод получения параметров для генерации объекта
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.phone = phone;
    }
    // метод (функция) для генерации полей таблицы с данными из импутов
    render(){
        const clone = document.querySelector('.clone').cloneNode(true) // клонирование первой строки таблицы для последующего использования
        clone.children[0].innerHTML = this.name
        clone.children[1].innerHTML = this.surname
        clone.children[2].innerHTML = this.age
        clone.children[3].innerHTML = this.phone
        document.querySelector('table').append(clone) // рендеринг (добавили на страницу) измененного клона 
    }
}



