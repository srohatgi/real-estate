var accounts;
var account;

function notarizeDocument() {
  var nsvc = NotarizeDocument.deployed();
  var doc = document.getElementById("escrow-document");
  if (nsvc.isNotarized(doc.value)) {
    setStatus("<b> true </b>");
  } else {
    nsvc.notarize(doc.value).then(function(value) {
      setStatus("<i> notarizing... </i>");
      setTimeout(function() { setStatus("<b> notarized </b>"); }, 5000);
    });
  }
};

function setStatus(message) {
  var status = document.getElementById("escrow-document-status");
  status.innerHTML = message;
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    setStatus("<i>connected </i>with account: " + account);
  });
}
