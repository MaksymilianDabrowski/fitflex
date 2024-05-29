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
                <Text style={{ fontSize: hp(5), marginTop: hp(4), textAlign: 'center', fontWeight: 'bold' }}>Menu</Text>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
                </TouchableOpacity>
                <View style={[styles.contentContainer, isPortrait ? styles.portraitContent : styles.landscapeContent]}>
                    <View style={styles.optionContainer}>
                        <TouchableOpacity
                            onPress={() => router.push('home')}
                            style={styles.optionButton}
                        >
                            <Image
                                source={require('../assets/images/barbell.png')}
                                style={styles.optionImage}
                            />
                        </TouchableOpacity>
                        <Text style={styles.optionText}>Ćwiczenia</Text>
                    </View>
                    <View style={styles.optionContainer}>
                        <TouchableOpacity
                            onPress={() => router.push('trainingPlan')}
                            style={styles.optionButton}
                        >
                            <Image
                                source={require('../assets/images/plan.png')}
                                style={styles.optionImage}
                            />
                        </TouchableOpacity>
                        <Text style={styles.optionText}>Plan {'\n'}Treningowy</Text>
                    </View>
                    <View style={styles.optionContainer}>
                        <TouchableOpacity
                            onPress={() => router.push('diet')}
                            style={styles.optionButton}
                        >
                            <Image
                                source={require('../assets/images/diet.png')}
                                style={styles.optionImage}
                            />
                        </TouchableOpacity>
                        <Text style={styles.optionText}>Dieta</Text>
                    </View>
                    <View style={styles.optionContainer}>
                        <TouchableOpacity
                            onPress={() => router.push('weightLifted')}
                            style={styles.optionButton}
                        >
                            <Image
                                source={require('../assets/images/weight.png')}
                                style={styles.optionImage}
                            />
                        </TouchableOpacity>
                        <Text style={styles.optionText}>Licznik Kg</Text>
                    </View>
                    <View style={styles.optionContainer}>
                        <TouchableOpacity
                            onPress={() => router.push('authors')}
                            style={styles.optionButton}
                        >
                            <Image
                                source={require('../assets/images/authors.png')}
                                style={styles.optionImage}
                            />
                        </TouchableOpacity>
                        <Text style={styles.optionText}>Autorzy</Text>
                    </View>
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
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(4),
    },
    portraitContent: {
        flexDirection: 'column',
    },
    landscapeContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    optionContainer: {
        alignItems: 'center',
        marginBottom: hp(2),
    },
    optionButton: {
        width: hp(10),
        height: hp(10),
        backgroundColor: '#f0f0f0',
        borderRadius: hp(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#7FC241',
        borderWidth: 5,
        marginBottom: hp(1),
    },
    optionImage: {
        width: hp(8),
        height: hp(8),
    },
    optionText: {
        color: 'black',
        fontSize: hp(2.5),
        textAlign:'center'
    },
});