export const getSelectedCurrency = () => {
    return document.querySelector('.card.active').textContent;
};