document.addEventListener('DOMContentLoaded', function() {
    // Event listeners
    const feedbackBtn = document.querySelector('.btn-feedback');
    const backBtn = document.getElementById('back-btn');
    const sendWhatsappBtn = document.getElementById('send-whatsapp');

    if(feedbackBtn) {
        feedbackBtn.addEventListener('click', showFeedback);
    }

    if(backBtn) {
        backBtn.addEventListener('click', goBack);
    }

    if(sendWhatsappBtn) {
        sendWhatsappBtn.addEventListener('click', sendToWhatsapp);
    }
});

function showFeedback() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('feedback-section').classList.remove('hidden');
}

function goBack() {
    document.getElementById('feedback-section').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
}

function sendToWhatsapp() {
    var textarea = document.getElementById('issueText');
    var text = textarea.value.trim();
    
    if (text === "") {
        alert("Lütfen bir mesaj yazınız.");
        textarea.focus();
        return;
    }

    // Telefon numarasını buraya yaz (Başında 90 olsun)
    var phone = "905072332585"; 
    
    var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent("Şikayet/Öneri: " + text);
    window.open(url, '_blank');
}
