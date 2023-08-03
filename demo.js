var form=document.getElementById('addForm')
var itemlist=document.getElementById('items')
form.addEventListener('submit',additem)
itemlist.addEventListener('click',remove)
function additem(e){
    e.preventDefault();
    var inputitem=document.getElementById('item').value;
    var li=document.createElement('li')
    li.className='list-group-item'
    li.appendChild(document.createTextNode(inputitem));

    var editbtn=document.createElement('button')
    editbtn.className='btn btn-info btn-sm mr-2 float-right edit'
    editbtn.appendChild(document.createTextNode('Edit'))
    li.appendChild(editbtn)

    var deletebtn=document.createElement('button');


    deletebtn.className='btn btn-danger btn-sm float-right delete'
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    itemlist.appendChild(li);

}
function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure ?")){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}