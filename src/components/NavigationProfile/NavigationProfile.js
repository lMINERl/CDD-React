import logo from '../../assets/logo.svg';
import { ProfileDefault } from '../../stories/ProfileMenu.stories';
const NavigationProfile = props => {
  return ProfileDefault(
    {
      name: 'Mohamed',
      img: logo,
      menu: [
        {
          name: 'Profile',
          navigation: '/',
          fontawesomeIcon: 'fa fa-suitcase'
        },
        {
          name: 'Settings',
          navigation: '/',
          fontawesomeIcon: 'fa fa-cog'
        },
        {
          name: 'Logout',
          navigation: '/',
          fontawesomeIcon: 'fa fa-exclamation-circle'
        }
      ]
    },
    'dark'
  );
};

export default NavigationProfile;
