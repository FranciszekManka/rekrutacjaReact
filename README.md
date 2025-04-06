 Aplikacja pogodowa w React + Vite

To jest prosta aplikacja pogodowa, którą stworzyłem przy użyciu React i Vite.  
Projekt wyświetla aktualną pogodę oraz prognozę długoterminową na podstawie danych pobieranych z API [WeatherAPI](https://www.weatherapi.com/).



 Opis działania

Aplikacja została napisana w React przy użyciu Vite
po wpisaniu lokalizacji w pole tekstowe i wciśnięciu Enter, aplikacja wysyła zapytanie do WeatherAPI za pomocą axios, 
zapisuje odpowiedź w stanie komponentu (useState), a następnie wyświetla aktualną pogodę (temperaturę, odczuwalną temperaturę, 
datę ostatniej aktualizacji oraz miasto) oraz prognozę długoterminową na najbliższe dni, pokazując średnią temperaturę dla każdej daty
Przed uruchomieniem aplikacji nalezy edytowac key w url na swój klucz z strony WeatherAPI.

 Uruchomienie aplikacji (terminal)
```bash
  npm install
  npm run dev
```


Przyznaję, że podczas pracy nad projektem zapomniałem na początku o utworzeniu repozytorium na githubie za co bardzo przepraszam.
Repozytorium zostało zainicjowane dopiero w połowie projektu, dlatego początkowa historia zmian nie jest dostępna.  
https://github.com/FranciszekManka/rekrutacjaReact.git
