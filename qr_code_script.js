document.addEventListener("DOMContentLoaded", function() {
    var qrCodeElement = document.getElementById("qrcode");
    var qrCode = new QRCode(qrCodeElement, {
        text: "https://www.pakrail.gov.pk/",
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});
