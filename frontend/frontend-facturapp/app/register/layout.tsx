'use client';

import SideRegister from '@/app/ui/register/side-register';
import Stepper from '@/app/ui/register/Stepper';
import { inter } from '@/app/ui/fonts';
import '@/app/ui/css/modules.css'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  let currentStep = 1;

  if (pathname.includes('/code-verification')) currentStep = 2;
  if (pathname.includes('/confirm-account')) currentStep = 3;

  return (
    <div className= {`${inter.className} flex h-screen flex-col md:flex-row md:overflow-hidden`}>
      <div className="w-full flex-none md:w-1/5">
        <SideRegister />
      </div>
      <div className="grow p-6 md:p-12 color-back-form">
        <div className="flex flex-col items-center justify-center gap-3">
            <Image 
                src="/logo-icono.svg" 
                alt="FacturApp Logo" 
                width={500}
                height={500}
                className=" h-8 w-8"
            />
            <p className="color-text text-xl font-bold">Crea tu cuenta</p>
            <p className="color-text">Sistema de facturación e inventario</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-3">
            <Stepper currentStep={currentStep} />
        </div>
        <div className="grow p-6 md:pt-[4rem]  md:px-[12rem]">
            {children}
        </div>
      </div>
        
    </div>
  );
}