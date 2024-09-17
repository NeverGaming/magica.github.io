const dispalyedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
    'pic1.jpg': 'Loveless',
    'pic2.jpg': 'souvlaki',
    'pic3.jpg': 'Nowhere',
    'pic4.jpg': 'Uzuninaru',
    'pic5.jpg': 'crystallize'
}

/* Array */
for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    newImage.setAttribute('alt', alts['pic' + i + '.jpg']);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        dispalyedImage.setAttribute('src', e.target.getAttribute('src'));
        dispalyedImage.setAttribute('alt', e.target.getAttribute('alt'));
    });
}

/* Button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});