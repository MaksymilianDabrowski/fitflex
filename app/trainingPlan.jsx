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
                <Text style={{ fontSize: hp(4), marginTop: hp(7), textAlign: 'center', fontWeight: 'bold' }}>Plan Treningowy</Text>
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="bg-[#7FC241] mx-4 absolute flex justify-center items-center pr-1 rounded-full"
                    style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
                >
                    <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/images/inprogress.png')}
                        style={{ width: wp(80), height: hp(35), resizeMode: 'contain', marginBottom: hp(15) }}
                    />
                    <Text style={{ fontSize: hp(3), fontWeight: 'bold', marginTop: hp(2), textAlign: 'center' }}>
                        Tu planowane jest stworzenie  {'\n'}
                        sekcji dotyczącej gotowych {'\n'}
                         zestawów ćwiczeń
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
}