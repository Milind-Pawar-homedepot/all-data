
try {


LG_Test_B();
function LG_Test_B(){
                let timerCount = 1;
	            let timer = setInterval(function() {
	                timerCount = timerCount + 1;
	                if(document.getElementsByClassName("zone-card__zone2").length> 0)
                     {
                        document.getElementsByClassName('zone-card__zone2')[0].getElementsByTagName('div')[0].innerHTML='<h2 class="u__truncate zone-card__header u__bold">Make Sure It Fits</h2><p class="tnt-zone-card__header-text">Use our size calculator to find the right refrigerator for your space</p>'

                        document.getElementsByClassName("tnt-zone-card__header-text")[0].style.cssText = `margin-top: -49px;font-size: 1.2rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;padding-right: 20px`;

                        document.getElementsByClassName('zone-card__video-link')[0].innerText='Measuring Guide';
                            
	                  }
	            }, 600);
	            if (timerCount > 1000) {
	                clearInterval(timer);
	            }   
          }

   
} catch (error) {
    
}

// document.getElementsByClassName('zone-card__zone2')[0].getElementsByTagName('div')[0].innerHTML='<h2 class="u__truncate zone-card__header u__bold">Make Sure It Fits</h2><p class="tnt-zone-card__header-text">Use our size calculator to find the right refrigerator for your space</p>'

// document.getElementsByClassName("tnt-zone-card__header-text")[0].style.cssText = `margin-top: -49px;font-size: 1.2rem;
// overflow: hidden;white-space: nowrap;text-overflow: ellipsis;padding-right: 20px`;

// document.getElementsByClassName('zone-card__video-link')[0].innerText='Measuring Guide';