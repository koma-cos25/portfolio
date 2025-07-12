
const sections = {
    main: document.getElementById('main'),
    profile: document.getElementById('profile'),
    work: document.getElementById('work'),
    hobby: document.getElementById('hobby')
};

let currentSection = 'main';


function showSection(sectionId) {
    
    for (const id in sections) {
        sections[id].classList.add('hidden');
    }
   
    sections[sectionId].classList.remove('hidden');
    currentSection = sectionId; 
}


document.addEventListener('DOMContentLoaded', () => {
    showSection('main');
});


const workImages = [
    { src: './images/1.jpg', caption: '作品1：春' },
    { src: './images/2.jpg', caption: '作品2：オーガニック' },
    { src: './images/3.jpg', caption: '作品3：ポスター' },
    { src: './images/4.jpg', caption: '作品4：トランプマーク' },
    { src: './images/5.jpg', caption: '作品5：名刺' }
];

const hobbyImages = [
    { src: './images/h2.jpg', caption: '' },
    { src: './images/h1.jpg', caption: '' },
    { src: './images/h3.jpg', caption: '' },
    { src: './images/h4.jpg', caption: '' },
    { src: './images/h5.jpg', caption: '' }
]
let currentWorkSlide = 0;
let currentHobbySlide = 0
function changeSlide(type, direction) {
    let imageElement;
    let captionElement;
    let imagesArray;
    let currentIndex;

    if (type === 'work') {
        imageElement = document.getElementById('work-slider-image');
        captionElement = document.getElementById('work-image-caption');
        imagesArray = workImages;
        currentIndex = currentWorkSlide;
    } else if (type === 'hobby') {
        imageElement = document.getElementById('hobby-slider-image');
        captionElement = document.getElementById('hobby-image-caption');
        imagesArray = hobbyImages;
        currentIndex = currentHobbySlide;
    }

    imageElement.style.opacity = '0';

    setTimeout(() => {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = imagesArray.length - 1;
        } else if (currentIndex >= imagesArray.length) {
            currentIndex = 0;
        }

        if (type === 'work') {
            currentWorkSlide = currentIndex;
        } else if (type === 'hobby') {
            currentHobbySlide = currentIndex;
        }

        imageElement.src = imagesArray[currentIndex].src;
        captionElement.textContent = imagesArray[currentIndex].caption;

    
        imageElement.style.opacity = '1';
    }, 300);
}

function updateImage(page, newSrc) {
    if (page === 'main') {
        document.getElementById('main-image').src = newSrc;
    } else if (page === 'profile') {
        document.getElementById('profile-image').src = newSrc;
    }

}


document.addEventListener('DOMContentLoaded', () => {
    const workImageElement = document.getElementById('work-slider-image');
    const workCaptionElement = document.getElementById('work-image-caption');
    if (workImages.length > 0) {
        workImageElement.src = workImages[0].src;
        workCaptionElement.textContent = workImages[0].caption;
    }

       const hobbyImageElement = document.getElementById('hobby-slider-image');
    const hobbyCaptionElement = document.getElementById('hobby-image-caption');
    if (hobbyImages.length > 0) {
        hobbyImageElement.src = hobbyImages[0].src;
        hobbyCaptionElement.textContent = hobbyImages[0].caption;
    }
});
