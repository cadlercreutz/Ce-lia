function buildMenu()
{
    var links = [
        ["Om oss", "index.html"], 
        ["Produkter", "produkter.html"],
        ["Designers", "designers.html"], 
        ["Kontakt", "kontakt.html"]
    ]

    var content =""

    for(var i = 0; i <links.length; i++)
    {
        var text = links[i][0]
        var adress = links[i][1]
        content = content + "<li><a href=\"" + adress + "\">" + text + "</a></li>"

        // <li><a href="index.html">Startsidan</a></li>
    }

    document.getElementById("menu").innerHTML = content
}


var cart = [];

function addToCart(productquantity, productname, productprice)
{
    var product = {name: productname, price: productprice, quantity: productquantity}
    cart.push(product)
    showCart()
}
function removeFromCart(index)
{
    cart.splice(index, 1); 
    showCart()
    event.preventDefault();
}

function addQuantity(index)
{
    cart[index].quantity++
    showCart()
    event.preventDefault();
}

function subtractQuantity(index)
{
    if(cart[index].quantity > 1)
    {
        cart[index].quantity--
    }
    else
    {
        cart.splice(index, 1);
    }
    showCart()
    event.preventDefault();
}


function showCart()
{
    let cartHTML = "<h2>Varukorg</h2><ul>"
    let sum = 0; 
    for(let i = 0; i < cart.length; i++)
    {
        
        cartHTML += "<li><a href='#' class='cartbutton' onclick='removeFromCart(event," + i + ")'>X</a>"
        cartHTML += "<a href='#' class='cartbutton' onclick='subtractQuantity(" + i + ")'>-</a>"
        cartHTML += "<a href='#' class='cartbutton' onclick='addQuantity(" + i + ")'>+</a>"  
        cartHTML += cart[i].quantity + " st " + cart[i].name + " - " + cart[i].price * cart[i].quantity
        cartHTML += "</li>"
        sum += cart[i].price * cart[i].quantity
    }
    document.getElementById("cart").innerHTML = cartHTML + "<li>" + "Summa: " + sum + " kr </li></ul>"

}