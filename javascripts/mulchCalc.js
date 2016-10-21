function calculateArea() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var depth = document.getElementById("depth").value;
  var tons = ((length * width * (depth/12))/27)/2.96;
  var tons2 = tons.toFixed(2);
  document.getElementById("total").innerHTML = tons2
}
