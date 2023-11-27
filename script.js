function resizeImage(boxId) {
    const box = document.getElementById(boxId);
    const img = box.querySelector('img');

    const currentWidth = parseInt(img.style.width) || 200;

    if (currentWidth === 200) {
        img.style.width = '400px';
    } else {
        img.style.width = '200px';
    }
}

function toggleSize() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    resizeImage('box1');
    resizeImage('box2');
}