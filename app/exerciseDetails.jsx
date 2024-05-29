import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ExerciseDetails() {
    const item = useLocalSearchParams();
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
        <View className="flex flex-1">
            <TouchableOpacity
                onPress={() => router.back()}
                style={styles.closeButton}
            >
                <Anticons name="closecircle" size={hp(5.5)} color="#7FC241" />
            </TouchableOpacity>

            <View style={[styles.contentContainer, isPortrait ? styles.portraitContent : styles.landscapeContent]}>
                <Image
                    source={{ uri: item.gifUrl }}
                    contentFit="cover"
                    style={isPortrait ? styles.portraitImage : styles.landscapeImage}
                />

                <ScrollView 
                    style={styles.detailsContainer}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 60 }}
                >
                    <Animated.Text
                        entering={FadeInDown.duration(300).springify()}
                        style={{ fontSize: hp(3.5) }}
                        className="font-semibold text-neutral-800 tracking-wide"
                    >
                        {item.name}
                    </Animated.Text>
                    <Animated.Text
                        entering={FadeInDown.delay(100).duration(300).springify()}
                        style={{ fontSize: hp(2) }}
                        className=" text-neutral-700 tracking-wide"
                    >
                        Equipment <Text className="font-bold text-neutral-800">
                            {item?.equipment}
                        </Text>
                    </Animated.Text>
                    <Animated.Text
                        entering={FadeInDown.delay(200).duration(300).springify()}
                        style={{ fontSize: hp(2) }}
                        className=" text-neutral-700 tracking-wide"
                    >
                        Secondary Muscles <Text className="font-bold text-neutral-800">
                            {item?.secondaryMuscles}
                        </Text>
                    </Animated.Text>
                    <Animated.Text
                        entering={FadeInDown.delay(300).duration(300).springify()}
                        style={{ fontSize: hp(2) }}
                        className=" text-neutral-700 tracking-wide"
                    >
                        Target <Text className="font-bold text-neutral-800">
                            {item?.target}
                        </Text>
                    </Animated.Text>

                    <Animated.Text
                        entering={FadeInDown.delay(400).duration(300).springify()}
                        style={{ fontSize: hp(3) }}
                        className="font-semibold text-neutral-800 tracking-wide"
                    >
                        Instructions
                    </Animated.Text>

                    {
                        item.instructions?.split(',').map((instruction, index) => {
                            return (
                                <Animated.Text
                                    entering={FadeInDown.delay((index + 5) * 100).duration(300).springify()}
                                    key={instruction}
                                    style={{ fontSize: hp(1.7) }}
                                    className="text-neutral-800"
                                >
                                    {instruction}
                                </Animated.Text>
                            )
                        })
                    }
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
        height: wp(100),
        alignSelf: 'center',
        borderBottomLeftRadius: hp(4),
        borderBottomRightRadius: hp(4),
    },
    landscapeImage: {
        width: wp(100),
        height: '100%',
        resizeMode: 'contain',
    },
    detailsContainer: {
        flex: 1,
        padding: wp(4),
    },
});