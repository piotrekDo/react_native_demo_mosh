## Przeplyw, struktura
w zaleznosci od stanu uzytkownika- zlogowany lub nie renderujemy AuthNavigator albo AppNavigator.
Dzieki temu widzimy ekran logowania lub aplikacje


## odczytanie jwt
po uzyskaniu tokenu mozna za pomoca ` npm i jwt-decode` wyciagnac jego payload
`const user = jwtDecode(authToken);`

PRZYKLAD W FOLDERZE AUTH