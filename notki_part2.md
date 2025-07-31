## Dostep do funkcjonalnosci telefonu

pod adresem ponizej znajduje sie dokumentacja narzedzi udostepniajacych dostap do poszczegolnyc funkcjonalnosci jak np aparat czy bateria urzadzenia

https://docs.expo.dev/versions/latest/?redirected
https://docs.expo.dev/versions/latest/sdk/camera/

`npm i expo-permissions` JEST PRZESTARZAŁE i nie należy go uzywac, dla przykładu chcac uzyskac dostep do zdjec uzytkownika nalezy:

```
import * as ImagePicker from 'expo-image-picker';

const requestMediaPremission = async () => {
  const { status, granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!granted) {
    alert('You need to enable premission to access the library.');
  }
};

export default function App() {
  useEffect(() => {
    requestMediaPremission();
  }, []);

  return ...
```

### Przyklad dla pobrania zdjec
```
import { Button, StyleSheet, View, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoginScreen } from './app/screens/LoginScreen';
import { RegisterScreen } from './app/screens/RegisterScreen';
import { ListingEditScreen } from './app/screens/ListingEditScreen';
import { MessagesScreen } from './app/screens/MessagesScreen';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const requestMediaPremission = async () => {
  const { status, granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!granted) {
    alert('You need to enable premission to access the library.');
  }
};

export default function App() {
  const [imageUri, setImageUri] = useState<string>();

  useEffect(() => {
    requestMediaPremission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'images',
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      alert('Error reading image');
    }
  };

  return (
    <GestureHandlerRootView>
      {/* <ListingEditScreen /> */}
      <View style={styles.container}>
        <Button onPress={selectImage} title='Select image' />

        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

```


### activity indicator / loader
do przedstawiania prostego spinnera mozna wykorzystac wbudowany w react native komponent- nalezy do niego przekazac boolean odpowiedzilny ze jego wyswietlanie, opcjonalnie
props size

```
<ActivityIndicator size={'large'} animating={true}/>
```

## OFFLINE SUPPORT
### NetInfo https://docs.expo.dev/versions/latest/sdk/netinfo/
allows you to get information about connection type and connection quality.

`npx expo install @react-native-community/netinfo`

stosowanie hooka useNetInfo zapewnia nasluch na zmiany i obsluge ubsubscribe aby nie doprowadzic do wycieku pamieci.
Na podstawie zwracanych wartosci mozna obslugiwac powiadomienia o statusie offline.
**wyznacznikiem powinna byc wartosc isInternetReachable**
```
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'
const netinfo = useNetInfo();

{
  "details": {
    "ipAddress": "xxx.xxx.xxx.xxx",          // Adres IP urządzenia w sieci lokalnej
    "isConnectionExpensive": false,          // false = normalne połączenie (np. Wi-Fi), true = np. LTE z ograniczeniem danych
    "subnet": "255.255.255.0"                // Maska podsieci – standardowa dla sieci lokalnych
  },
  "isConnected": true,                       // Urządzenie jest podłączone do jakiejkolwiek sieci (np. Wi-Fi lub LTE)
  "isInternetReachable": true,               // Internet faktycznie działa (nie tylko połączenie z routerem)
  "type": "wifi"                             // Typ połączenia: "wifi", "cellular", "ethernet", "unknown", "none"
}
```

### Cache
W urzadzeniach mobilnych mozna wykorzystac 
- AsyncStore- Przechowuje dane w formacie klucz-wartość (key-value) jako tekst (JSON).
  - Nie jest szyfrowany — nie należy przechowywać danych wrażliwych.
  - Limit danych zależy od platformy, ale przyjmuje się ok. 6 MB jako bezpieczną granicę.
  - Idealny do: tokenów sesji, ustawień użytkownika, cache.
https://docs.expo.dev/versions/latest/sdk/async-storage/?utm_source=chatgpt.com
`npx expo install @react-native-async-storage/async-storage`
```
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('key', 'value');
const value = await AsyncStorage.getItem('key');
```

- SecureStore (Expo Secure Store) Wbudowane API w Expo umożliwiające bezpieczne przechowywanie danych — wykorzystuje Keychain (iOS) i Keystore (Android).
  - Dane są szyfrowane na poziomie systemu operacyjnego.
  - Przechowywanie tylko małych wartości (np. tokeny, hasła) — limit do około 2 KB na wartość, nie 2 MB.
  - Idealny do: tokenów JWT, danych logowania, danych wymagających ochrony.

- SQLite. Wbudowana baza danych relacyjna, działająca lokalnie na urządzeniu
  - Umożliwia przechowywanie dużych zbiorów danych, wykonywanie zapytań SQL.
  - Dobrze sprawdza się w aplikacjach offline-first lub takich, które wymagają lokalnej bazy danych.
  - Idealny do: list, historii, relacyjnych danych użytkownika.

**Uwaga dodatkowa:**
Jeśli zależy nam na łatwym dostępie do szyfrowanej bazy danych, można też rozważyć biblioteki typu:
- react-native-mmkv – superszybkie, opcjonalnie szyfrowane.
- WatermelonDB – dla bardzo dużych i wydajnych offline'owych aplikacji.


#### AsyncStorage
DEMO
```
  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 1, name: 'Random' }));
      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse(value!)
    } catch (error) {
      console.log(error);
    }
  };
```

PRZYKLAD CACHE LAYER W PLIKU utility/cache.js