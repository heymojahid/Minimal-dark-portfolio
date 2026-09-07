import { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <section className={`container mx-auto max-w-full sm:max-w-[640px] md:max-w-[840px] lg:max-w-[960px] xl:max-w-[1020px] px-4 font-sans ${className}`}>
      {children}
    </section>
  );
};

export default Container;
