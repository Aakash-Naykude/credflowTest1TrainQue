var arr = [900, 940, 950, 1100, 1500, 1800];
var dep = [910, 1200, 1120, 1130, 1900, 2000];

console.log(findMinNum(arr, dep, dep.length));
function findMinNum(arr, dep, n) {
  //platform present
  var platForm = 1;
  // platform needed
  var res = 1;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if (
        (arr[i] >= arr[j] && arr[i] <= dep[j]) ||
        (arr[j] >= arr[i] && arr[j] <= dep[i])
      ) {
        platForm++;
      }
    }

    if (res == platForm) {
      res = res;
    } else {
      if (res > platForm) {
        res = res;
      } else {
        res = platForm;
      }
    }
  }
  return res;
}
