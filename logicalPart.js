$(document).ready(function() {
//$('.uno').toggle();
$('.dos').hide();
$('.tres').hide();



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
  {note:'WellDone',sequence:[1,2,3,4,5,6]}
];





var index = 0;
var outputNote = notes[index].note;
  $('.title3').html('<h2> Toca el "'+outputNote+'"</h2>');
var actualNote = notes[index].sequence;

//this.sequence = [];

// if(this.sequence !== this.actualNote ? alert('lo haces mal') : alert('bien'));


function changeframe(){


  $(".Inicio").click(function(){
    $('.dos').hide();
    $('.tres').hide();
    $('.uno').show();
  });
  $(".LasNotas").click(function(){
    $('.uno').hide();
    $('.tres').hide();
    $('.dos').show();

  });
  $(".Prueba").click(function(){
    $('.uno').hide();
    $('.dos').hide();
    $('.tres').show();
  });
    $(".Boton-Next1").click(function(){
      $(this).parent().parent().parent().toggle();
      $('.dos').toggle();
    });

    $(".Boton-Next2").click(function(){
        $(this).parent().parent().toggle();
        $('.tres').toggle();

  
});
}

changeframe();


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

});
