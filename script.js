document.addEventListener('DOMContentLoaded', function() {
    
    // 1. INISIALISASI AOS (Animasi On Scroll)
    // Membuat elemen-elemen HTML muncul dengan efek halus saat masuk ke viewport.
    AOS.init({
        duration: 1000, // Durasi animasi (ms)
        once: true,     // Animasi hanya berjalan sekali
        mirror: false,  
    });


    // 2. SMOOTH SCROLL untuk Navigasi
    // Memastikan klik pada link navigasi bergerak mulus ke section yang dituju.
    document.querySelectorAll('.nav__menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Hitung offset agar konten tidak tertutup header fixed
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                
                // 20px buffer untuk padding visual
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; 

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});


