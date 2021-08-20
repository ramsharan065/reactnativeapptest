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
    { "source": null, "isStorageEnabled": false, "html": null, "allowedList": null}
    );
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [url, onUrlChange] = React.useState("");
  const [htmlValue, onHtmlChange] = React.useState("");

  const loadConfig = () => {
    if(url){
      setConfig({"source":{uri:url}, "isStorageEnabled": isEnabled});
    }else if(htmlValue){
      setConfig({"source":{html:htmlValue}, "isStorageEnabled": isEnabled});
    }
  }


  return (
    <SafeAreaView>
        <View>
            <Text>Url</Text>
            <TextInput
              multiline
              style={styles.input}
              onChangeText={onUrlChange}
              selectTextOnFocus={true}
            />
            <Text>Html</Text>
            <TextInput
              // multiline
              style={styles.input}
              onChangeText={onHtmlChange}
              selectTextOnFocus={true}
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
        <ScrollView>
        <View style={styles.view}>
          <WebView
            incognito
            // source={{html: html}}
            source={config.source}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            domStorageEnabled={config.isStorageEnabled}
            startInLoadingState={true}
          />
        </View>
        </ScrollView>
    </SafeAreaView>

  );
  
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
  view:{
    height:500
  }
});

export default App;
