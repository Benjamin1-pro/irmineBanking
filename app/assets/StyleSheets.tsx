/**
 * @format
 */
import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    containerSplashScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      },
    splashScreenTitle:{
        color:'white',
        fontSize:50,
        fontWeight:'900',
    },
    activityIndicator:{
        alignItems: 'center',
        height: 80,
    },
    wrapper:{
        position: "relative",
        textAlign: "left",
        height:"100%",
        padding: 3,
        margin: 10,
        marginBottom: 0,
    },
    loginformGroup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginScreenFirstLine:{
        textAlign:'center',
        marginTop:9,
        fontSize:13
    },
    Logininput: {
        
        paddingLeft: 10,
        // height: 35,
        // margin: 5,
        width: '90%',
    },
    LoginPhoneNumberGroup: {
        flexDirection: "row",
        alignContent: "center",
        alignItems:'center',
        borderBottomWidth:1,
        borderColor: "#02020221",
        width: '90%',
      },
      loginSendBtn:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#d2a418ed",
        backgroundColor: "#d2a418ed",
        margin: 15,
        padding: 60,
        paddingTop:10,
        paddingBottom:10
      },
      loginConditions:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:20
      },
      optInput:{
        borderBottomWidth:1,
        borderColor: "#02020221",
        width: '10%',
        margin:5,
        textAlign:'center'
      },
      otpInputGroup:{
        flexDirection: "row",
        alignContent: "center",
        alignItems:'center',
      },
      homeCard:{
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 7,
        backgroundColor: "#fff",
        padding: 3,
        margin: 5,
        marginBottom: 0,
      },
      homeIdentityPart:{
        padding:3
      },
      homeSoldePart:{
        padding:3,
        flexDirection:'row'
      },
      homeShowBalanceBtn:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#d2a418ed",
        padding:5,
        height:30
      },
      homeDepotBtn:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#c89f2254",
        backgroundColor:'#c89f2254',
        padding:23,
        paddingTop:5,
        paddingBottom:5,
        marginRight:4
      },
      homeActivitiesCard:{
        padding: 3,
        margin: 5,
        marginBottom: 0,
      },
      homeActivitiesTitle:{
        fontWeight:'bold',
        fontSize:18
      },
      homeActivitiesBlock:{
        flexDirection:'row',
        marginTop:15,
        marginBottom:15,
        width:'100%'
      },
      homeActivitiesRoundedCircle:{
        padding:10,
        marginBottom:7,
        width: 50,
        height: 50,
        borderWidth:1,
        borderRadius:50/2,
        borderColor:'#c89f2254',
        backgroundColor:'#c89f2254',
        alignItems:'center',
      },
      homeActivitiesBtn:{
        flexDirection:'column',
        alignItems:'center',
        marginRight:7,
        width:'33%'
      },
      sendMoneyPersonBtn:{
        alignItems:'center',
        width:'50%'
      },
      sendMoneyreceipientBox:{
        padding: 3,
        margin: 5,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#02020221'
      },
      formGroup: {
        flexDirection: "column",
        alignContent: "center",
      },
      label: {
        paddingTop: 10,
        paddingLeft: 10,
      },
      input: {
        borderWidth: 1,
        borderColor: "#02020221",
        paddingLeft: 10,
        // height: 35,
        margin: 5,
        width: '95%',
      },
      sendMoneyinput:{
        width: '65%',
      },
      selectForm:{
        flexDirection: "column",
        alignContent: "center",
        borderWidth:1,
        borderColor: "#02020221",
        height: 45,
        margin: 5,
        width: "95%",
      },
      banksBlocs:{
        borderWidth:1,
        borderRadius:10,
        flexDirection:'column',
        alignItems:'center',
        width:'32.5%',
        padding:10,
        margin:1,
        marginTop:15,
      },
      buttonGroup: {
        flexDirection: "row",
        alignContent: "center",
        alignItems:'center',
      },
      buttonDanger: {
        padding: 8,
        marginBottom: 20,
        marginRight: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#595853",
        backgroundColor: "#595853",
        width:'50%',
        alignItems:'center'
      },
      buttonPrimary: {
        padding: 8,
        marginBottom: 20,
        marginLeft: 0,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#d2a418ed",
        backgroundColor: "#d2a418ed",
        width:'50%',
        alignItems:'center'
      },
      moreScreenboxes:{
        borderBottomWidth:1,
        borderColor: "#02020221",
        padding:10,
        flexDirection: "row",
        alignContent: "center",
        alignItems:'center',
      }

})