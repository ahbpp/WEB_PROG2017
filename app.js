var div = document.getElementById("root");
var ul = document.createElement("ul");
var newLi = document.createElement("li");
var span = document.createElement("span");
var textNode = document.createTextNode('Сделать задание #3 по web-программированию');
var text_2 = document.createTextNode('Удалить');
span.appendChild(textNode);
newLi.appendChild(span);
var button = document.createElement("button");
button.addEventListener("click", function () {
    ul.removeChild(newLi);
});
var input = document.createElement('input');
input.setAttribute('id', 'add_task_input');
input.setAttribute('type', 'text');
var button_2 = document.createElement('button');
button_2.appendChild(document.createTextNode('add_task'));
function add_new_task(){
    // var name_of_task = input.getAttribute('value');
    var new_task = document.createElement('span');
    var line_of_new_task = document.createElement('li');
    new_task.appendChild(document.createTextNode(input.value));
    line_of_new_task.appendChild(new_task);
    var but = document.createElement("button");
    but.addEventListener("click", function () {
        ul.removeChild(line_of_new_task);
    });
    but.appendChild(document.createTextNode('Удалить'));
    line_of_new_task.appendChild(but);
    ul.appendChild(line_of_new_task);
}
button_2.addEventListener('click', add_new_task);

button.appendChild(text_2);
newLi.appendChild(button);
ul.appendChild(newLi);
div.appendChild(ul);
div.appendChild(input);
div.appendChild(button_2);
//div.appendChild(button);