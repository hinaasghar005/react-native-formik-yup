

import React,{useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Button from '../../../component/custom/Button';
import { Formik } from "formik";
import * as Yup from 'yup';
//import { Icon } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

const loginValidationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Please enter valid email")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        'Invalid email'
      )
      .required("Email address is required"),
    password: Yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} character`)
      .required("Password is required"),
  });
  const handlePassPress = () => {
   // Dispatching email to Redux
   // navigation.navigate('Home'); // Navigate to Home screen or any other screen
    console.log('Email:');
    console.log('Password:');
  };
 const Loginpage =({navigation})=>{
    const [showPassword, setShowPassword] = useState(false);
  return(
    <Formik
    initialValues={{
      email: '',
      password:'',
    }}
 //   validateOnMount={true}
    validationSchema={loginValidationSchema}
    onSubmit={values => handlePassPress(values)}>
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      touched,
      errors,
      isValid,
      dirty,
      setFieldTouched,
    }) => (
    <View style={{flex:1,justifyContent:'center', backgroundColor:'white'}}>
     
    <Image style={styles.tinyimg} source={require('../../../../asset/images/fls.jpg')}/>
<View style={styles.inputContainer}>
{/* <Icon name="person" size={20} color='black' style={styles.icon} /> */}
       <TextInput   placeholder="Username,email address"
    
    placeholderTextColor="black"
    keyboardType="default"
    onChangeText={handleChange('email')}
    value={values.email}
    // onBlur={() => setFieldTouched('email')}
    style={[
      styles.inputStyle,
      {
        borderBottomColor:
          errors.email && touched.email ? 'red' : '#262E2B',
      },
    ]}
         />
         </View>
         <View style={{paddingHorizontal:50}}>
          {errors.email && touched.email && (
              <Text style={{color: 'red'}}>{errors.email}</Text>
            )}
</View>
    <View style={styles.inputContainer}>
{/* <Icon name="lock" size={20} color='black' style={styles.icon} /> */}
<TouchableOpacity onPress={() => setShowPassword(!showPassword)}> 
<Icon name={showPassword ? 'eye' : 'eye-slash'}
 size={20} color="black" style={[styles.icon,{marginLeft:5}]} />
 </TouchableOpacity>

       <TextInput
         placeholder="password"
         placeholderTextColor="black"
     
             
               secureTextEntry={!showPassword}
               style={styles.inputStyle}
               
               onChangeText={handleChange('password')}
               value={values.password}
            //    onBlur={() => setFieldTouched('password')}
           
         />
         </View>
         <View style={{paddingHorizontal:50}}>
  {errors.password && touched.password && (
              <Text style={{ color: 'red' }}>{errors.password}</Text>
            )}
 </View>
 <View style={{marginTop:10}}>
       <Text style={{marginLeft: 125,marginHorizontal: 10,marginBottom:30,fontWeight:'bold',color:'black',alignSelf:'flex-end'}}> Forget Password?</Text>
    </View>
        
       <Button
            //  disabled={!isValid || !dirty}
               // disabled={
               //  !isValid
 
               //   }
               disableStyle={{
                 borderWidth: 1,
                 borderColor: 'rgba(0,0,0,.25)',
                 backgroundColor: '#C4C4C4',
               }}
               disableTextColor={'rgba(0,0,0,.25)'}
             
               style={styles.continueButton}
               text={'Login'}
              
               onPress={handleSubmit}
             /> 
              
     <View style={styles.lineView}>
        <View style={styles.linestyle}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.linestyle}></View>
      </View>
       <TouchableOpacity  onPress={() => navigation.navigate('Signuppage')}
         style={{
           height: 45,
           width: 230,
           borderWidth: 1,
           margin: 5,
           
 
           marginLeft: 70,
           marginHorizontal: 10,
           marginVertical: 10,
           backgroundColor: 'orange',
           marginTop: 30,
           borderRadius: 8,
           justifyContent: 'center',
           alignItems: 'center',
         }}
       //</View>  onPress={() => navigation.navigate('Home')}
       >
         <Text style={{color: 'black'}}>Create new account</Text>
 
       </TouchableOpacity>
       <TouchableOpacity
         style={{
           height: 45,
           width: 230,
           borderWidth: 1,
           margin: 5,
 
           marginLeft: 70,
          
           backgroundColor: 'lightblue',
           borderRadius: 8,
           justifyContent: 'center',
           alignItems: 'center',
         }}
      //   onPress={() => navigation.navigate('Home')}
         >
         <Text style={{color: 'black'}}> Log in with Facebook</Text>
       </TouchableOpacity>
      
     </View>
  )}
  </Formik>

  )
 }
 const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#dadae8',
  },
  tinyLogo: {
    width: 125,
    height: 125,
    marginLeft: 125,
    margin: 5,
    marginVertical:2
  },
  tinyimg: {
    width: 125,
    height: 125,
    marginLeft: 125,
    margin: 5,
    marginVertical:3
  },
  login:{
    height: 35,
    width: 110,
    borderWidth: 1,
    margin: 5,

    marginLeft: 130,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'green',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

    continueButton: {
        justifyContent: 'center',
        width: '60%',
        // backgroundColor: 'pink',
        //  marginTop: 2,
        borderRadius: 9,
        // borderWidth: scale(1),
        // borderColor: 'rgba(0,0,0,0.15)',
        paddingVertical: 12,
        flexDirection: 'row',
        // left: normalized.width(1.8),
      },
      linestyle: {
        borderBottomWidth: 1,
        width: '40%',
        borderColor: 'lightgray',
        marginTop: 2,
      },
      textOR: {
        color: 'black',
        fontSize: 10,
        fontWeight: '500',
      },
      lineView: {
     //   backgroundColor:'red',
        height: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop:30,
       // margin: 12,
        alignItems: 'center',
        marginBottom: 30,
      },
  t1:{
    justifyContent: 'center',
    width: '75%',
    marginTop: 10,
    borderRadius: 9,
    alignSelf:'center',
    borderColor: 'black',
    borderWidth: 1,
  //  paddingHorizontal: 10,
    color:'black',
    paddingVertical:7
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#dadae8',
  },
  tinyLogo: {
    width: 125,
    height: 125,
    marginLeft: 125,
    margin: 5,
    marginVertical:2
  },
  tinyimg: {
    width: 125,
    height: 125,
    marginLeft: 125,
    margin: 5,
    marginVertical:3
  },
  login:{
    height: 35,
    width: 110,
    borderWidth: 1,
    margin: 5,

    marginLeft: 130,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'green',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

    continueButton: {
        justifyContent: 'center',
        width: '80%',
        // backgroundColor: 'pink',
        marginTop: 15,
        borderRadius: 9,
        // borderWidth: scale(1),
        // borderColor: 'rgba(0,0,0,0.15)',
        paddingVertical: 12,
        flexDirection: 'row',
        // left: normalized.width(1.8),
      },
      linestyle: {
        borderBottomWidth: 1,
        width: '40%',
        borderColor: 'lightgray',
        marginTop: 2,
      },
      textOR: {
        color: 'black',
        fontSize: 10,
        fontWeight: '500',
      },
      lineView: {
     //   backgroundColor:'red',
        height: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop:30,
       // margin: 12,
        alignItems: 'center',
        marginBottom: 30,
      },
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 8,
  marginLeft: 30,
  marginHorizontal: 15,
  marginVertical: 7,
  backgroundColor: 'white',
},
inputStyle: {
  flex: 1,
  height: 44,
  color: 'black',
  paddingLeft: 15,
},
inputStylelock: {
  flex: 1,
  height: 44,
  color: 'black',
  paddingLeft: 5,
 // backgroundColor:'red'
},
icon: {
  marginRight: 10,
},
});
 export default Loginpage