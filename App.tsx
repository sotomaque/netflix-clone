import React, { ReactElement, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Amplify, { Analytics } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import config from './aws-exports';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

Amplify.configure(config);
Analytics.autoTrack('session', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  // OPTIONAL, the attributes of the event, you can either pass an object or a function
  // which allows you to define dynamic attributes
  attributes: {
    attr: 'attr',
  },
  // when using function
  // attributes: () => {
  //    const attr = somewhere();
  //    return {
  //        myAttr: attr
  //    }
  // },
  // OPTIONAL, the service provider, by default is the Amazon Pinpoint
  provider: 'AWSPinpoint',
});
Analytics.autoTrack('pageView', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  // OPTIONAL, the event name, by default is 'pageView'
  eventName: 'pageView',
  // OPTIONAL, the attributes of the event, you can either pass an object or a function
  // which allows you to define dynamic attributes
  attributes: {
    attr: 'attr',
  },
  // when using function
  // attributes: () => {
  //    const attr = somewhere();
  //    return {
  //        myAttr: attr
  //    }
  // },
  // OPTIONAL, by default is 'multiPageApp'
  // you need to change it to 'SPA' if your app is a single-page app like React
  type: 'multiPageApp',
  // OPTIONAL, the service provider, by default is the Amazon Pinpoint
  provider: 'AWSPinpoint',
  // OPTIONAL, to get the current page url
  getUrl: () => {
    // the default function
    return window.location.origin + window.location.pathname;
  },
});

const App = (): ReactElement | null => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
};

export default withAuthenticator(App);
