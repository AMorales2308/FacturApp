import { GlobeAltIcon } from '@heroicons/react/24/outline';
import '@/app/ui/css/modules.css'
import Image from 'next/image';

export default function FacturAppLogo() {
  return (
    <div className="flex flex-row items-center leading-none color-text space-x-2 ">
      <Image 
        src="/logo-icono.svg" 
        alt="FacturApp Logo" 
        width={500}
        height={500}
        className="w-full h-full"
      />
      <p className="text-xl w-2/3">FacturApp</p>
    </div>
  );
}
