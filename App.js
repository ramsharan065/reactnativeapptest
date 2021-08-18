/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Switch,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {WebView} from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [config, setConfig] = React.useState(
    { "url": null, "isStorageEnabled": false, "html": null, "allowedList": null}
    );
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [url, onUrlChange] = React.useState("");

  const loadConfig = () => {
    setConfig({"url":url, "isStorageEnabled": isEnabled});
  }


  return (
    <SafeAreaView>
        <View>
            <Text>Url</Text>
            <TextInput
              multiline
              style={styles.input}
              onChangeText={onUrlChange}
            />
            <Text>domStorageEnabled</Text>
            <Switch
              style={styles.switch}
              onValueChange={setIsEnabled}
              value={isEnabled}  
            />
            <Button
              title="load widget"
              onPress={()=>loadConfig()}
            />
        </View>
        <View style={styles.view}>
          <WebView
            incognito
            // source={{html: html}}
            source={{uri: config.url}}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            domStorageEnabled={config.isStorageEnabled}
            startInLoadingState={true}
          />
        </View>
    </SafeAreaView>

  );
  
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
  view:{
    height:400
  }
});

export default App;
