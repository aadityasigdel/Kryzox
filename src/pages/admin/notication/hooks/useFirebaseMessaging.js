// "use client";

// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { messaging } from "../firebase";
// // import { getToken, onMessage } from "firebase/messaging";
// import usePostData from "../../../../hooks/postData.js";

// export default function useFirebaseMessaging(active = true) {
//   const [messages, setMessages] = useState(() => {
//     const saved = localStorage.getItem("messages");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [token, setToken] = useState(() => {
//     const savedToken = localStorage.getItem("deviceToken");
//     return savedToken ? JSON.parse(savedToken) : null;
//   });

//   const { postData } = usePostData();
//   const reduxUserId = useSelector((state) => state.auth?.user?.id);
//   const userId = reduxUserId || JSON.parse(localStorage.getItem("userId"));

//   // Save Redux userId to localStorage if available
//   useEffect(() => {
//     if (reduxUserId) {
//       localStorage.setItem("userId", JSON.stringify(reduxUserId));
//     }
//   }, [reduxUserId]);

//   // Debug logs
//   useEffect(() => {
//     console.log("📌 Current userId:", userId);
//     console.log("📌 Current token:", token);
//   }, [userId, token]);

//   // Request notification permission + get FCM token
//   useEffect(() => {
//     if (!active) return;

//     const requestPermission = async () => {
//       try {
//         const permission = await Notification.requestPermission();
//         if (permission !== "granted") {
//           console.warn("🚫 Notification permission denied");
//           return;
//         }

//         const swRegistration = await navigator.serviceWorker.register(
//           "/firebase-messaging-sw.js"
//         );

//         const fcmToken = await getToken(messaging, {
//           vapidKey:
//             "BBxuVh-0uP3HvJTFJsmN2w_YD0BT0SSU_0Ut8pKihCEwVoE38-SbIEhK1IWRHOTXBxMnJovgIWkTjO7_EOJxLlI",
//           serviceWorkerRegistration: swRegistration,
//         });

//         if (!fcmToken) {
//           console.warn("⚠️ No FCM token retrieved");
//           return;
//         }

//         const storedToken = JSON.parse(localStorage.getItem("deviceToken"));
//         if (fcmToken !== storedToken) {
//           setToken(fcmToken);
//           localStorage.setItem("deviceToken", JSON.stringify(fcmToken));
//           console.log("📡 New FCM token saved:", fcmToken);
//         } else {
//           console.log("ℹ️ FCM token already exists in localStorage");
//         }
//       } catch (err) {
//         console.error("❌ Error getting FCM token:", err);
//       }
//     };

//     requestPermission();

//     // Listen for foreground messages
//     const unsubscribe = onMessage(messaging, (payload) => {
//       console.log("📩 Foreground message received:", payload);

//       const notification = payload.notification || {};
//       const data = payload.data || {};
//       const customMessage = payload.message || data.message || null;
//       const statusCode = payload.statusCode || data.statusCode || 200;

//       const title = notification.title || data.title || `Status ${statusCode}`;
//       const body =
//         notification.body || data.body || customMessage || "You have a new message";

//       const newMessage = { title, body, statusCode, timestamp: Date.now() };

//       setMessages((prev) => {
//         const updated = [...prev, newMessage];
//         localStorage.setItem("messages", JSON.stringify(updated));
//         return updated;
//       });

//       if (title || body) {
//         new Notification(title, { body, icon: "/firebase-logo.png" });
//       }
//     });

//     return () => unsubscribe();
//   }, [active]);

//   // Send FCM token to server only once per user
//   useEffect(() => {
//     if (!token || !userId) return;

//     const sentFlagKey = `fcmTokenSentForUser_${userId}`;
//     const alreadySent = localStorage.getItem(sentFlagKey);

//     if (alreadySent) {
//       console.log("ℹ️ FCM token already sent for this user. Skipping...");
//       return;
//     }

//     const sendTokenToServer = async () => {
//       try {
//         const response = await postData(`wpc/user/${userId}`, {
//           subscriptionToken: token,
//         });
//         console.log(`✅ Token sent successfully for user ${userId}`, response);

//         // Mark as sent in localStorage
//         localStorage.setItem(sentFlagKey, "true");
//       } catch (err) {
//         console.error(`❌ Failed to send token for user ${userId}:`, err);
//       }
//     };

//     sendTokenToServer();
//   }, [token, userId, postData]);

//   return { messages, token };
// }

const useFirebaseMessaging=()=>{
  return{};
}
export default useFirebaseMessaging;