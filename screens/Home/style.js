import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        marginLeft:27, 
        marginRight:17,
        marginTop:45,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

        },
    messageIcon : {
        padding:14, 
        backgroundColor:'#F9FAFB',
        borderRadius:100,  
    },
    messageNumberContainer: { 
        backgroundColor: '#F35BAC',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:10,
        height:10,
        borderRadius:10,
        position:'absolute',
        right:10,
        top:12,
    },
    messageNumber: { 
        
            color: "#FFFFFF",
            fontSize: 6,
          
          
    },
    userStoryContainer : { 
        marginTop:20,
        marginHorizontal:28,
    },
    
    userPostContainer: { 
        marginHorizontal: 24,
    }
});

export default style;