import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function settings() {
    const router = useRouter();

    return (
        <LinearGradient
            colors={['#ffffff', '#999999']}
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: hp(5), marginTop: hp(7), textAlign: 'center', fontWeight: 'bold' }}>Autorzy</Text>
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="bg-[#7FC241] mx-4 absolute flex justify-center items-center pr-1 rounded-full"
                    style={{ position: 'absolute', top: hp(7), left: hp(2.5), height: hp(5.5), width: hp(5.5) }}
                >
                    <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/images/wsei.png')} // Ścieżka do zdjęcia
                        style={{ width: wp(80), height: hp(30), resizeMode: 'contain', marginBottom: hp(15) }}
                    />
                    <Text style={{ fontSize: hp(3), fontWeight: 'bold', marginTop: hp(2), textAlign: 'center' }}>
                        Mateusz Czernik {'\n'}nr albumu 13905{'\n'}
                        
                        Maksymilian Dąbrowski {'\n'}nr albumu *****
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
}