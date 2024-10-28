function bookTicket() {
    // Get form values
    const fromStation = document.getElementById("fromStation").value;
    const toStation = document.getElementById("toStation").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const passengerName = document.getElementById("passengerName").value;
    const passengerAge = document.getElementById("passengerAge").value;

    // Basic validation
    if (!fromStation || !toStation || !date || !time || !passengerName || !passengerAge) {
        alert("Please fill in all fields.");
        return;
    }

    // Show confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.textContent = `Ticket booked successfully for ${passengerName}. From: ${fromStation}, To: ${toStation}, Date: ${date}, Time: ${time}`;
}
