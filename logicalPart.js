$(document).ready(function() {
  
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
    {note:'Do',sequence:[1,2,3,4,5,6]}
  ];


this.actualNote=notes[5].sequence;

this.sequence = [];

// if(this.sequence !== this.actualNote ? alert('lo haces mal') : alert('bien'));



// $(".pantalla").click(function(){
//   $(".pantalla").show();
//   $(this).hide();
// });






//this.sequence.length===notes.secuence.length && this.sequence.every(function(v,i) { return v === notes.secuence[i]});













});
