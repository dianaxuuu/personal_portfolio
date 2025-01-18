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
import img_left_arrow from './img-left-arrow.png';
import img_right_arrow from './img-right-arrow.png';
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
    img_left_arrow,
    img_right_arrow,
    github_icon,
    demo_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const projectData = [
    {
        title: 'Hugmed',
        subtitle: 'Med-tracking Portal | Startup Project | Jan 2024 - Present',
        bgImage: ['/work-hugmed1.png', '/work-hugmed2.png', '/work-hugmed3.png', '/work-hugmed4.png', '/work-hugmed5.png', '/work-hugmed6.png', '/work-hugmed7.png'],
        skills: ['React Js', 'Node Js', 'JavaScript', 'SQL', 'PostgreSQL', 'RESTful API', 'Supabase', 'Vercel', 'AWS', 'HTML', 'CSS'],
        description: '',
        features: ['Sign-In / Sign-up: A whole set of secure sign-in & sign-up with required HIPAA consent form',
            'Email Verification: Identity confirmation via secure SMTP link',
            'Medication Dashboard: Displays medications, logs, and statistics',
            'Medication Management: Add, delete, or update medication details',
            'Weekly Reports: Visualizes adherence with downloadable PDFs',
            'Help Center: Searchable FAQs with instructional videos',
            'Settings Page: Update profile and manage data-sharing preferences with caregivers'
        ],
        github: '',
        demo: '',
    },
    {
        title: 'Portfolio',
        subtitle: 'My Personal Portfolio Website | Personal Project | Jan 2025 - Present',
        bgImage: ['/work-portfolio1.png', '/work-portfolio2.png', '/work-portfolio3.png'],
        skills: ['React Js', 'Next Js', 'JavaScript', 'Vercel', 'HTML', 'Tailwind CSS'],
        description: '',
        features: ['Responsive design ensuring seamless functionality across mobile and desktop devices',
            'Image carousel for showcasing projects with smooth transitions',
            'Interactive hover animations enhancing user engagement with modules',
            'Adaptive hamburger menu and side navigation bar for compact screens',
            'Intuitive navigation with tags directing users to specific page sections',
        ],
        github: 'https://github.com/dianaxuuu/personal_portfolio',
        demo: 'https://www.dianajiayuxu.com',
    },
    {
        title: 'NMA Tool - Sumitovant Biopharma',
        subtitle: 'Automated Pipeline for Data Insights | Intern Project | May 2022 - Aug 2022',
        bgImage: ['/work-nma1.png', '/work-nma2.png', '/work-nma3.png'],
        skills: ['Python', 'Flask', 'R', 'HTML', 'CSS', 'XML'],
        description: '',
        features: ['Extract and process data from hundreds of ClinicalTrials.gov XML files',
            'Predict and standardize treatment names to align with the Cortellis drug list',
            'Automate the generation of comprehensive Network Meta-Analysis reports in one click'
        ],
        github: '',
        demo: '',
    },
    {
        title: 'Newsearch',
        subtitle: 'News Search Engine | School Project | Aug 2023 - Dec 2023',
        bgImage: ['/work-newsearch1.png', '/work-newsearch2.png', '/work-newsearch3.png'],
        skills: ['React Js', 'Next Js', 'JavaScript', 'HTML', 'CSS', 'Firebase'],
        description: '',
        features: ['Search functionality to retrieve New York Times articles by keywords',
            'Dedicated user portal for saving and managing favorite articles',
            'Provide redirection options to access the original news source'
        ],
        github: '',
        demo: 'https://milestone-3-passed9-9.vercel.app',
    },
    {
        title: 'Insta485',
        subtitle: 'Instagram-like Web System | School Project | Aug 2022 - Dec 2022',
        bgImage: ['/work-insta485.png'],
        skills: ['React Js', 'Flask', 'Python', 'JSON', 'SQLite', 'AWS'],
        description: 'This is an Instagram clone project for the EECS485 course in Umich, \
        the first course for me to learn how to build a web application. \
        Creating this was an amazing learning experience to develop both my front-end and back-end skills. \
        React was used to allow for client-side dynamic pages on the home screen of Instagram and also \
        for individual posts. Python and Flask were used to construct REST API, \
        Flask cookies were used to store usernames \
        and to authenticate users, and SQL was used for database access and storage. \
        The web app was finally deployed with an AWS EC2 instance.',
        features: ['Creating accounts, following, liking, commenting, uploading photos, and more',
            'Double-click on an unliked image to like it',
            'Immediately show new likes and comments',
            'Infinite scroll by displaying the next 10 posts when scrolling to the bottom of the page',
        ],
        github: 'https://github.com/dianaxuuu/web-system',
        demo: '',
    },
    {
        title: 'MDP - ProQuest',
        subtitle: 'Book-award ML Prediction | Research Project | Jan 2022 - Dec 2022',
        bgImage: ['/work-mdp1.png', '/work-mdp2.png', '/work-mdp3.png', '/work-mdp4.png', '/work-mdp5.png', '/work-mdp6.png'],
        skills: ['Dask', 'Numpy', 'Pandas', 'Scikit-learn', 'Python', 'Jupyter Notebook'],
        description: 'As part of the UMich Multidisciplinary Design Program sponsored by ProQuest,\
         we developed a machine learning model to predict the likelihood of books winning awards, \
         designed for deployment on Rialto, an academic marketplace for data-driven librarian decisions. \
         Tackling challenges like 0.03% award-winning books in a 10M+ dataset and 80% missing data for numerous fields, \
         we invested significant effort in merging datasets, handling missing values, \
         and transforming raw data into usable insights. \
         We analyzed 6 data sources and there were a total of 75 features, \
         among which we selected or used to create 6 features for our final model. \
         Through rigorous preprocessing, time-series analysis, and Random Forest Regression, \
         we achieved a 31% match rate between predicted and actual top 100 books, \
         highlighting the strength of our data preparation and modeling pipeline.',
        features: [],
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