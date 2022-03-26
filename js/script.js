/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    // Возьмите свой код из предыдущей практик
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = document.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector(".adding__input"),
          butt = document.querySelector('.add button'),
          items = document.querySelectorAll('.promo__interactive-item'),
          list = document.querySelector('.promo__interactive-list'),
          deleteElem = document.querySelectorAll('.delete'),
          checkBox = addForm.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkBox.checked;

        if(newFilm){

            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if(favorite){
                console.log("всё ок");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies, movieList);

            createMovieList(movieDB.movies, movieList);
        }


        event.target.reset();



    });




    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    


    function createMovieList(films, parent){
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

    // sortArr(movieDB.movies);
    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);

// console.log(adv);
    
//     adv.forEach((item) => {
//         item.remove();
//     });
    
//     // console.log(list);
//     // list.innerHTML += `<li class="promo__interactive-item">123
//     // <div class="delete"></div>
//     // </li>`
    
//     movieDB.movies.forEach((itemElem) => {
//         list.innerHTML += `<li class="promo__interactive-item">${itemElem}
//         <div class="delete"></div>
//     </li>`
//         // deleteElement();
    
//     });
    
//     deleteElement();
    
//     butt.addEventListener('click', (item) => {
//         item.preventDefault();
//         movieDB.movies.push(input.value.toUpperCase());

//         movieDB.movies.sort();
//         list.innerHTML = "";
//         movieDB.movies.forEach((itemElem) => {
//             list.innerHTML += `<li class="promo__interactive-item">${itemElem}
//             <div class="delete"></div>
//         </li>`
//             deleteElement();
//             // itemElem.toUpperCase();
//         });
//     //     list.innerHTML += `<li class="promo__interactive-item">${input.value}
//     //     <div class="delete"></div>
//     // </li>`
//     //     deleteElement();
//         // console.log(movieDB.movies);
//         if(check.checked){
//             console.log('ggwp');
//         }
//         // console.dir(check);
//         // movieDB.movies.sort();
    
//     });
    
    
//     function deleteElement() {
//         document.querySelectorAll('.delete').forEach((item)=> {
//             item.addEventListener('click', (e) => {
//                 item.parentElement.remove();
//             });
//         });
//     };
    
//     deleteElement();
    
//     // deleteElem.forEach((item)=> {
//     //         item.addEventListener('click', (e) => {
//     //             item.parentElement.remove();
//     //         });
//     // //     addEventListener('click', (item) => {
//     // //     item.parentElement.remove();
//     // // })
//     // });
// 
});