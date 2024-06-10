import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';

export default function Exercises() {
    const router = useRouter();
    const [exercises, setExercises] = useState([]);
    const item = useLocalSearchParams();
    const [isPortrait, setIsPortrait] = useState(true);

    useEffect(() => {
        if (item) getExercises(item.name);
    }, [item]);

    useEffect(() => {
        const handleOrientationChange = () => {
            const { width, height } = Dimensions.get('window');
            setIsPortrait(height > width);
        };

        const subscription = Dimensions.addEventListener('change', handleOrientationChange);

        handleOrientationChange(); // Initial check

        return () => {
            subscription.remove();
        };
    }, []);

    const getExercises = async (bodypart) => {
        let data = await fetchExercisesByBodypart(bodypart);
        setExercises(data);
    }

    return (
        <View className="flex flex-1">
            <StatusBar style="light" />
            <TouchableOpacity
                onPress={() => router.back()}
                style={[styles.closeButton, styles.greenBackground]}
            >
                <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
            </TouchableOpacity>

            <View style={[styles.contentContainer, isPortrait ? styles.portraitContent : styles.landscapeContent]}>
                <Image
                    source={item.image}
                    style={isPortrait ? styles.portraitImage : styles.landscapeImage}
                />

                <ScrollView
                    style={styles.detailsContainer}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 60 }}
                >
                    <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
                        {item.name} exercises
                    </Text>
                    <View className="mb-10">
                        <ExerciseList data={exercises} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        top: hp(2),
        left: wp(4),
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(5.5),
        width: hp(5.5),
        marginTop: hp(2),
        borderRadius: hp(2.75),
    },
    greenBackground: {
        backgroundColor: '#7FC241',
    },
    contentContainer: {
        flex: 1,
    },
    portraitContent: {
        flexDirection: 'column',
    },
    landscapeContent: {
        flexDirection: 'row',
    },
    portraitImage: {
        width: wp(100),
        height: hp(45),
        alignSelf: 'center',
        borderBottomLeftRadius: hp(4),
        borderBottomRightRadius: hp(4),
    },
    landscapeImage: {
        width: wp(100),
        height: '100%',
        resizeMode: 'cover',
    },
    detailsContainer: {
        flex: 1,
        padding: wp(4),
    },
});