import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import supabase from './supabase.png';
import vercel from './vercel.png';
import figma from './figma.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import da_icon from './da-icon.png';
import ui_icon from './ui-icon.png';
import algo_icon from './algo-icon.png';
import right_arrow from './right-arrow.png';
import github_icon from './github-icon.png';
import demo_icon from './demo-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    supabase,
    vercel,
    figma,
    git,
    right_arrow_white,
    logo,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    da_icon,
    ui_icon,
    algo_icon,
    right_arrow,
    github_icon,
    demo_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const projectData = [
    {
        title: 'Hugmed',
        subtitle: 'Med-tracking Portal',
        bgImage: '/work-hugmed.png',
        skills: ['React Js', 'Node Js', 'JavaScript', 'SQL', 'PostgreSQL', 'RESTful API', 'Supabase', 'Vercel', 'AWS', 'HTML', 'CSS'],
        description: '',
        features: ['a', 'b', 'c'],
        github: '',
        demo: '',
    },
    {
        title: 'Portfolio',
        subtitle: 'My Personal Portfolio Website',
        bgImage: '/work-portfolio.png',
        skills: ['React Js', 'Next Js', 'JavaScript', 'Vercel', 'HTML', 'Tailwind CSS'],
        description: '',
        features: ['a', 'b', 'c'],
        github: 'https://github.com/dianaxuuu/personal_portfolio',
        demo: 'https://www.dianajiayuxu.com',
    },
    {
        title: 'NMA Tool - Sumitovant Biopharma',
        subtitle: 'Automated Pipeline for Data Insights',
        bgImage: '/work-nma.png',
        skills: ['Python', 'Flask', 'R', 'HTML', 'CSS', 'XML'],
        description: '',
        features: ['a', 'b', 'c'],
        github: '',
        demo: '',
    },
    {
        title: 'Newsearch',
        subtitle: 'News Search Engine',
        bgImage: '/work-newsearch.png',
        skills: ['React Js', 'Next Js', 'JavaScript', 'HTML', 'CSS', 'Firebase'],
        description: '',
        features: ['a', 'b', 'c'],
        github: '',
        demo: 'https://milestone-3-passed9-9.vercel.app',
    },
    {
        title: 'Insta485',
        subtitle: 'Instagram-like Web System',
        bgImage: '/work-insta485.png',
        skills: ['React Js', 'Flask', 'Python', 'JSON', 'SQLite', 'AWS'],
        description: '',
        features: ['a', 'b', 'c'],
        github: 'https://github.com/dianaxuuu/web-system',
        demo: '',
    },
    {
        title: 'MDP - ProQuest',
        subtitle: 'Book-award ML Prediction',
        bgImage: '/work-mdp.png',
        skills: ['Dask', 'Numpy', 'Pandas', 'Scikit-learn', 'Python', 'Jupyter Notebook'],
        description: '',
        features: ['a', 'b', 'c'],
        github: '',
        demo: '',
    },
]

export const specialtyData = [
    { icon: assets.web_icon, title: 'Web app', description: 'Developed > 5 web applications from school projects to intern tasks' },
    { icon: assets.algo_icon, title: 'Algorithm', description: 'Had solid knowledge and practical experience with object-oriented programming, data structures and algorithms' },
    { icon: assets.da_icon, title: 'Data analysis', description: 'Experienced cleaning and analyzing 10+ millions different-type raw data' },
    { icon: assets.ui_icon, title: 'UI design', description: 'Designed watch, phone, and web platforms with Figma' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'JavaScript, Python, C++, React Js, Next Js, Node Js, Flask, RESTful API, HTML, CSS, Tailwind CSS, SQL, etc. ' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: '2024 Cornell MEng in Computer Science, 2023 UMich BS in Computer Science and Data Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Including med-tracking portal, research data analysis tool, book-award ML prediction, etc.' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.supabase, assets.vercel, assets.figma, assets.git
];