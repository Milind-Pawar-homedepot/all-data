const shopByRoom = {
    
    patio:  "https://www.homedepot.com/collection/outdoor/laguna-point-collection/id-37809",
 
   bedRoom: "https://www.homedepot.com/collection/bedroom/sunny-statements-bedroom/id-39015"
 }

var url_Omsid = {
 patio: [310211005, 302212395, 304873779] ,

 bedRoom: [ 310337264,206786592, 305657806,  314614463,316878890,316878789, 316878792, 314470474,315476533, 304949777, 305200622] 

};
var final_url;
const catogry=Object.keys(url_Omsid);
const page_url= window.location.href;
for(let i=0 ;i<catogry.length;i++)
{
 url_Omsid[catogry[i]].forEach(item=>{
     if(page_url.includes(item))
     {
      console.log(catogry[i]) ;  final_url=shopByRoom[catogry[i]] 
     }
 })
 
}
if(final_url){
console.log(final_url)
}