function calculateArea() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var depth = document.getElementById("depth").value;
  var area = (length * width * (depth/12))/27;
  var area2 = area.toFixed(2);
  document.getElementById("total").innerHTML = area2
}
