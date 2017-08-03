//以"YYYY-MM-DD"形式输出今天日期
function getToday() {
  var date = new Date();
  var seperator = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  var currentDate = year + seperator + month + seperator + strDate;
  console.log(currentDate);
}
getToday();
