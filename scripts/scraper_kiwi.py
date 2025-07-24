
import requests
import json
from datetime import datetime

API_KEY = "INSERISCI_LA_TUA_API_KEY_KIWI"
headers = {"apikey": API_KEY}

params = {
    "fly_from": "ROM",
    "fly_to": "BCN",
    "date_from": "10/08/2025",
    "date_to": "15/08/2025",
    "curr": "EUR",
    "limit": 5
}

r = requests.get("https://api.tequila.kiwi.com/v2/search", headers=headers, params=params)

if r.status_code == 200:
    flights = r.json().get("data", [])
    offers = [{
        "from": f["cityFrom"],
        "to": f["cityTo"],
        "price": f["price"],
        "date": f["local_departure"][:10]
    } for f in flights]

    with open("data/offers.json", "w", encoding="utf-8") as f:
        json.dump({"generated": datetime.now().isoformat(), "offers": offers}, f, indent=2)

    print("✅ Offerte salvate da Kiwi API.")
else:
    print("❌ Errore:", r.status_code, r.text)
