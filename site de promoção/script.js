const whatsappButton = document.getElementById('whatsapp-button');
const whatsappLink = 'https://whatsapp.com/channel/0029VanxHClJf05ao6dIG137'; // Substitua por seu link

whatsappButton.addEventListener('click', () => {
    window.open(whatsappLink, '_blank');
});