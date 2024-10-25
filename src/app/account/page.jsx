"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/context/auth";
import LoginComponent from "@/components/login-component";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoadingSpinner = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
  </div>
);

const Page = () => {
  const { user, loading, handleLogout } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [loading, user, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return null; // or a fallback UI
  }

  return (
    <div className="">
      <LoginComponent 
      name={user.name}
      email={user.email}/>
    </div>
  );
};

export default Page;

// import React from 'react'
// import { checkLoggedIn } from '@/lib/auth'
// import { useEffect,useState } from 'react';

// const page = () => {

//  const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await checkLoggedIn();
//       setUser(data);
//     };

//     fetchData();
//   }
//   , []);

//   return (
//     <div>
//         <h1>Account</h1>
//         <div className="">
//             {JSON.stringify(user)}
//         </div>
//     </div>
//   )
// }

// export default page