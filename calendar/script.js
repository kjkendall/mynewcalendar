// Function to remove an event
function removeEvent(event) {
  var eventItem = event.target.closest('.event_item');
  if (eventItem) {
      eventItem.remove();
  }
}

// Function to edit an event
function editEvent(event) {
  // You can implement the logic to edit an event here
  // For example, you can open a modal with event details for editing
  alert("Editing event...");
}


function addEvent() {
  var eventName = document.getElementById('eventName').value;
  var eventTime = document.getElementById('eventTime').value;

  if (eventName && eventTime) {
      var calendarEvents = document.querySelector('.calendar_events');
      var newEvent = document.createElement('div');
      newEvent.classList.add('event_item');
      newEvent.innerHTML = `
          <div class="ei_Dot"></div>
          <div class="ei_Title">${eventTime}</div>
          <div class="ei_Copy">${eventName}</div>
          <div class="ei_Options">
              <button onclick="editEvent(event)">Edit</button>
              <button onclick="removeEvent(event)">Remove</button>
          </div>
      `;
      calendarEvents.appendChild(newEvent);
      closeAddEventForm(); // Optional: Close the form after adding event
  } else {
      alert("Please enter event name and time.");
  }
}



function toggleAddEventForm() {
  var form = document.getElementById('addEventForm');
  if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
  } else {
      form.style.display = 'none';
  }
}
