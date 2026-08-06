// import { StyleSheet, Text, View } from "react-native";
// import "../../global.css"

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Text>Edit src/app/index.tsx to edit this screen.</Text>
//       <Text>Nous revenons dans le game après plus d'une année de Shabbat.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
