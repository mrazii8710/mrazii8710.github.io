document.addEventListener('DOMContentLoaded', () => {
    // 🌟 1. NEW: Get the outer container (the one with the 'hidden' class)
    const bannerSection = document.getElementById('banner-section'); 
    
    const wrapper = document.getElementById('banners-wrapper');
    const container = document.getElementById('banner-slider-container');
    const dotsContainer = document.getElementById('banner-dots');
    const totalBanners = 10; // Max number of banners to check (e.g., banner1.png up to banner10.png)
    let banners = [];
    let currentIndex = 0;
    let autoSlideInterval;
    
    // --- 1. Load Banners ---
    async function loadBanners() {
        for (let i = 1; i <= totalBanners; i++) {
            const fileName = `banner${i}.png`;
            const img = new Image();
            
            // This promise resolves if the image loads (file exists) and rejects if it fails (file doesn't exist)
            const exists = await new Promise(resolve => {
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = fileName;
            });

            if (exists) {
                banners.push({ element: img, src: fileName });
            } else if (i === 1 && banners.length === 0) {
                // If banner1.png doesn't exist, stop checking
                break;
            }
        }

        if (banners.length === 0) {
            // If no banners, the section remains hidden (default state from HTML)
            return;
        }

        // 🌟 2. NEW: If banners are found, remove the 'hidden' class to show the section
        bannerSection.classList.remove('hidden');

        // --- 2. Build DOM Elements ---
        banners.forEach((banner, index) => {
            const slide = document.createElement('div');
            // 🌟 MODIFIED: Removed 'rounded-2xl' from slide.className 
            // The rounding is handled by the parent container (#banner-slider-container) and the image itself.
            slide.className = 'w-full flex-shrink-0 aspect-[16/9] md:aspect-[2/1] overflow-hidden'; 
            
            const img = document.createElement('img');
            img.src = banner.src;
            // Image maintains w-full, h-full, object-cover, and rounded-2xl for smooth visual fit
            img.className = 'w-full h-full object-cover select-none rounded-2xl'; 
            
            slide.appendChild(img);
            wrapper.appendChild(slide);

            // Create a navigation dot
            const dot = document.createElement('button');
            dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === 0 ? 'bg-white' : 'bg-gray-400/70 hover:bg-white/90'}`;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        updateSlide(0, false); // Initialize the first slide
        startAutoSlide();
        setupSwipe();
    }
    
    // --- 3. Core Slider Logic (No changes needed) ---
    function updateSlide(index, animate = true) {
        if (index < 0 || index >= banners.length) return;

        currentIndex = index;
        const offset = -currentIndex * 100;
        
        wrapper.style.transform = `translateX(${offset}%)`;
        wrapper.style.transitionProperty = animate ? 'transform' : 'none';
        
        // Update dots
        Array.from(dotsContainer.children).forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.replace('bg-gray-400/70', 'bg-white');
                dot.classList.remove('hover:bg-white/90');
            } else {
                dot.classList.replace('bg-white', 'bg-gray-400/70');
                dot.classList.add('hover:bg-white/90');
            }
        });
    }
    
    function goToSlide(index) {
        stopAutoSlide();
        updateSlide(index);
        startAutoSlide(); // Restart timer after manual interaction
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % banners.length;
        updateSlide(nextIndex);
    }
    
    // --- 4. Auto Slide Timer (No changes needed) ---
    function startAutoSlide() {
        // Only start if there's more than one banner
        if (banners.length > 1) {
            autoSlideInterval = setInterval(nextSlide, 5000); // 5000ms = 5 seconds
        }
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // --- 5. Swipe Logic (Mobile Friendly) (No changes needed) ---
    function setupSwipe() {
        let startX = 0;
        let isSwiping = false;

        wrapper.addEventListener('mousedown', startDrag);
        wrapper.addEventListener('touchstart', startDrag);

        function startDrag(e) {
            stopAutoSlide();
            isSwiping = true;
            startX = (e.touches ? e.touches[0].clientX : e.clientX);
            wrapper.style.cursor = 'grabbing';
            wrapper.style.transitionProperty = 'none'; // Disable transition during drag
            
            window.addEventListener('mousemove', drag);
            window.addEventListener('touchmove', drag);
            window.addEventListener('mouseup', endDrag);
            window.addEventListener('touchend', endDrag);
        }

        function drag(e) {
            if (!isSwiping) return;
            const currentX = (e.touches ? e.touches[0].clientX : e.clientX);
            const dragDistance = currentX - startX;
            const wrapperWidth = wrapper.offsetWidth;
            
            // Calculate current slide position in pixels
            const currentOffsetPx = -currentIndex * wrapperWidth / banners.length;
            
            // Apply drag offset
            wrapper.style.transform = `translateX(${currentOffsetPx + dragDistance}px)`;
        }

        function endDrag(e) {
            if (!isSwiping) return;
            isSwiping = false;
            wrapper.style.cursor = 'grab';
            
            const endX = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX);
            const dragDistance = endX - startX;
            const threshold = container.offsetWidth / 5; // Swipe distance threshold (20% of container width)

            if (dragDistance > threshold && currentIndex > 0) {
                // Swipe right (to previous slide)
                updateSlide(currentIndex - 1);
            } else if (dragDistance < -threshold && currentIndex < banners.length - 1) {
                // Swipe left (to next slide)
                updateSlide(currentIndex + 1);
            } else {
                // Snap back to current slide
                updateSlide(currentIndex);
            }

            // Remove listeners
            window.removeEventListener('mousemove', drag);
            window.removeEventListener('touchmove', drag);
            window.removeEventListener('mouseup', endDrag);
            window.removeEventListener('touchend', endDrag);

            startAutoSlide();
        }
    }

    loadBanners();
});
