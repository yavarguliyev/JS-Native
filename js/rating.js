if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    "use strict";

    // Initial ratings
    const ratings = {
        sony: 4.7,
        samsung: 3.4,
        vizio: 2.3,
        panasonic: 3.6,
        philips: 4.1
    };

    // Total stars
    const starsTotal = 5;

    // Form elements
    const productSelect = document.getElementById('product-select');
    const ratingControl = document.getElementById('rating-control');

    // Init product
    let product;

    // Product select change
    productSelect.addEventListener('change', (ev) => {
        product = ev.target.value;

        // Enable rating control
        ratingControl.disabled = false;
        ratingControl.value = ratings[product];
    });

    ratingControl.addEventListener('blur', (ev) => {
        const rating = ev.target.value;

        // Make sure 5 or under
        if (rating > 5) {
            $.toast({
                heading: 'Info',
                icon: 'info',
                position: 'bottom-right',
                text: 'Please rate the numbers between 1 - 5!',
                showHideTransition: 'slide',
                hideAfter: 3000
            });
            return false;
        }

        // Change rating
        ratings[product] = rating;

        getRating();
    });

    function getRating() {
        // Getting rating
        for (let rating in ratings) {

            // Get percentage of ratings
            const starsPercentage = (ratings[rating] / starsTotal) * 100;

            // Round to nearest 10
            const starsPercentageRounded = `${Math.round(starsPercentage / 10) * 10}%`

            // Set width of starts-inner to percentage
            document.querySelector(`.${rating} .stars-inner`).style.width = starsPercentageRounded;

            // Add number rating
            document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
        }
    }

    getRating();
}