import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';



export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
      <StatusBar style="dark" />

      {/* punchilne and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            GOTOWY DO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-[#7FC241]"
          >
            TRENINGU?
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require('../assets/images/avatar.png')}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <TouchableOpacity
            onPress={() => router.push('settings')}
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name="settings-outline" size={hp(3)} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* image slider */}
      <View>
        <ImageSlider />
      </View>

      {/* body parts list */}
      <View className="flex-1">
        <BodyParts />
      </View>


    </SafeAreaView>
  )
}