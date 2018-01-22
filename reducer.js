
function reducer(bus, state) {

  // Create List Items for TODO
  bus.on('todo', function(item) {
  	return yo`<li id=${item.id}>
      ${item.value}
      <input type="checkbox" onclick=${deleteTodo} class="btn">
      </li>`
  })

  // Create List Items for DONE
  bus.on('done', function(item) {
  	return yo`<li id=${item.id}>
    ${item.value}
    <button onclick=${deleteTodo} class="btn">Pending</button>
    </li>`
  })

  // Delete List Item
  bus.on('delete', function(ev) {
  	var id = ev.target.parentNode.getAttribute('id');
    numbers = numbers.filter(function(el){
      if(el.id === id){
       if(el.status === "pending"){
         el.status = "done";
       }
       else{
         el.status = "pending";
       }
    }
    return true;
  })
})
}
export default reducer
