// document.getElementsByClassName('zone-card__zone1')[0].getElementsByTagName('div')[0].getElementsByTagName('h2')[0].innerText='Make Sure It Fits';
// document.getElementsByClassName('zone-card__zone1')[0].getElementsByTagName('div')[0].getElementsByTagName('p')[0].remove();

try {

    
    function showOverlay ()  {
        
        const prompt = document.createElement('div')
        prompt.className = 'tt-overlay'
        prompt.innerHTML = `
        <div class="tt-backdrop-overlay">
            <div class="tt-backdrop-stage-overlay" style="position: relative; top: 20%;">
                <div class="tt-prompt-overlay">
                    <div class="bottom-container">
                        <div style="width:100%;">
                            <div style="float: right;padding: 10px;">
                                <div style="display: flex; justify-content:space-between;">	
                                    <button class="tt-close-overlay">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px" viewBox="0 0 15 15" version="1.1"> <!-- Generator: Sketch 59.1 (86144) - https://sketch.com --> <title>Action/Remove_Close</title> <desc>Created with Sketch.</desc> <g id="Standards" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Current-Icons" transform="translate(-738.000000, -406.000000)" fill="#F96302"> <g id="Action/Remove_Close" transform="translate(738.000000, 406.000000)"> <path d="M12.0208153,2.84661184e-13 L14.1421356,2.12132034 L9.192,7.071 L14.1421356,12.0208153 L12.0208153,14.1421356 L7.071,9.192 L2.12132034,14.1421356 L2.84217094e-13,12.0208153 L4.949,7.071 L2.83773005e-13,2.12132034 L2.12132034,2.84661184e-13 L7.071,4.949 L12.0208153,2.84661184e-13 Z"></path> </g> </g> </g> </svg>
                                  </button>
                                </div>
                            </div>
                        </div>
                        <div>
                        <iframe src="https://www.lg.com/us/kitchen/measure-first/story.html" style="width: 100%;min-height: 500px;">
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>`.trim()
        
        prompt.onclick = function (e) {
            if (e.target.classList.contains('tt-backdrop-overlay') || e.target.classList.contains('tt-backdrop-stage-overlay') || e.target.classList.contains('tt-close-overlay') || e.target.closest('.tt-close-overlay')) {
                closePrompt.call(prompt)
            }
        }
    
        function closePrompt() {
            document.body.classList.remove('no-scroll-overlay')
            this.remove()
        }
        
        document.body.append(prompt)
        alert('something working')
        document.body.classList.add('no-scroll-overlay')
    }
    LG_Test_A();
    function LG_Test_A(){
                    let timerCount = 1;
                    let timer = setInterval(function() {
                        timerCount = timerCount + 1;
                        if(document.getElementsByClassName("zone-card__zone1").length> 0)
                         {
                              
                            let newHtml=`<a class="bttn-outline bttn-outline--primary bttn--inline zone-card-details__btn" onclick="showOverlay()"><span class="bttn__content">Measuring Guide</span></a>`
                            
                            document.getElementsByClassName('zone-card__zone1')[0].getElementsByTagName('div')[0].innerHTML='<h2 class="tnt-zone-card__header u__bold">Make Sure It Fits</h2>'
                            document.getElementsByClassName('zone-card-details__text category-cards-details__text--truncate')[0].textContent ='Use our size calculator to find the right refrigerator for your space'
                                                   
                            document.getElementsByClassName("tnt-zone-card__header u__bold")[0].style.cssText = ` margin-bottom: 15px;padding-bottom: 0px; display: inline-block; border-bottom: 2px solid #f96302;`;
                           
                            document.getElementsByClassName('zone-card-details__actions')[0].innerHTML= newHtml;



                          
                          }
                    }, 600);
                    if (timerCount > 1000) {
                        clearInterval(timer);
                    }   
              }


         


    } catch (error) {
        
    }
// document.getElementsByClassName('zone-card__zone1')[0].getElementsByTagName('div')[0].innerHTML='<h2 class="tnt-zone-card__header u__bold">Make Sure It Fits</h2>'
// document.getElementsByClassName('zone-card-details__text category-cards-details__text--truncate')[0].textContent
// ='Use our size calculator to find the right refrigerator for your space'

// document.getElementsByClassName('bttn-outline bttn-outline--primary bttn--inline zone-card-details__btn')[0].getElementsByTagName('span')[0].innerText='Measuring Guide';

// document.getElementsByClassName(
//     "tnt-zone-card__header u__bold"
//   )[0].style.cssText = `
//   margin-bottom: 15px;padding-bottom: 0px; display: inline-block; border-bottom: 2px solid #f96302;`;




  