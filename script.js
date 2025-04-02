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

function viewCertification(button){
  // Find the parent <div> of the clicked button
  let div = button.closest('div');
  let details = div.nextElementSibling; // Get the existing details element inside the div

  if(details && details.tagName.toLowerCase() === "details" &&
   button.textContent == "Close")
  {
    details.remove();
    button.textContent = "View";  // Change button text to "Open View"
  }
  else
  {
    details = document.createElement("details");
    // Create and append the summary element
    let summary = document.createElement("summary");
    summary.style.fontStyle = "normal";
    summary.style.fontSize = "20px";
    let image = document.createElement("img");

    switch(div.id)
    {
      case 'c-project-management':
          summary.textContent = "Atlassian Agile Project Management Professional Certificate"; 
          details.appendChild(summary);

          //append the image
          image.src = "https://media.licdn.com/dms/image/v2/D5622AQF_6iw4LHqLyQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1704863621514?e=1746662400&v=beta&t=v5hsCElRPzAqTUYYSRZfxSzYfnOb-XDP3vbZKuUCq3c";  // Replace with the actual image path
          image.alt = "Project Management Image";  // Add alt text
          details.appendChild(image);
          div.appendChild(details);
          break;
        case 'c-cloud-computing':
          summary.textContent = "Introduction to Cloud Computing";  // Customize text
          details.appendChild(summary);

          //append the image
          image.src = "cloud-pdf.pdf";  // Replace with the actual image path
          image.alt = "Cloud Computing";  // Add alt text
          details.appendChild(image);
          div.appendChild(details);
          break;
        case 'c-agile-foundations':
          summary.textContent = "Agile Foundations";  // Customize text
          details.appendChild(summary);

          //append the image
          image.src = "https://media.licdn.com/dms/image/v2/D5622AQFsguyZtBphfw/feedshare-shrink_1280/feedshare-shrink_1280/0/1704656735760?e=1746662400&v=beta&t=mHeOTnihpCC4l10Z3ckODwY4yEdwyxC_7SwuISpPTnA";  // Replace with the actual image path
          image.alt = "Agile Foundations";  // Add alt text
          details.appendChild(image);
          div.appendChild(details);
          break;
        default:
          break;
    }
    details.open = true;
    details.style.margin= "20px 20px 0 0";
    div.insertAdjacentElement('afterend', details);

    //set view button to say Close
    button.textContent = "Close";
  }
}
