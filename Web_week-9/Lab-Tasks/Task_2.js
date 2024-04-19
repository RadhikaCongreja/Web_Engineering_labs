function generateInvitationMessages(guests,...details) {
    return guestList.map(guest => {
      const { name, age, rsvp } = guest;
      const additionalDetails = details.join(' ');
      if (rsvp === "yes"){
      return `Hi ${name}, you are invited to the party! You are ${age} years old and your RSVP status is ${rsvp}. ${additionalDetails}`;}
      else if(rsvp === "maybe"){
      return `Hi ${name}, your invitation is pending for the party! You are ${age} years old and your RSVP status is ${rsvp}. we will communicate to you in short time.`;}
      else{
        return `Hi ${name}, you are not invited to the party! You are ${age} years old and your RSVP status is ${rsvp}.`;
      }
    });
  }
  
  const guestList = [
    { name: 'Amaeda', age: 25, rsvp: 'yes' },
    { name: 'Bhumika', age: 30, rsvp: 'maybe' },
    { name: 'Pari', age: 28, rsvp: 'yes' },
    { name: 'Ghazala', age: 35, rsvp: 'no' },
    { name: 'Kiran', age: 31, rsvp: 'maybe' },
    { name: 'Sawaira', age: 37, rsvp: 'no' }
  ];
  
  const details = ['The party will be held at the garden of Central Cafe, Be on time.'];
  
  const invitationMessages = generateInvitationMessages(guestList,...details);
  
  const invitationMessagesDiv = document.getElementById('invitation-messages');
  invitationMessagesDiv.innerHTML = `<div>${invitationMessages.join('</p><p>')}</div>`;