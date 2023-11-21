import { Backdrop, CircularProgress, Theme } from '@mui/material';

const BackGroundSpinner = () => {
  return (
    <div>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <CircularProgress color='inherit' size={100} />
      </Backdrop>
    </div>
  );
};

export default BackGroundSpinner;
