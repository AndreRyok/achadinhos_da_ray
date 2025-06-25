// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os cabeçalhos do accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // Adiciona evento de clique a cada cabeçalho
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Fecha todos os outros itens do accordion
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    const otherContent = otherHeader.nextElementSibling;
                    otherContent.style.maxHeight = null;
                }
            });
            
            // Alterna o estado do item clicado
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
    
    // Função de busca (simulada)
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            alert('Funcionalidade de busca será implementada. Você buscou por: ' + searchTerm);
            // Em implementação real, aqui você filtraria os produtos
        }
    }
    
    // Efeito hover nos cards de produto
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Atualiza o ano do copyright automaticamente
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = copyrightElement.textContent.replace('2023', currentYear);
    }
});