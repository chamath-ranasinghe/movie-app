import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { images } from "@/constants/images";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View className="flex-1 mt-5">
          <SearchBar
            placeholder="Search for a movie"
            onPress={() => {
              router.push("/search");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
