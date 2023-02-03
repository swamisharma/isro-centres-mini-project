//Extract data from API
let result = document.querySelector('div[class=results]');

let response = fetch("https://isro.vercel.app/api/centres");
response.then((res) => {
    return res.json()
}).then((data) => {
    let apiData = data.centres;
    for (let item of apiData) {
        var divResult = document.createElement('div');
        divResult.setAttribute('class', 'result');
        var centre = document.createElement('div');
        centre.setAttribute('class', 'result-centre result-title');
        var city = document.createElement('div');
        city.setAttribute('class', 'result-city result-title');
        var state = document.createElement('div');
        state.setAttribute('class', 'result-state result-title');
        var centreValue = document.createElement('div');
        centreValue.setAttribute('class', 'result-centre-value');
        var cityValue = document.createElement('div');
        cityValue.setAttribute('class', 'result-city-value');
        var stateValue = document.createElement('div');
        stateValue.setAttribute('class', 'result-state-value');
        centre.textContent = 'CENTER';
        city.textContent = 'CITY';
        state.textContent = 'STATE';
        centreValue.textContent = item.name;
        cityValue.textContent = item.Place;
        stateValue.textContent = item.State;
        divResult.appendChild(centre);
        divResult.appendChild(city);
        divResult.appendChild(state);
        divResult.appendChild(centreValue);
        divResult.appendChild(cityValue);
        divResult.appendChild(stateValue);
        result.appendChild(divResult);
    }
});

//Filter Button Toggle
let filter = 'city';
let filterSwitches = document.getElementsByClassName('filter');

let filterSection = document.querySelector('div[class=search-filter-div]');
filterSection.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'filter' || e.target.classList[0] == 'filter-span') {
        if (e.target.classList[0] == 'filter-span') {
            let parent = e.target.parentElement;
            for (let fil of filterSwitches) {
                fil.classList.remove('highlighted-filter');
            }
            parent.classList.add('highlighted-filter');
            filter = parent.id;
        }
        else {
            for (let fil of filterSwitches) {
                fil.classList.remove('highlighted-filter');
            }
            e.target.classList.add('highlighted-filter');
            filter = e.target.id;
        }
    }
});

//Search according to filter
let searchBar = document.getElementById('search-bar');

searchBar.addEventListener('keyup', (e) => {
    let searchItem = document.getElementsByClassName('result-' + filter + '-value');
    for (let i = 0; i < searchItem.length; i++) {
        if (searchItem[i].textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) {
            searchItem[i].parentElement.style.display = "grid";
        }
        else {
            searchItem[i].parentElement.style.display = "none";
        }
    }
});