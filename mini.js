var cart =[]
// var displayCart = document.getElementById('displayCart')
var items = document.getElementById('items')
var showError = document.getElementById('showError')
var makeATable=''

if (cart.length == 0){
    bigDiv.style.display='block'
    bigDiv.innerHTML =`
    <p class="alert alert-danger text-center p-3">
    No item added yet </p>
    `
}
function addToCart(){
    if (items.value == ""){
            bigDiv.innerHTML =`<p> order is empty </p>`
        }else{
                cart.push(items.value)
                document.getElementById('items').value=''
                displayOrder()
            document.getElementById('bigShow').style.display='block'

  }
}
function displayOrder(){
    bigDiv.style.display = 'none'
    requiredMsg.style.display = 'none'
    bigShow.style.display = 'block'
    var makeATable =`<table>`
    makeATable += `<th>S/N</th>`
    makeATable += `<th>Items</th>`
    for (i=0; i < cart.length; i++){
        makeATable+=`<tr>`
    makeATable+=`<td>${i+1} </td>` 
    makeATable+=`<td>${cart[i]}</td>`
    makeATable +=`</tr>`
    }
    makeATable+=`</table>`
    displayCart.innerHTML = makeATable
} 
function deleteFirstItem(){
    cart.shift(items.value)
    console.log(cart)
    displayOrder()
}
function deleteLastItem(){
    cart.pop(items.value)
    console.log(cart + ' pop item')
    displayOrder()
}
function AddToTheStart(){
    cart.unshift(items.value)
    console.log(cart + ' un shift item')
}
function deleteAll(){
    var confirmation =confirm('are sure you want to delete this')
    if (confirmation == true){
        cart.splice(0, cart.length)
        displayOrder()

    }

}
function deleteAnyItem(){
    var startValue = Number(prompt('which number are you deleting'))
    cart.splice(startValue-1, 1)
    displayOrder()
}
