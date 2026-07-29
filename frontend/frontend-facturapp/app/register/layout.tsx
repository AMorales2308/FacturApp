import SideRegister from '@/app/ui/register/side-register';
import { inter } from '@/app/ui/fonts';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className= {`${inter.className} flex h-screen flex-col md:flex-row md:overflow-hidden`}>
      <div className="w-full flex-none md:w-1/5">
        <SideRegister />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12 color-back-form items-center justify-center flex flex-col">

      </div>
        {children}
    </div>
  );
}