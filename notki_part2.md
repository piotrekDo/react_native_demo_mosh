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