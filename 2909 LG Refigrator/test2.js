<script type="text/javascript">
  try{
	LG_Refrigerator_Test_B();
	function LG_Refrigerator_Test_B(){
        let timerCount = 1;
        let timer = setTimeout(function() {
            timerCount = timerCount + 1;
            if(document.getElementsByClassName('col__12-12 col__5-12--sm').length> 0)
            {                 
                LG_loadNewUI();
    		}
        }, 600);
        if (timerCount > 1000) {
            clearInterval(timer);
        }   
    }
    function LG_loadNewUI(){
    	let newHtml=`
		<div class="flexbox" style="display: flex; margin: 10px; gap:10px"> 
        <img src="//images.thdstatic.com/catalog/swatchImages/35/22/22260bec-0abb-48c3-b1f5-12b3d22d0a15_35.jpg" title="PrintProof Stainless Steel" height="30" width="50" loading="lazy">
             <span style="font-size: medium; "><strong>Don't know what size to buy?</strong><br>
                <span style="font-size: small;">Find the right refrigerator for your space</span>
            </span>
           <div id="tnt-button" style="padding: 5px;border: 2px solid #333; width: 150px; height: 23px;margin-left: 25px;font-size: medium;text-align: center;cursor:pointer;
           ">
            <strong>Measuring Guide</strong></div>
        </div>`;          
		var node = document.createElement('div')
        node.innerHTML= newHtml;
        document.querySelector("#root > div > div:nth-child(3) > div > div > div.col__12-12.col__5-12--sm > div > div > div:nth-child(3)").after(node)
        document.getElementById('tnt-button').addEventListener('click',function(e){
        	console.log("load overlay");
        	showOverlay();
        });
    }
    function getQueryElement(selector, all = false) {
	    if(document.querySelector(selector) != null) {
	      if(all) {
	        return document.querySelectorAll(selector);
	      }
	      return document.querySelector(selector);
	    }
	    if(parent.document.querySelector(selector) != null) {
	      if(all) {
	        return parent.document.querySelectorAll(selector);
	      }
	      return parent.document.querySelector(selector);
	    }
	    return null;
  	}
	const showOverlay = () => {
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
			document.body.classList.add('no-scroll-overlay')
		}
}catch(e){}
</script>
<style>
	.tt-overlay .tt-prompt-overlay {
		z-index: 100;
		background: #fff;
		width: 60%;
        min-height:500px;
		margin: 0 auto;
	}

	.tt-overlay .tt-backdrop-overlay {
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		pointer-events: auto;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
		transition: background-color .3s ease;
		z-index: 200;
	}

	body.no-scroll-overlay {
		overflow: hidden;
	}

	.tt-close-overlay {
		align-self: flex-start;
	}
</style>