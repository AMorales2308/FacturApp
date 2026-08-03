'use client';

import styles from '@/app/ui/css/form.module.css'
import {useRouter} from 'next/navigation';

export default function Page() {
    const router = useRouter();

    function handleButton() {
        console.log('Button clicked');
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('Form submitted');

        router.push('register/code-verification');
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <label className={styles.label} htmlFor="name">Nombre de la empresa</label>
                    <input className={styles.input} type="text" name="name-company" placeholder="Nombre de la empresa" />
                </div>
                <div className="grid grid-cols-[2fr_1fr_2fr] gap-2">
                    <div className="flex flex-col gap-1">
                        <label className={styles.label}  htmlFor="Nit">NIT</label>
                        <input className={styles.input} type="text" name="Nit" placeholder="NIT" />
                    </div>
                    <div></div>
                    <div className="flex flex-col gap-1">
                        <label className={styles.label} htmlFor="phone">Teléfono</label>
                        <input className={styles.input} type="tel" name="phone" placeholder="Teléfono" />
                    </div>
                </div>
                
                <div className="flex flex-col gap-1">
                    <label className={styles.label} htmlFor="email">Correo electrónico</label>
                    <input className={styles.input} type="email" name="email" placeholder="Correo electrónico" />
                </div>

                <div className="grid grid-cols-[2fr_1fr_2fr] gap-2">
                    <div className="flex flex-col gap-1">
                        <label className={styles.label} htmlFor="password">Contraseña</label>
                        <input className={styles.input} type="password" name="password" placeholder="Contraseña" />
                    </div>
                    <div></div>
                    <div className="flex flex-col gap-1">
                        <label className={styles.label} htmlFor="confirm-password">Confirmar contraseña</label>
                        <input className={styles.input} type="password" name="confirm-password" placeholder="Confirmar contraseña" />
                    </div>
                </div>              
            </div>
            
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 mt-10">
                <div></div>
                <button className={`${styles.button_color} mt-6 w-full rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-600 md:text-base`} type="submit" onClick={handleButton}>Continuar</button>
                <div></div>
            </div>
            
        </form>
    );
}