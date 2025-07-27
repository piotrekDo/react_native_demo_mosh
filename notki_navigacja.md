# React Navigation 
`https://reactnavigation.org/docs/getting-started`

WAzne aby doczytac biezaca dokuemntacje i doinstalowac kolejne zaleznosci dla EXPO
`npx expo install react-native-screens react-native-safe-area-context`

## Navigators
- Stack Navigator – do przełączania się między ekranami, działa jak nawigacja w przeglądarce: można wykonywać `push` i po`p ze stosu ekranów.
- Tab Navigator – do implementowania zakładek (`tabs`), zazwyczaj na dole lub u góry ekranu.
- Drawer Navigator – do implementacji bocznego menu (`drawer`), wysuwanego z lewej lub prawej strony.

**do kazdego navigatora istnieje osobny pakiet npm do pobrania**

### routes.js
dobrym pomyslem jest wyniesienie wszyskich sciezek do pliku. Dobra praktyka moze byc rowniez wykorzystanie `Object.freeze` dzialajacego jak `final`
```
export default Object.freeze({
  WELCOME: 'Welcome',
  LOGIN: 'Login',
  REGISTER: 'Register',
  LISTINGS: 'Listings',
  LISTINGS_EDIT: 'ListingsEdit',
  LISTINGS_DETAILS: 'ListingDetails',
  FEED: 'Feed',
  ACCOUNT: 'Account',
  MY_LISTINGS: 'MyListings',
  MY_MESSAGES: 'Messages',
});
```

### przekierowania i parametry
Przekierowania najlepiej wykonywac w ramach `useNavigation<any>();` gdzie typ any nie jest najlepszym rozwiazaniem, jednak rozwiazuje problemy z typowaniem.
W przykladzie ponizej, w ramach .navigate przekazywany jest drugi argument jako parametr, do ktorego mozna sie odwlac w docelowym komponencie

```
const navigator = useNavigation<any>();
          <ItemCard
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => navigator.navigate(routes.LISTINGS_DETAILS, item)}      <------------- navigator.navigate
          />
```

**odwloanie do parametru**
```

export const ListingDetailsScreen = () => {
  const route = useRoute<any>();
  const listing: ListingItem = route.params;
  return (
    <View style={styles.container}>
      <Image resizeMode='cover' style={styles.image} source={listing.image} />
      <View style={styles.containerText}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>{listing.price}</Text>
      </View>
      <ListItem
        image={require('../assets/app-foto/mosh.jpg')}
        title='Mosh Hamedani'
        subTitle='5 Listings'
        onPress={() => {}}
      />
    </View>
  );
};

```

### zagnieżdżenia
W sytuacji, gdzie standardowo w ramach propsa `component` zamieszcza się referencję do konketego komponentu można umieścić kolejny navigator
`<Tab.Screen name={routes.FEED} component={FeedNavigator}/>`

Feed Navigator obejmuje wszystkie zagnieżdżone punkty w ramach Feed- głowny `ListingsScreen` oraz `ListingDetailsScreen` po kliknieciu w konkretny `Listing`
```
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListingsScreen } from '../screens/ListingsScreen';
import { ListingDetailsScreen } from '../screens/ListingDetailsScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
    <Stack.Screen name={routes.LISTINGS_DETAILS} component={ListingDetailsScreen} options={{ presentation: 'modal' }} />
  </Stack.Navigator>
);

export default FeedNavigator;
```

### podstawowa nawigacja dla zalogowanego uzytkownika

```
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListingEditScreen } from '../screens/ListingEditScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NewListingsButton } from './NewListingsButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Tab.Navigator>
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={routes.LISTINGS_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => <NewListingsButton onPress={() => navigation.navigate(routes.LISTINGS_EDIT)} />,
          tabBarIcon: () => null, // ukrywamy ikonę, bo zastępuje ją przycisk
        })}
      />

      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account' color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  </GestureHandlerRootView>
);

export default AppNavigator;
```

## Uzyteczne ustawienia
- headerShown: false pozwala ukryc naglowek,
- tabBarIcon pozwala zdefiniowac ikone wyswietlana na bottombar, sama funkcja udostepnie propsy jak kolor czy rozmiar do ktoreych mozna sie odwolac
- tabBarButton pozwala zdefiniowac calkowicie wlasny przycisk do umieszenia na pasku
```
    options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account' color={color} size={size} />,
    }}
```

```
    <Tab.Screen
    name={routes.LISTINGS_EDIT}
    component={ListingEditScreen}
    options={({ navigation }) => ({
        tabBarButton: () => <NewListingsButton onPress={() => navigation.navigate(routes.LISTINGS_EDIT)} />,
        tabBarIcon: () => null, // ukrywamy ikonę, bo zastępuje ją przycisk
    })}
    />
```