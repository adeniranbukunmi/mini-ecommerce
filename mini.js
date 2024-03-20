var cart =[]
// var displayCart = document.getElementById('displayCart')
var items = document.getElementById('items')
var showError = document.getElementById('showError')
var makeATable=''

if (cart.length == 0){
    bigDivError.style.display='block'
    bigDivError.innerHTML =`
    <p class="alert alert-danger text-center p-3">
    No item added yet </p>
    `
}
function addToCart(){
    if (items.value == ""){
            bigDivError.innerHTML =`<p> order is empty </p>`
        }else{
                cart.push(items.value)
                document.getElementById('items').value=''
                displayOrder()
            document.getElementById('bigShow').style.display='block'

  }
}
function displayOrder(){
    bigDivError.style.display = 'none'
    requiredMsg.style.display = 'none'
    bigShow.style.display = 'block'
    var makeATable =`<table>`
    makeATable += `<th>S/N</th>`
    makeATable += `<th>Items</th>`
    // for (i=0; i < cart.length; i++){
    //     makeATable+=`<tr>`
    // makeATable+=`<td>${i+1} </td>` 
    // makeATable+=`<td>${cart[i]}</td>`
    // makeATable +=`</tr>`
    // }
    cart.map((goods, i)=>{
        makeATable+=`<tr>`
    makeATable+=`<td>${i+1} </td>` 
    makeATable+=`<td>${goods}</td>`
    makeATable +=`</tr>`
    })
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
   
   if (firstItem.value ==''){
    bigDivErrorOne.style.display='block'
    bigDivErrorOne.innerHTML =`
    <p class="alert alert-danger text-center p-3">
    No item added yet </p>
    `
   }else{
    bigDivErrorOne.style.display='none'
    cart.unshift(firstItem.value)
    document.getElementById('firstItem').value=''
    displayOrder()
   }
   

}
function editItem(){
    if (newIndex.value =='' || editedValue.value == ''){
            bigDivErrorTwo.style.display='block'
            bigDivErrorTwo.innerHTML =`
            <p class="alert alert-danger text-center p-3">
            No item added yet </p>
            `
    }else{
        if ((Number(newIndex.value)) > cart.length){
            bigDivErrorTwo.innerHTML =`
            <p class="alert alert-danger text-center p-3">
            index number exceed limit </p>
            `  
        }else{
            bigDivErrorTwo.style.display='none'
            var indexNew =Number(document.getElementById('newIndex').value)
            var replacement = document.getElementById('editedValue').value
            console.log(indexNew,  replacement)
            cart.splice(indexNew-1, 1, replacement)
            document.getElementById('newIndex').value =''
            document.getElementById('editedValue').value=''
            displayOrder()
        }
    }
}

function deleteAll(){
    var confirmation =confirm('are sure you want to delete this')
    if (confirmation == true){
        cart.splice(0, cart.length)
        displayOrder()

    }

}
function deleteAnyItem(){
    if( deleAnyIndex.value == '' ) {
        bigDivErrorThree.style.display='block'
        bigDivErrorThree.innerHTML =`
        <p class="alert alert-danger text-center p-3">
        enter the index of the item to delete </p>
        `
    }else{
        if((Number(deleAnyIndex.value) > cart.length)){
            bigDivErrorThree.innerHTML =`
        <p class="alert alert-danger text-center p-3">
            index exceed limit </p>
        `
        }else{
            bigDivErrorThree.style.display='none'
            var deleteItm = Number(document.getElementById('deleAnyIndex').value)
            cart.splice(deleteItm-1, 1)
            document.getElementById('deleAnyIndex').value=''
            displayOrder()
        }
    }
    
}
