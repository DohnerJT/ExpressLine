import { Text, View } from "react-native";
import { struct } from "../styles/struct";

// TODO Finish Working on Time Layout 
export default function Index() {
  return (
    // Main Body Container
    <View style={struct.mainContainer}>
      {/* Main Body Header */}
      <View style = {struct.mainHeader}>
        <View style={struct.mainHeaderContaner}>

          <View style={struct.mainHeaderLogo}>
            <Text style={[struct.mainHeaderLogoText, { color: "#CCCCCC" }]}>
              Express
              </Text>
            <Text style={[struct.mainHeaderLogoText, { color:"#FF6200"}]}>
              Line
              </Text>
          </View>
          <View style={struct.mainHeaderSpacer}></View>

          <View style={struct.mainHeaderTimeBlock}>
            <Text style ={struct.mainHeaderTimeText}>12:00 Z</Text>
            <Text style ={struct.mainHeaderTimeText}>12:00 L</Text>
          </View>
        </View>
      </View>

      <View style={struct.contentBody}>

        <Text>Edit src/app/index.tsx to edit this screen.</Text>

      </View>
      
      {/* Main Body Footer */}
      <View style={struct.mainFooter}></View>
    </View>
  );
}

