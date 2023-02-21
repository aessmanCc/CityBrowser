import { StyleSheet, View, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';

const art = require('./assets/art.png');
const mile = require('./assets/mile.png');
const pier = require('./assets/pier.png');
const water = require('./assets/water.png');
const willis = require('./assets/willis.png');
const articUrl = 'https://www.artic.edu/';
const magnifUrl = 'https://www.themagnificentmile.com/';
const navyUrl = 'https://navypier.org/';
const chicagoUrl = 'https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html';
const willisUrl = 'https://www.willistower.com/';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function handleOnPress(urlValue) {
  WebBrowser.openBrowserAsync(urlValue);
}

function ArtInstitue() {

  return (
    <View style={styles.container}>
      <Image source={art} style={styles.imageContainer}/>
        <Button info style={styles.button} onPress={() => { handleOnPress(articUrl) }}> 
          More Information
        </Button>
    </View>
  );
}

function MagMile() {
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.imageContainer}/>
      <Button info style={styles.button} onPress={() => { handleOnPress(magnifUrl) }}> 
          More Information
      </Button>
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.imageContainer}/>
      <Button info style={styles.button} onPress={() => { handleOnPress(navyUrl) }}> 
          More Information
      </Button>
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.imageContainer}/>
      <Button info style={styles.button} onPress={() => { handleOnPress(chicagoUrl) }}> 
          More Information
      </Button>
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.imageContainer}/>
      <Button info style={styles.button} onPress={() => { handleOnPress(willisUrl) }}> 
          More Information
      </Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art institute of Chicago" component={ArtInstitue} />
        <Drawer.Screen name="Magnificent Mile" component={MagMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 360,
    width: 240,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
