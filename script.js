
const goods = [
    {},
    {title: 'Shirt',   price: 100, quantity: 10},
    {title: 'Shirt_1', price: 1000, quantity: 1},
    {title: 'Shirt_2', price: 10000, quantity: 0},
    {title: 'Shirt_3', price: 10, quantity: 100},
    {title: 'Shirt_4', price: 500, quantity: 15},
    {title: 'Shirt_5', price: 800, quantity: 0},
    {title: 'Shirt_6', price: 9000, quantity: 2},
    {title: 'Shirt_7', price: 8900, quantity: 7},

];

function renderGoodsItem({title = 'По идее тут должно быть название товара', price = "бесплатно"}){
    return `
    <div class="item">
        <h3>${title}</h3>
        <p>${price}</p>
    </div>
    `;
}

const renderItems = items => items.map(renderGoodsItem); // .map(function(item){return renderGoodsItem(item);})

document.getElementById('catalog').innerHTML = renderItems(goods).join("");
