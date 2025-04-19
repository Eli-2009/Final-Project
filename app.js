let planetDistances = {
    "mercury": 57.9,
    "venus": 108.2,
    "earth": 149.6,
    "mars": 227.9,
    "jupiter": 778.3,
    "saturn": 1427,
    "uranus": 2871,
    "neptune": 4497
};

function calculate() {
    const planet1 = document.getElementById('planet-1').value.toLowerCase();
    const planet2 = document.getElementById('planet-2').value.toLowerCase();
    const resultElement = document.getElementById('result-h1')

    if (!planetDistances[planet1] || !planetDistances[planet2]) {
        resultElement.textContent = 'Enter the correct planet name!';
        resultElement.style.color = 'red'
        return;
    }else{
        resultElement.style.color = 'rgb(147, 147, 147)'
    }

    const distance1 = planetDistances[planet1];
    const distance2 = planetDistances[planet2];

    const distance = Math.abs(distance1 - distance2);
    const roundedDistance = Math.round(distance);

    resultElement.textContent = `${planet1.charAt(0).toUpperCase() + planet1.slice(1)} and ${planet2.charAt(0).toUpperCase() + planet2.slice(1)} are approximately ${roundedDistance} million kilometers apart.`;
}

const calcbtn = document.getElementById('calc-btn');
calcbtn.addEventListener('click', calculate);









let img1 = document.createElement('img');
img1.src = 'https://www.worldatlas.com/r/w1200/upload/e8/9d/7c/shutterstock-1055322356.jpg';
img1.classList.add('add-img');
img1.style.display = 'block'
document.body.appendChild(img1);


let img2 = document.createElement('img');
img2.src = 'https://universemagazine.com/wp-content/uploads/2023/10/photo_2023-10-18_15-59-58.jpg';
img2.classList.add('add-img');
img2.style.display = 'none'
document.body.appendChild(img2);




let img3 = document.createElement('img');
img3.src = 'https://s3.amazonaws.com/cms.ipressroom.com/173/files/20233/6436fb312cfac278e61b35e3_Earth/Earth_mid.jpg';
img3.classList.add('add-img');
img3.style.display = 'none'
document.body.appendChild(img3);



let img4 = document.createElement('img');
img4.src = 'https://media.cnn.com/api/v1/images/stellar/prod/180725085608-01-mars-lake-radar-evidence.jpg?q=x_0,y_565,h_1392,w_2474,c_crop/w_1280';
img4.classList.add('add-img');
img4.style.display = 'none'
document.body.appendChild(img4);



let img5 = document.createElement('img');
img5.src = 'https://c02.purpledshub.com/uploads/sites/41/2024/04/jupiter.jpg?w=1029&webp=1';
img5.classList.add('add-img');
img5.style.display = 'none'
document.body.appendChild(img5);



let img6 = document.createElement('img');
img6.src = 'https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/06/Saturn1.jpeg?size=*:900';
img6.classList.add('add-img');
img6.style.display = 'none'
document.body.appendChild(img6);



let img7 = document.createElement('img');
img7.src = 'https://www.funkidslive.com/wp-content/uploads/2022/10/yto1u-i1pvi-1024x585.jpg';
img7.classList.add('add-img');
img7.style.display = 'none'
document.body.appendChild(img7);


let img8 = document.createElement('img');
img8.src = 'https://vjloopsfarm.com/wp-content/uploads/2021/03/Beautiful-View-of-Blue-Planet-Neptune-from-Space-Timelapse-hiphp8-1920_001.jpg';
img8.classList.add('add-img');
img8.style.display = 'none'
document.body.appendChild(img8);

let a = 0;
let allimages = [img1, img2, img3, img4, img5, img6, img7, img8]


let after = document.querySelector('.btn2');
after.addEventListener('click', () =>{
    allimages[a].style.display = 'none';
    a = (a + 1) % 8;
    allimages[a].style.display = 'block'
})


let before = document.querySelector('.btn1');
before.addEventListener('click', () =>{
    allimages[a].style.display = 'none';
    a = (a + 7) % 8;
    allimages[a].style.display = 'block'
})