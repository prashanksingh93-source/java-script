let form=document.querySelector('form');
form.addEventListener('submit',function(event){
     event.preventDefault();
     let height=parseInt(document.querySelector('#height').value);
     let weight=parseInt(document.querySelector('#weight').value);
     let result=document.querySelector('#results');
     if(height<0||height==''||isNaN(height)){
        result.innerHTML='error fix height';
     }
     else if(weight<0||weight==''||isNaN(weight)){
       result.innerHTML='error fix weight';
     }
     else{
        let x=(weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML=`${x}`;
     }
    })