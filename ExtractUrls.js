function domainName(url){
    //your code here
    var reg = 'https?:\/\/?(.*)\.?(com|org|ru|co$)';

    //.(com|org)
    var x = url.match(reg)
    
    console.log(x);




  }

  domainName("http://google.co.jp");




// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"