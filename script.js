// 1,2.
var list = new Array();

for(i=20; i<=340; i+=3){
    
     if(i%2==0){

       if(i==230 || i==200 || i==320 ){
        continue;
           
       }  
       list.push(i);

      
}

}
console.log(list);  
//3.
var dbuser = 'serxan';
var dbpass = '1234';
var logged = false;


while(logged == false){
    user = prompt('user');
    pass = prompt('password');

if(dbuser == user && dbpass == pass){
    alert('Giris edildi');
    logged = true;
} else {
    alert('melumatlar yanlisdir');
}

}

//4.

var o1 = {
    "marka": 'Tayota',
    "model": 'Supra',
    "yurus": '120000km',
    "reng": 'Ag'
}

console.log(o1.marka);
console.log(o1.model);



