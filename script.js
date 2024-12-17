function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function goBack() {
    window.history.back();
}

document.getElementById('signupForm').onsubmit = function(e) {
    e.preventDefault();
    if (document.getElementById('authCheck').checked) {
        alert('Signup Successful!');
    } else {
        alert('Please confirm that you are a cricket player.');
    }
};
