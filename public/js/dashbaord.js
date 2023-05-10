// need a searchHandler
const searchHandler = async(event) =>{
    event.preventDefault();
// need to grab the search bar from html 
    const response = await fetch(`/api/item?search=${searchItem}`)

    const itemData = await response.json();

    const searchedItem = itemData.name
    // need to work on return statement and add key up/down event need 
    // need to clear search bar after clicking the search button 
    return searchedItem
}

// addShoppingList
//  const addShoppingList = async(event) =>{

//     const foodName ; //pointer to the input field of the 
//     const response = await fetch('api/userItem',{
//         method: 'POST',
//         body:
//     })
//  }

// deleteShoppingList
const deleteShoppingList = async(event) =>{
    const shoppingList = document.querySelector('#shopping-table')
    console.log("called")

    if(event.target.textContent === "Delete"){
        console.log(event.target)
        const id = event.target.dataset.id
        console.log(id)
    try{
        const response = await fetch(`/api/userItem/${id}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        if(response.ok){
            document.location.replace('/dashboard')
        }else{
            addListener("delete failed")
        }
    }catch(err){
        console.log(err)
    }
}

}
console.log(document.querySelector('#shopping-table'))
document.querySelector('#shopping-table').addEventListener('click',deleteShoppingList)


// addPantry
// deletePantry

