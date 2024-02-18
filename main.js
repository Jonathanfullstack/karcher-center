// Obtenha todos os divs de fundo
var backgrounds = document.querySelectorAll('.background');
// Get the slider and the images
const slider = document.querySelector('.slider-images');
const images = Array.from(slider.children);

// Defina o índice de imagem inicial
let imageIndex = 0;

// Atualize o controle deslizante
function updateSlider() {
    // Remova as classes 'ativa', 'anterior', 'próximo' e 'inativa' de todas as imagen
    images.forEach(image => {
        image.classList.remove('active', 'previous', 'next', 'inactive');
    });

    // Adicione a classe 'ativa' à imagem atua
    images[imageIndex].classList.add('active');

    // Adicione a classe 'anterior' à imagem antes da atual
    if (imageIndex - 1 >= 0) {
        images[imageIndex - 1].classList.add('previous');
    } else {
        images[images.length - 1].classList.add('previous');
    }

//Adiciona a classe 'next' à imagem após a atual    
    if (imageIndex + 1 < images.length) {
        images[imageIndex + 1].classList.add('next');
    } else {
        images[0].classList.add('next');
    }

    // Adicione a classe 'inativa' às outras imagens
    images.forEach((image, index) => {
        if (index !== imageIndex && index !== (imageIndex - 1 + images.length) % images.length && index !== (imageIndex + 1) % images.length) {
            image.classList.add('inactive');
        }
    });

    // Set the opacity of all the background divs to 0
    backgrounds.forEach((background) => {
        background.style.opacity = 0;
    });
    // Se a imagem atual estiver ativa, defina a opacidade da div de fundo correspondente como 1
    if (images[imageIndex].classList.contains('active')) {
        backgrounds[imageIndex].style.opacity = 1;
    }
    // Atualizar o índice da imagem
    imageIndex = (imageIndex + 1) % images.length;
}
updateSlider();
// Atualize o controle deslizante a cada 3 segundos
setInterval(updateSlider, 3000);

images[1].classList.add('next');
images[2].classList.add('inactive');
images[3].classList.add('inactive');
images[4].classList.add('previous');
images[0].classList.add('active');