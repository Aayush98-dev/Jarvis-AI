$(document).ready(function () {



    // Display Speak Message
    eel.expose(DisplayMessage)
    // function DisplayMessage(message) {

    //     // $(".siri-message li:first").text(message);
    //     // $('.siri-message').textillate('start');
    //     document.getElementById("status-text").innerText = message;
    // }
    function DisplayMessage(message) {
        const statusText = document.getElementById("status-text");
        statusText.innerText = message;

        const container = document.getElementById("status-container");
        container.scrollTop = container.scrollHeight;
    }

    // Display hood
    eel.expose(ShowHood)
    function ShowHood() {
        $("#Oval").attr("hidden", false);
        $("#SiriWave").attr("hidden", true);
    }

    eel.expose(senderText)
    function senderText(message) {
        var chatWrapper = document.getElementById("chat-wrapper");
        if (message.trim() !== "") {
            chatWrapper.innerHTML += `
        <div class="row justify-content-end mb-4">
            <div class="width-size sender">
                <div class="sender_message">${message}</div>
            </div>
        </div>`;
            chatWrapper.scrollTop = chatWrapper.scrollHeight;
        }
    }

    eel.expose(receiverText)
    function receiverText(message) {
        var chatWrapper = document.getElementById("chat-wrapper");
        if (message.trim() !== "") {
            chatWrapper.innerHTML += `
        <div class="row justify-content-start mb-4">
            <div class="width-size">
                <div class="receiver_message">${message}</div>
            </div>
        </div>`;

            // Scroll to bottom
            chatWrapper.scrollTop = chatWrapper.scrollHeight;
        }
    }


    // Hide Loader and display Face Auth animation
    eel.expose(hideLoader)
    function hideLoader() {

        $("#Loader").attr("hidden", true);
        $("#FaceAuth").attr("hidden", false);

    }
    // Hide Face auth and display Face Auth success animation
    eel.expose(hideFaceAuth)
    function hideFaceAuth() {

        $("#FaceAuth").attr("hidden", true);
        $("#FaceAuthSuccess").attr("hidden", false);

    }
    // Hide success and display 
    eel.expose(hideFaceAuthSuccess)
    function hideFaceAuthSuccess() {

        $("#FaceAuthSuccess").attr("hidden", true);
        $("#HelloGreet").attr("hidden", false);

    }


    // Hide Start Page and display blob
    eel.expose(hideStart)
    function hideStart() {

        $("#Start").attr("hidden", true);

        setTimeout(function () {
            $("#Oval").addClass("animate__animated animate__zoomIn");

        }, 1000)
        setTimeout(function () {
            $("#Oval").attr("hidden", false);
        }, 1000)
    }


});