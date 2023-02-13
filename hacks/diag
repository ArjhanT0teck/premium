alert("Doesn't work all the time. please still answer questions normally.")
if (window['diagnosticIFrame'] === undefined || window['diagnosticIFrame'] === null) {
    alert('Please open your Diagnostic or Growth Check.')
} else {
    if (diag === 1) {
        diag = 0;
        var duration = 1000;

        // hijacks XMLHttpRequest.send() to modify requests
        XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function(body) {
            // modifies inputted request
            let newBody = JSON.parse(body);
            if (newBody.correct == false) newBody.correct = true;
            if (newBody.durationSeconds != undefined) newBody.durationSeconds = duration;

            // sends modified request
            this.realSend(JSON.stringify(newBody));
        }

        alert("Enabled. All answers inputted in the Diagnostic will be correct. Click again to disable. Once you disable any previous answers should remain correct.");
        alert("Diagnostic Hack is very experimental. It will likely not work so proceed at your own risk.");
        alert("Don't finish your Diagnostic too quickly or it will be marked as rushed.");
    } else {
        diag = 1;
        // disables hack
        XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.realSend;
        XMLHttpRequest.prototype.realSend = undefined;
        alert("Disabled.")
    }
}
