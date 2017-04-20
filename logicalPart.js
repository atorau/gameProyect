$(document).ready(function() {
//$('.uno').toggle();
$('.dos').hide();
$('.tres').hide();
//$('.row').hide();

$('.cuatro').hide();



  function PipeGame(){
    // var notes =[
    //   {note:'do',secuence:[0,1,2,3,4,5,6,]},
    //   {note:'re',secuence:[0,1,2,3,4,5]},
    //   {note:'mi',secuence:[0,1,2,3,4,6]},
    //   {note:'fa',secuence:[0,1,2,3,5,6]},
    //   {note:'sol',secuence:[0,1,2,4,5,6]},
    //   {note:'la',secuence:[0,1,4,5,6]},
    //   {note:'si',secuence:[1,4,5,6]},
    //   {note:'Do',secuence:[1,2,3,4,5,6]}
    // ];
    this.sequence = [];


  }

var notes =[
  {note:'do',sequence:[0,1,2,3,4,5,6,],sonido:"midi/Do.mp3",},
  {note:'re',sequence:[0,1,2,3,4,5],sonido:"midi/Re.mp3",},
  {note:'mi',sequence:[0,1,2,3,4,6],sonido:"midi/Mi.mp3",},
  {note:'fa',sequence:[0,1,2,3,5,6],sonido:"midi/Fa.mp3",},
  {note:'sol',sequence:[0,1,2,4,5,6],sonido:"midi/Sol.mp3",},
  {note:'la',sequence:[0,1,4,5,6],sonido:"midi/La.mp3",},
  {note:'si',sequence:[1,4,5,6],sonido:"midi/Si.mp3",},
  {note:'Do',sequence:[1,2,3,4,5,6],sonido:"midi/DO!.mp3",},
  {note:'WellDone',sequence:[],sonido:"midi/Vitores.mp3",}
];

var song=[
  {note:'do',sequence:[0,1,2,3,4,5,6,],sonido:"midi/Do.mp3",},
  {note:'mi',sequence:[0,1,2,3,4,6],sonido:"midi/Mi.mp3",},
  {note:'mi',sequence:[0,1,2,3,4,6],sonido:"midi/Mi.mp3",},
  {note:'fa',sequence:[0,1,2,3,5,6],sonido:"midi/Fa.mp3",},
  {note:'mi',sequence:[0,1,2,3,4,6],sonido:"midi/Mi.mp3",},
  {note:'fa',sequence:[0,1,2,3,5,6],sonido:"midi/Fa.mp3",},
  {note:'sol',sequence:[0,1,2,4,5,6],sonido:"midi/Sol.mp3",},
  {note:'la',sequence:[0,1,4,5,6],sonido:"midi/La.mp3",},
  {note:'sol',sequence:[0,1,2,4,5,6],sonido:"midi/Sol.mp3",},
  {note:'WellDone',sequence:[],sonido:"midi/Vitores.mp3", }
];




function changeframe(){


  $(".Inicio").click(function(){
    $('.dos').hide();
    $('.tres').hide();
    $('.cuatro').hide();
    $('.uno').show();
    $('.row').show();
  });
  $(".LasNotas").click(function(){
    $('.uno').hide();
    $('.tres').hide();
    $('.cuatro').hide();
    $('.dos').show();
    $('.row').show();

  });
  $(".Prueba").click(function(){
    $('.uno').hide();
    $('.dos').hide();
    $('.cuatro').hide();
    $('.textoHimno').hide();
    $('.row').show();
    $('.tres').show();
  });
  $(".Tema").click(function(){
    $('.uno').hide();
    $('.dos').hide();
    $('.tres').hide();
    $('.cancion').hide();
    $('.cuatro').show();
    $('.textoHimno').show();
  });
    $(".Boton-Next1").click(function(){
      // $(this).parent().toggle();
      $('.uno').hide();
      $('.dos').show();
    });

    $(".Boton-Next2").click(function(){
        // $(this).parent().toggle();
        $('.dos').hide();
        $('.tres').show();
    });
    $(".Boton-Next4").click(function(){
        $('.tres').hide();
        $('.cancion').hide();
        $('.textoHimno').show();
        $('.cuatro').show();
    });
    $("#gpluslogin").click(function(){
        $('.cancion').show();
        $('.textoHimno').hide();
    });
}

changeframe();


var index = 0;
var indexNota = 0;

var outputNote = notes[index].note;
  $('.title3').html('<h2> Toca el "'+outputNote+'"</h2>');
var actualNote = notes[index].sequence;
var actualSonido = notes[indexNota].sonido;

var sequence=[];



function chooseNote(){


  $(".1T").click(function(){
		$('.1T').css('z-index','-1');
    sequence.push(0);
	});

  $(".1D").click(function(){
		$('.1D').css('z-index','-1');
    sequence.push(1);
	});

  $(".2D").click(function(){
		$('.2D').css('z-index','-1');
    sequence.push(2);
	});

  $(".3D").click(function(){
		$('.3D').css('z-index','-1');
    sequence.push(3);
	});

  $(".4D").click(function(){
		$('.4D').css('z-index','-1');
    sequence.push(4);
	});

  $(".5D").click(function(){
		$('.5D').css('z-index','-1');
    sequence.push(5);
	});

  $(".6D").click(function(){
		$('.6D').css('z-index','-1');
    sequence.push(6);
	});

  $(".7D").click(function(){
		$('.7D').css('z-index','-1');
    sequence.push(7);
	});

}

chooseNote();

function bien(index){
  if (indexNota != -1) {
    $('#test').append('<audio autoplay src="'+ notes[indexNota].sonido + '"></audio>');

  }
  indexNota++;
  index ++;

  outputNote = notes[index].note;
  $('.title3').html('<h2> Toca el "'+outputNote+'"</h2>');
  $('.1T').css('z-index','2');
  $('.1D').css('z-index','3');
  $('.2D').css('z-index','2');
  $('.3D').css('z-index','2');
  $('.4D').css('z-index','2');
  $('.5D').css('z-index','2');
  $('.6D').css('z-index','2');
  $('.7D').css('z-index','2');
  sequence=[];
  actualNote = notes[index].sequence;
  actualSonido = notes[indexNota].sonido;
  alert('♪ ♪ ♪ Bien ♪ ♪ ♪');
  // $('#test').append('<audio autoplay src="'+ notes[index-1].sonido + '"></audio>');
  // console.log("---------");
  // console.log(notes[index].note);
  //
  // console.log(notes[index-1].sonido);
  // console.log("---------");
  //
  // console.log(index);
  $('.title3').html('<h2> Toca el "'+outputNote+'"</h2>');
  if(index === 8){
    $('.title3').html('<h2>"'+outputNote+'"</h2>');
    alert('♩♪♫♬ Bien hecho, ya sabes tocar una escala de "do" en Gaita♬♫♪♩');
    $('.icon-house3').text('Repetir');
    sequence=[];
    index = -1;
    indexNota = -1;


    $(".Boton-Next3").click(function(){

      $('.icon-house3').text('Comprobar');

      });
  }
return index;
}



function yourChoose(){
    $(".Boton-Next3").click(function(){
      sequence = sequence.sort();
      if(sequence.toString() === actualNote.toString()  ? index = bien(index) : alert('☠☠☠  Vuelve a intentarlo  ☠☠☠'));

    });


    $(".Boton-Reset").click(function(){
        $('.1T').css('z-index','2');
        $('.1D').css('z-index','3');
        $('.2D').css('z-index','2');
        $('.3D').css('z-index','2');
        $('.4D').css('z-index','2');
        $('.5D').css('z-index','2');
        $('.6D').css('z-index','2');
        $('.7D').css('z-index','2');
        sequence=[];
});
}

yourChoose();



var indexSong = 0;
var indexSongNota = 0;

var outputNoteSong = song[indexSong].note;
  $('.title4').html('<h2> Toca el "'+outputNoteSong+'"</h2>');
var actualNoteSong = song[indexSong].sequence;
var actualSonidoSong = song[indexSongNota].sonido;

var sequenceSong=[];

function chooseNoteSong(){


  $(".1T").click(function(){
		$('.1T').css('z-index','-1');
    sequenceSong.push(0);
	});

  $(".1D").click(function(){
		$('.1D').css('z-index','-1');
    sequenceSong.push(1);
	});

  $(".2D").click(function(){
		$('.2D').css('z-index','-1');
    sequenceSong.push(2);
	});

  $(".3D").click(function(){
		$('.3D').css('z-index','-1');
    sequenceSong.push(3);
	});

  $(".4D").click(function(){
		$('.4D').css('z-index','-1');
    sequenceSong.push(4);
	});

  $(".5D").click(function(){
		$('.5D').css('z-index','-1');
    sequenceSong.push(5);
	});

  $(".6D").click(function(){
		$('.6D').css('z-index','-1');
    sequenceSong.push(6);
	});

  $(".7D").click(function(){
		$('.7D').css('z-index','-1');
    sequenceSong.push(7);
	});

}

chooseNoteSong();



function bienSong(indexSong){
  if (indexSongNota != -1) {
    $('#test').append('<audio autoplay src="'+ song[indexSongNota].sonido + '"></audio>');

  }


  indexSongNota++;
  indexSong ++;


  outputNoteSong = song[indexSong].note;
  $('.title4').html('<h2> Toca el "'+outputNoteSong+'"</h2>');
  $('.1T').css('z-index','2');
  $('.1D').css('z-index','3');
  $('.2D').css('z-index','2');
  $('.3D').css('z-index','2');
  $('.4D').css('z-index','2');
  $('.5D').css('z-index','2');
  $('.6D').css('z-index','2');
  $('.7D').css('z-index','2');
  sequenceSong=[];
  actualNoteSong = song[indexSong].sequence;
  actualSonidoSong = song[indexSongNota].sonido;
  alert('♪ ♪ ♪ Bien ♪ ♪ ♪');
  // $('#test').append('<audio autoplay src="'+ song[indexSong -1].sonido + '"></audio>');

  // console.log(indexSong);

  $('.title4').html('<h2> Toca el "'+outputNoteSong+'"</h2>');
  if(indexSong === 9){
    $('.title4').html('<h2>"'+outputNoteSong+'"</h2>');
    alert('♩♪♫♬ Bien hecho, ya sabes tocar el principio del "Asturias Patria Querida"♬♫♪♩');
    abrir('https://www.youtube.com/watch?v=Gf0MTcHpJzY');
    $('.icon-house5').text('Repetir');
    sequenceSong=[];
    indexSong = -1;
    indexNotaSong = -1;

    $(".Boton-Next5").click(function(){

      $('.icon-house5').text('Comprobar');

      });
  }
return indexSong;
}



function yourChooseSong(){
    $(".Boton-Next5").click(function(){
      sequenceSong = sequenceSong.sort();
      if(sequenceSong.toString() === actualNoteSong.toString()  ? indexSong = bienSong(indexSong) : alert('☠☠☠  Vuelve a intentarlo  ☠☠☠'));

    });


    $(".Boton-Reset").click(function(){
        $('.1T').css('z-index','2');
        $('.1D').css('z-index','3');
        $('.2D').css('z-index','2');
        $('.3D').css('z-index','2');
        $('.4D').css('z-index','2');
        $('.5D').css('z-index','2');
        $('.6D').css('z-index','2');
        $('.7D').css('z-index','2');
        sequenceSong=[];
});
}

yourChooseSong();


if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'Notas': function() {
      $(".Boton-Next1").click();
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}







});
