
export async function getHotels(lat, lon) {
  const response = await fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?latitude=${lat}&longitude=${lon}&checkin_date=2025-08-01&checkout_date=2025-08-03&adults_number=1`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "booking-com.p.rapidapi.com",
      "x-rapidapi-key": "YOUR_API_KEY"
    }
  });
  return await response.json();
}
