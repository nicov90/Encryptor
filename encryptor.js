const inputText=document.querySelector(".text-input");
const message=document.querySelector(".results-message");
const copyButton=document.querySelector(".copy-to-clipboard");

function EncryptMain(){
    const EncryptedText=toEncrypt(inputText.value);
    message.value=EncryptedText;
    message.style.display="block";
    copyButton.style.display="block";
    inputText.value="";
}
function toEncrypt(TextValue){
    let array=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    TextValue=TextValue.toLowerCase();

    for(let i=0;i<array.length;i++){
        if(TextValue.includes(array[i][0])){
            TextValue=TextValue.replaceAll(array[i][0],array[i][1]);
        }
    }
    return TextValue;
}
function DecryptMain(){
    const DecryptedText=toDecrypt(inputText.value);
    message.value=DecryptedText;
    message.style.display="block";
    copyButton.style.display="block";
    inputText.value="";
}
function toDecrypt(TextValue){
    let array=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for(let i=0;i<array.length;i++){
        if(TextValue.includes(array[i][1])){
            TextValue=TextValue.replaceAll(array[i][1],array[i][0]);
        }
    }
    return TextValue;
}
function copy(){
    message.select();
    navigator.clipboard.writeText(message.value);
}