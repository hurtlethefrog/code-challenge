
const countTickets = (tickets) => {
  let output = {
    red: 0,
    green: 0,
    blue: 0
  };
  
  for (let ticket of tickets) {
    switch (ticket) {
      case 'red':
        output[ticket] += 1;
        break;
      case 'green':
        output[ticket] += 1;
        break;
      case 'blue':
        output[ticket] += 1;
        break;
    }
  }
  return output;
};

const bestOdds = (tickets, raffleEntries) => {
  let tixObj = countTickets(tickets);
  let output = {
    colour: '',
    odds: 0
  };
  
  for (let ticket in tixObj) {
    if (tixObj[ticket] / raffleEntries[ticket] > output.odds) {
      output.odds = tixObj[ticket] / raffleEntries[ticket];
      output.colour = ticket;
    }
  }
  
  return `You have the best odds of winning the ${output.colour} raffle.`;
};
