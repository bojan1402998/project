<!DOCTYPE html>
<html>
<body>
<?php 
require_once("class/calculator.class.php");
require_once("config.php");
$calc=new Calculator(intval($_GET['factor1']),intval($_GET['factor2']));
$con=mysqli_connect($host, $username,$password, $dbname);

if (!$con){
	die('Could not connect:'.mysqli_error($con));
}
$sql="INSERT INTO `osnovna`( `factor1`, `factor2`, `operation`, `result`, `operation_date`) VALUES (".$calc->get_f1().",".$calc->get_f2().",'*',".$calc->multiply().",CURRENT_TIMESTAMP())";
if($con->query($sql)===FALSE)
	echo "Problem sa upitom! ".$sql."<br>".$con->error;
$con->close();
?>
</body>
</html>