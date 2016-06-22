var images = ['http://i.imgur.com/1BB0H0f.jpg', 'http://i.imgur.com/HoGO3uN.jpg'];
document.getElementById("bg-text").style.background-image = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';
