function checkStatus(a, b, c) {
    let info =[a,b,c],statu,age,nam;
    for (i=0; i<info.length;i++){
      typeof(info[i]) === "string"
      ?(nam = info[i]) 
      : typeof(info[i]) === "number" 
      ? (age = info[i] )
      :(statu=info[i])
      
    if(typeof(info[i])==='boolean'){
      info[i]===true?statu = "Available":statu = " Not Available";
    }
    }

    console.log( `Hello ${nam}, Your Age Is ${age}, You Are ${statu} For Hire`);
  }
  
  // Needed Output
  checkStatus("Osama", 38, true);
    // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true);
   // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama");
   // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38);
   // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"