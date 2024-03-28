// menu
const toggleMenu = () => {
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');
    const iconName = src === 'img/burger-menu.svg' ?
        'img/close.svg'
        :
        'img/burger-menu.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    const navigation = document.querySelector('.navigation');

    navigation.classList.toggle(
        'navigation--mobile'
    );
};

