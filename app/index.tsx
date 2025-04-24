import {Button, Image, Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import socket from "@/lib/socket";
import Background from "@/components/Background";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

export default function HomePage() {

    const [roomId, setRoomId] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);

    const joinRoom = () => {
        socket.emit("joinRoom", {roomId: roomId, name: playerName});
    }

    return (
        <Background>
            <SafeAreaView style={{alignItems: "center", justifyContent: "space-around", flex: 1}}>
                <Image source={require("@/assets/logo.png")} resizeMode="contain" style={{width: "80%", bottom: 80}} />
                <View style={{width: "100%", padding: 20}}>
                    <CustomInput placeholder="Enter your name" value={playerName} onChangeText={setPlayerName} />
                    <CustomInput placeholder="Enter room id" value={roomId} onChangeText={setRoomId} />
                    <CustomButton title="Enter" onPress={joinRoom} />
                </View>

                {players.length > 0 && (
                    <View>
                        <Text>Total Players: {players.length}</Text>
                    </View>
                )}
            </SafeAreaView>
        </Background>
    )
}