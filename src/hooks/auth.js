import { useDispatch, useSelector } from 'react-redux';
import { authSelector, setToken } from 'store/slices/auth';
import { setToken as setTokenUtils } from 'utils/auth';

const useToken = () => {
  const dispatch = useDispatch();

  const saveToken = (userToken, isRemember) => {
    dispatch(setToken(userToken));
    if (isRemember) {
      setTokenUtils(userToken);
    }
  };

  return {
    setToken: saveToken,
    token: useSelector(authSelector.getToken),
  };
};

export default useToken;
