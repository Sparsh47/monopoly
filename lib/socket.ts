import {io} from 'socket.io-client';

const socket = io("http://192.168.1.25:9000", {
    transports: ['websocket'],
    autoConnect: true,
})

export default socket;