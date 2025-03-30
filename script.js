document.addEventListener('DOMContentLoaded', function () {
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');
    const basketButton = document.querySelector('.nav_button');


    basketButton.addEventListener('click', function () {
        modalOverlay.style.display = 'block';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });


    modalClose.addEventListener('click', function () {
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    modalOverlay.addEventListener('click', function () {
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

