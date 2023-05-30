import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import throttle from 'lodash.throttle';

import { setViewMode } from 'store/slices/viewMode';
import { getViewMode } from 'utils/viewMode';

const useResizeViewMode = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const debouncedHandleResize = throttle(() => {
      dispatch(setViewMode(getViewMode(window.innerWidth)));
    }, 1000);
    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [dispatch]);
};

export default useResizeViewMode;
