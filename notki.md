## instalacja

poprzednie CLI jest przestarzałe, dopisek --template pozwala wybrac opcje w postaci TS. Domyslnie tworzy sie blank bez TS

npx create-expo-app DoneWithItMosh --template

## nowy komponent
majac zainstalowane rozszerzenie ES7+ React/Redux/React-Native snippets
nowy komponent mozna stworzyc poprzez 'rsf' jako skrot od React Stateless Function i mamy gotowa, pusta templatke.
Jak rafc w zwyklym React.


W Native to App jest miejscem startowym, podobnie jak main w zwyklym React

import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <WelcomeScreen />;
}



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
