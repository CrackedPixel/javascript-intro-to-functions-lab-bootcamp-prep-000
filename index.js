function shout(msg){
  return msg.toUpperCase();
}

function whisper(msg){
  return msg.toLowerCase();
}

function logShout(msg){
  console.log(shout(msg));
}

function sayHiToGrandma(msg){
  if (msg === msg.toLowerCase()){
    return "I can't hear you!";
  }else{
    return "YES INDEED";
  }
}