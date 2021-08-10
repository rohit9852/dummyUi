// import { Http } from 'helpers/request';

// const API_V1 = '/api/v1/';
// const API_V6 = '/api-auth/v6.0/';
// const API_V5 = '/api-auth/v5/';
// const API_V4 = '/api-auth/v4/';
// const API_CURR = '/api-curr/v1/';

// function checkPhone({ phone, countryIsoCode } = {}) {
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V1}user-profile/check-phone/`,
//         payload: {
//             phone,
//             country_iso_code: countryIsoCode
//         },
//         isContentTypeJSON: true
//     });
// }

// function checkEmail({ payload: { email } = {} }) {
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V6}check-email/`,
//         payload: { email }
//     });
// }

// function passwordLogin({ payload: { countryIsoCode, username, password } = {} }) {
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V6}login/`,
//         payload: {
//             username,
//             password,
//             country_iso_code: countryIsoCode,

//         },
//         headers: {
//             'include-header-user': true
//         }
//     });
// }

// function sendOtp({ countryIsoCode, phone, isVerifyOtpSms } = {}) {
//     const payload = {
//         country_iso_code: countryIsoCode
//     };
//     if (phone) {
//         payload.phone = phone;
//     }
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V5}${isVerifyOtpSms ? 'send-verification-sms' : 'send-login-otp'}/`,
//         payload
//     });
// }

// function otpLogin({
//     payload: {
//         otp,
//         isResetPassword,
//         otpVerificationId,
//         isVerifyOtpSms,
//         countryIsoCode,
//         username
//     } = {} }) {
//     const payload = {
//         otp,
//         is_reset_password: isResetPassword,
//         country_iso_code: countryIsoCode,
//         verification_id: otpVerificationId
//     };
//     payload[isVerifyOtpSms ? 'phone' : 'username'] = username;
//     payload[isVerifyOtpSms ? 'verification_code' : 'otp'] = otp;
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V5}${isVerifyOtpSms ? 'verify-sms-code' : 'otp-login'}/`,
//         payload,
//         headers: {
//             'include-header-user': true
//         }
//     });
// }

// function forgotPassword({ payload: { email } = {} }) {
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V6}forgot-password/`,
//         payload: {
//             email
//         }
//     });
// }

// function signUp({ payload: {
//     name,
//     phone,
//     countryIsoCode,
//     email,
//     isWhatsappChecked,
//     isLaptopAvailable,
//     kidsName,
//     kidsClass,
//     schoolCode,
// } = {} }) {
//     const payload = {
//         name: name,
//         phone,
//         mail: email,
//         kids_name: kidsName,
//         kids_grade: String(kidsClass),
//         is_laptop_available: isLaptopAvailable,
//         country_iso_code: countryIsoCode,
//         is_whatsapp_notification_enabled: isWhatsappChecked,
//     };
//     if (schoolCode)
//         payload.school_code = schoolCode
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V1}user-profile/signup/`,
//         payload,
//         isContentTypeJSON: true,
//     });
// }

// function resetPassword({ payload: { token, password } = {} }) {
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V6}reset-password/`,
//         payload: {
//             token,
//             password
//         }
//     });
// }

// function jwtToken() {
//     return Http.Request({
//         methodType: 'GET',
//         url: `${API_V4}code/get-jwt-token/`
//     })
// }

// function logout() {
//     return Http.Request({
//         url: `${API_V4}logout/`
//     })
// }

// function updateUserDetails({ payload }) {
//     return Http.Request({
//         methodType: 'PUT',
//         url: `${API_V1}user-profile/user-detail/`,
//         payload,
//         sendFormData: false,
//         isContentTypeJSON: true,
//     })
// }

// function getSlots() {
//     return Http.Request({
//         methodType: 'GET',
//         url: `${API_V1}booking/demo-slots/`
//     })
// }

// function bookSlot({ payload }) {
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V1}booking/demo-slots/`,
//         payload,
//     })
// }

// function setTechSetupDoneStatus() {
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V1}user-profile/tech-setup/`,
//         payload: {
//             is_tech_setup: true,
//         }
//     })
// }

// function getHasPassword({ phone, countryIsoCode } = {}) {
//     return Http.Request({
//         methodType: 'POST',
//         url: `${API_V1}user-profile/check-phone/`,
//         payload: {
//             phone,
//             country_iso_code: countryIsoCode
//         },
//         isContentTypeJSON: true
//     });
// }

// function getFirebaseToken() {
//     return Http.Request({
//         url: `${API_CURR}projects/firebase-token/`,
//     })
// }

// module.exports = {
//     checkPhone,
//     checkEmail,
//     passwordLogin,
//     sendOtp,
//     otpLogin,
//     forgotPassword,
//     signUp,
//     resetPassword,
//     jwtToken,
//     getSlots,
//     bookSlot,
//     logout,
//     setTechSetupDoneStatus,
//     updateUserDetails,
//     getHasPassword,
//     getFirebaseToken,
// }