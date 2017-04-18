$(document).ready(function() {
//$('.uno').toggle();
$('.dos').hide();
$('.tres').hide();
$('.row').hide();

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
  {note:'do',sequence:[0,1,2,3,4,5,6,]},
  {note:'re',sequence:[0,1,2,3,4,5]},
  {note:'mi',sequence:[0,1,2,3,4,6]},
  {note:'fa',sequence:[0,1,2,3,5,6]},
  {note:'sol',sequence:[0,1,2,4,5,6]},
  {note:'la',sequence:[0,1,4,5,6]},
  {note:'si',sequence:[1,4,5,6]},
  {note:'Do',sequence:[1,2,3,4,5,6]},
  {note:'WellDone',sequence:[]}
];

var song=[
  {note:'do',sequence:[0,1,2,3,4,5,6,]},
  {note:'mi',sequence:[0,1,2,3,4,6]},
  {note:'mi',sequence:[0,1,2,3,4,6]},
  {note:'fa',sequence:[0,1,2,3,5,6]},
  {note:'mi',sequence:[0,1,2,3,4,6]},
  {note:'fa',sequence:[0,1,2,3,5,6]},
  {note:'sol',sequence:[0,1,2,4,5,6]},
  {note:'la',sequence:[0,1,4,5,6]},
  {note:'sol',sequence:[0,1,2,4,5,6]},
  {note:'WellDone',sequence:[]}
];




function changeframe(){


  $(".Inicio").click(function(){
    $('.dos').hide();
    $('.tres').hide();
    $('.cuatro').hide();
    $('.uno').show();
  });
  $(".LasNotas").click(function(){
    $('.uno').hide();
    $('.tres').hide();
    $('.cuatro').hide();
    $('.dos').show();

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
    $('.row').hide();
    $('.cuatro').show();
    $('.textoHimno').show();
  });
    $(".Boton-Next1").click(function(){
      $(this).parent().parent().parent().toggle();
      $('.row').show();
      $('.dos').toggle();
    });

    $(".Boton-Next2").click(function(){
        $(this).parent().parent().toggle();
        $('.row').show();
        $('.tres').toggle();
    });
    $(".Boton-Next4").click(function(){
        $('.row').toggle();
        $('.textoHimno').show();
        $(this).parent().parent().toggle();

        $('.cuatro').toggle();
    });
    $("#gpluslogin").click(function(){
        $('.row').show();
        $('.textoHimno').hide();
    });
}

changeframe();


var index = 0;
var outputNote = notes[index].note;
  $('.title3').html('<h2> Toca el "'+outputNote+'"</h2>');
var actualNote = notes[index].sequence;


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
  alert('♪ ♪ ♪ Bien ♪ ♪ ♪');
  console.log(index);
  $('.title3').html('<h2> Toca el "'+outputNote+'"</h2>');
  if(index === 8){
    $('.title3').html('<h2>"'+outputNote+'"</h2>');
    alert('♩♪♫♬ Bien hecho, ya sabes tocar una escala de "do" en Gaita♬♫♪♩');
    $('.icon-house3').html('Repetir');
    sequence=[];
    index = -1;
    $(".Boton-Next3").click(function(){
      $('.icon-house3').html('Comprobar');
      });
  }
return index;
}



function yourChoose(){
    $(".Boton-Next3").click(function(){
      sequence = sequence.sort();
      if(sequence.toString() === actualNote.toString()  ? index = bien(index) : alert('☠☠☠  Vuelve a intentarlo  ☠☠☠'));

    });


    $(".Boton-Resset").click(function(){
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
var outputNoteSong = song[indexSong].note;
  $('.title4').html('<h2> Toca el "'+outputNoteSong+'"</h2>');
var actualNoteSong = song[indexSong].sequence;
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
  alert('♪ ♪ ♪ Bien ♪ ♪ ♪');
  console.log(indexSong);
  $('.title4').html('<h2> Toca el "'+outputNoteSong+'"</h2>');
  if(indexSong === 9){
    $('.title4').html('<h2>"'+outputNoteSong+'"</h2>');
    alert('♩♪♫♬ Bien hecho, ya sabes tocar el principio del "Asturias Patria Querida"♬♫♪♩');
    abrir('https://www.youtube.com/watch?v=Gf0MTcHpJzY');
    $('.icon-house5').text('Repetir');
    sequenceSong=[];
    indexSong = -1;
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


    $(".Boton-Resset").click(function(){
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







});
