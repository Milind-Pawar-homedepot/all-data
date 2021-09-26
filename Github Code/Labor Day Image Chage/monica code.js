//Desktop Hero image

initiateChange();
function initiateChange(){
    const targetNode = document.querySelectorAll('div[data-module-id="column_thd_7773"] .content_image >a');         /* Target element */
    let timerCount = 1;
    let timer = setInterval(function() {
        timerCount = timerCount + 1;
        if(targetNode.length > 0) {
            clearInterval(timer);  
            

            let htm=`<picture>
            <source media="(min-width: 640px)" srcset="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/PaintLD2021-l1hero2-dsk.jpg">
            
            <source media="(max-width: 640px)" srcset="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/PaintLD2021-l1hero2-mob.jpg">
            <img src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/PaintLD2021-l1hero2-dsk.jpg" class="stretchy" alt="IMPROVE YOUR PAINT WORK With Savings on Select Paint Sprayers" title="">
            </picture>`;
            
            //document.querySelector('div[data-module-id="EtchImage_thd_d261"]').innerHTML=htm;
            
            document.querySelector('div[data-module-id="column_thd_7773"] .content_image >a').innerHTML= htm;
            
            document.querySelector('div[data-module-id="column_thd_7773"] .content_image >a').href = "https://www.homedepot.com/b/Paint/Labor-Day/N-5yc1vZar2dZ1z1com8";
        

          }
    }, 600);
    if (timerCount > 1000) {
        clearInterval(timer);
    }   
}


//Desktop Visual Nav below Hero image

initiateChange();
function initiateChange(){
    const targetNode = document.querySelectorAll('div[data-module-id="column_thd_4259"] .visualNav >a');         /* Target element */
    let timerCount = 1;
    let timer = setInterval(function() {
        timerCount = timerCount + 1;
        if(targetNode.length > 0) {
            clearInterval(timer);  
            

            
let htm1=`<img class="visualNav__img" src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/PaintLD2021-visnav-paintsprayers.png" alt=" ">`;
document.querySelector('div[data-module-id="column_thd_4259"] .visualNav >a').innerHTML= htm1;
document.querySelector('div[data-module-id="column_thd_4259"] .visualNav >a').href="https://www.homedepot.com/b/Paint-Paint-Supplies-Paint-Sprayers/Labor-Day/N-5yc1vZarv5Z1z1com8";


          }
    }, 600);
    if (timerCount > 1000) {
        clearInterval(timer);
    }   
}