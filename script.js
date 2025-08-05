
        // Page Load Handler
        window.addEventListener('load', function () {
            const overlay = document.getElementById('loadingOverlay');
            if (overlay) {
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 300);
                }, 1000);
            }
            
            // Set active nav item based on current page
            const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-page') === currentPage) {
                    item.classList.add('active');
                }
            });
        });

        // Language Toggle Functionality
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', function () {
                const isEnglish = this.textContent.includes('English | বাংলা');
                if (isEnglish) {
                    this.textContent = 'বাংলা | English';
                    document.documentElement.lang = 'bn';
                } else {
                    this.textContent = 'English | বাংলা';
                    document.documentElement.lang = 'en';
                }
            });
        }

        // Mobile Menu Toggle

        const mobileToggle = document.getElementById('mobileToggle');
    const navContent = document.getElementById('navContent');

    if (mobileToggle && navContent) {
        mobileToggle.addEventListener('click', function () {
            navContent.classList.toggle('hidden');
            navContent.classList.toggle('flex');
            navContent.classList.toggle('flex-col');
            navContent.classList.toggle('gap-4');
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = navContent.classList.contains('hidden') ? 'fas fa-bars' : 'fas fa-times';
            }
        });
    }
      

        // Navigation Active State Management
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                if (navContent && mobileToggle) {
                    navContent.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    if (icon) icon.className = 'fas fa-bars';
                }
                
                const page = this.getAttribute('data-page');
                window.location.href = page + '.html';
            });
        });
     

        // Dynamic Date Updater
        function updateDates() {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
            document.querySelectorAll('[data-dynamic-date]').forEach(el => {
                el.textContent = now.toLocaleDateString('bn-BD', options);
            });
        }

        updateDates();

        // Initialize critical functionality when DOM is ready
        document.addEventListener('DOMContentLoaded', function () {
            console.log('Char Agasti High School & College website loaded successfully');
            updateDates();
        });