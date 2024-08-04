$('.menudiv').on('click',function(){
    $('.menu').addClass("transition3")
    $('.menudiv').addClass("transition4")
})
$('.exit').on('click',function(){
    $('.menu').removeClass("transition3")
    $('.menu').addClass("transition")
    $('.menudiv').removeClass("transition4")
    $('.menudiv').addClass("transition2")
    
})

$("h3").on ('click' ,function(){
    $('p').removeClass('d-none');
})


let textwarning= document.getElementById("textwarning");
let message=document.getElementById("message1")
let button= document.getElementById("button1")

function validateMessage(){
    var text= message.value
    var regex= /^(.{1,100})$/
    if (regex.test(text)==true){
        console.log('match');
        button.classList.remove("disabled")
        
    }else{
        console.log('no match');
        
        textwarning.classList.remove("d-none");
        button.classList.add("disabled")


    }
}




