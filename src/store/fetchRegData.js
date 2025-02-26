// import axios from "axios";
// import { cartActions } from "./cartSlice";
// import { uiActions } from "./uiSlice";
// import { logiActions } from "./loginSlice";

// export const fetchRegData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const res = await axios.get(
//         "https://register-login-96cee-default-rtdb.firebaseio.com/register.json"
//       );
//       const data = await res.data;
//       return data;
//     };
//     try {
//       const regData = await fetchData();

//       dispatch(cartActions.replaceCart(regData));
//     }
//     catch (err) {
//         // dispatch(logiActions.logiIn)
//       }
//   };
// };
