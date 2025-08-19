import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});



/* import { StyleSheet } from 'react-native';
import Rive from 'rive-react-native';
import { useState } from 'react';

import { View } from '@/components/Themed';

export default function TabOneScreen() {
  const [useBundled, setUseBundled] = useState(true);

  return (
    <View style={styles.container}>
      <Rive
        {...(useBundled
          ? { resourceName: 'png_image_test' }
          : { url: 'https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv' })}
        autoplay
        style={{ width: 320, height: 320 }}
        onPlay={(name, isSM) => console.log('play', name, isSM)}
        onError={(e) => {
          console.log('rive error', e);
          // 번들 리소스 로드 실패 시 URL로 폴백
          if (useBundled) setUseBundled(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
