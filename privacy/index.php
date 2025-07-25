<?php 

	include '../php/setup.php';
	
	$section = 'privacy';
	$dots = '..';

?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Privacy - One Button Apps</title>
<meta name="description" content="One button apps makes elegant mobile software that needs to explanation.">
<?php include $dots . '/php/head.php'; ?>
</head>

<body class="<?php print $section; ?>"> 

	<div id="page">

		<div class="row">
			<h1>PRIVACY</h1> 
		</div>

		<?php include $dots . '/php/above.php'; ?>

		<div class="row">

			<main>
				
				<article class="article">
					<div class="article-content">

            <h2>Penelope's Math Cats</h2>
					  
            <p>All of our apps, including "Penelope's Math Cats," require no special permissions whatsoever.</p>
					  
            <p>"1-BUTTON APPS" and its developer take your privacy very seriously. Our apps use no third-party analytics or advertising frameworks. Our apps logs no information on you and has no interest in doing such.</p>

						<p>Bottom Line: Our apps do not collect, transmit, distribute or sell your data.</p>          

					</div>
				</article>

      </main>
		</div> 

    <?php include $dots . '/php/under.php'; ?>



	</div><!-- end: #page -->

<script>
	var tag_line = 'Keeping it simple!';
</script>		
<?php include $dots . '/php/bottom.php'; ?>	
</body>
</html>