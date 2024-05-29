import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  const router = useRouter();
  const [isPortrait, setIsPortrait] = useState(true);

  const handleOrientationChange = () => {
    const { width, height } = Dimensions.get('window');
    setIsPortrait(height > width);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    // Initial check
    handleOrientationChange();

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#ffffff', '#999999']}
        style={{ flex: 1 }}
      >
        <StatusBar style="dark" />

        <ScrollView>
          <View style={styles.container}>
            {/* Header */}
            <View style={isPortrait ? styles.headerContainerPortrait : styles.headerContainerLandscape}>
              <Text style={isPortrait ? styles.headerTextPortrait : styles.headerTextLandscape}>
                {isPortrait ? 'GOTOWY DO\n' : 'GOTOWY DO '}
                <Text style={styles.headerTextHighlight}>TRENINGU?</Text>
              </Text>
              <View style={styles.iconsContainer}>
                <Image
                  source={require('../assets/images/avatar.png')}
                  style={styles.avatar}
                />
                <TouchableOpacity
                  onPress={() => router.push('settings')}
                  style={styles.settingsButton}
                >
                  <Ionicons name="settings-outline" size={hp(4)} color="gray" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Image Slider */}
            <View style={[styles.sliderContainer, isPortrait ? {} : styles.centered]}>
              <ImageSlider />
            </View>

            {/* Body Parts List */}
            <View style={[styles.bodyPartsContainer, isPortrait ? {} : styles.fullWidth]}>
              <BodyParts />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(2),
  },
  headerContainerPortrait: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  headerContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  headerTextPortrait: {
    fontSize: hp(4),
    fontWeight: 'bold',
    color: '#4A4A4A',
    textAlign: 'left',
  },
  headerTextLandscape: {
    fontSize: hp(4),
    fontWeight: 'bold',
    color: '#4A4A4A',
    textAlign: 'left',
  },
  headerTextHighlight: {
    color: '#7FC241',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: hp(6),
    width: hp(6),
    marginRight: wp(2),
    borderRadius: hp(3),
  },
  settingsButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#D4D4D4',
    height: hp(6),
    width: hp(6),
  },
  sliderContainer: {
    width: '100%',
    marginBottom: hp(2),
  },
  bodyPartsContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
    alignSelf:'center'
  },
  fullWidth: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  centered: {
    alignItems: 'center',
  },
});