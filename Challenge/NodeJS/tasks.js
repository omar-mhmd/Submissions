
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
var array = ["crispy", "fahita", "Zinger", "Chicken Burger", "Batata"]
function onDataReceived(text) {
  var l = text.length;

   if(text.trim().slice(0,4) === 'help'){
    help();
  }

  else if (text === 'quit\n'){
    quit();
  }

  else if (text === 'exit\n'){
    quit();
  }

  
  else if(text.trim().slice(0,5) === 'hello'){
    hello(text);
  }

  else if(text === 'list\n'){
  list();}

  else if(text.trim().slice(0,3) === 'add'){
    add(text,l);
  }

  else if(text.trim().slice(0,6) === 'remove'){
    remove(text);
  }

  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){c.replace("\n").trim(" ")
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(batata){
  console.log('hello'+batata.trim().substring(5,batata.length)+'!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}


/**
 * Lists all commands
 *
 * @returns {void}
 */
function help(){
  console.log('unknownCommand\n' + 'hello\n' + 'quit\n' + 'add\n' + 'list\n' + 'remove\n');
}

/** 
 * Adds tasks
 * 
 * @returns {void}
*/
function add(txt,lngth){
  if (lngth>5){
    array.push(txt.trim().substring(4,lngth))
  }
  else {
    console.log('error');
}
}

/** 
 *Removes tasks
 * 
 * @returns {void}
*/
function remove(text){
  var n = text.charAt(7);
  if( n=='remove\n'){
    array.splice(array.length-1,1)
  }
  else if(n>array.length){
    console.log('Please correct the error and add a number from the list')
  }
  else{
  for (n;n<array.length+1;n++){
    array.splice(n-1,1)
    break;
  }
  }
}

/** 
 * lists tasks
 * 
 * @returns {void}
*/
function list(text){
  for(var i=0; i<array.length;i++){
  console.log((i+1)+")"+array[i]);}
}
// The following line starts the application
startApp("Omar Mohammad")
