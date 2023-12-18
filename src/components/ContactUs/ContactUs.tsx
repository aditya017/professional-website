import './ContactUs.scss';
import SocialMedia from '../SocialMedia';
import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import NavBar from '../NavBar';
import BackGroundSpinner from '../BackGroundSpinner';
import { IContactDetails } from '../../utils/modals.ts';

const ContactUs = () => {
  let timerId: NodeJS.Timeout | null = null;
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<IContactDetails>({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setLoading(true);
    timerId = setTimeout(() => {
      setLoading(false);
      handleClickOpen();
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePhoneInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    let formattedValue = value.replace(/[^\d]/g, '');
    if (formattedValue.length > 3 && formattedValue.length <= 6) {
      formattedValue =
        formattedValue.slice(0, 3) + '-' + formattedValue.slice(3);
    } else if (formattedValue.length > 6) {
      formattedValue =
        formattedValue.slice(0, 3) +
        '-' +
        formattedValue.slice(3, 6) +
        '-' +
        formattedValue.slice(6, 10);
    }
    event.target.value = formattedValue;
  };

  const ErrorDialog = () => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            {'Oops Something Went Wrong!'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Thank you <strong>{userData.firstName} </strong>{' '}
              <strong>{userData.lastName} </strong>for contacting. If you feel
              its urgent. Please contact me via my email
              <strong> adityareddy597@gmail.com</strong> or my phone Number
              <strong> (515)-992-6592.</strong>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  const onSubmit = (data: any) => {
    setUserData(data);
    handleClick();
  };

  return (
    <div className='cntBgClr'>
      <NavBar linkClr={true} />
      {loading ? <BackGroundSpinner /> : null}
      <Container maxWidth='md' sx={{ padding: '60px' }}>
        <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 700 }}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item lg={6} sm={6} xs={12}>
              <Controller
                name='firstName'
                control={control}
                defaultValue=''
                rules={{ required: 'First name is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='First Name'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    error={!!errors.firstName}
                    helperText={
                      errors.firstName?.message
                        ? errors.firstName.message.toString()
                        : ''
                    }
                  />
                )}
              />
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Controller
                name='lastName'
                control={control}
                defaultValue=''
                rules={{ required: 'Last name is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Last Name'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    error={!!errors.lastName}
                    helperText={
                      errors.lastName?.message
                        ? errors.lastName.message.toString()
                        : ''
                    }
                  />
                )}
              />
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Controller
                name='phoneNumber'
                control={control}
                rules={{
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                    message: 'Invalid phone number format',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    onChange={(e) => {
                      handlePhoneInputChange(e);
                      field.onChange(e); // Important to update form state
                    }}
                    label='Phone Number'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    error={!!errors.phoneNumber}
                    helperText={
                      errors.phoneNumber?.message
                        ? errors.phoneNumber.message.toString()
                        : ''
                    }
                  />
                )}
              />
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Controller
                name='email'
                control={control}
                defaultValue=''
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Enter a valid email address',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Email'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    error={!!errors.email}
                    helperText={
                      errors.email?.message
                        ? errors.email.message.toString()
                        : ''
                    }
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Submit
          </Button>
        </form>
      </Container>
      <SocialMedia iconClr={false} />
      <ErrorDialog />
    </div>
  );
};

export default ContactUs;
