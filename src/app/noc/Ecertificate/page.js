'use client'

import '../../../styles/firstPage.css'
import Button from "./Button";
import { useSearchParams,useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  useEffect(()=>{
    const q = searchParams.get('q');
    console.log(q);
    
    if(!q){
      router.push('?q=NPTEL25CS75S24310149804466796');
    }
  },[searchParams,router])

  return (
    <Button/>
  );
}