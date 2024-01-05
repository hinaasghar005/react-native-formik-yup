import React,{useState} from "react";
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
  import { Formik } from "formik";
  import * as Yup from 'yup';
//   import { Icon } from "react-native-elements";
  import Icon from 'react-native-vector-icons/FontAwesome';
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, 'Username must be at least 4 characters')
      .max(20, 'Username must not exceed 20 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email')
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        'Invalid email'
      )
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handlePassPress = (enteredPassword) => {
   // Dispatching email to Redux
    navigation.navigate('Home'); // Navigate to Home screen or any other screen
    console.log('Email:');
    console.log('Password:');
  };
const Signuppage =()=>{
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log(values);
      };
    return(
        <Formik
        initialValues={{
          email: '',
          username:'',
          password:'',
          confirmPassword:''
        }}
     //   validateOnMount={true}
        validationSchema={validationSchema}
        onSubmit={values => handleSubmit(values)}>
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
   
        <Text
          style={{
            color: 'green',
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 135,
            marginVertical: 30,
            marginBottom:15
          }}>
          Sign Up
        </Text>
        <Image style={styles.tinyLogo} source={require('../../../../asset/images/fls.jpg')} />
       {/* <Image style={styles.tinyimg} source={require('./asset/images/fls.jpg')}/> */}
        <Text
          style={{
            color: 'black',
            marginLeft: 20,
            margin: 5,
            fontSize: 17,
          }}>
          Please fill in this form to create an account!
        </Text>
        <View style={ styles.inputContainer}>
        
        <TextInput
         placeholder=" Username"
         placeholderTextColor="black"
         
         keyboardType="default"
         onChangeText={handleChange('username')}
         value={values.username}
        //  onBlur={() => setFieldTouched('username')}

          style={styles.inputStyle}/>
          </View>
          <View style={{paddingHorizontal:50}}>
          {errors.username && touched.username && (
              <Text style={{color: 'red'}}>{errors.username}</Text>
            )}
</View>
    
    <View style={styles.inputContainer}>
 
        <TextInput 
        placeholder="Email"
        placeholderTextColor='black'
        onChangeText={handleChange('email')}
       // onBlur={handleBlur('email')}
        value={values.email}
          style={styles.inputStyle}/>
          </View>
          <View style={{paddingHorizontal:50}}>
          {errors.email && touched.email && (
              <Text style={{color: 'red'}}>{errors.email}</Text>
            )}
</View>
<View style={styles.inputContainer}>
<TouchableOpacity onPress={() => setShowPassword(!showPassword)}> 
<Icon name={showPassword ? 'eye' : 'eye-slash'}
 size={20} color="black" style={[styles.icon,{marginLeft:5}]} />
 </TouchableOpacity>
        <TextInput 
        placeholder="Password"
        placeholderTextColor="black"
     secureTextEntry={!showPassword}
      

        onChangeText={handleChange('password')}
        value={values.password}
        // onBlur={() => setFieldTouched('password')}
      
          style={styles.inputStylelock}/>
          </View>
                 <View style={{paddingHorizontal:50}}>
  {errors.password && touched.password && (
              <Text style={{ color: 'red' }}>{errors.password}</Text>
            )}
 </View>
        <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}> 
<Icon name={showPassword ? 'eye' : 'eye-slash'}
 size={20} color="black" style={[styles.icon,{marginLeft:5}]} />
 </TouchableOpacity>
        <TextInput
        placeholder="Confirm Password"
        secureTextEntry={!showPassword}
        placeholderTextColor='black'
        onChangeText={handleChange('confirmPassword')}
        // onBlur={handleBlur('confirmPassword')}
        value={values.confirmPassword}
          style={styles.inputStylelock}/>
          </View>
        <View style={{paddingHorizontal:50}}>
  {errors.confirmPassword && touched.confirmPassword && (
              <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>
            )}
 </View>
    <View style={{marginTop:10}}>  
         <Text
          style={{
            color: 'black',
            marginLeft: 20,
            fontSize: 15,
          }}>
          By signing up you accept our
          <Text style={{color: 'blue', textDecorationLine:'underline'}}>Term Of Use!</Text>
        </Text></View>
       
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
               text={'Sign Up'}
              
             onPress={handleSubmit}
             />
        
      
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
export default Signuppage

