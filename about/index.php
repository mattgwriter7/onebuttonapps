<?php 

	include '../php/setup.php';
	
	$section = 'about';
	$dots = '..';

?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About - One Button Apps</title>
<meta name="description" content="One button apps makes elegant mobile software that needs to explanation.">
<?php include $dots . '/php/head.php'; ?>
</head>

<body class="<?php print $section; ?>"> 

	<div id="page">

		<div class="row">
			<h1>ABOUT 1-BUTTON</h1> 
		</div>

		<?php include $dots . '/php/above.php'; ?>

		<div class="row">

<main>
				
				<?php include $dots . '/php/article.php'; ?>
				<?php include $dots . '/php/article.php'; ?>
				<article class="article">
					<div class="article-image"><img src="<?php print $dots ?>/images/1-button-logo.png"/></div>
					<div class="article-content">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sollicitudin tellus, vel pulvinar ex. Nunc eleifend justo nec massa vehicula, quis suscipit velit facilisis. Aenean euismod, lectus sed ullamcorper feugiat, tellus elit euismod ante, viverra hendrerit erat nibh non leo. Nunc iaculis odio ac ante placerat fermentum. Aenean nec elementum arcu. Maecenas a ante imperdiet, blandit magna id, tincidunt urna. Proin blandit quam libero, eget placerat ipsum maximus a. Nulla efficitur nisi ligula, sed luctus lacus porta vel. Curabitur justo magna, accumsan eget libero ac, cursus lacinia ipsum.</p>

						<p>Phasellus vitae nunc diam. Morbi id laoreet lectus. Donec porta mollis dolor, vel sodales mi convallis sed. Donec laoreet rutrum libero, eget consequat turpis consectetur a. Vestibulum at arcu eget justo varius convallis id in dolor. Nulla facilisis tempor fringilla. Ut ultrices vel sem eu dictum. Etiam arcu ante, consectetur vel cursus eu, sagittis a turpis.</p>

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sollicitudin tellus, vel pulvinar ex. Nunc eleifend justo nec massa vehicula, quis suscipit velit facilisis. Aenean euismod, lectus sed ullamcorper feugiat, tellus elit euismod ante, viverra hendrerit erat nibh non leo. Nunc iaculis odio ac ante placerat fermentum. Aenean nec elementum arcu. Maecenas a ante imperdiet, blandit magna id, tincidunt urna. Proin blandit quam libero, eget placerat ipsum maximus a. Nulla efficitur nisi ligula, sed luctus lacus porta vel. Curabitur justo magna, accumsan eget libero ac, cursus lacinia ipsum.</p>

						<p>Phasellus vitae nunc diam. Morbi id laoreet lectus. Donec porta mollis dolor, vel sodales mi convallis sed. Donec laoreet rutrum libero, eget consequat turpis consectetur a. Vestibulum at arcu eget justo varius convallis id in dolor. Nulla facilisis tempor fringilla. Ut ultrices vel sem eu dictum. Etiam arcu ante, consectetur vel cursus eu, sagittis a turpis.</p>

					</div>
				</article>
				<?php include $dots . '/php/article.php'; ?>
				<?php include $dots . '/php/article.php'; ?>

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