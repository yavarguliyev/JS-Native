if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    "use strict";

    const people = [
        { name: 'david' },
        { name: 'simon' },
        { name: 'john' },
        { name: 'alex' },
        { name: 'leonardo' },
        { name: 'tom' }
    ];

    const list = document.getElementById('list');
    const searchInput = document.getElementById('search');

    class Search {
        constructor() {
            this.searchInput = searchInput;
            this.list = list;
            this.people = people;
        }

        setList(group) {
            let set = new Search();
            set.clearlist();
            for (const person of people) {
                const item = document.createElement('li');
                item.classList.add('list-group-item');
                const text = document.createTextNode(person.name);
                item.appendChild(text);
                list.appendChild(item);
            }
            if (group.length === 0) {
                set.clearlist();
                set.setNoResults();
                return false;
            }
        }
        clearlist() {
            while (this.list.firstChild) {
                this.list.removeChild(this.list.firstChild);
            }
        }
        setNoResults() {
            const item = document.createElement('li');
            item.classList.add('list-group-item');
            const text = document.createTextNode('No results found!');
            item.appendChild(text);
            this.list.appendChild(item);
        }
        getRelevancy(value, searchTerm) {
            if (value === searchTerm) {
                return 2;
            }
            else if (value.startsWith(searchTerm)) {
                return 1;
            }
            else if (value.includes(searchTerm)) {
                return -1;
            }
            else {
                return 0;
            }
        }
    }

    searchInput.addEventListener('input', function (ev) {
        let value = ev.target.value;
        let searching = new Search();
        if (value && value.trim().length > 0) {
            value = value.trim().toLowerCase();
            searching.setList(people.filter(person => {
                return person.name.includes(value);
            }).sort((personA, personB) => {
                return searching.getRelevancy(personB.name, value) - searching.getRelevancy(personA.name, value);
            }));
        }
        else {
            searching.clearlist();
        }
    });
}