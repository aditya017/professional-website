import './RollOver.scss';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';

const RollOver = () => {
  const words = ['HTML', 'CSS', 'JavaScript', 'ReactJs'];
  const duration = 1000;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='centered-container'>
      <div>
        <CodeIcon sx={{ mr: 1, ml: 1, cursor: 'pointer' }} />
      </div>
      <div className='centered-content'>
        <AnimatePresence>
          <motion.div
            className='rolling-text'
            key={currentWordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {words[currentWordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RollOver;
