import {ReactNode} from "react";
import {ImageBackground, View} from "react-native";

const background = require("@/assets/background.jpg");

export default function Background({children}: {children: ReactNode}) {
    return (
        <View style={{width: "100%", flex: 1}}>
            <ImageBackground source={background} resizeMode="cover" style={{flex: 1, width: "100%", height:800, position: "absolute"}} />
            {children}
        </View>
    )
}