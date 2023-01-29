import oliveOilImg from '../Assets/oliveoil-720.png'
import BlackCuminOilImg from '../Assets/কালোজিরার-তেল.png'
import GheeImg from '../Assets/ঘি.jpg'
import boroifulerhoneyimg from '../Assets/বরই-ফুলের-মধু.png'
import LycheeFlowerHoneyImg from '../Assets/লিচু-ফুলের-মধু.png'
import SundarbansHoneyImg from '../Assets/সুন্দরবনের-মধু.png'
import kalojiraHoneyImg from '../Assets/কালোজিরার-মধু.png'


const productList = [
   
    {
        id: 1,
        type: 'Honey',
        image: SundarbansHoneyImg,
        alt: 'সুন্দরবনের মধু (Sundarbans Honey)',
        title: 'সুন্দরবনের মধু',
        description: 'আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত সুন্দরবনের মধু',
        prevAmount: '1500',
        curAmount: '1200'
    },
    {
        id: 2,
        type: 'Ghee',
        image: GheeImg,
        alt: 'গাওয়া ঘি (Ghee)',
        title: 'গাওয়া ঘি',
        description: 'আমাদের নিজস্ব কর্মী দ্বারা বানানো সুস্বাদু ঘি',
        prevAmount: '1600',
        curAmount: '1500'
    },
    {
        id: 3,
        type: 'oil',
        image: BlackCuminOilImg,
        alt: 'কালোজিরার তেল (Black cumin oil)',
        title: 'কালোজিরার তেল',
        description: 'আমাদের ফ্যাক্টরিতে বানানো কালোজিরার তেল',
        prevAmount: '170',
        curAmount: '150'
    },
    {
        id: 4,
        type: 'Honey',
        image: LycheeFlowerHoneyImg,
        alt: 'লিচু ফুলের মধু (Lychee flower honey)',
        title: 'লিচু ফুলের মধু',
        description: 'আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত সুন্দরবনের মধু',
        prevAmount: '700',
        curAmount: '600'
    },
    {
        id: 5,
        type: 'Honey',
        image: boroifulerhoneyimg,
        alt: 'বরই ফুলের মধু (Plum blossom honey)',
        title: 'লিচু ফুলের মধু',
        description: 'আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত বরই মধু',
        prevAmount: '700',
        curAmount: '600'
    },
    {
        id: 6,
        type: 'oil',
        image: oliveOilImg,
        alt: 'অলিভওয়েল (olive oil)',
        title: 'অলিভওয়েল',
        description: 'আপনার ত্বককে সতেজ ও সুন্দর রাখতে সরাসরি স্পেন থেকে আগত অলিভ‌ওয়েল।',
        prevAmount: '1600',
        curAmount: '1500'
    },
    {
        id: 7,
        type: 'Honey',
        image: kalojiraHoneyImg,
        alt: 'কালোজিরার মধু (Black cumin honey)',
        title: 'কালোজিরার মধু',
        description: 'আমাদের নিজস্ব কর্মী দ্বারা সংগৃহীত কালোজিরার মধু',
        prevAmount: '1600',
        curAmount: '1500'
    },
  
]

export default productList
