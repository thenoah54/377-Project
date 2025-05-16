var hostName = 'https://www.cheapshark.com/api/1.0/deals?storeID=1';

function getsteamData() {
    // const usingMock = false;
    // deals https://www.cheapshark.com/redirect?dealID={id}
    // hostName = usingMock ? 
    //     'https://mock-ea65f4fc2d424b3387f4ed888e171972.mock.insomnia.rest/api/1.0/deals' : 
    //     'https://www.cheapshark.com/api/1.0/deals?storeID=1';

    slider();

    fetch(hostName).then((result) => result.json()).then((resultJson) => {
        // console.log(resultJson);
        var num = 1
        resultJson.forEach((resultData) => {
            // console.log(`Name: ${resultData.title},
            //     img: ${resultData.thumb},
            //     Rating: ${resultData.steamRatingPercent},
            //     Deal Rating: ${resultData.dealRating},
            //     Normal Price: ${resultData.normalPrice}
            //     Sale Price: $${resultData.salePrice}`);

            const tableRow = document.createElement('tr');
            tableRow.className = 'steamRow'
            
            // num
            const listOrder = document.createElement('td');
            listOrder.innerHTML = num++;
            listOrder.id = 'listOrder'

            // title text
            // const steamName = document.createElement('td');
            // steamName.innerHTML = resultData.title;

            // img title
            const steamName = document.createElement('img');
            steamName.src = resultData.thumb;
            steamName.alt = resultData.title;
            steamName.width = 100*1.5;
            steamName.height = 50*1.5; 
            steamName.id = 'steamThumb'
            steamName.innerHTML = resultData.thumb;
            // game rating
            const steamRating = document.createElement('td');
            steamRating.innerHTML = `${resultData.steamRatingPercent}%`;
            // deal rating
            const steamdealRating = document.createElement('td');
            steamdealRating.innerHTML = resultData.dealRating;
            // normal $
            const steamnormalPrice = document.createElement('td');
            steamnormalPrice.innerHTML = `$${resultData.normalPrice}`;
            // sale $
            const steamsalePrice = document.createElement('td');
            steamsalePrice.innerHTML = `$${resultData.salePrice}`;

            // giving class name
            [steamName, steamRating, steamdealRating, steamnormalPrice, steamsalePrice].forEach(td => {
                td.className = 'steamCell';
            });
            
            // adding to row
            tableRow.appendChild(listOrder);
            tableRow.appendChild(steamName);
            tableRow.appendChild(steamRating);
            tableRow.appendChild(steamdealRating);
            tableRow.appendChild(steamnormalPrice);
            tableRow.appendChild(steamsalePrice);
        
            // add row
            tableInfo.append(tableRow);
        });
    });
}

function searchGame(event) {
    event.preventDefault();

    // games https://www.cheapshark.com/api/1.0/games?title={title}
    const title = document.getElementById('searchBar').value;
    console.log(`Searching for: ${title}`);

    hostName = `https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${title}`;

    const tableInfo = document.getElementById('tableInfo');
    tableInfo.innerHTML = `
        <tr id="labels">
            <th></th>
                <th>Game</th>
                <th>Rating</th>
                <th>Deal Rating</th>
                <th>Normal Price</th>
                <th>Sale Price</th>
        </tr>
    `;

    getsteamData(); 

}

function slider() {
    const path = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&AAA=1';
    const slider = document.getElementById('gameSlider');
    // Clear previous slider content
    slider.innerHTML = '';
    fetch(path).then((results) => results.json()).then(resultsJson => {
        // console.log(resultsJson);
        resultsJson.forEach((pics) => {
            const slider = document.getElementById('gameSlider');
            const newGame = document.createElement('img');
            newGame.src = pics.thumb;
            newGame.style.width = '100%';
            newGame.style.height = '100%';
            slider.append(newGame); 
        });
        simpleslider.getSlider();
    });

}


window.onload = getsteamData;