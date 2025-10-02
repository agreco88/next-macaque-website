type StepTitleProps = {
  children: string;
};

export default function StepTitle({ children }: StepTitleProps) {
  return (
    <h3 className="text-xl tracking-wide transition-colors duration-300 font-thin py-6 pl-1 text-neutral-100 normal-case peer-hover:decoration-amber-600">
      {children}
    </h3>
  );
}
