async function getData(){
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const responseData = await response.json();
        await   printData(responseData);

    }
    catch (err){
        throw (err);
    }
}
async function printData(product){
    const path = document.querySelector(".main  .content");


    path.innerHTML = product.map( (value) =>
        `
                    <div  class="hidden">
                     <div class="product-image">
                         <img
                            src= "${value.image}"
                            alt="product"
                          />
                     </div>
                     <div class="product-text">
                            <h6 >${value.title}</h6>
                            <p>${value.description}</p>
                            <span>€${value.price}</span>
                            
                     </div>
                    </div>
            `
    )

}

export function GetApiData(){
    getData();
}