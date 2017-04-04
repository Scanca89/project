var audioElm1;
var wavesurfer_tr1
var audioElm2;
var wavesurfer_tr2
var audioURL;
var audio_focus = 0;
var init1=0;
var init2=0;
var dag_tr1=10;
var dag_tr2=10;
var stop1=false;
var stop2=false;
var playListURL=[];
		
function setTagsScheda(name,tags){
	var scheda_id = "#scheda_" + name;				
	if(tags != null)
		$(scheda_id).text(tags);
	else
		$(scheda_id).text("");
}

$(document).ready( function() {
	
	$("#i-pause1").hide();
	$("#i-pause2").hide();
						
	wavesurfer_tr1 = WaveSurfer.create({
		container: '#waveform_traccia1',
		waveColor: '#d60000',
		progressColor: 'darkred',
		height: '40',
	});
	
	wavesurfer_tr2 = WaveSurfer.create({
		container: '#waveform_traccia2',
		waveColor: '#20d320',
		progressColor: 'darkgreen',
		height: '40'
	});
  	
  	$( function() {
    	$( "#H_eq_tr1" ).slider({
    		animate: true,
    		orientation: "vertical",
		    min: 0,
		    max: 100,
		    value: 50,
		    slide: function( event, ui ) {
		    	eq_custom_tr1[0] = ui.value;
		    }
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "17"
  	    });
  	});
  	$( function() {
    	$( "#HM_eq_tr1" ).slider({
    		animate: true,
    		orientation: "vertical",
		    min: 0,
		    max: 100,
		    value: 50,
		    slide: function( event, ui ) {
		    	eq_custom_tr1[1] = ui.value;
		    }
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "17"
  	    });
  	});
  	$( function() {
    	$( "#M_eq_tr1" ).slider({
    		animate: true,
    		orientation: "vertical",
		    min: 0,
		    max: 100,
		    value: 50,
		    slide: function( event, ui ) {
		    	eq_custom_tr1[2] = ui.value;
		    }
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "17"
  	    });
  	});
  	$( function() {
    	$( "#LM_eq_tr1" ).slider({
    		animate: true,
    		orientation: "vertical",
		    min: 0,
		    max: 100,
		    value: 50,
		    slide: function( event, ui ) {
		    	eq_custom_tr1[3] = ui.value;
		    }
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "17"
  	    });
  	});
  	$( function() {
    	$( "#L_eq_tr1" ).slider({
    		animate: true,
    		orientation: "vertical",
		    min: 0,
		    max: 100,
		    value: 50,
		    slide: function( event, ui ) {
		    	eq_custom_tr1[4] = ui.value;
		    }
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "17"
  	    });
  	});
  	$( function() {
    	$( "#H_eq_tr2" ).slider({
    		animate: true,
    		orientation: "vertical",
		    min: 0,
		    max: 100,
		    value: 50,
		    slide: function( event, ui ) {
		    	eq_custom_tr2[0] = ui.value;
		    }
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "17"
  	    });
  	});
  	$( function() {
    	$( "#HM_eq_tr2" ).slider({
    		animate: true,
    		orientation: "vertical",
		    min: 0,
		    max: 100,
		    value: 50,
		    slide: function( event, ui ) {
		    	eq_custom_tr2[1] = ui.value;
		    }
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "17"
  	    });
  	});
  	$( function() {
    	$( "#M_eq_tr2" ).slider({
    		animate: true,
    		orientation: "vertical",
		    min: 0,
		    max: 100,
		    value: 50,
		    slide: function( event, ui ) {
		    	eq_custom_tr2[2] = ui.value;
		    }
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "17"
  	    });
  	});
  	$( function() {
    	$( "#LM_eq_tr2" ).slider({
    		animate: true,
    		orientation: "vertical",
		    min: 0,
		    max: 100,
		    value: 50,
		    slide: function( event, ui ) {
		    	eq_custom_tr2[3] = ui.value;
		    }
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "17"
  	    });
  	});
  	$( function() {
    	$( "#L_eq_tr2" ).slider({
    		animate: true,
    		orientation: "vertical",
		    min: 0,
		    max: 100,
		    value: 50,
		    slide: function( event, ui ) {
		    	eq_custom_tr2[4] = ui.value;
		    }
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "17"
  	    });
  	});
	
	//GAIN pot track 1,2		    
    $(function() {
	    $('#ctrl_tr1').fancyknob();
	    $('#ctrl_tr2').fancyknob();
    });
    //Spinner ECHO track 1
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
   //Spinner ECHO track 2
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
				
  $( function() {
    	$( "#slider_automix" ).slider({
    		animate:true,
    		min: 0,
    		max: 100,
    		value: 50,
    		slide: function (event, ui){
    			if(ui.value < 50){
    				audio_focus = 1;
    				wavesurfer_tr2.setVolume(ui.value/100);
    			}else{
    				audio_focus = 2;
    				wavesurfer_tr1.setVolume((100 - ui.value)/100);
    			}
    		}
    	}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "10"
  	    });
  	});
  
  	$('#slider-vertical_volume1').slider({
  			animate: true,
  			orientation: "vertical",
  			range: "min",
  			min: 0,
  			max: 100,
  			value: 100,
  			slide: function( event, ui ) {
  				if(audio_focus == 1)
  					wavesurfer_tr1.setVolume(ui.value/100);
  			}
  		}).slider("pips", {
  			 first: false,
  			 last: false,
  			 step: "10"
  	    });
  	$('#slider-vertical_volume1').on("slidechange", function( event, ui ) {
  		if(audio_focus == 1)
				wavesurfer_tr1.setVolume(ui.value/100);
  	});
  
	$( "#slider-vertical_volume2" ).slider({
			animate: true,
			orientation: "vertical",
			range: "min",
			min: 0,
  			max: 100,
  			value: 100,
  			slide: function( event, ui ) {
  				if(audio_focus == 2)
  					wavesurfer_tr2.setVolume(ui.value/100);
  			}
  		}).slider("pips", {
  			first: false,
 			last: false,
 			step: "10"
  		});
	$('#slider-vertical_volume2').on("slidechange", function( event, ui ) {
  		if(audio_focus == 2)
				wavesurfer_tr2.setVolume(ui.value/100);
  	});
	  	
  	$( "#slider-vertical_velocita1" ).slider({
  			animate: true,
  			orientation: "vertical",
		    min: -50,
		    max: 50,
		    value: 0,
		    slide: function( event, ui ) {
		    	if(ui.value >=0){
		    	  	wavesurfer_tr1.setPlaybackRate((ui.value/100)+1);
		      }else{
	    		wavesurfer_tr1.setPlaybackRate(Math.abs(ui.value/100));
	    		//dag_tr1=Math.abs(ui.value/100);
		      }
	      }
  		}).slider("pips", {
  			 rest: "label",
  			 step: "10"
  		});	
  	$("#slider-vertical_velocita1").on("slidechange", function( event, ui ) {
  		if(ui.value >=0)
    	  	wavesurfer_tr1.setPlaybackRate((ui.value/100)+1);
    	  else
    		wavesurfer_tr1.setPlaybackRate(Math.abs(ui.value/100));
  	});
			  	
  	$( "#slider-vertical_velocita2" ).slider({
	      animate: true,
	      orientation: "vertical",
	      min: -50,
	      max: 50,
	      value: 0,
	      slide: function( event, ui ) {
	    	  if(ui.value >= 0){
		    	  wavesurfer_tr2.setPlaybackRate((ui.value/100)+1);
	    	  }else{
	    		  wavesurfer_tr2.setPlaybackRate(Math.abs(ui.value/100));
	    	  }
	      }
	  	}).slider("pips", {
  			 rest: "label",
  			 step: "10"
  		});
  	$("#slider-vertical_velocita2").on("slidechange", function( event, ui ) {
  		if(ui.value >=0)
    	  	wavesurfer_tr2.setPlaybackRate((ui.value/100)+1);
    	  else
    		wavesurfer_tr2.setPlaybackRate(Math.abs(ui.value/100));
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
  	
  	function set_eq(audio){					
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
	        		    helper: "clone",
	        			helper: function(event){
	        				return $("<div></div>").append($( '<div><img src="assets/images/disco.png" width="50"</div>' ));
	        			},
	        			scroll: false,
	        			cursor: 'move',
	        			cursorAt: { left: 35, top: 25 },
	        			zIndex: 10,
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
				        		src = 'covers/' + autore + '_' + album + '.png';
	        				});
		        		}
	        		});
	        		$('#playlist').droppable({
        		      	classes: {
        		          "ui-droppable-active": "ui-state-highlight"
        		        },
	        			drop: function(event,ui) {
							$(this).addClass('ui-state-highlight');
							playListURL=playListURL.concat([audioURL]);
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
							var c = {};
							$('#tabPlayList tbody tr').draggable({
								helper: function(event){
			        				return $("<div></div>").append($( '<div><img src="assets/images/disco.png" width="50"</div>' ));
			        			},
			        			cursor: 'move',
			        			cursorAt: { left: 35, top: 25 },
						        start: function(event, ui){
						        	titolo=this.childNodes[0].textContent;
						        	autore=this.childNodes[1].textContent;
						        	album=this.childNodes[2].textContent;
						        	track=this.childNodes[3].textContent;
						        	genere=this.childNodes[4].textContent;
						        	src = 'covers/' + autore + '_' + album + '.png';
						        	audioURL=playListURL[(event.currentTarget.rowIndex)-1];
						        }
							});
			           	}
	        		});
	        		$('#piastra1').droppable({
	        		    drop: function(event,ui) {
	        		    	stop_track1();
	        		    	var url =src.split(' ').join("_");
	        		    	var urlString = "url(./" + url + ")";
	        		    	document.getElementById("piastra1").style.backgroundImage = urlString;
	        		    	audioElm1 = document.getElementById("audio1");
	        		    	curruent_audioURL = audioURL;
	        		    	audioElm1.src = curruent_audioURL.replace('./jsdj/','./');
	        		    	wavesurfer_tr1.load(audioElm1.src);
	        		    	var duration;
	        		    	wavesurfer_tr1.on('loading', showProgress_1);
	    					wavesurfer_tr1.on('ready', function(){
	    						init1=1;
	    						hideProgress_1();
	    						duration=wavesurfer_tr1.getDuration();
	    						durationupdate(wavesurfer_tr1,'min-tot-tr1', duration);
	    						set_eq(audioElm1);
	    					});
	    					wavesurfer_tr1.on('audioprocess', function(){
	    						seektimeupdate(wavesurfer_tr1,'min-rim-tr1', duration);
	    					});
	    					wavesurfer_tr1.on('finish', function(){
	    						for(i=0; i<100; i++){
    								$('#slider_automix').slider({value:i});
    								audio_focus = 2;
    								wavesurfer_tr2.setVolume(1);
    								wavesurfer_tr1.setVolume(0);
    								wavesurfer_tr2.play();
	    						}	    						
	    					});
	        		    	$('#titolo_dettaglio1').text(titolo);
	        		    	$('#autore_dettaglio1').text(autore);
	                     }
	        		})
	        		$('#piastra2').droppable({
	        		    drop: function(event,ui) {
	        		    	stop_track2();
	        		    	var url =src.split(' ').join("_");				        		    	
	        		    	var urlString = "url(./" + url + ")";
	        		    	document.getElementById("piastra2").style.backgroundImage = urlString;
	        		    	audioElm2 = document.getElementById("audio2");
	        		    	curruent_audioURL = audioURL;
	        		    	audioElm2.src = curruent_audioURL.replace('./jsdj/','./');
	        		    	wavesurfer_tr2.load(audioElm2.src);
	        		    	var duration;
	        		    	wavesurfer_tr2.on('loading', showProgress_2);
	        		    	wavesurfer_tr2.on('ready', function(){
	        		    		init2=1;
	        		    		hideProgress_2();
	        		    		duration=wavesurfer_tr2.getDuration();
	        		    		durationupdate(wavesurfer_tr2,'min-tot-tr2', duration);
	    					});
	    					wavesurfer_tr2.on('audioprocess', function(){
	    						seektimeupdate(wavesurfer_tr2,'min-rim-tr2',duration);
	    					});
	    					wavesurfer_tr2.on('finish', function(){
	    						for(i=100; i>0; i--){
	    							$('#slider_automix').slider({value:i});
	    							audio_focus = 1;
	    							wavesurfer_tr1.setVolume(1);
	    							wavesurfer_tr2.setVolume(0);
	    							wavesurfer_tr1.play();
	    						}
	    					});
	        		    	$('#titolo_dettaglio2').text(titolo);
	        		    	$('#autore_dettaglio2').text(autore);

	        		    }
	        		})
				});	
        	})
        });
	};
	function showProgress_1(percent) {
		var progressDiv = document.querySelector('#progress-bar1');
		var progressBar = progressDiv.querySelector('.progress-bar');
        progressDiv.style.display = 'block';
        progressBar.style.width = percent + '%';
    };
   function hideProgress_1() {
	   	var progressDiv = document.querySelector('#progress-bar1');
	   	var progressBar = progressDiv.querySelector('.progress-bar');
	   	progressDiv.style.display = 'none';
    };
    function showProgress_2(percent) {
		var progressDiv = document.querySelector('#progress-bar2');
		var progressBar = progressDiv.querySelector('.progress-bar');
        progressDiv.style.display = 'block';
        progressBar.style.width = percent + '%';
    };
   function hideProgress_2() {
	   	var progressDiv = document.querySelector('#progress-bar2');
	   	var progressBar = progressDiv.querySelector('.progress-bar');
	   	progressDiv.style.display = 'none';
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

var eq_custom_tr1 = [50,50,50,50,50];
var eq_custom_tr2 = [50,50,50,50,50];

function button_eq(name){
	switch (name){
		case 'button_rock_tr1':
			$('#H_eq_tr1').slider({value: 70}); 
			$('#HM_eq_tr1').slider({value: 40});
			$('#M_eq_tr1').slider({value: 30});
			$('#LM_eq_tr1').slider({value: 50});
			$('#L_eq_tr1').slider({value: 80});
			break;
		case 'button_classica_tr1':
			$('#H_eq_tr1').slider({value: 50}); 
			$('#HM_eq_tr1').slider({value: 50});
			$('#M_eq_tr1').slider({value: 50});
			$('#LM_eq_tr1').slider({value: 30});
			$('#L_eq_tr1').slider({value: 20});
			break;
		case 'button_dance_tr1':
			$('#H_eq_tr1').slider({value: 70}); 
			$('#HM_eq_tr1').slider({value: 50});
			$('#M_eq_tr1').slider({value: 50});
			$('#LM_eq_tr1').slider({value: 30});
			$('#L_eq_tr1').slider({value: 50});
			break;
		case 'button_techno_tr1':
			$('#H_eq_tr1').slider({value: 60}); 
			$('#HM_eq_tr1').slider({value: 50});
			$('#M_eq_tr1').slider({value: 40});
			$('#LM_eq_tr1').slider({value: 50});
			$('#L_eq_tr1').slider({value: 70}); 
			break;
		case 'button_pop_tr1':
			$('#H_eq_tr1').slider({value: 50}); 
			$('#HM_eq_tr1').slider({value: 70});
			$('#M_eq_tr1').slider({value: 50});
			$('#LM_eq_tr1').slider({value: 50});
			$('#L_eq_tr1').slider({value: 50});
			break;
		case 'button_custom_tr1':
			$('#H_eq_tr1').slider({value: eq_custom_tr1[0]}); 
			$('#HM_eq_tr1').slider({value: eq_custom_tr1[1]});
			$('#M_eq_tr1').slider({value: eq_custom_tr1[2]});
			$('#LM_eq_tr1').slider({value: eq_custom_tr1[3]});
			$('#L_eq_tr1').slider({value: eq_custom_tr1[4]});
			break;
		case 'button_rock_tr2':
			$('#H_eq_tr2').slider({value: 70}); 
			$('#HM_eq_tr2').slider({value: 40});
			$('#M_eq_tr2').slider({value: 30});
			$('#LM_eq_tr2').slider({value: 50});
			$('#L_eq_tr2').slider({value: 80});
			break;
		case 'button_classica_tr2':
			$('#H_eq_tr2').slider({value: 50}); 
			$('#HM_eq_tr2').slider({value: 50});
			$('#M_eq_tr2').slider({value: 50});
			$('#LM_eq_tr2').slider({value: 30});
			$('#L_eq_tr2').slider({value: 20});
			break;
		case 'button_dance_tr2':
			$('#H_eq_tr2').slider({value: 70}); 
			$('#HM_eq_tr2').slider({value: 50});
			$('#M_eq_tr2').slider({value: 50});
			$('#LM_eq_tr2').slider({value: 30});
			$('#L_eq_tr2').slider({value: 50});
			break;
		case 'button_techno_tr2':
			$('#H_eq_tr2').slider({value: 60}); 
			$('#HM_eq_tr2').slider({value: 50});
			$('#M_eq_tr2').slider({value: 40});
			$('#LM_eq_tr2').slider({value: 50});
			$('#L_eq_tr2').slider({value: 70}); 
			break;
		case 'button_pop_tr2':
			$('#H_eq_tr2').slider({value: 50}); 
			$('#HM_eq_tr2').slider({value: 70});
			$('#M_eq_tr2').slider({value: 50});
			$('#LM_eq_tr2').slider({value: 50});
			$('#L_eq_tr2').slider({value: 50});
			break;
		case 'button_custom_tr2':
			$('#H_eq_tr2').slider({value: eq_custom_tr2[0]}); 
			$('#HM_eq_tr2').slider({value: eq_custom_tr2[1]});
			$('#M_eq_tr2').slider({value: eq_custom_tr2[2]});
			$('#LM_eq_tr2').slider({value: eq_custom_tr2[3]});
			$('#L_eq_tr2').slider({value: eq_custom_tr2[4]});
			break;
	}	
}

//CUE button track 1
var cue_click1=1;
var cue_point1;
function cue_track1(){
	if(cue_click1 == 1){
		cue_point1 = wavesurfer_tr1.getCurrentTime();
		cue_click1=2;
	}else{
		wavesurfer_tr1.play(cue_point1);
		cue_click1=1;
	}
}
//CUE button track 2
var cue_click2=1;
var cue_point2;
function cue_track2(){
	if(cue_click2 == 1){
		cue_point2 = wavesurfer_tr2.getCurrentTime();
		cue_click2=2;
	}else{
		wavesurfer_tr2.play(cue_point2);
		cue_click2=1;
	}
}

var deg1 = 0;
function rotate_my_big_ass_gear1() {
    $('#piastra1').css({
        'transform': 'rotate(' + (deg1+=dag_tr1) + 'deg)',
    });
}
function stop_rotazione(timer){
	clearInterval(timer);
}

var t1;
//PLAYPAUSE button track 1
function playPause_track1(){
	if(init1==1){
		if(audio_focus == 0){
			audio_focus = 1;
			$("#i-play1").hide();
			$("#i-pause1").show();
			wavesurfer_tr1.playPause();
			t1 = window.setInterval(rotate_my_big_ass_gear1, 30);
		}else{
			if(wavesurfer_tr1.isPlaying()){
				$("#i-play1").show();
				$("#i-pause1").hide();
				clearInterval(t1);
				wavesurfer_tr1.playPause();
			}else{
				$("#i-play1").hide();
				$("#i-pause1").show();
				wavesurfer_tr1.playPause();
				t1 = window.setInterval(rotate_my_big_ass_gear1, 30);
			}
		}
	}
}
//STOP button track 1
function stop_track1(){
	$("#i-pause1").hide();
	$("#i-play1").show();
	clearInterval(t1);
	wavesurfer_tr1.stop();
}

var deg2 = 0;
function rotate_my_big_ass_gear2() {
    $('#piastra2').css({
        'transform': 'rotate(' + (deg2+=dag_tr2) + 'deg)',
    });
}
var t2;
//PLAYPAUSE button track 2
function playPause_track2(){
	if(init2==1){
		if(audio_focus == 0){
			audio_focus = 2;
			$("#i-play2").hide();
			$("#i-pause2").show();
			wavesurfer_tr2.playPause();
			t2 = window.setInterval(rotate_my_big_ass_gear2, 30);
		}else{
			if(wavesurfer_tr2.isPlaying()){
				$("#i-play2").show();
				$("#i-pause2").hide();
				clearInterval(t2);
				t2=wavesurfer_tr2.playPause();
			}else{
				$("#i-play2").hide();
				$("#i-pause2").show();
				wavesurfer_tr2.playPause();
				t2 = window.setInterval(rotate_my_big_ass_gear2, 30);
			}
		}
	}
}
//STOP button track 2
function stop_track2(){
	$("#i-pause2").hide();
	$("#i-play2").show();
	clearInterval(t2);
	wavesurfer_tr2.stop();
}
//SYNC button track 1
function sync_track1(){
	if(wavesurfer_tr2.isPlaying()){
		var rate = $("#slider-vertical_velocita2").slider("value");	
		$("#slider-vertical_velocita1").slider({value:rate});
	}
}
//SYNC button track 2
function sync_track2(){
	if(wavesurfer_tr1.isPlaying()){
		var rate = $("#slider-vertical_velocita1").slider("value");	
		$("#slider-vertical_velocita2").slider({value:rate});
	}
}

//ECHO track1
var press_in1=0;
var press_out1=0;
var curr_in1;
function button_in1(){
	if(press_in1==0){
		press_in1=1;
		curr_in1=wavesurfer_tr2.getCurrentTime();
	}
}
function button_out1(){
	if(press_in1==1){
		press_out1=1;
		press_in1=0;
		curr_out1=(wavesurfer_tr2.getCurrentTime())-curr_in1;
		var i=2;
		wavesurfer_tr2.skipBackward(curr_out1);		
	}
}

//ECHO track2
var press_in2=0;
var press_out2=0;
var curr_in2;
function button_in2(){
	if(press_in2==0){
		press_in2=1;
		curr_in2=wavesurfer_tr2.getCurrentTime();
	}
}
function button_out2(){
	if(press_in==1){
		press_out2=1;
		press_in2=0;
		curr_out2=(wavesurfer_tr2.getCurrentTime())-curr_in2;
		var i=2;
		wavesurfer_tr2.skipBackward(curr_out2);		
	}
}

