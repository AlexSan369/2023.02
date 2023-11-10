// Busca todos os elementos com a classe slide
const slides = document.querySelectorAll('.slide');
// Botão avançar
const next = document.querySelector('#next');
// Botão voltar
const prev = document.querySelector('#prev');  
// Habilita desabilita ou a transição automática entre slides
const auto = false; // Auto scroll
// Intervalo entre transições
const intervalTime = 2000;
let slideInterval; 


// Função para avançar ao próximo slide
const nextSlide = () => {
    // Busca o slide com a classe atual
    const atual = document.querySelector('.atual');
    // Remove a classe do slide atual
    atual.classList.remove('.atual');
    // Verifica se existe o próximo slide
    if (atual.nextElementSibling) {
        // Adiciona a .atual ao próximo slide
        atual.nextElementSibling.classList.add('atual');
    } else {
        // Adiciona a classe atual ao primeiro slide
        slides[0].classList.add('atual');
    }

    setTimeout(()=> atual.classList.remove('atual'));

};

// Função para voltar ao slide anterior
const prevSlide = () => {
    // Busca o slide com classe atual
    const atual = document.querySelector('.atual');
    // Remove a classe atual do slide
    atual.classList.remove('atual');
    // Verifica se existe o slide anterior
    if (atual.previousElementSibling) {
        // Adiciona a classe atual no slide anterior
        atual.previousElementSibling.classList.add('atual');
    } else {
        // Adiciona a classe atual no último slide
        slides[slides.length -1].classList.add('atual');
    }

    setTimeout(()=> atual.classList.remove('atual'));
}


// Eventos de clique nos botões
next.addEventListener('click', (e) => {
    nextSlide();  // Invoca a função próximo slide
    // Executa a transição entre slides
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', (e) => {
    prevSlide();  // Invoca a função próximo slide
    // Executa a transição entre slides
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(prevSlide, intervalTime);
    }
});



