import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { router } from 'expo-router/build/exports'
// splash screen


export default function Index() {
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style='light' />
      <Image className="h-full w-full absolute" source={require("../assets/images/main.jpg")} />

      <LinearGradient
        colors={["transparent", "#18181b"]} // wybrać odpowiedni kolor
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex justify-end pb-12 space-y-8'
      >
        {/* Logo aplikacji */}
        <View>
          {/* react-native-reanimated działa poprawnie tylko na wersji 3.6.2 */}
          <Animated.View entering={FadeInDown.delay(100).springify()} className='flex items-center'>
            <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide p-4"> {/* tekst */}
              MoveMentor
            </Text>
            <Text style={{ fontSize: hp(4) }} className="text-white font-bold tracking-wide"> {/* tekst */}
              Ćwiczenia dla każdego {/* xd */}
            </Text>
          </Animated.View>
        </View>

        <Animated.View entering={FadeInDown.delay(200).springify()} className='flex items-center'>
          <TouchableOpacity
          onPress={() => router.push('home')}
            style={{ height: hp(7), width: wp(80) }}
            className='bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'
          >
            <Text style={{ fontSize: hp(3) }} className='text-white font-bold tracking-widest'>
              Zaloguj się {/* np jak byśmy chcieli podpiąć logowanie */}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>


      {/* autorzy i logo WSEI */}

    </View >
  )
}