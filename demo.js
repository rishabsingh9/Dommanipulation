var form=document.getElementById('addForm')
var itemlist=document.getElementById('items')
var decriptionlist=document.getElementById('description')
var filter=document.getElementById('filter')

form.addEventListener('submit',additem)
itemlist.addEventListener('click',remove)
filter.addEventListener('keyup',filteritems)
function additem(e){
    e.preventDefault();
    var inputitem=document.getElementById('item').value;
    var descriptionitem=document.getElementById('description').value
    inputitem=inputitem+" "+descriptionitem
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

function filteritems(e){
    //converting text to lowercase
    var text=e.target.value.toLowerCase()
    
    var items=itemlist.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent
        var second=item.childNodes
        var d=second[1].textContent


        console.log(d)
        if(itemname.toLowerCase().indexOf(text)!=-1 || d.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    });
}