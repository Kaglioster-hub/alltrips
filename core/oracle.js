
export async function getFlights(from, to, date) {
  const response = await fetch("https://fly-scraper.p.rapidapi.com/flights/search-detail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "fly-scraper.p.rapidapi.com",
      "x-rapidapi-key": "YOUR_API_KEY"
    },
    body: JSON.stringify({
      itineraryId: "EXAMPLE",
      sessionId: "EXAMPLE",
      market: "IN",
      locale: "en-US",
      currency: "USD",
      adults: 1,
      cabinClass: "economy",
      flights: [
        { originIata: from, destinationIata: to, departDate: date }
      ]
    })
  });
  return await response.json();
}
