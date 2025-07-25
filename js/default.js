$(function() {

	var menu_active = 1;	
	
	//
	const TYPEWRITER_SPEED = 30; // milliseconds between letters (lower = faster)
        const START_DELAY = 1500; // milliseconds to wait before starting animation
        const TEXT_TO_ANIMATE = "Book a duct cleaning today!"; // Change this text
				//tag_line
	let currentAnimation = null;	
	
	// 	===========================================	
	//	MAIN FUNCTIONS
	// 	===========================================		

	function init() {

		console.log( 'init() ' + JS.ver + ' / ' + jQuery.fn.jquery + ' qs = ' + JS.qs );

		startTypewriter();
		subtleShake(document.querySelector('span.fa-envelope', 8));
		
		return;
	}

	// 	===========================================	
	//	TYPE WRITER EFFECT
	// 	===========================================	

			function startTypewriter(text = TEXT_TO_ANIMATE) {
				
				if(window.tag_line != '' ) text = window.tag_line;
            resetAnimation();
            
            const container = document.getElementById('typewriter_text');
            
            // Create letter elements
            const letters = [];
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const span = document.createElement('span');
                
                if (char === ' ') {
                    span.className = 'space';
                    span.innerHTML = '&nbsp;';
                } else {
                    span.className = 'letter';
                    span.textContent = char;
                }
                
                letters.push(span);
                container.appendChild(span);
            }
            
            // Animate letters one by one
            let currentIndex = 0;
            
            function animateNextLetter() {
                if (currentIndex < letters.length) {
                    const letter = letters[currentIndex];
                    if (letter.className === 'letter') {
                        letter.classList.add('visible');
                    }
                    currentIndex++;
                    
                    currentAnimation = setTimeout(animateNextLetter, TYPEWRITER_SPEED);
                }
            }
            
            // Start animation with delay
            currentAnimation = setTimeout(animateNextLetter, START_DELAY);
        }
        
        function resetAnimation() {
            if (currentAnimation) {
                clearTimeout(currentAnimation);
                currentAnimation = null;
            }
            document.getElementById('typewriter_text').innerHTML = '';
        }
        
        // Auto-start on page load
        window.addEventListener('load', function() {
            startTypewriter();
        });
				
	// 	===========================================	
	//	SHAKE EFFECT
	// 	===========================================					
				
			function subtleShake(element, intensity = 8) {
    // Ensure element can be transformed
    if (getComputedStyle(element).display === 'inline') {
        element.style.display = 'inline-block';
    }
    
    // Set transform origin to center for better rotation axis
    const originalTransformOrigin = element.style.transformOrigin;
    element.style.transformOrigin = 'center center';
    
    // Store original transform to restore later
    const originalTransform = element.style.transform || '';
    
    // Function to create a single shake cycle
    function createShakeCycle() {
        const keyframes = [
            { transform: `${originalTransform} rotate(0deg)`, offset: 0 },
            // First twinkle
            { transform: `${originalTransform} rotate(${intensity}deg)`, offset: 0.1 },
            { transform: `${originalTransform} rotate(-${intensity}deg)`, offset: 0.2 },
            { transform: `${originalTransform} rotate(0deg)`, offset: 0.25 },
            // Second twinkle
            { transform: `${originalTransform} rotate(${intensity}deg)`, offset: 0.35 },
            { transform: `${originalTransform} rotate(-${intensity}deg)`, offset: 0.45 },
            { transform: `${originalTransform} rotate(0deg)`, offset: 0.5 },
            // Third twinkle
            { transform: `${originalTransform} rotate(${intensity}deg)`, offset: 0.6 },
            { transform: `${originalTransform} rotate(-${intensity}deg)`, offset: 0.7 },
            { transform: `${originalTransform} rotate(0deg)`, offset: 1 }
        ];
        
        return element.animate(keyframes, {
            duration: 650,
            easing: 'ease-in-out',
            fill: 'forwards'
        });
    }
    
    // Start the sequence after initial delay
    setTimeout(() => {
        try {
            // First shake cycle
            const firstShake = createShakeCycle();
            
            // Second shake cycle after 4 second gap
            firstShake.addEventListener('finish', () => {
                setTimeout(() => {
                    const secondShake = createShakeCycle();
                    
                    // Restore original transform origin when completely done
                    secondShake.addEventListener('finish', () => {
                        if (originalTransformOrigin) {
                            element.style.transformOrigin = originalTransformOrigin;
                        } else {
                            element.style.transformOrigin = '';
                        }
                    });
                }, 3000); // 4 second gap between cycles
            });
            
        } catch (error) {
            console.error('Animation failed:', error);
        }
    }, 2800); // Initial delay
    
    // Return a promise that resolves when completely finished
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1800 + 650 + 4000 + 650); // Total time: initial delay + first shake + gap + second shake
    });
}
	
	
	// 	===========================================	
	//	EVENT HANDLERS (non-delegated)
	// 	===========================================	
	
	//	click "show me!" button to show a Panel
	//	WILLFIX: If there is a need for more than
	//		one type of button this will need refactoring...
	$( 'button.show_me' ).click(function(){
		openPanel(this);
	});


	//	GRILL LOGIC
	$( '#grill' ).click(function( event ){

		console.log('grill clicked now!');

		$('.ham_menu').toggleClass("active");
		$('.off_screen_menu').toggleClass("active");
	
		menu_active = menu_active * -1;
		if( menu_active < 0 ) {
			$( 'body' ).css( 'overflow','hidden')
		}		
		else {
			$( 'body' ).css( 'overflow','auto')
		}
	});
	
	

	$('main').scroll(function() {
		//	hack to get rid of toggling footer
		return;
		var scroll_position = $('main').scrollTop();
		
		if( scroll_position == 0 ) {
			$('footer').show();
			console.log('Event Fired with ' + scroll_position );
		}
		else {
			$('footer').hide();
		}
	});


	
	// 	===========================================	
	//	EVENT HANDLERS (delegated)
	// 	===========================================	

	
	// 	===========================================	
	//	INIT
	// 	===========================================		

	init();

    $(function() {
    let lastScrollY = 0;
    const header = $('.header-sliver');

    $(window).on('scroll', function() {
        const currentScrollY = $(window).scrollTop();
        
        if (currentScrollY > lastScrollY && currentScrollY > 47) {
        // Scrolling down - hide
        header.addClass('hidden');
        } else {
        // Scrolling up - show
        header.removeClass('hidden');
        }
        
        lastScrollY = currentScrollY;
    });
    });

	
});