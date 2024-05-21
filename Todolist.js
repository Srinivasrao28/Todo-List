let btn = document.getElementById('addtodo');
btn.addEventListener('submit', addTodo);
const titlearray = [];
const descriptionarray = [];


function addTodo(event) {
    event.preventDefault();

    // Saving Title Text 

    let title = document.getElementById('title');
    const titletext = title.value;
    titlearray.unshift(titletext);
    title.value = '';

    // Saving Description Text 

    const description = document.getElementById('description');
    const descriptiontext = description.value;
    descriptionarray.unshift(descriptiontext);
    description.value = '';

    // Creating a div element 

    const div = document.createElement("div");
    div.setAttribute("class", "container");
    
    // Creating a h3 Element 

    const line = document.createElement("h3");
    line.setAttribute("class", "todo");

    // Creating a p Element 

    const desc = document.createElement("p");
    desc.setAttribute("class", "tododes");

    // Hiding the P Element 

    desc.style.display = 'none';

    // Priting Title and Description 

    desc.innerHTML = descriptionarray[0];
    line.innerHTML = titlearray[0];
    div.appendChild(line);
    div.appendChild(desc);
    document.getElementById("displaytodo").append(div);

    // Showing p Tag 
    line.addEventListener('click', showTag);
    function showTag() {
        desc.style.display = 'block';
    };

    // Hidding P Tag

    desc.addEventListener('click', hideTag);
    function hideTag() {
        desc.style.display = 'none';
    }
};