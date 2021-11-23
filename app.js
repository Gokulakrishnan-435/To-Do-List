var container=document.querySelector('.container')
var value1=document.querySelector('.input')
var add1=document.querySelector('.add')


class item{
    constructor(name){
        this.create(name)
    }
    create(name){
        var l1=document.createElement('div')
        var l2=document.createElement('div')
        var l3=document.createElement('div')
        var l4=document.createElement('div')
        l1.classList.add('item')
        l2.classList.add('item1')
        l3.classList.add('item2')
        l4.classList.add('item3')

        var input=document.createElement('input')
        input.type='text' 
        input.disabled=true
        input.value=name
        input.classList.add('item_input')

        var edit = document.createElement('button');
        edit.classList.add('edit')
        edit.innerHTML=`<i class="fas fa-pen-nib"></i>`
        edit.addEventListener('click',update)
        
        var update2 = document.createElement('button');
        update2.classList.add('update')
        update2.innerHTML="Upadate"
        update2.addEventListener('click',update1)
    
            
        function update(){
                input.disabled=false;
        }
        function update1(){
            input.disabled=true;
        }
  
        

        var remove=document.createElement('button')
        remove.classList.add('remove')
        remove.innerHTML=`<i class="fas fa-trash-alt"></i>`
        remove.addEventListener('click',()=>this.remove(l1))

        


        container.appendChild(l1)
        l1.appendChild(input)
        l1.appendChild(l2)
        l1.appendChild(l3)
        l1.appendChild(l4)
        
        l2.appendChild(remove)
        l3.appendChild(edit)
        l4.appendChild(update2)
        
    }
    remove(l1){
        container.removeChild(l1)
    }
    

}

add1.addEventListener('click',check)
window.addEventListener('keydown',(e)=>{
    if(e.which==13){
        check()
    }
})

function check(){
    if(value1.value!=""){
        new item(value1.value)
        value1.value=""
    }
}


function removeAll(){
    document.querySelector('.container').innerHTML="";

}