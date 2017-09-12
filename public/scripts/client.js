console.log('what the hell');

function onReady() {
    console.log('on Ready')
    listClass();
}

function listClass()
    $.ajax({
        method: 'GET',
        url: '/',
        success: function (serverResp) {
            console.log('did i work');
        }
    });






$(document).ready(onReady);
