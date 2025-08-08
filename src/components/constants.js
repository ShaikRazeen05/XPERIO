// Color and animation constants for Translator and related components
export const COLORS = {
  darkBg: '#1e1f1f',
  lightBg: '#f5f3f0',
  darkText: '#4b4b4b',
  tipsSectionBg: '#bcb2d3',
};

export const ANIMATION = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  },
  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  },
  tabButtonVariants: {
    rest: { scale: 1, backgroundColor: COLORS.lightBg, color: COLORS.darkText },
    hover: { scale: 1.05, backgroundColor: '#eae7e2' },
    active: { scale: 1, backgroundColor: COLORS.darkBg, color: '#ffffff' },
  },
}; 