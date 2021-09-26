try {

const url_array_test_A= [
    {
    page_url:'https://www.homedepot.com/b/Tools/N-5yc1vZc1xy',
    img_url:'https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/20210715AppliancesD2.png',
    dest_url:'https://www.homedepot.com/b/Tools/Special-Values/Free-Shipping/N-5yc1vZc1xyZ7Z1z0zdh8?NCNI-5'
    },
    {
    page_url:'https://www.homedepot.com/c/tool_savings',
    img_url:'https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/20210715AppliancesD2.png',
    dest_url:'https://www.homedepot.com/b/Tools/Special-Values/Free-Shipping/N-5yc1vZc1xyZ7Z1z0zdh8?NCNI-5'
    },
    {
    page_url:'https://www.homedepot.com/b/Tools-Power-Tools/N-5yc1vZc298',
    img_url:'https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/20210715AppliancesD2.png',
    dest_url:'https://www.homedepot.com/b/Tools-Power-Tools/Special-Values/Free-Shipping/N-5yc1vZc298Z7Z1z0zdh8?NCNI-5'
    },
    {
    page_url:'https://www.homedepot.com/b/Tools-Hand-Tools/N-5yc1vZc1zg',
    img_url:'https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/20210715AppliancesD2.png',
    dest_url:'https://www.homedepot.com/b/Tools-Hand-Tools/Special-Values/Free-Shipping/N-5yc1vZc1zgZ7Z1z0zdh8?NCNI-5'
    },
    {
    page_url:'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Trimmers/N-5yc1vZbxbh',
    img_url:'https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/20210715AppliancesD2.png',
    dest_url:'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Lawn-Mowers/N-5yc1vZc5ar'
    },
    {
    page_url:'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Lawn-Mowers/N-5yc1vZc5ar',
    img_url:'https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/20210715AppliancesD2.png',
    dest_url:'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Riding-Lawn-Mowers/N-5yc1vZc5ax'
    },
    {
    page_url:'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Riding-Lawn-Mowers/N-5yc1vZc5ax',
    img_url:'https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/20210715AppliancesD2.png',
    dest_url:'https://www.homedepot.com/b/Outdoors-Outdoor-Power-Equipment-Trimmers/N-5yc1vZbxbh'
    }

]


    
ImageChange_Test_A();

function ImageChange_Test_A()
            {
                
	            let timerCount = 1;
	            let timer = setInterval(function() {
	                timerCount = timerCount + 1;
	                if(document.querySelectorAll("div.content_image").length > 0)
                     {
	                    clearInterval(timer);  
	                    
                        const url= window.location.href;
                        if (url.includes('/c/'))
                        {
                            document.querySelector("div.content_image>a").href = url_array_test_A[1].dest_url;
                            document.querySelector("div.content_image>a>picture>img").src=  url_array_test_A[1].img_url;
                            document.querySelector("div.content_image>a>picture>source").srcset=url_array_test_A[1].img_url;
                        }
                        else if(url_array_test_A.length>0 )
                            { 
                                for(i=0;i<url_array_test_A.length;i++)
                                { 
                                    
                                    if(url.includes(url_array_test_A[i].page_url))
                                    {
                                        document.getElementsByClassName('content_image')[0].getElementsByTagName('a')[0].href= url_array_test_A[i].dest_url;
                                        document.getElementsByClassName('content_image')[0].getElementsByTagName('img')[0].src= url_array_test_A[i].img_url;

                                    }
                                    
                                    
                                }

                             }
                            
	                  }
	            }, 600);
	            if (timerCount > 1000) {
	                clearInterval(timer);
	            }   
	        }
 
        }
 catch (error) {
    
}
    

