import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function Index() {
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
        <View className="flex-1 bg-[#7FC241]">
            <StatusBar style="light" />

            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{ flex: 1 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
            >
                <View style={[styles.contentContainer, isPortrait ? styles.portraitContent : styles.landscapeContent]}>
                    <Image
                        source={require('../assets/images/adaptive-icon1.png')}
                        style={isPortrait ? styles.portraitImage : styles.landscapeImage}
                    />

                    <Animated.View entering={FadeInDown.delay(100).springify()} style={isPortrait ? styles.portraitTextContainer : styles.landscapeTextContainer}>
                        <Text style={{ fontSize: hp(8) }} className="text-white font-bold tracking-wide">
                            Fit<Text className="text-[#7FC241]">Flex</Text>
                        </Text>
                        <Text style={{ fontSize: hp(5), textAlign: isPortrait ? 'center' : 'left' }} className="text-white font-bold tracking-wide">
                            Ćwiczenia dla każdego
                        </Text>
                    </Animated.View>
                </View>

                <Animated.View entering={FadeInDown.delay(200).springify()} style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => router.push('settings')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            Zacznij
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    portraitContent: {
        flexDirection: 'column',
    },
    landscapeContent: {
        flexDirection: 'row',
    },
    portraitImage: {
        width: wp(80),
        height: hp(35),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    landscapeImage: {
        width: wp(45),
        height: hp(45),
        resizeMode: 'contain',
    },
    portraitTextContainer: {
        alignItems: 'center',
        marginTop: hp(4),
    },
    landscapeTextContainer: {
        alignItems: 'flex-start',
        marginLeft: wp(5),
        marginTop: hp(8),
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp(10),
    },
    button: {
        height: hp(7),
        width: wp(80),
        backgroundColor: '#7FC241',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(3.5),
        borderWidth: 2,
        borderColor: 'neutral-200',
    },
    buttonText: {
        fontSize: hp(3),
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
});