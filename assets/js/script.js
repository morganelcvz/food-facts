fetch('https://world.openfoodfacts.org/api/v3/product/7613035676497')
.then(response => response.json())
.then(data => {
    console.log(data.product)
    console.log(data.product.abbreviated_product_name)
    console.log(data.product._id)
    
})
.catch(error => console.error(error))

// 1. nom du produit 2. code barre 3. dénomination générique 4. quantité 5. marque 6. catégorie 7. photo 
// 8. nutriscore (grade) 9. indice nova 