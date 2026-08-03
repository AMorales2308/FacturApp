import { CheckIcon } from '@heroicons/react/24/outline';
import FacturAppLogo from '@/app/ui/facturapp-logo';
import '@/app/ui/css/modules.css'

export default function SideNav() {
  return (
    <div className="flex h-full justify-center flex-col px-3 py-4 md:px-2 back-color w-full">
      <div className="w-32 text-white md:w-40 px-8">
        <FacturAppLogo />
      </div>
      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 pt-12 px-8">
        <div className="flex flex-col space-y-2">
          <p className="color-text text-3xl">Factura e inventario en un solo lugar</p>
          <p className="color-text-sm text-lg">Crea tu cuenta empresarial y empieza a emitir facturas y controlar stock.</p>
        </div>
        
        <div className="flex flex-col space-y-2 text-lg color-text">
          <div className="flex flex-row space-x-2">
            <CheckIcon className="flex h-6 w-6" />
            <p className="color-text">Facturación</p>
          </div>
          <div className="flex flex-row space-x-2">
            <CheckIcon className="flex h-6 w-6" />
            <p className="color-text">Control de inventario</p>
          </div>
        </div>
      </div>
    </div>
  );
}
