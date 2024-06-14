import { motion } from 'framer-motion';

export const WaveLines = () => {
  const lines = Array.from({ length: 5 }, (_, i) => (
    <motion.path
      key={i}
      d={`M0,${50 - (i < 5 ? 150 : 0) + i * 10} C150,${200 - (i < 5 ? 150 : 0) + i * 10} 350,${0 - (i < 5 ? 150 : 0) + i * 10} 500,${100 - (i < 5 ? 150 : 0) + i * 10} S700,${150 - (i < 5 ? 150 : 0) + i * 10} 800,${50 - (i < 5 ? 150 : 0) + i * 10}`}
      stroke={`url(#gradient${i})`}
      strokeWidth="2"
      fill="transparent"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", delay: i * 0.2 }}
    />
  ));

  const gradients = Array.from({ length: 10 }, (_, i) => (
    <linearGradient id={`gradient${i}`} key={i} gradientTransform={`rotate(${i * 36})`}>
      <stop offset="0%" stopColor="#57FFDC" />
      <stop offset="100%" stopColor="#0097EE" />
    </linearGradient>
  ));

  return (
    <svg width="100%" height="100%" viewBox="0 -10 800 2" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
      <defs>{gradients}</defs>
      {lines}
    </svg>
  );
};
