if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

import reddit from '../data/redditapi.js';

function ready() {
    "use strict";

    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    // Form event listener
    searchForm.addEventListener('submit', ev => {
        ev.preventDefault();

        // Get search term
        const searchTerm = searchInput.value;

        // Get sort
        const sortBy = document.querySelector('input[name="sortBy"]:checked').value;

        // Get search limit
        const searchLimit = document.getElementById('limit').value;

        // Check input
        if (searchTerm === '') {
            // Show message
            showMessage('Please add a search term', 'alert-danger');
        }

        // Clear input
        searchInput.value = '';

        // Search reddit
        reddit.search(searchTerm, searchLimit, sortBy).then(results => {
            let output = '<div class="card-columns">';
            // Loop throug post
            results.forEach(post => {
                // Check for image
                const image = 
                post.preview ? post.preview.images[0].source.url : 
                'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/reddit-796x397.png';

                output += `
                <div class="card">
                <img src="${image}" class="card-img-top" alt="Card">
                <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${truncateText(post.selftext, 100)}</p>
                  <a href="${post.url}" target="-blank" class="btn btn-primary">Read More</a>
                  <hr>
                  <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
                  <span class="badge badge-dark">Score: ${post.score}</span>
                </div>
              </div>
              `;
            });
            output += '</div>';
            document.getElementById('results').innerHTML = output;
        });
    });

    // Show message
    function showMessage(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(`${message}`));
        // Get parent
        const searchContainer = document.getElementById('search-container');
        // Get search
        const search = document.getElementById('search-p');
        // Insert message
        searchContainer.insertBefore(div, search);
        // Timeout alert
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    // Truncate text
    function truncateText(text, limit) {
        const shortened = text.indexOf(' ', limit);
        if(shortened == -1) return text;
        return text.substring(0, shortened);
    }
}