let itemList = []
// add button functionality 
let input = document.getElementById('inputBox')
let addButton = document.getElementById('addButton')
function addInput() {
  if (input.value == '') {
    alert('INPUT INVALID, PLEASE TRY AGAIN')
    return
  }
  let obj = {
    id: Date.now(),
    name: input.value,
    no: itemList.length + 1
  }
  itemList.push(obj)
  input.value = ''
  displayItems()
}
addButton.addEventListener('click', addInput)
// display function functionality
let listArea = document.querySelector('.listArea')
function displayItems(){
  listArea.innerHTML = ''
  itemList.forEach((e)=>{
    let newDiv = document.createElement('div')
    newDiv.classList.add('items')
    newDiv.innerHTML = `
    ${e.no}. ${e.name} <button class="delete" data-id="${e.id}">Delete</button>
    `
    listArea.append(newDiv)
    newDiv.querySelector('.delete').addEventListener('click', function(){
      deleteItem(this.dataset.id)
    })
  })
}
// delete button functionality 
function deleteItem(id) {
  itemList = itemList.filter(item=>item.id != id)
  itemList.forEach((obj, index)=>{
    obj.no = index + 1
  })
  displayItems()
}