import { useRouter } from "next/router";
import { useEffect } from "react";
import tokenService from '../src/services/auth/tokenService';
import HttpClient from '../src/infra/HttpClient/HttpClient';

export default function LogoutPage() {
  const router = useRouter();
  useEffect(async() => {
    try{
      await HttpClient('/api/refresh', {
        method: 'DELETE',
      });
      tokenService.delete()
      router.push("/");
      console.log('oi')

    }catch(e){
      console.log(e);
    }

  }, []);

  return <div>Redirecionando...</div>;
}
