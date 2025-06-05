'use client'

import '../../../styles/firstPage.css'
import Button from "./Button";
import { useSearchParams,useRouter } from "next/navigation";
import { Suspense,useEffect } from "react";

function EcertificatePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  useEffect(() => {
    if (!q) {
      router.replace('/noc/Ecertificate?q=NPTEL25CS75S24310149804466796');
    }
  }, [q, router]);

  return (
    <Button/>
  );
}

export default function EcertificatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EcertificatePageContent />
    </Suspense>
  );
}