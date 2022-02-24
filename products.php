<?php 
	session_start();
    include 'config.php';
	include 'functions.php';
	echo "<pre>";
	print_r($_SESSION);
	echo "</pre>";
?>
<!DOCTYPE html>
<html>
<head>
	<title>
		Products
	</title>
	<link href="style.css" type="text/css" rel="stylesheet">
</head>
<body>
<?php include 'header.php' ?>

	<div id="main">
		<div id="products">
			<?php displayProducts();?>
		</div>
		
	</div>
	<?php include 'footer.php' ?>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="script.js"></script>
</body>
</html>