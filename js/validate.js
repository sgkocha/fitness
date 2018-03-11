if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

var result = true;

function init() {
    form1.yourName.onchange = nameOnChange;
    form1.email.onchange = emailOnChange;
    form1.subject.onchange = nameOnChange;  
    form1.onsubmit = onsubmiHandler;    
}
function validate(elem, pattern) {
    var res = elem.value.search(pattern);
    if (res == -1) result = false;
    else result = true;
}

function nameOnChange() {
    var pattern = /\S/;
    validate(this, pattern);
    
}

function emailOnChange() {
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this, pattern);
}

function onsubmiHandler() {
    var invalid = false;
    var statusInfo = document.getElementById("status-text");

    for (var i = 0; i < form1.elements.length; ++i) {
        var e = form1.elements[i];
        // проверка типа элемента и наличия обработчика события onchange.
        if (e.type == "text" && e.onchange) {
            e.onchange();
            if (! result ) invalid = true;
        }
    }

    if (invalid) {     
        
        statusInfo.innerHTML = "Допущены ошибки при заполнении формы.";
        return false; // отмена отправки формы.
    }
    
    statusInfo.innerHTML = "Cообщение отправлено";
}



