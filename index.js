var yo = require('yo-yo')

const uuidv1 = require('uuid/v1');

var numbers = [] // start empty
var el = list(numbers, update)
var state = []
var counter = 0;


function list (items, onclick) {
  return yo`<div>
  <h1> Things To Do </>
    <div class="ctas">
      <input type="text" id="todoVal">
      <button onclick=${onclick}>Add Todo</button>
    </div>
    <ul id="todoList">
      ${items.map(function (item) {
        return yo`<li>${item.value}<button onclick=${removeTodo}>Delete</button></li>`
      })}
    </ul>
    <h1> Done:</h1>

  </div>`
}

function removeTodo(ev) {
  var id = ev.target.parentNode.getAttribute('id')
  state = state.filter(function(el, i) {
    return id !== el.id;
  });

  ev.target.parentNode.remove();
  console.table(state);
}
function update () {
  // add a new random number to our list
  var todo={}
  todo.id = uuidv1();
  todo.value = document.getElementById("todoVal").value
  todo.status = 'pending'
  state = [todo.id, todo.value, todo.status]
  numbers.push(todo)

  console.table(state);

  // construct a new list and efficiently diff+morph it into the one in the DOM
  var newList = list(numbers, update)
  yo.update(el, newList)
  yo.removeTodo()
  counter+1;
  
}


document.body.appendChild(el)

console.log("HOLA kiM")
