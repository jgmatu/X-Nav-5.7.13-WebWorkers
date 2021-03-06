worker = new Worker("calcprims.js");

function searchPrimes() {
      var node = document.getElementById("prime");
      var result = document.getElementById("result");

      var n = parseInt(node.value);
      result.innerHTML = "";
      worker.postMessage(n);
}

worker.onmessage = function (event) {
      var primelist = event.data;
      if (primelist == "") {
            worker.terminate();
      }
      var node = document.getElementById("result");
      node.innerHTML += primelist;
}
