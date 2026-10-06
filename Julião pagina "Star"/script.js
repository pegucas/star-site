document.addEventListener('DOMContentLoaded', () => {

    // INTERAÇÃO 1: Efeito de Zoom/Ampliação ao clicar nas Revistas (Substituiu o Alerta do Menu)
    const magazineCards = document.querySelectorAll('.magazine-card');
    magazineCards.forEach(card => {
        card.addEventListener('click', () => {
            // Primeiro, removemos a ampliação de todas as outras revistas caso alguma já esteja aberta
            magazineCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('expanded');
                }
            });
            // Alterna a classe 'expanded' na revista que acabou de ser clicada
            card.classList.toggle('expanded');
        });
    });

    // INTERAÇÃO 2: Filtro/Highlight das Pílulas de Categoria (Página 1)
    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            // Remove a classe 'active' de todos os botões
            pills.forEach(p => p.classList.remove('active'));
            // Adiciona a classe 'active' apenas no botão clicado
            e.target.classList.add('active');
        });
    });

    // INTERAÇÃO 3: Prompt de Login Personalizado
    const loginLink = document.getElementById('login-link');
    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = prompt('Bem-vindo à STAR! Digite seu e-mail para fazer login:');
            if (email) {
                alert(`Login solicitado para: ${email}. Verifique sua caixa de entrada!`);
            }
        });
    }

    // INTERAÇÃO 4: Validação e Interceptação do Formulário de Newsletter (Footer)
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página
            const emailInput = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Sucesso! O e-mail ${emailInput} foi cadastrado na nossa newsletter.`);
            newsletterForm.reset();
        });
    }

    // INTERAÇÃO 5: Interceptação do Formulário de Contato
    const contactForm = document.getElementById('contact-page-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Sua mensagem foi enviada para a equipe comercial. Retornaremos em breve!');
            contactForm.reset();
        });
    }
});