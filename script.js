const allGalleries = document.querySelectorAll('.image-container');

const imageGroups = [
    [
        'img/photo_2025-04-17_14-54-52.jpg',
        'img/photo_2025-04-17_18-21-47.jpg'
    ],
    [
        'img/photo_2025-04-17_14-57-31 (5).jpg',
        'img/photo_2025-04-17_14-57-31 (4).jpg',
        'img/photo_2025-04-17_14-57-31 (2).jpg',
        'img/photo_2025-04-17_14-57-30.jpg',
        'img/photo_2025-04-17_14-57-31 (3).jpg',
        'img/photo_2025-04-17_14-57-31.jpg'
    ],
    [
        'img/photo_2025-04-17_14-59-16.jpg',
        'img/photo_2025-04-17_14-59-15 (2).jpg',
        'img/photo_2025-04-17_14-59-16 (4).jpg',
        'img/photo_2025-04-17_14-59-16 (3).jpg',
        'img/photo_2025-04-17_14-59-16 (2).jpg'
    ],
    [
    'img/photo_2025-04-17_15-04-25 (2).jpg',
    'img/photo_2025-04-17_15-04-25 (3).jpg',
    'img/photo_2025-04-17_15-04-25.jpg'
    ],
    [
        'img/photo_2025-04-17_15-17-13.jpg',
        'img/photo_2025-04-17_15-17-14 (2).jpg',
        'img/photo_2025-04-17_15-17-14.jpg'
    ],
    [
        'img/photo_2025-04-17_15-17-23.jpg',
        'img/photo_2025-04-17_15-17-22.jpg'
    ],
    [
        'img/photo_2025-04-17_15-03-05 (2).jpg',
        'img/photo_2025-04-17_15-03-05 (3).jpg',
        'img/photo_2025-04-17_15-03-05.jpg'
    ],
    [
        'img/photo_2025-04-17_15-06-06.jpg',
        'img/photo_2025-04-17_15-06-05.jpg',
        'img/photo_2025-04-17_15-06-05 (3).jpg',
        'img/photo_2025-04-17_15-06-05 (2).jpg'

    ]

];

allGalleries.forEach((gallery, index) => {
    const img = gallery.querySelector('.gallery-image');
    const prevBtn = gallery.querySelector('.prev');
    const nextBtn = gallery.querySelector('.next');
    const images = imageGroups[index];
    let currentIndex = 0;

    function updateImage() {
        img.style.opacity = 0;
        setTimeout(() => {
            img.src = images[currentIndex];
            img.style.opacity = 1;
        }, 300);
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    updateImage(); // Инициализация
});
