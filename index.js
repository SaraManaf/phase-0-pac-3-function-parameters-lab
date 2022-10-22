function introduction(name)
{
return `Hi, my name is ${name}.`
}
introduction("Aki");

function introductionWithLanguage(name , language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}`);
  }
  introductionWithLanguage("Aki" , "Ember.js.");

  function introductionWithLanguageOptional(name, language){
return name 
  }
  introductionWithLanguage("Gracie" , "Ember.js.");
  function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }