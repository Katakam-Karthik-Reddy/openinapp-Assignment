// "use client";
// import React, { useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useRouter } from "next/navigation";

// interface props {
//   children: React.ReactNode;
// }
// const Authroute: React.FC<props> = (props) => {
//   const { children } = props;
//   const auth = getAuth();
//   const [loading, setloading] = useState(false);
//   const Router = useRouter();

//   useEffect(() => {
//     authcheck();
//     console.log("auth");
//     return () => authcheck();
//   }, [auth]);
//   console.log("dfjskdl");
//   const authcheck = onAuthStateChanged(auth, (user) => {
//     console.log(user);
//     if (user) {
//       setloading(false);
//     } else {
//       console.log("unauth");
//       Router.push("/Login");
//     }
//   });
//   return <>{children}</>;
// };

// export default Authroute;
