var masinlar = [{
    marka: 'BMW',
    model: 'X5M',
    buraxilisili: 2014
},
{
    marka: 'Mercedes',
    model: 'CLA',
    buraxilisili: 2016

},
{
    marka: 'Audi',
    model: 'RS6',
    buraxilisili: 2015
}
]


var now = 2023;

function age(year){
    return now - year;
}

var yas = age(2014);
console.log(yas);
console.log('Size uygun masin '+masinlar[0].marka +' '+ masinlar[0].model + ' '+ masinlar[0].buraxilisili + ' -ci il tarixinde istehsal olunub.Masinin yasi =' + yas );

var list = ['Size uygun masin BMW X5M 2014-cu il tarixinde istehsal olunub', 'Masinin yasi = 9'];

text = '<ul>';
for(i=0;i<list.length;i++){
    text +='<li>' + list[i] + '</li>';
}
text+= '</ul>';

document.getElementById('container').innerHTML = text;