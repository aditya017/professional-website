import './SocialMedia.scss';
import { Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { handleCallClick, sendAnEmail } from '../../utils/helperFunctions.ts';

interface mediaProps {
  iconClr?: boolean;
}

const SocialMedia = ({ iconClr }: mediaProps) => {
  const redirectToLinkedIn = () => {
    const url: string = 'https://www.linkedin.com/in/aditya017/';
    window.open(url, '_blank');
  };

  /*  const redirectToInstagram = () => {
    const url = '';
    window.open(url, '_blank');
  };

  const redirectToTwitter = () => {
    const url = '';
    window.open(url, '_blank');
  };*/

  const redirectToGitHub = () => {
    const url: string = 'https://github.com/aditya017';
    window.open(url, '_blank');
  };

  return (
    <div className='socialMedia' id='socialLife'>
      <Tooltip title='Linkedin' arrow>
        <LinkedInIcon
          onClick={redirectToLinkedIn}
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            fontSize: '40px',
            color: `${iconClr ? 'white' : 'black'}`,
            cursor: 'pointer',
          }}
        />
      </Tooltip>
      {/*<Tooltip title="Instagram" arrow>
        <InstagramIcon
          onClick={redirectToInstagram}
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            fontSize: '40px',
            color: `${iconClr ? 'white' : 'black'}`,
            cursor: 'pointer',
          }}
        />
      </Tooltip>
      <Tooltip title="Twitter" arrow>
        <TwitterIcon
          onClick={redirectToTwitter}
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            fontSize: '40px',
            color: `${iconClr ? 'white' : 'black'}`,
            cursor: 'pointer',
          }}
        />
      </Tooltip>*/}
      <Tooltip title='GitHub' arrow>
        <GitHubIcon
          onClick={redirectToGitHub}
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            fontSize: '40px',
            color: `${iconClr ? 'white' : 'black'}`,
            cursor: 'pointer',
          }}
        />
      </Tooltip>
      <Tooltip title='Email' arrow>
        <EmailIcon
          onClick={sendAnEmail}
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            fontSize: '40px',
            color: `${iconClr ? 'white' : 'black'}`,
            cursor: 'pointer',
          }}
        />
      </Tooltip>
      <Tooltip title='Phone' arrow>
        <PhoneIcon
          onClick={handleCallClick}
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            fontSize: '40px',
            color: `${iconClr ? 'white' : 'black'}`,
            cursor: 'pointer',
          }}
        />
      </Tooltip>
    </div>
  );
};

export default SocialMedia;
