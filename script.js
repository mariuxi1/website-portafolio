function sendMessage() {
  // Get the message
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("new_message").value;

  if(!subject)
  {
    console.log("Subject line is missing.");   
    alert("Please enter a subject.");
  }
  else if(!message)
  {
    console.log("Message is missing.");   
    alert("Please enter a message.");
  }
  else
  {
    const email = "mariuxiy@gmail.com"
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    // Open default email client
    window.location.href = mailtoLink;
    console.log("Message app request sent.");
        
    //Call showPopup here
    showPopup(true);

    message.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
