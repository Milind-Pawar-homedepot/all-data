<script type="text/javascript">
try {
  
    Change_Digital_Endcap ();
    function Change_Digital_Endcap()
    {  

let data_array=[
    {
        page_url:'https://www.homedepot.com/b/Electrical/N-5yc1vZarcd',
        item:["Ceiling Fans","Fasteners","Cleaning Supplies"]
    },
    {
        page_url:'https://www.homedepot.com/b/Lighting/N-5yc1vZbvn5',
        item:["Electrical","Smart Lighting","Cleaning Supplies"]
    },
    {
        page_url:'https://www.homedepot.com/b/Lighting-Outdoor-Lighting/N-5yc1vZc7qv',
        item:["Light Bulbs","Cleaning Supplies","Outdoor Plants"]
    }

]

let timerCount = 1;
        let timer = setTimeout(function() {
            timerCount = timerCount + 1;
            if(document.getElementsByClassName("categoryContainer col__12-12").length> 0)
            {                   
                const url= window.location.href;
                for(var i = 0; i < data_array.length; i++)
                {
                if ( url.includes(data_array[i].page_url)) 
                {
           // alert('enter the test')       
                    Remove_Elements(data_array[i].item)
                    break;
                }
                }
    		}
        }, 3000);
        if (timerCount > 1000) {
            clearInterval(timer);
        }   



function Remove_Elements(items)
{
for(let i=0;i<items.length;i++)
{

   document.querySelector(`span[title="`+items[i]+`"]`).parentNode.remove()
} 
}
    }
    
} catch (error) {
    
}</script >