# https://docs.expo.dev/index.html
# https://reactnative.dev/docs/components-and-apis

## nowy projekt

poprzednie CLI jest przestarzałe, dopisek --template pozwala wybrac opcje w postaci TS. Domyslnie tworzy sie blank bez TS

`npx create-expo-app NAZWA_PROJEKTU --template` 

## nowy komponent
majac zainstalowane rozszerzenie ES7+ React/Redux/React-Native snippets
nowy komponent mozna stworzyc poprzez '`rsf`' jako skrot od React Stateless Function i mamy gotowa, pusta templatke.
Jak rafc w zwyklym React.

DLA TS wpisujemy `tsrfc`


W Native to App jest miejscem startowym, podobnie jak main w zwyklym React

import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <WelcomeScreen />;
}


## IKONY
ikony nie wymagaja instalacji, sa czescia ekspo. Przy imporcie ikon trzeba pamietac o sposobie zapisu
poprzez MaterialIcons. 

https://icons.expo.fyi/Index


```
import { MaterialIcons } from '@expo/vector-icons';

...

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialIcons style={styles.closeIcon} name='close' size={40} color='white' />
      <MaterialIcons style={styles.deleteIcon} name='delete' size={40} color='white' />
      <Image resizeMode='contain' style={styles.image} source={require('../assets/app-foto/chair.jpg')} />
    </View>
  );
}
```


## komponenty, brak HTML

native nie korzysta z html, zamiast tego wykorzystywane sa komponenty o podobnym zastosowaniu co elementy HTML

Image – do wyświetlania obrazów.
ScrollView – do przewijania zawartości.
FlatList – do wydajnego wyświetlania list.
TouchableOpacity, TouchableHighlight, Pressable – do obsługi dotyku (przyciski, reakcje na kliknięcia).
TextInput – pole do wprowadzania tekstu (formularze).
Button – prosty przycisk.
SafeAreaView – zapewnia, że zawartość nie nachodzi na elementy systemowe (np. notcha).

Dlaczego nie ma standardowych elementów HTML?
React Native nie używa HTML ani DOM. Zamiast tego korzysta z własnych komponentów, które są tłumaczone na natywne widoki Androida/iOS. Dzięki temu aplikacje wyglądają i działają jak natywne, a nie jak strony internetowe.

## expo constants
`npm i expo-constants` udostepnia obiekt Constants z danymi dotyczacymi urządzenia. 
`import  Constants from 'expo-constants';` **BEZ NAWIASÓW wokol Constants!**

dobrym zastosowaniem jest `paddingTop: Constants.statusBarHeight,` pozwalające nadać górny padding w zależności od urządzenia

```
export const MessagesScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={msg => msg.id.toString()}
        renderItem={({ item, index, separators }) => (
          <ListItem title={item.title} subTitle={item.description} image={item.image} />
        )}
        ItemSeparatorComponent={props => <View style={{ width: '100%', height: 1, backgroundColor: 'orange' }} />}
      />
    </SafeAreaView>
  );
};
```

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

## Flecbox
dziala nieco inaczej niz w css. Wlasnosc Flex: 1 zajmuje 100 % powierzchni rodzica. w Przykladzie ponizej 3x View zagnieżdżone w innym View podzielą ekran na 3 części, jako że chca zajac caly ekran. Dodatkowo pierwszy posiada wlasnosc flex ustawiona na 2, co oznacza ze lacznie te 3 View dziela ekran na 4 czesci z czego pierwszy View zajmuje 2 z nich.

    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        flex: 2,
      }}>

      </View>
      <View style={{
        backgroundColor: 'gold',
        flex: 1,
      }}>

      </View>
      <View style={{
        backgroundColor: 'tomato',
        flex: 1,
      }}>
      </View>
    </View>

W przypadku wrap, zawartosc View jako calosc ustawia sie poprzez Align content, nie align items. Align items dziala na ustawienie przedmiotow w swojej linii. 


## Platform specific styles / Platform.select

Poprzez orzekazanie obiektu Platform.select można definiować różne zestawy styli dla różnych platform. 
Poniżej przykład, gdzie kolor tekstu jest zawsze taki sam, ale w zależności od platformy zmienia się jego rozmiar i czcionka. 

Jest to alternatywa dla powtarzalnego sprawdzania platformy jak w przykladzie
`fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'`

```
import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: 'Avenir',
  },
  android: {
    fontSize: 18,
    fontFamily: 'Roboto',
  },
});

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto',
      },
    }),
  },
});

export default AppText;
```

## Gesty, swipe
WAZNE- wykonac obydwa installe, reanimated nie zadziala samo w sobie, a gesture-handler go nie zawiera!!

`npx expo install react-native-gesture-handler`
`npx expo install react-native-reanimated`
WAZNE - instalacja poprzez expo, nie standardowo poprzez npm, s ktorego expo korzysta. Instalacja poprzez expo zapewnia spojnosc wersji z expo wykorzystanym w projekcie

Dodatkowo, trzeba owrapowac aplikacje wewnatrz `GestureHandlerRootView` ktore samo w sobie moze dzialac jak kontener
```
    <GestureHandlerRootView>
      <View style={{ padding: 20, width: '100%', flex: 1, backgroundColor: '#f8f4f4' }}>
        <MessagesScreen />
      </View>
    </GestureHandlerRootView>
```

https://docs.swmansion.com/react-native-gesture-handler/docs/components/reanimated_swipeable

przy swipe wazne aby pamietac o nowym imporcie
`import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';`

## Touchables

`TouchableHighlight` do dzialania wymaga propsa onPress, dodatkowo poprzez underlayColor mozna okreslic kolor podswietlania

    <TouchableHighlight underlayColor={colors.light} onPress={() => console.log()}>


## Listy

Do renderowania list w native wykorzystuje sie `FlatList`. Trzeba w nim zapewnić
- `data` tablica z danymi,
- `renderItem` musi zwrócić komponent, np. ListItem, Text itp.
- `keyExtractor` zapewnia unikalny key dla Reacta

`ItemSeparatorComponent` pozwala zdefiniować komponent wykorzystywany jako separator między elementami. 
Jego zaletą jest to, że nie renderuje się za ostatnim elementem. 

```
export const MessagesScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={msg => msg.id.toString()}
        renderItem={({ item, index, separators }) => (
          <ListItem title={item.title} subTitle={item.description} image={item.image} />
        )}
        ItemSeparatorComponent={props => <View style={{ width: '100%', height: 1, backgroundColor: 'orange' }} />}
      />
    </SafeAreaView>
```

pull to refresh wymaga zaimplementowania 2 dodatkowcy propsow
`refreshing` oraz `onRefresh` 

własnością refresh powinno sie zarzadzac w ramach `onRefresh`. samo  refreshing oczekuje tylko boolean na podstawie ktorego wyswietla spinner albo nie. 

```
export const MessagesScreen = () => {
  const [messages, setMessages] = useState<Message[]>(messagesMock);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (msg: Message) => {
    setMessages(state => state.filter(m => m.id !== msg.id));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={msg => msg.id.toString()}
        renderItem={({ item, index, separators }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {}}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/app-foto/mosh.jpg'),
            },
          ]);
        }}
      />
    </SafeAreaView>
  );
};
```

### DROPDOWN PICKER

`npx expo install react-native-dropdown-picker`

pryklad uzycia w ramach AppDropdownPicker.tsx