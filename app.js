//  connecting js with html file 
var btnTranslate= document.querySelector("#btn-Translate");
var textInput= document.querySelector("#text-input");
var outputDiv=document.querySelector("#output");

 // giving a link for seever url

var serverUrl= "https://api.funtranslations.com/translate/ferb-latin.json"

// giving key and text to url to get a translation url
function getTranslationURL(inputText ){
return serverUrl + "?" + "text="+inputText ;
}
// if any error gets occured so adding an error handeler

function errorHandeler(error){
  console.log("error occured ", error);
  alert("error has occured,please try after sometime")
};

// fetching the translation url and printiong the output

function clickHandeler(){
  var inputText =textInput.value;
      fetch(getTranslationURL(inputText ))
        .then(response=>response.json())
        .then(json=>{
           var outputText=json.contents.translated;
          outputDiv.innerText=outputText;
        })
      .catch(errorHandeler)
          
  }
btnTranslate.addEventListener("click",clickHandeler);