var IE = document.all?true:false


            if (!IE) document.captureEvents(Event.MOUSEMOVE)

            document.onmousemove = getMouseXY;

            var tempX = 0
            var tempY = 0

            function getMouseXY(e) {
                if (IE) { 

                tempX = event.clientX + document.body.scrollLeft
                tempY = event.clientY + document.body.scrollTop
                } 
                else 
                {  
                 tempX = e.pageX
                 tempY = e.pageY
                }  
                document.Show.MouseX.value = tempX
                document.Show.MouseY.value = tempY

                return true
                }
				
			$(document).ready(function() {
			
				// A chaque pression sur shift, le nombre de ligne augmente
				var nblines = 1;
				
				$(document).keydown(function (e) {
					if (e.keyCode == 16) {
						nblines++;
					}
					else if (e.keyCode == 13){
						nblines = 1;
					}
				});
				
				// A chaque mouvement de souris:
				$('.test').bind("mousemove", function(){
					
					var MonTableau = new Array();
					
					//Vide tableau
					$('.myTable tbody').remove();
					
					// Remplis le tableau avec les noms
					for(var i = 0; i < nblines; i++){
						var genre = chance.gender();
						var first = chance.first({ gender: genre });
						var last = chance.last();
						
						if(genre === "Female"){
							$('.myTable').append("<tr><td bgcolor=\"#FF66FF\">" + "Hello " + first + " " + last  +"</td></tr>");
						}
						else{
							$('.myTable').append("<tr><td bgcolor=\"#99CCFF\">" + "Hello " + first + " " + last  +"</td></tr>");
						}
					}
			})    
			
			// Horloge 
			
			function clock(){
				$('.clock').text(Date());
			}
			
			setInterval(clock, 1000);
			
			// Liste de salle (JSON)
			
			$.getJSON( "./lab1.json", function( data ) {
			  var items = "";
			  $.each( data, function( key, val ) {
				items += key + "/" + val + "<br/>";
			  });
			 
			 $('#rooms').html(items);
			});
			
			// Bouton free love
			$( "#target" ).click(function() {
				alert( "Love" );
			});
			
			
			// Bouton toggle
			
			
			$( "#toggle" ).click(function() {
				$( "#personnes" ).toggle();
			});
			
		})