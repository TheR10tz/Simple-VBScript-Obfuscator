/*
 * Coded by TheR10tz
 *  https://github.com/TheR10tz
 */
var date=new Date();if(date.getHours()<6||date.getHours()>0x12){document.querySelector('html').style.filter='invert(100%)';}else{document.querySelector('html').style.filter='invert(0%)';}function obfuscate(){if(p=document.getElementById("text").value,error=0,""==p||null==p)document.getElementById("obfuscated_text").innerHTML="";else{for(d="",pl="",document.getElementById("leave_space").checked?pl=String.fromCharCode(-790+822)+String.fromCharCode(392-354)+String.fromCharCode(833-801):pl=String.fromCharCode(15352/404),""===document.getElementById("number").value||null===document.getElementById("number").value?(alert("Please enter the length"),error=1):number=document.getElementById("number").value,i=0;i<p.length;i++)ss=Math.floor(Math.random()*number)+1,zz=Math.floor(3*Math.random())+1,bb=Math.floor(2*Math.random())+1,document.getElementById("addition").checked&&!document.getElementById("subtraction").checked&&(1==bb?d+="chr("+(p.charCodeAt(i)-ss)+"+"+ss+")"+pl:d+="chr("+p.charCodeAt(i)*ss+"/"+ss+")"+pl),document.getElementById("subtraction").checked&&!document.getElementById("addition").checked&&(2==bb?d+="chr("+(p.charCodeAt(i)+ss)+"-"+ss+")"+pl:d+="chr("+p.charCodeAt(i)*ss+"/"+ss+")"+pl),document.getElementById("addition").checked&&document.getElementById("subtraction").checked&&(1==zz?d+="chr("+(p.charCodeAt(i)-ss)+"+"+ss+")"+pl:2==zz?d+="chr("+(p.charCodeAt(i)+ss)+"-"+ss+")"+pl:d+="chr("+p.charCodeAt(i)*ss+"/"+ss+")"+pl),document.getElementById("addition").checked||document.getElementById("subtraction").checked||(d+="chr("+p.charCodeAt(i)*ss+"/"+ss+")"+pl);document.getElementById("replace_symbol").checked?convert(d.replace(/\&/g,'+'),error):convert(d,error)}}function convert(e,t){!0===document.getElementById("remove_execute").checked?obfuscated_code=e.slice(0,-1):obfuscated_code="Execute("+e+"vbcrlf)",0===t&&(document.getElementById("chr_to_chrw").checked&&(obfuscated_code=obfuscated_code.replace(/chr/g,"ChrW")),document.getElementById("leave_space").checked?document.getElementById("obfuscated_text").innerHTML=obfuscated_code.slice(0,-2):document.getElementById("obfuscated_text").innerHTML=obfuscated_code)}function download_raw(){download("vbs_obfuscated_code.txt",document.getElementById("obfuscated_text").value)}function download(e,t){var d=document.createElement(String.fromCharCode(2582916/26628));d.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),d.setAttribute("download",e),d.style.display="none",document.body.appendChild(d),d.click(),document.body.removeChild(d)}function upload_file(){document.getElementById("file").addEventListener("change",function(){var e=new FileReader;e.onload=function(){document.getElementById("text").textContent=this.result},e.readAsText(this.files[0])})}function copy(){document.querySelector("#obfuscated_text").select(),document.execCommand("copy"),alert("Copied to clipboard")}
