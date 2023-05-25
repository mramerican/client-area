import { useDispatch, useSelector } from 'react-redux';
import { authSelector, setToken } from 'store/slices/auth';

const useToken = () => {
  const dispatch = useDispatch();

  const saveToken = (userToken) => {
    dispatch(setToken(userToken));
  };

  return {
    setToken: saveToken,
    token: useSelector(authSelector.getToken),
  };
};

export default useToken;
