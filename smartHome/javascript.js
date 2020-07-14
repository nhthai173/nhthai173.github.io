function state_dentruocsan() {
  var dentruocsanHttp = new XMLHttpRequest();
  dentruocsanHttp.onreadystatechange = function () {
    if(dentruocsanHttp.readyState ==4 && dentruocsanHttp.status==200){
      if(String(dentruocsanHttp.responseText) == '["1"]') {
        document.getElementById("state-dentruocsan").innerHTML = 'Đang tắt';
        document.getElementById("state-dentruocsan").style.color = 'red';
      }
      else if(String(dentruocsanHttp.responseText) == '["0"]') {
        document.getElementById("state-dentruocsan").innerHTML = 'Đang bật';
        document.getElementById("state-dentruocsan").style.color = 'green';
      }
    }
  }
  dentruocsanHttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/get/V2",true);
  dentruocsanHttp.send();
}

function state_dennhatruoc() {
  var dennhatruocHttp = new XMLHttpRequest();
  dennhatruocHttp.onreadystatechange = function () {
    if(dennhatruocHttp.readyState ==4 && dennhatruocHttp.status==200){
      if(String(dennhatruocHttp.responseText) == '["1"]') {
        document.getElementById("state-dennhatruoc").innerHTML = 'Đang tắt';
        document.getElementById("state-dennhatruoc").style.color = 'red';
      }
      else if(String(dennhatruocHttp.responseText) == '["0"]') {
        document.getElementById("state-dennhatruoc").innerHTML = 'Đang bật';
        document.getElementById("state-dennhatruoc").style.color = 'green';
      }
    }
  }
  dennhatruocHttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/get/V1",true);
  dennhatruocHttp.send();
}

function state_cameratruocsan() {
  var cameratruocsanHttp = new XMLHttpRequest();
  cameratruocsanHttp.onreadystatechange = function () {
    if(cameratruocsanHttp.readyState ==4 && cameratruocsanHttp.status==200){
      if(String(cameratruocsanHttp.responseText) == '["1"]') {
        document.getElementById("state-cameratruocsan").innerHTML = 'Đang tắt';
        document.getElementById("state-cameratruocsan").style.color = 'red';
      }
      else if(String(cameratruocsanHttp.responseText) == '["0"]') {
        document.getElementById("state-cameratruocsan").innerHTML = 'Đang bật';
        document.getElementById("state-cameratruocsan").style.color = 'green';
      }
    }
  }
  cameratruocsanHttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/get/V3",true);
  cameratruocsanHttp.send();
}

function state_coinhatruoc() {
  var coinhatruocHttp = new XMLHttpRequest();
  coinhatruocHttp.onreadystatechange = function () {
    if(coinhatruocHttp.readyState ==4 && coinhatruocHttp.status==200){
      if(String(coinhatruocHttp.responseText) == '["1"]') {
        document.getElementById("state-coinhatruoc").innerHTML = 'Đang tắt';
        document.getElementById("state-coinhatruoc").style.color = 'red';
      }
      else if(String(coinhatruocHttp.responseText) == '["0"]') {
        document.getElementById("state-coinhatruoc").innerHTML = 'Đang bật';
        document.getElementById("state-coinhatruoc").style.color = 'green';
      }
    }
  }
  coinhatruocHttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/get/V4",true);
  coinhatruocHttp.send();
}

function state_alertnhatruoc() {
  var alertnhatruocHttp = new XMLHttpRequest();
  alertnhatruocHttp.onreadystatechange = function () {
    if(alertnhatruocHttp.readyState ==4 && alertnhatruocHttp.status==200){
      if(String(alertnhatruocHttp.responseText) == '["0"]') {
        document.getElementById("state-alertnhatruoc").innerHTML = 'Đang tắt';
        document.getElementById("state-alertnhatruoc").style.color = 'red';
      }
      else if(String(alertnhatruocHttp.responseText) == '["1"]') {
        document.getElementById("state-alertnhatruoc").innerHTML = 'Đang bật';
        document.getElementById("state-alertnhatruoc").style.color = 'green';
      }
    }
  }
  alertnhatruocHttp.open('GET',"http://blynk.iot-cm.com:8080/LtRTgZFMFM5WiJaGi_JrFw7SHvGHRgzH/get/V5",true);
  alertnhatruocHttp.send();
}

function state_alertnhatruoc_coihu() {
  var alertnhatruoc_coihuHttp = new XMLHttpRequest();
  alertnhatruoc_coihuHttp.onreadystatechange = function () {
    if(alertnhatruoc_coihuHttp.readyState ==4 && alertnhatruoc_coihuHttp.status==200){
      if(String(alertnhatruoc_coihuHttp.responseText) == '["0"]') {
        document.getElementById("state-alertnhatruoc-coihu").innerHTML = 'Đang tắt';
        document.getElementById("state-alertnhatruoc-coihu").style.color = 'red';
      }
      else if(String(alertnhatruoc_coihuHttp.responseText) == '["1"]') {
        document.getElementById("state-alertnhatruoc-coihu").innerHTML = 'Đang bật';
        document.getElementById("state-alertnhatruoc-coihu").style.color = 'green';
      }
    }
  }
  alertnhatruoc_coihuHttp.open('GET',"http://blynk.iot-cm.com:8080/LtRTgZFMFM5WiJaGi_JrFw7SHvGHRgzH/get/V4",true);
  alertnhatruoc_coihuHttp.send();
}

function state_denbenphai() {
  var denbenphaiHttp = new XMLHttpRequest();
  denbenphaiHttp.onreadystatechange = function () {
    if(denbenphaiHttp.readyState ==4 && denbenphaiHttp.status==200){
      if(String(denbenphaiHttp.responseText) == '["0"]') {
        document.getElementById("state-denbenphai").innerHTML = 'Đang tắt';
        document.getElementById("state-denbenphai").style.color = 'red';
      }
      else if(String(denbenphaiHttp.responseText) == '["1"]') {
        document.getElementById("state-denbenphai").innerHTML = 'Đang bật';
        document.getElementById("state-denbenphai").style.color = 'green';
      }
    }
  }
  denbenphaiHttp.open('GET',"http://blynk.iot-cm.com:8080/e470f7e80af34f488baed1218e24d3bb/get/V2",true);
  denbenphaiHttp.send();
}

function state_denbentrai() {
  var denbentraiHttp = new XMLHttpRequest();
  denbentraiHttp.onreadystatechange = function () {
    if(denbentraiHttp.readyState ==4 && denbentraiHttp.status==200){
      if(String(denbentraiHttp.responseText) == '["0"]') {
        document.getElementById("state-denbentrai").innerHTML = 'Đang tắt';
        document.getElementById("state-denbentrai").style.color = 'red';
      }
      else if(String(denbentraiHttp.responseText) == '["1"]') {
        document.getElementById("state-denbentrai").innerHTML = 'Đang bật';
        document.getElementById("state-denbentrai").style.color = 'green';
      }
    }
  }
  denbentraiHttp.open('GET',"http://blynk.iot-cm.com:8080/e470f7e80af34f488baed1218e24d3bb/get/V3",true);
  denbentraiHttp.send();
}

function state_dentho() {
  var denthoHttp = new XMLHttpRequest();
  denthoHttp.onreadystatechange = function () {
    if(denthoHttp.readyState ==4 && denthoHttp.status==200){
      if(String(denthoHttp.responseText) == '["0"]') {
        document.getElementById("state-dentho").innerHTML = 'Đang tắt';
        document.getElementById("state-dentho").style.color = 'red';
      }
      else if(String(denthoHttp.responseText) == '["1"]') {
        document.getElementById("state-dentho").innerHTML = 'Đang bật';
        document.getElementById("state-dentho").style.color = 'green';
      }
    }
  }
  denthoHttp.open('GET',"http://blynk.iot-cm.com:8080/e470f7e80af34f488baed1218e24d3bb/get/V1",true);
  denthoHttp.send();
}


setInterval(function(){
  state_dentruocsan();
  state_dennhatruoc();
  state_cameratruocsan();
  state_coinhatruoc();
  state_alertnhatruoc();
  state_alertnhatruoc_coihu();
  state_denbenphai();
  state_denbentrai();
  state_dentho();
},500)




function bat_dennhatruoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/update/V1?value=0",true);
  xhttp.send();
}
function tat_dennhatruoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/update/V1?value=1",true);
  xhttp.send();
}
function bat_dentruocsan() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/update/V2?value=0",true);
  xhttp.send();
}
function tat_dentruocsan() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/update/V2?value=1",true);
  xhttp.send();
}
function bat_cameratruocsan() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/update/V3?value=0",true);
  xhttp.send();
}
function tat_cameratruocsan() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/update/V3?value=1",true);
  xhttp.send();
}
function bat_coinhatruoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/update/V4?value=0",true);
  xhttp.send();
}
function tat_coinhatruoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/NNqYxSymUEOpK3_GidUauogD8sr2c4jo/update/V4?value=1",true);
  xhttp.send();
}
function bat_alertnhatruoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/LtRTgZFMFM5WiJaGi_JrFw7SHvGHRgzH/update/V5?value=1",true);
  xhttp.send();
}
function tat_alertnhatruoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/LtRTgZFMFM5WiJaGi_JrFw7SHvGHRgzH/update/V5?value=0",true);
  xhttp.send();
}
function bat_alertnhatruoc_coihu() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/LtRTgZFMFM5WiJaGi_JrFw7SHvGHRgzH/update/V4?value=1",true);
  xhttp.send();
}
function tat_alertnhatruoc_coihu() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/LtRTgZFMFM5WiJaGi_JrFw7SHvGHRgzH/update/V4?value=0",true);
  xhttp.send();
}
function bat_denbenphai() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/e470f7e80af34f488baed1218e24d3bb/update/V2?value=1",true);
  xhttp.send();
}
function tat_denbenphai() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/e470f7e80af34f488baed1218e24d3bb/update/V2?value=0",true);
  xhttp.send();
}
function bat_denbentrai() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/e470f7e80af34f488baed1218e24d3bb/update/V3?value=1",true);
  xhttp.send();
}
function tat_denbentrai() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/e470f7e80af34f488baed1218e24d3bb/update/V3?value=0",true);
  xhttp.send();
}
function bat_dentho() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/e470f7e80af34f488baed1218e24d3bb/update/V1?value=1",true);
  xhttp.send();
}
function tat_dentho() {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',"http://blynk.iot-cm.com:8080/e470f7e80af34f488baed1218e24d3bb/update/V1?value=0",true);
  xhttp.send();
}