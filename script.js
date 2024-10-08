window.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('image');
    const loadingSpinner = document.getElementById('loading-spinner');

    // Rasm yuklanishi yakunlangandan so'ng uni ko'rsatish
    image.onload = function() {
        console.log('Rasm yuklandi!');  // Tekshiruv uchun
        loadingSpinner.style.display = 'none'; // Yuklash effektini yashirish
        image.style.display = 'block'; // Rasmni ko'rsatish
    };

    // Agar rasm yuklanmasa, yuklash effektini olib tashlash
    image.onerror = function() {
        console.log('Rasm yuklanmadi!');  // Tekshiruv uchun
        loadingSpinner.style.display = 'none';
        alert('Rasm yuklanmadi.');
    };

    // Rasmni yuklashni boshlash
    image.src = "https://img3.akspic.ru/crops/6/6/9/7/7/177966/177966-zvezdnyj_hranitel_2022-riot_games-liga_legend-2022-valorant-3840x2160.png"; // Rasm manzili to'g'ri ekanligiga ishonch hosil qiling
});
