# W celu uruchomienia aplikacji należy
1. stworzyć plik .env
3. uruchomić komendę *npm install* w katalogach backend oraz frontend
4. backend uruchamiamy komendą *node index.js* z poziomu katalogu backend
5. frontend uruchamiamy komendą *npm run dev* z poziomu katalogu frontend

Plik .env tworzymy wedle formatu

`
LOGIN=<login>
PASSWORD=<hasło>
NUMBER=<numer telefonu>
`
Uwaga, należy podać hasło bez początkowego *#*, gdyż .env traktuje wtedy linię jako komentarz.

Stack:
- Frontend
  - Tailwind
  - Vue
  - Vite
- Backend
  - Node.js
  - Express
