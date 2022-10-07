import { useEffect } from 'react';
import { SingUpInfo } from '../SingUpInfo/SingUpInfo';
import { useDispatch, useSelector } from 'react-redux';
import { PersonalInfo } from '../PersonalInfo/PersonalInfo';
import { fetchSchema } from '../../../store/schemaSlice';

const validationPath = './data.json';

export const FormLayout = () => {
  const { isSwitched } = useSelector((state) => state.schemaReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSchema(validationPath));
  }, [dispatch]);

  return <>{!isSwitched ? <SingUpInfo /> : <PersonalInfo />}</>;
};
