if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    const form = document.getElementById('car-form');
    const select = document.querySelectorAll('.car');

    const car = async searchCar => {
        const res = await fetch('../data/car-names.json');
        const cars = await res.json();

        for (const names of cars) {
            const opt = document.createElement('option');
            opt.setAttribute('value', `${names.brand}`);
            opt.innerText = names.brand;
            select[0].appendChild(opt);
        }

        select[0].addEventListener('change', (ev) => {
            let targetValue = ev.target.value;

            while (select[1].childNodes.length != 3) {
                select[1].removeChild(select[1].lastElementChild);
            }
            cars.map(match => {
                if (match.brand == targetValue) {
                    for (const models in match.models) {
                        const opt = document.createElement('option');
                        opt.setAttribute('value', `${match.models[models]}`);
                        opt.innerText = match.models[models];
                        select[1].appendChild(opt);
                    }
                    return true;
                }
            }).join('');
        });

        select[1].addEventListener('change', (ev) => {
            let targetValue = ev.target.value;

            while (select[2].childNodes.length != 3) {
                select[2].removeChild(select[2].lastElementChild);
            }
            while (select[3].childNodes.length != 3) {
                select[3].removeChild(select[3].lastElementChild);
            }
            cars.map(match => {
                for (const models in match.models) {
                    if (match.models[models] == targetValue) {
                        for (const i in match.years) {
                            const opt = document.createElement('option');
                            opt.setAttribute('value', `${match.years[i]}`);
                            opt.innerText = match.years[i];

                            const color = document.createElement('option');
                            color.setAttribute('value', `${match.color[i]}`);
                            color.innerText = match.color[i];

                            select[2].appendChild(opt);
                            select[3].appendChild(color);
                        }
                        return true;
                    }
                }
            }).join('');
        });

        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
        });
    }

    car();
}