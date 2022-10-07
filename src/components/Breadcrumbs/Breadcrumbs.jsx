import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useSelector } from 'react-redux';

export const MainBreadcrumbs = () => {
  const { isSwitched } = useSelector((state) => state.schemaReducer);

  return (
    <div role="presentation">
      <Breadcrumbs
        sx={{ marginTop: '80px', marginLeft: '20px' }}
        aria-label="breadcrumb"
        color="white">
        <Typography color="white">SignUpInfo</Typography>
        {isSwitched && <Typography color="white">PersonalInfo</Typography>}
      </Breadcrumbs>
    </div>
  );
};
