import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Settings() {
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
        <LinearGradient
            colors={['#ffffff', '#999999']}
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>Licznik KG</Text>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
                </TouchableOpacity>
                <View style={[styles.contentContainer, isPortrait ? styles.portraitContent : styles.landscapeContent]}>
                    <Image
                        source={require('../assets/images/inprogress.png')}
                        style={isPortrait ? styles.portraitImage : styles.landscapeImage}
                    />
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: '#7FC241',
        position: 'absolute',
        top: hp(7),
        left: wp(4),
        height: hp(5.5),
        width: hp(5.5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(5.5) / 2,
    },
    title: {
        fontSize: hp(5),
        marginTop: hp(7),
        textAlign: 'center',
        fontWeight: 'bold',
    },
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    portraitImage: {
        width: wp(80),
        height: hp(35),
        resizeMode: 'contain',
        marginBottom: hp(15),
    },
    landscapeImage: {
        width: wp(50),
        height: hp(40),
        resizeMode: 'contain',
        marginBottom: wp(15),
    },
    portraitText: {
        fontSize: hp(2.5),
        fontWeight: 'bold',
        marginTop: hp(2),
        textAlign: 'center',
    },
    landscapeText: {
        fontSize: wp(5),
        fontWeight: 'bold',
        marginBottom: hp(10),
        textAlign: 'center',
    },
});