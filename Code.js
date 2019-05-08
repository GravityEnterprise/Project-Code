
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Log In Page');
}

function newPage(page){
  return HtmlService.createTemplateFromFile(page).getRawContent();
}
function checkauth(user,pass){
  var firebaseUrl = "https://tryauth-2db5b.firebaseio.com";
  var secret = "bfIboab6bu1WR7ADH8wg8TnH4sfqF6YDPJKnXBPu";
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl, secret);
  Logger.log(user);
  Logger.log(pass)
  if(pass === base.getData('Users/'+user+'/Password')){
    return 1;
  }else{
    return 0;
  }
}
