
const readCookie = function ( e ) {
                e = encodeURIComponent( e );
                let t = ( ";" + document.cookie ).split( " " ).join( ";" ),
                    n = t.indexOf( ";" + e + "=" ),
                    i = n < 0 ? n : t.indexOf( ";", n + 1 );
                return n < 0 ? "" : decodeURIComponent( t.substring( n + 2 + e.length, i < 0 ? t.length : i ) )
            };
 const readAndDecodeBase64Cookie = function ( cookieName, separator = "." ) {
                try {
                    let encodedCookieValue = readCookie( cookieName );
                    let encodedSubstring = encodedCookieValue.split( separator )[ 0 ];
                    let regexPattern = /"/g;
                    let cleanedEncodedSubstring = encodedSubstring.replace( regexPattern, '' );
                    let decodedCookieValue = atob( cleanedEncodedSubstring );
                    let cookieObject = ( typeof decodedCookieValue === "string" && decodedCookieValue ? JSON.parse( decodedCookieValue ) : {} );
                    return cookieObject;
                }
                catch ( error ) {
                    return {};
                }
            };
const getUserStatus = function (){
                let b2b = readCookie('THD_CUSTOMER');
                let b2c = readCookie('THD_USER');
                let userStatus = '';

                if(b2c != ""){
                    let temp = readAndDecodeBase64Cookie("THD_USER", "." );
                    if(temp.svocCustomerAccountId != '')
                        userStatus = 'b2cAuth';
                }
                if(b2b != ""){
                    let temp = readAndDecodeBase64Cookie("THD_CUSTOMER", "." );
                    if(temp.c == "B2X" && temp.t != '')
                        userStatus = 'b2xAuth';
                    if(temp.c == "B2B" && temp.t != '')
                        userStatus = 'b2bAuth';
                }
                if(b2b == "" && b2c == ""){
                    userStatus = "guest";
                }
                return userStatus;

            }

const getStoreID = function() {
                let storeID = "";
                let decodedValue = JSON.parse(decodeURIComponent(readCookie("THD_LOCALIZER")));
                if(decodedValue) {
                    let locStore = decodedValue.THD_LOCSTORE;
                    if(locStore.length > 0){
                        let locStoreDetails = locStore.split("+");
                        if(locStoreDetails.length > 1){
                            storeID = locStoreDetails[0] || '';
                            if(storeID != ''){
                                if(!isNaN(parseInt(locStoreDetails[0]))){
                                    storeID = locStoreDetails[0];
                                }
                            }
                        }
                    }
                }
                if (!storeID && digitalData && digitalData.user && digitalData.user.localization) {
                    storeID = digitalData.user.localization.storeNumber; 
                }
                if (!storeID && _dD && _dD.user && _dD.user.localization) {
                    storeID = _dD.user.localization.storeNumber; 
                }               
                //storeID = storeID ? parseInt(storeID, 10) : "";
                if (!storeID) {
                    storeID = ""
                };
                return storeID;
}
if(window.location.href.includes('/s/'))
{
var search_keyword = window.location.pathname.split('%')[0].split('/').reverse()[0];
const storeID = getStoreID();
const userStatus= getUserStatus();
const apiLink='https://www.homedepot.com/dynamicrecs/searchViewed?storeid='+storeID+'&key=2zSR74pj5Rq6zDtHENHkAScT4RWsl0pg&anchor='+search_keyword+''

        if(userStatus=="b2cAuth" || userStatus=="b2bAuth")
        {
         const resp= await  fetch(apiLink)
         const data = await resp.json()
         console.log(data.products)
        }
}