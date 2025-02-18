import { TextLoop } from "./ui/text-loop";

export function TextLoopCustomVariantsTransition() {
  return (
    <p className='inline-flex whitespace-pre-wrap text-sm'>
      Criamos soluções{' '}
      <TextLoop
        className='overflow-y-clip'
        transition={{
          type: 'spring',
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: 'blur(4px)',
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: 'blur(0px)',
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: 'blur(4px)',
          },
        }}
      >
        <span>com animações GSAP</span>
        <span>landing pages incríveis</span>
        <span>sites modernos</span>
        <span>com Framer Motion</span>
        <span>interfaces dinâmicas</span>
      </TextLoop>
    </p>
  );
}
