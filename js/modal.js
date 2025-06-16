document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = modal.querySelector('.modal__image');
    const modalClose = modal.querySelector('.modal__close');
    const exampleItems = document.querySelectorAll('.example-item');

    // Open modal with clicked image
    exampleItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-src');
            modalImage.src = imgSrc;
            modalImage.alt = item.querySelector('img').alt;
            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    modal.querySelector('.modal__overlay').addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});