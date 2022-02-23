// var  menu =document.querySelectorAll('.item-link');
// for(var i=0; i < menu.length; i++){
//     menu[i].addEventListener("click",function(){
//         var menulist = document.querySelectorAll(".sub-menu");
//         for (var j = 0; j < menulist.length; j++) {
//             menulist[j].style.display = "none";
//         }
//         this.children[1].style.display = "block";
//     });
// }

$(document).ready(function(){
    $('.item-link').click(function(event){
        const id = this.id.split('_')[1];
        var checkId = $(this).attr('class').split(' ');
        if(checkId.find(e=>e=='active')=='active'){
            $(this).removeClass('active');
            $(`#sub_${id}`).removeClass('showsubmenu');
        }
        else{
            $(this).addClass('active');
            $(`#sub_${id}`).addClass('showsubmenu');
        }
        
        
    });
});