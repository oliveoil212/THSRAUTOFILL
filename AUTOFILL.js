const date = "2021/08/23"
const id = "A123456789"

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (name === 'Control') {
      var ele = document.querySelector("#content > tbody > tr:nth-child(1) > td:nth-child(2) > span > select")
      ele.value = 5;
      ele = document.querySelector("#content > tbody > tr:nth-child(1) > td:nth-child(2) > select")
      ele.value = 9
      ele = document.querySelector("#content > tbody > tr:nth-child(6) > td:nth-child(2) > span > span:nth-child(1) > span > select")
      ele.value = '0F'
      ele = document.querySelector("#content > tbody > tr:nth-child(6) > td:nth-child(2) > span > span:nth-child(5) > span > select")
      ele.value = '1P'
      ele = document.querySelector("#seatRadio2")
      ele.click();
      ele = document.querySelector("#toTimeTable > select")
      ele.value = '500A'
      ele = document.querySelector("#toTimeInputField")
      ele.value = "2021/08/23"
      var date = document.querySelector("#ToTimePicker");
        //date.click();
      return;
    }
    if(name === "CapsLock") {
      ele = document.querySelector("#idNumber")
      ele.value = "A123456789"
      ele = document.querySelector("#content > table.table_simple > tbody > tr:nth-child(1) > td:nth-child(1) > input")
      ele.click();
      ele = document.querySelector("#isSubmit");
      ele.click()
    }
  }, false);
