import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import AppRoutes from './routes';

function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
