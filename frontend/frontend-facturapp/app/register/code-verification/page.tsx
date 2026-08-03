'use client';

import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';
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

        router.push('./confirm-account');
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-10">
                <EnvelopeOpenIcon className={`h-16 w-16 ${styles.icon_color}`} />
                <p className={`text-sm mt-5 ${styles.primary_color_text}`}>Enviamos un código de 6 dígitos a</p>
                <p className={`text-sm ${styles.primary_color_text}`}>ponercorreo@gmail.com</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row gap-3 items-center justify-center mb-5">
                        <input className={`${styles.input} ${styles.input_number_code}`} type="number"  name="num-1" min="0" max="9" maxLength={1} />
                        <input className={`${styles.input} ${styles.input_number_code}`} type="number"  name="num-2" min="0" max="9" maxLength={1} />
                        <input className={`${styles.input} ${styles.input_number_code}`} type="number"  name="num-3" min="0" max="9" maxLength={1} />
                        <input className={`${styles.input} ${styles.input_number_code}`} type="number"  name="num-4" min="0" max="9" maxLength={1} />
                        <input className={`${styles.input} ${styles.input_number_code}`} type="number"  name="num-5" min="0" max="9" maxLength={1} />
                        <input className={`${styles.input} ${styles.input_number_code}`} type="number"  name="num-6" min="0" max="9" maxLength={1} />
                </div>
                <p className={`text-sm ${styles.primary_color_text} text-center`}>¿No llega el código? <span className={`${styles.icon_color} underline`}>Reenviar en 0:45</span> </p>
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 mt-10">
                    <div></div>
                    <button className={`${styles.button_color} w-full rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-600 md:text-base`} type="submit" onClick={handleButton}>Verificar cuenta</button>
                    <div></div>
                </div>
            </form>
        </div>
    );
}