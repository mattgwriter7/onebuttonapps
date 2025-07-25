<?php

	


?><script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
<script>
//	make a JavaScript object called JS
//	( which gets used by default.js ), plus
//	indicate 'site_key' ( writer, developer, remoter )	
let JS = {};
		JS.ver = '<?php print $ver; ?>';
		JS.qs = '<?php print $qs; ?>';
		
</script>	
<script src="../js/default.js?ver=<?php print $ver; ?>"></script>	