

//telephone
function validatoTelephone (numero) {

    const phoneregex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ ;


    if(numero.match(phoneregex) != null  ){
        console.log(`the number ${numero} 'is valid` );

    }else{
        console.log(`no such number : ${numero}`);
    }
}

validatoTelephone('912-234-2333');


//e-mail

function posta (mail){

    const postaRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    if(mail.match(postaRegex) !=null  ){
        console.log(`the mail address ${mail} is valid `);

    }else{
        console.log(`no such mail : ${mail}`);
    }

} 

posta('assa@dd.dc');


//password
function parole (password){

    const paroleRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    if(password.match(paroleRegex) != null ){
        console.log(`the password ${password}  can be verified to be used `);
    }else{
        console.log(`the password ${password} is unusable`);
    }

}

parole ('hgfF#3');


//age  ??   DATE maybe?
function dateTemps(time){

    const dateRegex = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/;

    if(time.match(dateRegex) != null ){
        console.log(`the date ${time} is time interval unit `);
    }else{
        console.log(`the password  ${time} is not from this world `);
    }

}

dateTemps('12.2.2002')



//name

function prenom(name){
    
    const usernameRegex = /^[a-z0-9_-]{3,15}$/;

    if(name.match(usernameRegex) != null ){
        console.log(`the username ${name}  is applied`);
    }else{
        console.log(`the username ${name} cannot be added `);
    }
}

prenom('Mrbeast')

