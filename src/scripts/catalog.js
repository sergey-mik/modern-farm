//The Catalog function should accept the harvested food array as input
export const Catalog = (harvestedFood) => {
    let htmlString = ''
    for (const food of harvestedFood) {
        htmlString += `<section class="plant">${food.type}\n</section>`
    }
    return htmlString
}