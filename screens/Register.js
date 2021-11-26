import React, { useState } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";
import { Formik } from "formik";
import Swipable from "react-native-gesture-handler/Swipeable";



const deleteAction = () => {
 return (
  <TouchableOpacity onPress={()=> alert(22)} style={{transform:'translatex(100px)'}}>
   <View
    style={{
     backgroundColor: "tomato",
     width: 100,
     height: "100%",
     justifyContent: "end",
     alignItems: "end",
    }}>
    <MaterialCommunityIcons name="trash-can" size={35} color="#fff"/>
   </View>
  </TouchableOpacity>
 );
};



const validationSchema = Yup.object().shape({
 fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
 email: Yup.string()
  .required("این فیلد الزامی می باشد")
  .email("ایمیل معتبر نمی باشد"),
 password: Yup.string()
  .required("این فیلد الزامی می باشد")
  .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
 passwordConfirmation: Yup.string()
  .required("تکرار کلمه عبور الزامی می باشد")
  .oneOf([Yup.ref("password"), null], "کلمه های عبور باید یکسان باشند"),
});

const Register = () => {

 return (
  <View style={styles.val}>
   <View style={styles.con1}>
    <Text style={styles.text1} >ثبت نام</Text>
   </View>



   <Formik initialValues={{ fullname: "", email: "", password: "" }}
    onSubmit={(values) => console.log(values)} validationSchema={validationSchema}>
    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
     <>
      <View style={styles.container}>
       <Swipable renderRightActions={deleteAction}>
       <TextInput
        placeholder='نام'
        autoCompleteType="text"
        autoCorrect={false}
        keyboardType="text"
        style={styles.textInput}
        placeholderTextColor="royalblue"
        onChangeText={handleChange("fullname")}
        onBlur={() => setFieldTouched("fullname")}
       />
   </Swipable>
       <MaterialCommunityIcons name='book' size={20} color="#6e6969" style={styles.icon} />
      </View>

      {errors.fullname && touched.fullname && <Text style={{ color: 'red' }}>{errors.fullname}</Text>}


      <View style={styles.container}>
       <TextInput
        placeholder="ایمیل کاربری"
        autoCompleteType="email"
        autoCorrect={false}
        keyboardType="email-address"
        style={styles.textInput}
        placeholderTextColor="royalblue"
        onChangeText={handleChange("email")}
        onBlur={() => setFieldTouched("email")}
       />
       <MaterialCommunityIcons name='email' size={20} color="#6e6969" style={styles.icon} />

      </View>
      {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}


      <View style={styles.container}>
       <TextInput
        placeholder="کلمه عبور"
        autoCompleteType="password"
        autoCorrect={false}
        style={styles.textInput}
        placeholderTextColor="royalblue"
        secureTextEntry
        onChangeText={handleChange("password")}
        onBlur={() => setFieldTouched("password")}
       />
       <MaterialCommunityIcons name='eye' size={20} color="#6e6969" style={styles.icon} />

      </View>
      {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}


      <View style={{ width: "60%", alignSelf: 'center', marginTop: 55, borderRadius: 10 }}>
       <Button title="ورود کاربر" color='yellowgreen' onPress={handleSubmit} />
      </View>

     </>
    )}
   </Formik>
  </View>
 )
};


export default Register;

const styles = StyleSheet.create({
 container: {
  flexDirection: 'row',
  justifyContent: "space-between",
  flexWrap: "wrap",
  backgroundColor: "#fff",
  width: "75%",
  borderRadius: 20,
  padding: 9,
  alignSelf: 'center',
  marginTop: 30,
  border: '1px solid silver'
 },
 icon: {
  // alignSelf: "center",
  marginTop: 8
 },
 val: {
  overflow: 'hidden',
  width: '90%',
  height: '90%',
  border: '1px solid silver',
  alignSelf: 'center',
  marginTop: 25,
  borderRadius: 10,
  backgroundImage: "linear-gradient(to right, #33000005, #0c0cff05)",

 },
 text1: {
  fontSize: RFPercentage(2),
  textAlign: 'center',
 },
 con1: {
  marginTop: 60
 },
 text: {
 },
 textInput: {
  width: "90%",
  // height: 50,
  // backgroundColor: "lightgray",
  borderRadius: 10,
  textAlign: "left",
  fontFamily: "yekan",
  fontSize: 18,
  padding: 5
 },
});
