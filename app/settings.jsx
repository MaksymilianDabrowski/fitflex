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
                <Text style={{ fontSize: hp(5), marginTop: hp(7), textAlign: 'center', fontWeight: 'bold' }}>Ustawienia</Text>
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="bg-[#7FC241] mx-4 absolute flex justify-center items-center pr-1 rounded-full"
                    style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
                >
                     <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp(4) }}>
                    <View style={{ alignItems: 'center', marginBottom: hp(4) }}>
                        <TouchableOpacity
                            onPress={() => router.back()} 
                            style={{
                                width: hp(10),
                                height: hp(10),
                                backgroundColor: '#f0f0f0', 
                                borderRadius: hp(5), 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#7FC241', 
                                borderWidth: 5, 
                                marginBottom: hp(1)
                            }}
                        >
                            <Image
                                source={require('../assets/images/barbell.png')}
                                style={{ width: hp(8), height: hp(8) }}
                            />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: hp(2.5) }}>Ćwiczenia</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: hp(4) }}>
                        <TouchableOpacity
                            onPress={() => router.push('trainingPlan')} 
                            style={{
                                width: hp(10),
                                height: hp(10),
                                backgroundColor: '#f0f0f0', 
                                borderRadius: hp(5), 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#7FC241', 
                                borderWidth: 5, 
                                marginBottom: hp(1)
                            }}
                        >
                            <Image
                                source={require('../assets/images/plan.png')}
                                style={{ width: hp(8), height: hp(8) }}
                            />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: hp(2.5) }}>Plan Treningowy</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: hp(4) }}>
                        <TouchableOpacity
                            onPress={() => router.push('diet')} 
                            style={{
                                width: hp(10),
                                height: hp(10),
                                backgroundColor: '#f0f0f0', 
                                borderRadius: hp(5), 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#7FC241', 
                                borderWidth: 5, 
                                marginBottom: hp(1)
                            }}
                        >
                            <Image
                                source={require('../assets/images/diet.png')}
                                style={{ width: hp(8), height: hp(8) }}
                            />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: hp(2.5) }}>Dieta</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: hp(4) }}>
                        <TouchableOpacity
                            onPress={() => router.push('authors')} 
                            style={{
                                width: hp(10),
                                height: hp(10),
                                backgroundColor: '#f0f0f0', 
                                borderRadius: hp(5), 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#7FC241', 
                                borderWidth: 5, 
                                marginBottom: hp(1)
                            }}
                        >
                            <Image
                                source={require('../assets/images/authors.png')}
                                style={{ width: hp(8), height: hp(8) }}
                            />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: hp(2.5) }}>Autorzy</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}