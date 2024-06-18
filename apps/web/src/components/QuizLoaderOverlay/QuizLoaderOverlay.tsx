import { Flex, Text } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { WaveLines } from './WaveLines';

type QuizLoaderOverlayProps = {
  loading: boolean;
}

export const QuizLoaderOverlay: FC<QuizLoaderOverlayProps> = ({ loading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.25 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        pointerEvents: loading ? 'auto' : 'none',
      }}
    >
      <WaveLines />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.9, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        <Flex direction="column" gap="4" align="center">
          <Text size="9" className='z-50'>
            SkillSync
          </Text>
        </Flex>
      </motion.div>
    </motion.div>
  );
};
