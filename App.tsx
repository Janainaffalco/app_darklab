import * as React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <WebView source={{ uri: 'https://v0-dark-lab-website.vercel.app' }} style={styles.webview} />
);

const CategoriaScreen = () => (
  <WebView source={{ uri: 'https://v0-dark-lab-website.vercel.app/products' }} style={styles.webview} />
);

const BlogScreen = () => (
  <WebView source={{ uri: 'https://v0-dark-lab-website.vercel.app/#benefits' }} style={styles.webview} />
);

const KitsScreen = () => (
  <WebView source={{ uri: 'https://v0-dark-lab-website.vercel.app/#contact' }} style={styles.webview} />
);



const tabBarIcon = (routeName: string, color: string, size: number) => {
  let iconName: string = 'home';

  switch (routeName) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Categoria':
      iconName = 'list-outline';
      break;
    case 'Benefícios':
      iconName = 'document-text-outline';
      break;
    case 'Contato':
      iconName = 'cube-outline';
      break;
  }

  return <Icon name={iconName} size={size} color={color} />;
};

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'android' && <StatusBar backgroundColor="#000" />}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: { backgroundColor: '#000' },
            tabBarActiveTintColor: '#9336e8',
            tabBarInactiveTintColor: '#ccc',
            tabBarIcon: ({ color, size }) => tabBarIcon(route.name, color, size),
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Categoria" component={CategoriaScreen} />
          <Tab.Screen name="Benefícios" component={BlogScreen} />
          <Tab.Screen name="Contato" component={KitsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',  // Background color for the entire app      
  },
  webview:{
    flex: 1,
  },
})