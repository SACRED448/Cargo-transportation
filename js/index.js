/*
    Как рассчитываются проценты?
    5%:
    Перевозка стройматериалов
    Дачный переезд
    Грузовое такси
    Квартирный переезд
    3%:
    Офисный переезд
    Перевозка мебели
    Перевозка вещей
    Перевозка бытовой техники
 */
/*
Тарифы:
1ч работы грузчиков - 400 руб
 */

// Добавить блок try{} catch{}
let sum = function () {
    let prozent = document.getElementById('3').value;
    switch (prozent) {
        case 'Перевозка стройматериалов':
        case 'Дачный переезд':
        case 'Грузовое такси':
        case 'Квартирный переезд':
            prozent = 1.05;
            break;
        case 'Офисный переезд':
        case 'Перевозка мебели':
        case 'Перевозка вещей':
        case 'Перевозка бытовой техники':
            prozent = 1.03;
            break;
    }
    let totalSum = document.getElementById('1').value * 400
            * document.getElementById('2').value * prozent;
    document.getElementById('4').value = totalSum + " руб";
};




