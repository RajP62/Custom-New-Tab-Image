document.querySelector("form").addEventListener("submit",save);
function save(e){
    e.preventDefault();
    let text=e.target.text.value;
    console.log(text);
    let currImg=JSON.parse(localStorage.getItem("savedUrl"));
    currImg.image=text;
    localStorage.setItem("savedUrl", JSON.stringify(currImg));
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
        // localStorage.setItem("check", JSON.stringify(tabs));
        // tabs.forEach((el, index)=>{
        //     if(el=="chrome://newtab/"){
        //         chrome.tabs.update(tabs[index].id, {url: tabs[0].url});
        //     }
        // })
    });
    document.querySelector('form').text.value="";
    

}
