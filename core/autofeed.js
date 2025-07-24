
export async function getCarRentals() {
  const response = await fetch("https://car-api2.p.rapidapi.com/api/vehicles", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "car-api2.p.rapidapi.com",
      "x-rapidapi-key": "YOUR_API_KEY"
    }
  });
  return await response.json();
}
