'use client';

interface Step {
  id: number;
  label: string;
}

interface StepperProps {
  currentStep: number;
}

const steps: Step[] = [
  { id: 1, label: 'Datos' },
  { id: 2, label: 'Verificación' },
  { id: 3, label: 'Listo' },
];

export default function Stepper({ currentStep = 1 }: StepperProps) {
  return (
    <div className="flex items-center gap-3 p-6 rounded-lg text-sm select-none">
      {steps.map((step, index) => {
        const isCompleted = step.id < currentStep;
        const isActive = step.id === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="flex items-center gap-3">
            {/* 1. Círculo (Número o Check) */}
            <div
              className={`size-8 rounded-full flex items-center justify-center font-medium transition-colors ${
                isCompleted || isActive
                  ? 'bg-emerald-700 text-white'
                  : 'border border-zinc-600 text-zinc-400 bg-transparent'
              }`}
            >
              {isCompleted || step.id === 3 ? (
                /* Ícono de Check ✓ */
                <svg
                  className="w-4 h-4 stroke-[2.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                <span>{step.id}</span>
              )}
            </div>

            {/* 2. Etiqueta / Texto del paso */}
            <span
              className={`${
                isActive
                  ? 'text-white font-medium'
                  : isCompleted
                  ? 'text-zinc-300'
                  : 'text-zinc-400'
              }`}
            >
              {step.label}
            </span>

            {/* 3. Línea conectora horizontal */}
            {!isLast && (
              <div
                className={`w-10 h-[1px] ${
                  isCompleted ? 'bg-emerald-700' : 'bg-zinc-700'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}