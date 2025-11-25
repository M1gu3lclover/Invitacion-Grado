// Galería de Fotos
function initGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const gallerySection = document.getElementById('gallery');
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.getElementById('gallery-close');
    
    // Lista de fotos (agregar nombres de archivos aquí después del evento)
    const photos = [
        // Descomenta y agrega tus fotos después del evento:
        // 'images/gallery/foto1.jpg',
        // 'images/gallery/foto2.jpg',
        // 'images/gallery/foto3.jpg',
        // etc...
    ];
    
    // Si hay fotos, mostrar la galería
    if (photos.length > 0) {
        gallerySection.classList.add('active');
        
        // Crear elementos de galería
        photos.forEach((photo, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item card';
            
            const img = document.createElement('img');
            img.src = photo;
            img.alt = `Foto ${index + 1}`;
            img.loading = 'lazy'; // Carga diferida para mejor rendimiento
            
            item.appendChild(img);
            galleryGrid.appendChild(item);
            
            // Abrir modal al hacer clic
            item.addEventListener('click', () => {
                modal.classList.add('active');
                modalImage.src = photo;
                document.body.style.overflow = 'hidden'; // Prevenir scroll
            });
        });
    }
    
    // Cerrar modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }
}

// Inicializar galería cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
});
