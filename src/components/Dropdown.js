import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";

export const Dropdown = ({ options, value, onChange }) => {
  return (
    <View className="w-full h-8 mt-1 border-2 rounded-lg justify-center border-amber-500 overflow-hidden">
      <Picker selectedValue={value} onValueChange={onChange} style={{backgroundColor:'black', color:'white' ,display:'flex', alignItems:'center' }} dropdownIconColor={'white'}>
        {options.map((option) => (
          <Picker.Item key={option} label={option} value={option}/>
        ))}
      </Picker>
    </View>
  );
};