<?php

	$ver = '0.1.A.01';
	
	//	grab querystring
	//	if it is a valid number, append to the
	//	CSS (if not, ignore)
	$qs = $_SERVER['QUERY_STRING'];
	if (!ctype_digit($qs)) {
    	$qs='';
	}

?>