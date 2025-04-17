function getsteamData() {
    const usingMock = true;

    // deals https://www.cheapshark.com/redirect?dealID={id}
    const hostName = usingMock ? 
        'https://mock-ea65f4fc2d424b3387f4ed888e171972.mock.insomnia.rest/api/1.0/deals' : 'placeholder';
    fetch(hostName).then((result) => result.json()).then((resultJson) => {
        console.log(resultJson);
        resultJson.forEach((resultData) => {
            console.log(`Name: ${resultData.title},
                Rating: ${resultData.steamRatingPercent},
                Deal Rating: ${resultData.dealRating},
                Normal Price: ${resultData.normalPrice}
                Sale Price: $${resultData.salePrice}`);

            const tableRow = document.createElement('tr');

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
            tableRow.appendChild(steamName);
            tableRow.appendChild(steamRating);
            tableRow.appendChild(steamdealRating);
            tableRow.appendChild(steamnormalPrice);
            tableRow.appendChild(steamsalePrice);
        
            // add row
            tableInfo.append(tableRow);
        });
    });

    // games https://www.cheapshark.com/api/1.0/games?title={title}
    const hostName2 = usingMock ? 
        'https://mock-ea65f4fc2d424b3387f4ed888e171972.mock.insomnia.rest/api/1.0/games' : 'placeholder';
    fetch(hostName2).then((result) => result.json()).then((resultJson) => {
        console.log(resultJson);
        resultJson.forEach((resultName) => {
            // console.log(`Name: ${resultName.external}`)
        });
    });
}

window.onload = getsteamData;