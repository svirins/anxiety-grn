import { SiFacebook, SiYoutube, SiGmail, SiTelegram } from 'react-icons/si';

export const SOCIALS = [
  {
    Icon: (
      <SiFacebook className="w-8 h-8 fill-gray-800 hover:fill-signal  transform  duration-150 ease-in-out  transition-all" />
    ),
    url: 'https://www.facebook.com/doktorGrin/',
    iconTitle: 'My Facebook'
  },
  {
    Icon: (
      <SiTelegram className="w-8 h-8 fill-gray-800 hover:fill-signal  transform  duration-150 ease-in-out  transition-all" />
    ),
    url: 'https://t.me/vgrean',
    iconTitle: 'My Telegram'
  },
  {
    Icon: (
      <SiYoutube className="w-8 h-8 fill-gray-800 hover:fill-signal  transform  duration-150 ease-in-out  transition-all" />
    ),
    url: 'https://www.youtube.com/channel/UCg83jkm7aM3OKTAWMoSpf2A',
    iconTitle: 'My Youtube'
  },
  {
    Icon: (
      <SiGmail className="w-8 h-8 fill-gray-800 hover:fill-signal  transform  duration-150 ease-in-out  transition-all" />
    ),
    url: 'mailto:vgrean@gmail.com',
    iconTitle: 'My Gmail'
  }
];
