const inputBox = document.getElementById('inputbox')
const listContianter = document.getElementById('list-containter')

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContianter.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContianter.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContianter.innerHTML)
}

function showTask(){
    listContianter.innerHTML = localStorage.getItem("data");
}
showTask();