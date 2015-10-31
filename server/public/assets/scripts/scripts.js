/**
 * Created by eandreweccleston on 10/31/15.
 */
$(document).ready(function(){

    console.log("doc ready");


init();


});
// function callers

function init(){
    addSubmitButton();
}


// dom functions

function addSubmitButton(){
    $('#inputForm').append("<div class='submittButton'>Submitt</div>");
    $('#inputForm').on('click', 'submittButton',submittData);

}

// client-server functions