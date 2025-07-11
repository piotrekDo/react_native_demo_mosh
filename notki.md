## instalacja

poprzednie CLI jest przestarzałe, dopisek --template pozwala wybrac opcje w postaci TS. Domyslnie tworzy sie blank bez TS

npx create-expo-app DoneWithItMosh --template


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