			var audioElm1;
			var wavesurfer_tr1
			var audioElm2;
			var wavesurfer_tr2
			var audioURL;
			
			function setTagsScheda(name,tags){
				var scheda_id = "#scheda_" + name;				
				if(tags != null)
        			$(scheda_id).text(tags);
        		else
        			$(scheda_id).text("");
			}
			
			$(document).ready( function() {
								
				wavesurfer_tr1 = WaveSurfer.create({
					container: '#waveform_traccia1',
					waveColor: '#d60000',
					progressColor: 'darkred',
					height: '40',
				});
				
				wavesurfer_tr2 = WaveSurfer.create({
					container: '#waveform_traccia2',
					waveColor: '#1048c8',
					progressColor: 'darkblue',
					height: '40'
				});			  	
			
			  	$( function() {
			    	$( "#slider_automix" ).slider({
			    		min: 0,
			    		max: 100,
			    		value: 50,
			    		slide: function (event, ui){
			    			if(ui.value < 50){
			    				wavesurfer_tr2.setVolume(ui.value/100);
			    			}else{
			    				wavesurfer_tr1.setVolume((ui.value-100)/100);
			    			}
			    		}
			    	});
			  	} );
			  
			  	$('#slider-vertical_volume1').slider({
			  			orientation: "vertical",
			  			min: 0,
			  			max: 100,
			  			value: 100,
			  			slide: function( event, ui ) {
			  				wavesurfer_tr1.setVolume(ui.value/100);
			  			}
			  		}).slider("pips", {
			  			 first: "pip",
			  			 last: "pip",
			  			 step: "10"
			  	    });
			  
		  		$( "#slider-vertical_volume2" ).slider({
			  			orientation: "vertical",
			  			min: 0,
			  			max: 100,
			  			value: 100,
			  			slide: function( event, ui ) {
			  				wavesurfer_tr2.setVolume(ui.value/100);
			  			}
			  		}).slider("pips", {
			  			 rest: "label",
			  			 step: "10"
			  		});
			  	
			  	
			  	$( "#slider-vertical_velocita1" ).slider({
				      orientation: "vertical",
				      min: 0,
				      max: 100,
				      value: 50,
				      slide: function( event, ui ) {
				    	  if(ui.value > 50)
				    	  	wavesurfer_tr1.setPlaybackRate((ui.value/100)*2);
				    	  else
				    		wavesurfer_tr1.setPlaybackRate(ui.value/100);
				      }
			  		}).slider("pips", {
			  			 rest: "label",
			  			 step: "10"
			  		});	
						  	
			  	$( "#slider-vertical_velocita2" ).slider({
				      orientation: "vertical",
				      min: 0,
				      max: 100,
				      value: 50,
				      slide: function( event, ui ) {
				    	  if(ui.value > 50)
					    	  	wavesurfer_tr2.setPlaybackRate((ui.value/100)*2);
					    	  else
					    		wavesurfer_tr2.setPlaybackRate(ui.value/100);
				      }
				  	}).slider("pips", {
			  			 rest: "label",
			  			 step: "10"
			  		});
			  	
			  	$( function() {
			    	$( "#H_eq_tr1" ).slider({
			    		orientation: "vertical",
					    min: 0,
					    max: 100,
					    value: 50,
					    slide: function( event, ui ) {
					    }
			    	});
			  	});
			  	$( function() {
			    	$( "#HM_eq_tr1" ).slider({
			    		orientation: "vertical",
					    min: 0,
					    max: 100,
					    value: 50,
					    slide: function( event, ui ) {
					    }
			    	});
			  	});
			  	$( function() {
			    	$( "#M_eq_tr1" ).slider({
			    		orientation: "vertical",
					    min: 0,
					    max: 100,
					    value: 50,
					    slide: function( event, ui ) {
					    }
			    	});
			  	});
			  	$( function() {
			    	$( "#LM_eq_tr1" ).slider({
			    		orientation: "vertical",
					    min: 0,
					    max: 100,
					    value: 50,
					    slide: function( event, ui ) {
					    }
			    	});
			  	});
			  	$( function() {
			    	$( "#L_eq_tr1" ).slider({
			    		orientation: "vertical",
					    min: 0,
					    max: 100,
					    value: 50,
					    slide: function( event, ui ) {
					    }
			    	});
			  	});
			  	$( function() {
			    	$( "#H_eq_tr2" ).slider({
			    		orientation: "vertical",
					    min: 0,
					    max: 100,
					    value: 50,
					    slide: function( event, ui ) {
					    }
			    	});
			  	});
			  	$( function() {
			    	$( "#HM_eq_tr2" ).slider({
			    		orientation: "vertical",
					    min: 0,
					    max: 100,
					    value: 50,
					    slide: function( event, ui ) {
					    }
			    	});
			  	});
			  	$( function() {
			    	$( "#M_eq_tr2" ).slider({
			    		orientation: "vertical",
					    min: 0,
					    max: 100,
					    value: 50,
					    slide: function( event, ui ) {
					    }
			    	});
			  	});
			  	$( function() {
			    	$( "#LM_eq_tr2" ).slider({
			    		orientation: "vertical",
					    min: 0,
					    max: 100,
					    value: 50,
					    slide: function( event, ui ) {
					    }
			    	});
			  	});
			  	$( function() {
			    	$( "#L_eq_tr2" ).slider({
			    		orientation: "vertical",
					    min: 0,
					    max: 100,
					    value: 50,
					    slide: function( event, ui ) {
					    }
			    	});
			  	});
			  	
			  	function seektimeupdate(wavesurfer,id_elem_rim, durata){ 
			  		var currentTime = wavesurfer.getCurrentTime();
			  		var s_rim = durata-currentTime; 
					var rimtimetext = document.getElementById(id_elem_rim);
					var ri_mins = Math.floor(s_rim/ 60)%60;
					var ri_secs = Math.floor(s_rim%60);
				    if(ri_mins < 10){ ri_mins = "0"+ri_mins; }
				    if(ri_secs < 10){ ri_secs = "0"+ri_secs; }
					rimtimetext.innerHTML = ri_mins+":"+ri_secs;
			  	}
			  	
			  	function durationupdate(wavesurfer,id_elem, durata){
			  		var durtimetext = document.getElementById(id_elem);
					var durmins = Math.floor(durata / 60);
					var dursecs = Math.floor(durata - durmins * 60);
					var durmins = Math.floor(durata / 60);
					var dursecs = Math.floor(durata - durmins * 60);
					if(dursecs < 10){ dursecs = "0"+dursecs; }
					if(durmins < 10){ durmins = "0"+durmins; }
					durtimetext.innerHTML = durmins+":"+dursecs;
			  	}
			  	
				var windowFile;					
				function initFilesTree(path) {
					window.windowFile = $('#mp3Tree')
	        		.fileTree(
			        	{
			        		root:path,
			            	script: 'assets/plugins/jQueryFileTree/connectors/jqueryFileTree.php',
			            	expandSpeed: 1000,
			            	collapseSpeed: 1000,
			            	onlyFolder: false,
			            	onlyFile: true,
			            	multiFolder: false
			        	}
			        )
			        .on('initree', function(e, data) {
						$(".file a").each(function( index ) {
							if(index == 0){
								$(this).click();
								return;
							}
						});
					})
			        .on('filetreeclicked', function(e, data) {	
			        	$("#scheda").show();
			        	var dir = data.rel.replace('./jsdj/','./');
			        	id3({ file: dir, type: id3.ajax }, function(err, tags) {
			  				var titolo = tags.title;
			  				setTagsScheda('titolo',titolo);
			        		var autore = tags.artist;
			        		setTagsScheda('autore', autore);
			        		var album = tags.album;
			        		setTagsScheda('album', album);
			        		var anno = tags.year;
			        		setTagsScheda('anno', anno);
			        		var track = tags.v2.track;
			        		setTagsScheda('track', track);
			        		var genere = tags.v2.genre;
			        		setTagsScheda('genere', genere);
				        	var src = 'covers/' + autore + '_' + album + '.png';
				       		var image = document.getElementById('copertina_scheda');
				       		image.src = src;
			        		$( "li" ).each(function( index ) {
				        		$(this).draggable({
				        		    revert: "invalid", 
				        			helper: 'clone',
				        			scroll: false,
				        			cursor: 'move',
				        			zIndex: 1,
				        			start: function(event,ui){
				        				audioURL = event.target.firstChild.rel;
				        				var new_dir = event.target.firstChild.rel.replace('./jsdj/','./');
				        				id3({ file: new_dir, type: id3.ajax }, function(err, tags) {
				        					titolo = tags.title;
							        		autore = tags.artist;
							        		album = tags.album;
							        		anno = tags.year;
							        		track = tags.v2.track;
							        		genere = tags.v2.genre;				
				        				});
					        		}
				        		});
				        		$('#playlist').droppable({
			        		      	classes: {
			        		          "ui-droppable-active": "ui-state-highlight"
			        		        },
				        			drop: function(event,ui) {
										$(this).addClass('ui-state-highlight');
										var table = document.getElementById('tabPlayList');
										var tbody = table.getElementsByTagName('tbody')[0];
										var tr = document.createElement('tr');
										var tags = [titolo,autore,album,anno,genere];									
										for(var i=0; i<5; i++){
											var td = document.createElement('td');
											var node = document.createTextNode(tags[i]);
											td.appendChild(node);
											tr.appendChild(td);
										}
										tbody.appendChild(tr);									
						           	}
				        		});
				        		$('#piastra1').droppable({
				        			classes: {
				        		      	"ui-droppable-active": "ui-state-highlight"
				        		    },
				        		    drop: function(event,ui) {
				        		    	var url =src.split(' ').join("_");
				        		    	var urlString = "url(./" + url + ")";
				        		    	document.getElementById("piastra1").style.backgroundImage = urlString;
				        		    	audioElm1 = document.getElementById("audio1");
				        		    	curruent_audioURL = audioURL;
				        		    	audioElm1.src = curruent_audioURL.replace('./jsdj/','./');
				        		    	wavesurfer_tr1.load(audioElm1.src);
				        		    	var duration;
				    					wavesurfer_tr1.on('ready', function(){
				    						duration=wavesurfer_tr1.getDuration();
				    						durationupdate(wavesurfer_tr1,'min-tot-tr1', duration);
				    					});
				    					wavesurfer_tr1.on('audioprocess', function(){
				    						seektimeupdate(wavesurfer_tr1,'min-rim-tr1', duration);
				    					});
				        		    	$('#titolo_dettaglio1').text(titolo);
				        		    	$('#autore_dettaglio1').text(autore);
				                     }
				        		})
				        		$('#piastra2').droppable({
				        			classes: {
				        		      "ui-droppable-active": "ui-state-highlight"
				        		    },
				        		    drop: function(event,ui) {
				        		    	var url =src.split(' ').join("_");				        		    	
				        		    	var urlString = "url(./" + url + ")";
				        		    	console.log(urlString);
				        		    	document.getElementById("piastra2").style.backgroundImage = urlString;
				        		    	audioElm2 = document.getElementById("audio2");
				        		    	curruent_audioURL = audioURL;
				        		    	audioElm2.src = curruent_audioURL.replace('./jsdj/','./');
				        		    	wavesurfer_tr2.load(audioElm2.src);
				        		    	var duration;
				        		    	wavesurfer_tr2.on('ready', function(){
				        		    		duration=wavesurfer_tr2.getDuration();
				        		    		durationupdate(wavesurfer_tr2,'min-tot-tr2', duration);
				    					});
				    					wavesurfer_tr2.on('audioprocess', function(){
				    						seektimeupdate(wavesurfer_tr2,'min-rim-tr2',duration);
				    					});
				        		    	$('#titolo_dettaglio2').text(titolo);
				        		    	$('#autore_dettaglio2').text(autore);
			
				        		    }
				        		})
							});	
			        	})
			        });
				};
				
				$('#fileSystem')
		        .fileTree(
		        	{
		            	root: './jsdj/demo/',
		            	script: 'assets/plugins/jQueryFileTree/connectors/jqueryFileTree.php',
		            	expandSpeed: 1000,
		            	collapseSpeed: 1000,
		            	onlyFolders: true,
		            	multiFolder: false,
		        	}
		        )
		        .on('filetreeclicked', function(e, data) {
		        	$("#scheda").hide();
		        	window.windowFile = null;
		        	$('#file_mp3').html('<div id="mp3Tree"></div>');
		        	initFilesTree(data.rel);
				});			
		    });
			
			function play_track_1(){
				wavesurfer_tr1.play();
			}
			function pause_track_1(){
				wavesurfer_tr1.playPause();
			}
			function stop_track_1(){			
				wavesurfer_tr1.stop();
			}
			
			function play_track_2(){
				wavesurfer_tr2.play();
			}
			function pause_track_2(){
				wavesurfer_tr2.playPause();
			}
			function stop_track_2(){
				wavesurfer_tr2.stop();
			}
					    
		    $(function() {
			    $('#ctrl_tr1').fancyknob();
			    
			    $('#ctrl_tr2').fancyknob();
		    });
		    
		    $( function() {
		        $( "#spinner_tr1" ).spinner({
		          spin: function( event, ui ) {
		            if ( ui.value > 10 ) {
		              $( this ).spinner( "value", -10 );
		              return false;
		            } else if ( ui.value < -10 ) {
		              $( this ).spinner( "value", 10 );
		              return false;
		            }
		          }
		        });
		      } );
		    $( function() {
		        $( "#spinner_tr2" ).spinner({
		          spin: function( event, ui ) {
		            if ( ui.value > 10 ) {
		              $( this ).spinner( "value", -10 );
		              return false;
		            } else if ( ui.value < -10 ) {
		              $( this ).spinner( "value", 10 );
		              return false;
		            }
		          }
		        });
		     });