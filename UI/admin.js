


const adminPortal = (evt, buttoncontent) => {
    // variable declaration
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
      // iteration over class with name tabcontent
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
     // iteration over class with name tablinks
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(buttoncontent).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();