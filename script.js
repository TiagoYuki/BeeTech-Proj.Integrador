// Galera da turma
const teamMembers = [
    { name: "Tiago Yuki Masuda", role: "Coordenador de Desenvolvimento Web & Desenvolvedor Frontend", image: "./pictures/tiago_yuki_masuda.jpeg" },
    { name: "Maicon de Oliveira Soares", role: "Coordenador de Programação & Desenvolvedor Full-Stack", image: "./pictures/maicon_de_oliveira_soares.jpeg" },
    { name: "Camila Gois Silva", role: "Coordenadora de Documentação do projeto & Documentadora", image: "./pictures/camila_gois_silva.jpeg" },
    { name: "Cristiano de Souza", role: "Desenvolvedor Web", image: "./pictures/cristiano_de_souza.jpeg" },
    { name: "Kevin Oliveira Frick", role: "Desenvolvedor de Software", image: "./pictures/kevin_oliveira_frick.jpeg" },
    { name: "Aline Macêdo de Andrade", role: "Documentadora", image: "./pictures/aline_macedo_de_andrade.jpeg" },
    { name: "Alysson Pereira", role: "Desenvolvedor Web", image: "./pictures/alysson_pereira_de_souza.jpeg" },
    { name: "Gabriel Lima de Sena", role: "Desenvolvedor de Software", image: "./pictures/gabriel_lima_de_sena.jpeg" },
    { name: "Keli de Jesus Costa", role: "Documentadora", image: "./pictures/keli_de_jesus_costa.jpeg" },
    { name: "Glêbson Jesus Silva Almeida", role: "Desenvolvedor Web", image: "./pictures/glebson_jesus_silva_almeida.jpeg" },
    { name: "Gabriel da Silva Almeida", role: "Desenvolvedor de Software", image: "./pictures/gabriel_da_silva_almeida.jpeg" },
    { name: "Lorrana Gonçalves dos Santos", role: "Documentadora", image: "./pictures/lorrana_goncalves_dos_santos.jpeg" }
];

// Pegando os elementos do HTML
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const teamGrid = document.getElementById('team-grid');

// Quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    populateTeamGrid();
    setupScrollEffects();
});

// Joga a galera na tela
function populateTeamGrid() {
    teamGrid.innerHTML = teamMembers.map(member => `
        <div class="team-member">
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <div class="team-member-info">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
        </div>
    `).join('');
}

// Faz o header mudar quando rola a página
function setupScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY > 50;
        header.classList.toggle('scrolled', scrolled);
    });
}

// Abre/fecha o menu do celular
function toggleMenu() {
    const isOpen = mobileMenu.style.display === 'block';
    mobileMenu.style.display = isOpen ? 'none' : 'block';
    
    // Anima o hambúrguer
    const hamburgers = document.querySelectorAll('.hamburger');
    hamburgers.forEach((line, index) => {
        if (!isOpen) {
            if (index === 0) line.style.transform = 'rotate(45deg) translate(6px, 6px)';
            if (index === 1) line.style.opacity = '0';
            if (index === 2) line.style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            line.style.transform = 'none';
            line.style.opacity = '1';
        }
    });
}

// Rolagem suave pra seção
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = header.offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
        
        // Fecha o menu do celular se tiver aberto
        mobileMenu.style.display = 'none';
        const hamburgers = document.querySelectorAll('.hamburger');
        hamburgers.forEach(line => {
            line.style.transform = 'none';
            line.style.opacity = '1';
        });
    }
}

// Faz animação quando aparece na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Marca os elementos pra animar quando aparecer
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.team-member, .feature-card, .importance-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Fecha o menu do celular se clicar fora dele
document.addEventListener('click', function(event) {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnButton = mobileMenuBtn.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnButton && mobileMenu.style.display === 'block') {
        toggleMenu();
    }
});

// Faz rolar suave quando clica nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});






// Função para reproduzir o som do clique

function playClickSound() {
    var audio = document.getElementById('click-sound');
    audio.currentTime = 0;
    audio.play();
}