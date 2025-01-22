const url = new URLSearchParams(window.location.search);
let code = url.get('code')

if (code == null || code == "") {
    code = '7613032655495'
} 


fetch(`https://world.openfoodfacts.org/api/v3/product/${code}`)
.then(response => response.json())
.then(data => {
    console.log(data.product)
    console.log(data.code)
    console.log(data.product.abbreviated_product_name)
    console.log(data.product.product_name_fr_imported)
    console.log(data.product.generic_name)
    console.log(data.product.brands)
    console.log(data.product.product_quantity)
    console.log(data.product.categories)
    console.log(data.product.nutriscore_2023_tags)
    console.log(data.product.nova_group)
    console.log(data.product.selected_images.front.display.fr)
    console.log(data.product.countries_imported)

    document.getElementById("produit").innerHTML = `
                <div class="p-box">
                <div class="p-left">
                <img src="${data.product.selected_images.front.display.fr}">
                </div>
                <div class="box-info">
                    <h1>${data.product.product_name_fr_imported == undefined ? `${data.product.product_name},  ${data.product.quantity}` : `${data.product.product_name_fr_imported}`}</h1>
                    <span>${data.product.generic_name == undefined ? `${data.product.product_name}` : `${data.product.generic_name}`}</span>
                    <div class="sub-info">
                        <span>
                            <b>Quantité</b>
                            <br/>
                            ${data.product.product_quantity}g 
                        </span>
                        <span>
                            <b>Marques</b>
                            <br/>
                            ${data.product.brands} 
                        </span>
                        <span>
                            <b>Code barre</b>
                            <br/>
                            ${data.code}
                        </span>
                    </div>
                    <div class="score">
                    <img src="assets/img/nutriscore-${data.product.nutriscore_2023_tags}-new-en.svg">
                    <img src="assets/img/nova-group-${data.product.nova_group}.svg">
                    </div>
                    <div class="tags">
                    ${createCategories(data.product.categories)}
                    </div>
                </div>
            </div>
    `
    
})
.catch(error => console.error(error))

function createCategories(cat) {
    let myDiv = ""
    let test = cat.split(", " && ",")
    test.forEach(element => {
        myDiv += `
        <span>${element}</span>
        `
    }); 

    return myDiv 
}