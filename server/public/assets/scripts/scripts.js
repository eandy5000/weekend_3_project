/**
 * Created by eandreweccleston on 10/31/15.
 */
$(document).ready(function(){



init();


});
// function callers

function init(){
    addSubmitButton();
}


// dom functions

function addSubmitButton(){
    $('#inputForm').append("<div class='submittButton'>Submitt</div>");
    $('#inputForm').on('click', '.submittButton',submittData);

}

// client-server functions

function submittData(){

    var formObject = {};
    $.each($('#inputForm').serializeArray(), function(i, field){
        formObject[field.name] = field.value;
    });

    $.ajax({
        type: "POST",
        url: "/upload",
        data: formObject,
        beforeSend: function() {
            console.log("the upload", formObject);
        },
        success: function(data){
            console.log("data pointing to formObject in success ", data);
        }
    })
}