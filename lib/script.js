const darkButton = document.querySelector('.dark-container');
const body = document.querySelector('body');

darkButton.addEventListener('click',() => {
    darkButton.classList.toggle('dark');
    if (darkButton.classList.contains('dark')) {
        body.style = 'background-color: #222831; color: #6c7b8b;'
    }
    else{
        body.style = 'background-color: #fff; color: black;'
    }
});

// Hayvanlar Alemi bağlantısına tıklandığında
document.getElementById("hayvanlar-link").addEventListener("click", function() {
    // Hayvanlar Alemi sayfasına yönlendir
    window.location.href = "hayvanlar.html";
});

// Tarım bağlantısına tıklandığında
document.getElementById("tarim-link").addEventListener("click", function() {
    // Tarım sayfasına yönlendir
    window.location.href = "tarim.html";
});

// Türkiye Macerası bağlantısına tıklandığında
document.getElementById("turkiye-link").addEventListener("click", function() {
    // Türkiye Macerası sayfasına yönlendir
    window.location.href = "turkiye.html";
});

document.getElementById("anaSayfa").addEventListener("click", function() {
    window.location.href = "index.html";

});