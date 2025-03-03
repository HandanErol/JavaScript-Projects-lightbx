// Lightbox functionality
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Önce resmi yükle, sonra lightbox'ı göster
    lightboxImg.onload = function() {
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Scroll'u engelle
    }
    lightboxImg.src = src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Scroll'u geri aç
}

// Lightbox dışına tıklandığında kapat
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// ESC tuşu ile kapat
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
}); 