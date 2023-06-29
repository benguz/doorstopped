    const bingoItems = document.querySelectorAll('.bingo-item');

    bingoItems.forEach((item) => {
        item.addEventListener('click', () => {
            const link = item.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });

        // Set cursor to the "link click" shape for the backside
        const backFace = item.querySelector('.back');
        backFace.style.cursor = 'pointer';
    });
