document.addEventListener('DOMContentLoaded', function() {
    const testimonialWrappers = document.querySelectorAll('.com-testimonial-wrapper');
    let maxHeight = 0;

    testimonialWrappers.forEach(wrapper => {
        const height = wrapper.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    testimonialWrappers.forEach(wrapper => {
        wrapper.style.minHeight = maxHeight + 'px';
    });
});
