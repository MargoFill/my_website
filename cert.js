// Certificate Image Modal/Lightbox
        const modal = document.getElementById('certModal');
        const modalImg = document.getElementById('certModalImg');
        const modalCaption = document.getElementById('modalCaption');
        const closeBtn = document.querySelector('.cert-close');

        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        document.querySelectorAll('.cert-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const img = card.querySelector('img');
                modal.style.display = 'flex';
                modalImg.src = card.dataset.full || img.src;
                modalCaption.textContent = img.alt || '';
                document.body.style.overflow = 'hidden';
            });
         });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });