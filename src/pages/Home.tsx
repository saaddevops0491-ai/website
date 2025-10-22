import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
ArrowRight,
CheckCircle,
Gauge,
Droplets,
Settings,
Award,
Users,
TrendingUp,
Shield,
Zap,
Target,
Globe,
Star,
Play,
X,
ChevronRight,
ChevronLeft,
Calendar,
Tag,
Microscope,
Wrench,
Linkedin,
MapPin,
Mail,
Phone,
ExternalLink,
Handshake,
Building
} from 'lucide-react';
import { getRecentNews, NewsArticle } from '../utils/newsLoader';

const Home: React.FC = () => {
const [currentSlide, setCurrentSlide] = useState(0);
const [showVideo, setShowVideo] = useState(false);
const [recentNews, setRecentNews] = useState<NewsArticle[]>([]);
const [newsLoading, setNewsLoading] = useState(true)
const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);
const [selectedMember, setSelectedMember] = useState<any>(null);

// Load recent news on component mount
useEffect(() => {
const loadRecentNews = async () => {
try {
setNewsLoading(true);
const news = await getRecentNews(3); // Get top 3 latest news
setRecentNews(news);
} catch (error) {
console.error('Error loading recent news:', error);
} finally {
setNewsLoading(false);
}
};

loadRecentNews();
}, []);

const formatDate = (dateString: string) => {
return new Date(dateString).toLocaleDateString('en-US', {
year: 'numeric',
month: 'short',
day: 'numeric'
});
};

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
const target = e.target as HTMLImageElement;
target.src = 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800';
};

// Hero background media (mix of images and videos)
const heroMedia = [
{
type: 'video',
src: 'https://res.cloudinary.com/drnak5yb2/video/upload/v1756393052/raw_for_website_1_bx88wv.mp4', // Replace with your actual video URL
poster: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754556084/combined-enhanced_image-1024x591_pkpnc5.png', // Fallback poster image
alt: 'Saher Flow Technology Demo',
duration: 15000 // 16 seconds
},
{
type: 'video',
src: 'https://res.cloudinary.com/drnak5yb2/video/upload/v1756393179/Raw_for_website_2_ei6dp5.mp4', // Replace with your actual video URL
poster: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754556084/combined-enhanced_image-1024x591_pkpnc5.png', // Fallback poster image
alt: 'Saher Flow Technology Demo',
duration: 12000 // 12 seconds
},
];

const salientFeatures = [
{
icon: (
<img
src="https://res.cloudinary.com/drnak5yb2/image/upload/e_colorize,co_white/v1755673987/660432-200_blblz7.png"
alt="Non-Gamma"
className="w-8 h-8 object-contain"
/>
),
title: "Non-Gamma",
description: "Our solution does not use any nuclear radiation source such as gamma rays and yet gives accurate measurements",
color: "from-green-500 to-emerald-600"
},
{
icon: (
<img
src="https://res.cloudinary.com/drnak5yb2/image/upload/e_colorize,co_white/v1755674927/cost-reduction_vsvbki.png"
alt="Cost Reduction"
className="w-8 h-8 object-contain"
/>
),
title: "Tri-Sensory Technology",
description: "Innovative use of multi patented technologies, combining dielectric, density, cross-correlation, pressure and temperature measurements",
color: "from-yellow-500 to-orange-600"
},
{
icon: (
<img
src="https://res.cloudinary.com/drnak5yb2/image/upload/e_colorize,co_white/v1755673987/remote-access_rgo1kh.png"
alt="Remote Monitoring"
className="w-8 h-8 object-contain"
/>
),
title: "Real-Time Remote Monitoring",
description: "There's no need to visit the well site and the production data can be remotely monitored through securepn-site/cloud servers",
color: "from-blue-500 to-cyan-600"
},
{
icon: (
<img
src="https://res.cloudinary.com/drnak5yb2/image/upload/e_colorize,co_white/v1755673987/drugs_15611260_tlkmyt.png"
alt="Non-Intrusive"
className="w-8 h-8 object-contain"
/>
),
title: "Non-Intrusive (Full Bore Design)",
description: "Our sensors don't physically interact with the production fluid. Resulting in low wear and tear, hence longer operational life",
color: "from-purple-500 to-indigo-600"
},
{
icon: (
<img
src="https://res.cloudinary.com/drnak5yb2/image/upload/e_colorize,co_white/v1755673987/1792984-200_mzmjss.png"
alt="Calibration"
className="w-8 h-8 object-contain"
/>
),
title: "Min. Calibration Requirements",
description: "Minimizes the need of frequent re-calibration owing to the use of digital twin AI Technology",
color: "from-orange-500 to-red-600"
},
{
icon: (
<img
src="https://res.cloudinary.com/drnak5yb2/image/upload/e_colorize,co_white/v1755673987/3303441-200_eeg0ql.png"
alt="Compact"
className="w-8 h-8 object-contain"
/>
),
title: "Compact & Cost Effective",
description: "Compact and cost effective skid mounted package that can be mounted in standard pick-up truck for high mobility and rapid well testing operation",
color: "from-teal-500 to-green-600"
},
];

// Industry partnerships data
const partnerships = [
{
name: "Saudi Aramco",
description: "Working with the world's largest oil company on advanced flow measurement solutions",
logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzjCsaIDepOvxQDRfGMiheyVepvqsdwpt5A&s",
status: "Ongoing Project"
},
{
name: "QTM Energy USA",
description: "Collaborating with Houston based oilfield service company on innovative measurement systems",
logo: "https://res.cloudinary.com/drnak5yb2/image/upload/v1755681092/images_ywuvh0.jpg",
status: "Active Partnership"
},
{
name: "ADNOC",
description: "Field trials in progress, in coordination with ADNOC onshore team.",
logo: "https://res.cloudinary.com/drnak5yb2/image/upload/v1756372102/ADNOC_logo_yxkqas.jpg",
status: "Field Trials"
},
{
name: "DNV",
description: "3rd party performance validation by DNV, Netherlands.",
logo: "https://res.cloudinary.com/drnak5yb2/image/upload/v1756372218/DNV_logo_jgwf12.jpg",
status: "3rd Party Validation"
},
{
name: "PDO Oman",
description: "Field trials in progress, in coordination with PDO production team.",
logo: "https://res.cloudinary.com/drnak5yb2/image/upload/v1756372102/PDO_Oman_logo_eowfo2.jpg",
status: "Field Trials"
},
];

const products = [
{
name: '3 Phase Water-cut Meter',
model: 'SF-321',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png',
description: 'Non-intrusive water-cut measurement for production optimization',
features: ['Full Range WLR Measurements', 'Insensitive to Gas', 'Cost Effective Water Profiler'],
icon: <Droplets className="w-6 h-6" />
},
{
name: '3-Phase MPFM',
model: 'SF-331',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1756373010/Saher_3G_MPFM_damfjy.png',
description: 'Simultaneous measurement of oil, gas, and water flow rates',
features: ['Phase meas. of all 3 phases (oil, water, gas)', 'Flow rate meas. of all 3 phases (oil, water, gas)', 'Any flow conditions'],
icon: <Gauge className="w-6 h-6" />
},
{
name: 'Skid Mounted MPFM',
model: 'SK-100',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555852/MPFM-with-SKID-1536x1187_sjrvdp.png',
description: 'Portable, plug-and-play multiphase measurement solution',
features: ['Fast setup saving human hours', 'High mobility, ideal for testing multiple wells', 'Cost effective alternate of separator based testing'],
icon: <Settings className="w-6 h-6" />
}
];

const services = [
{
icon: <Gauge size={48} />,
title: 'Flow Measurement Consultancy',
description: 'Any kind of cutomized flow measurement solutions, tailored to your specific needs.',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Flow_p9rkop.png',
},
{
icon: <Microscope size={48} />,
title: 'Imaging & Sensing Design',
description: 'Customized sensing solutions for various smart industrial applications.',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/x-ray_bhg3rp.png',
},
{
icon: <Wrench size={48} />,
title: 'Engineering & Product Design',
description: 'Comprehensive engineering services from concept to deployment with IIoT integration.',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/Saher-Flow-Meter-in-DNV_gmjfnr.jpg',
}
];

// Enhanced Team members data with more detailed information
const teamMembers = [
{
id: 1,
name: 'Dr. Muhammad Akram Karimi',
role: 'Co-founder / CTO',
location: 'Thuwal, Saudi Arabia',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555205/Dr.Akram__wtiwxi.png',
description: 'Co-founder & CTO at SaherFlow, pioneering non-gamma multiphase flow meters with over a decade of R&D in microwave sensing.',
longDescription: 'Dr. Karimi leads Saher Flow Solutions in developing revolutionary non-gamma multiphase flow meters for the oil and gas industry. With over 10 years of R&D in microwave sensing, he has authored 20+ research papers, filed 10+ patents, and secured $3M+ in funding from Saudi Aramco and KAUST Innovation Fund. He has built a 20+ member team, driven product innovation from concept to field deployment, and collaborated globally to advance multiphase flow measurement technologies.',
expertise: [
'Microwave Sensing',
'Multiphase Flow Measurement',
'Product Development',
'Startup Structuring & Fundraising',
'Team Leadership'
],
achievements: [
'Co-founder of Saher Flow Solutions',
'Inventor of 10+ patents',
'20+ peer-reviewed publications',
'$3M+ funding secured',
'Led 20+ engineers & scientists in product commercialization'
],
education: 'Ph.D. in RF/Microwave Engineering, KAUST'
},
{
id: 2,
name: 'Dr. Atif Shamim',
role: 'Technical Director',
location: 'Thuwal, Saudi Arabia',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/ATIF-SHAMIM-2020_v6cyab.png',
description: 'IEEE Fellow, Professor at KAUST, and pioneer in innovative microwave and sensing technologies with 400+ publications and 40 patents.',
longDescription: 'Dr. Atif Shamim is Chair Professor of Electrical and Computer Engineering at KAUST, leading the IMPACT Lab. He is a Fellow of IEEE and a globally recognized leader in antenna design, RF systems, and wireless sensing technologies, integrating CMOS and additive manufacturing for flexible and wearable systems. He holds a Ph.D. in Electronics from Carleton University and has authored 400+ publications, 1 book, and 40 patents. His work has earned prestigious awards, including the King\'s Prize for Best Innovation, OCRI Researcher of the Year, multiple IEEE Best Paper Awards, and several international design competition wins. Beyond academia, he has successfully commercialized technologies for the oil industry, winning Canadas national business plan competition and OCRI Entrepreneur of the Year.',
expertise: [
'Antenna Design',
'RF & Microwave Systems',
'Wireless Sensing',
'Additive Manufacturing for Electronics',
'CMOS Integration'
],
achievements: [
'IEEE Fellow',
'400+ publications & 40 patents',
'Multiple IEEE Best Paper Awards',
'King\'s Prize for Best Innovation (2018)',
'OCRI Researcher & Entrepreneur of the Year'
],
education: 'Ph.D. in Electronics, Carleton University; B.Sc. in Electrical Engineering, UET Lahore'
},
{
id: 3,
name: 'Dr. Shehab Ahmed',
role: 'Business Advisor',
location: 'Thuwal, Saudi Arabia',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Dr.-Shehab_aq2wvj.jpg',
description: 'Strategic business advisor with deep expertise in GCC energy markets and strategic partnerships.',
longDescription: 'Dr. Shehab Ahmed serves as a trusted business advisor to Saher Flow Solutions, offering strategic insight rooted in extensive experience across energy markets in the GCC region. With a strong focus on facilitating strategic partnerships, market expansion, and business development, he helps align the company\'s technical innovations with regional market needs and operational success.',
expertise: [
'GCC Energy Market Strategy',
'Business Development',
'Strategic Partnerships',
'Market Expansion',
'Client Relations'
],
achievements: [
'Guided strategic market entry in GCC energy sectors',
'Advised on key business development initiatives',
'Strengthened client and partner relationships in the region'
],
education: ''
},
{
id: 4,
name: 'Muhammad Ammar Ayub',
role: 'Mechanical Team Lead',
location: 'Thuwal, Saudi Arabia',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Ammar-Ayub-Picture_azw5hy.jpg',
description: 'Mechanical engineer and team lead specializing in precision product development, CFD simulations, and design optimization for manufacturability.',
longDescription: 'Muhammad Ammar Ayub is a Mechanical Team Lead at Saher Flow Solutions with over six years of expertise in advanced mechanical design and product development. He drives innovation by implementing Design for Assembly (DFA) and Design for Manufacturability (DFM) principles, conducting detailed CFD simulations and stress analysis to ensure product performance and reliability. His leadership spans hardware development, engineering documentation, 3D rendering, and rigorous product testing. Prior to his current role, Ammar served as a Mechanical Design Engineer at MGA Industries, focusing on die design, jigs and fixtures, and manufacturing process optimization. With a BS in Mechanical Engineering from COMSATS and certifications in CAD/CAM, he combines technical depth with a strong commitment to engineering excellence.',
expertise: [
'Design for Assembly (DFA)',
'Design for Manufacturability (DFM)',
'CFD Simulations',
'Stress Analysis',
'3D Modeling & Rendering',
'SOLIDWORKS',
'ANSYS',
'MATLAB',
'Die & Fixture Design',
'Product Testing & Validation'
],
achievements: [
'Led mechanical design efforts for advanced flow measurement products at Saher Flow Solutions',
'Implemented DFA and DFM principles to streamline manufacturing processes',
'Conducted high-fidelity CFD simulations to optimize product performance',
'Oversaw complete product lifecycle from concept to deployment',
'Designed dies, jigs, and fixtures to improve manufacturing efficiency at MGA Industries',
'Produced engineering animations and documentation for improved communication'
],
education: [
'BS in Mechanical Engineering – COMSATS Institute of Information and Technology',
'3D CAD/CAM Certification – Pakistan Industrial Technical Assistance Center'
]
},
{
id: 5,
name: 'Rashad Maqsood',
role: 'Software Project Manager',
location: 'Thuwal, Saudi Arabia',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Rashad_lddbgq.jpg',
description: 'Versatile software project manager and engineer specializing in .NET, smart metering, embedded systems, and oil & gas instrumentation.',
longDescription: 'Rashad Maqsood is a Software Project Manager at Saher Flow Solutions with over a decade of experience spanning smart metering, document intelligence systems, custom application development, and oil & gas instrumentation. He has led teams in building robust solutions for automated meter reading, prepaid metering, and real-time data analytics using C#, .NET, Electron, AWS, and advanced communication protocols. His background includes key roles at MicroTech Industries, FiveRivers Technologies, and NorthBay Solutions, delivering high-performance software in both industrial and financial domains. At SaherFlow, he contributes to the R&D of cutting-edge multiphase flow meters by integrating multiple sensors, x-ray sources, and detectors into advanced measurement systems.',
expertise: [
'.NET Development (C#, WPF, .NET Core)',
'Smart Metering & AMI Solutions',
'Embedded Systems Debugging',
'Multiphase Flow Metering',
'Agile & Scrum Project Management'
],
achievements: [
'Led development of SmartWindows cross-platform state management software',
'Developed advanced automated metering and energy audit solutions',
'Contributed to SEC filing analysis system at NorthBay Solutions',
'Integrated multi-sensor systems for oil & gas instrumentation',
'Over 10 years of cross-industry software development leadership'
],
education: 'MS in Computer Science, Information Technology University; BS in Computer Science, COMSATS Institute of Information Technology'
},
{
id: 6,
name: 'Fahad Usman Meer',
role: 'Senior Software Engineer',
location: 'Thuwal, Saudi Arabia',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555208/Fahad-Usman-Meer-Sr.-Software-Engineer_cc1ssv.jpg',
description: 'Senior software developer with expertise in full-stack .NET solutions, multi-threaded applications, and hardware-software integration for oil & gas measurement systems.',
longDescription: 'Fahad Usman Meer is a senior software developer at Saher Flow Solutions with extensive experience in building robust business and industrial applications. Since 2014, he has specialized in .NET technologies, C#, and full-stack web and desktop development. At SaherFlow, he leads the development of multi-threaded proprietary software capable of interfacing with hardware devices such as Vector Network Analyzers to collect and process real-time sensor data for multiphase flow meters in the oil and gas industry. His prior experience includes key roles at NorthBay Solutions, Strategic Systems International, and MicroTech Industries, where he developed background services, WCF APIs, and advanced search solutions using Apache SOLR. He is proficient in SQL Server, MySQL, WPF, WinForms, RESTful APIs, and microservices, with a strong focus on high-performance, user-friendly applications.',
expertise: [
'C# & .NET Framework / .NET Core',
'WPF, WinForms, WCF',
'Multi-threaded Application Development',
'RESTful APIs & Microservices',
'Hardware-Software Integration'
],
achievements: [
'Developed proprietary multi-threaded oil & gas measurement software',
'Integrated VNAs with real-time sensor data visualization',
'Built advanced search and indexing systems using Apache SOLR',
'Full-stack development in web, desktop, and background services',
'8+ years of professional software development experience'
],
education: 'BS in Information Technology, University of the Punjab'
},
{
id: 7,
name: 'Arsalan Raza',
role: 'Procurement Manager',
location: 'Thuwal, Saudi Arabia',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754562693/Arsalan-Raza_rcd4rs.png',
description: 'Skilled procurement manager focused on streamlining supply chain operations and vendor management.',
longDescription: 'Arsalan Raza serves as Procurement Manager at Saher Flow Solutions, where he optimizes sourcing strategies, manages supplier relationships, and ensures efficient supply chain operations. Bringing a pragmatic approach to procurement, Arsalan is committed to delivering quality and reliability in procurement while supporting operational excellence through optimized inventory, cost efficiency, and vendor performance.',
expertise: [
'Vendor Management',
'Strategic Sourcing',
'Supply Chain Optimization',
'Inventory Control',
'Cost Analysis'
],
achievements: [
'Implemented streamlined procurement workflows for improved cost savings',
'Built strong supplier partnerships to ensure product quality and delivery',
'Optimized inventory processes for better operational efficiency'
],
education: ''
},
{
id: 8,
name: 'Muneeb Haider',
role: 'Accountant',
location: 'Thuwal, Saudi Arabia',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555207/Syed-Muneeb-Haider-Accountant-Business-Administrator_aerlfp.jpg',
description: 'Part Qualified ACCA and AAT member specializing in financial reporting, tax compliance, and audits. ensures accuracy in accounting operations, oversees payroll and investor relations, and supports cross-functional processes.',
longDescription: 'Part Qualified ACCA and AAT member specializing in financial reporting, tax compliance, and audits. ensures accuracy in accounting operations, oversees payroll and investor relations, and supports cross-functional processes.',
expertise: [
'Financial Reporting',
'Tax Compliance',
'Audit & Reconciliation'
],
achievements: [
'Implemented accurate bookkeeping systems aligning with IFRS standards',
'Streamlined receivables and payables tracking for improved cash flow management',
'Maintained precise VAT and WHT records ensuring tax compliance',
'Supported HR and supply chain teams with administrative tasks',
'Earned AAT Membership (MAAT) and ACCA Diploma in Accounting and Business'
],
education: [
'Association of Chartered Certified Accountants (ACCA) – Part Qualified (2020–2024)',
'Full Member (MAAT) – Association of Accounting Technicians (2023)',
'ACCA Diploma in Accounting and Business – RQF Level 4 (2021)'
]
},
{
id: 9,
name: 'Salem Bawazir',
role: 'Embedded Design Engineer',
location: 'Thuwal, Saudi Arabia',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754562693/photo_6059953427796046688_x_1_nsecls.jpg',
description: 'Electrical and Electronics Engineer specializing in embedded systems, PCB design, and automation.',
longDescription: 'Salem Bawazir is an Embedded Design Engineer at Saher Flow Solutions with a solid foundation in electrical and electronics engineering. His expertise spans embedded systems, PCB design, electronics troubleshooting, and automation, with hands-on experience in microcontroller programming (PIC, STM32), robotics, and PLC systems. Prior to joining Saher Flow Solutions, Salem worked as a Production Engineer at Al Wefag Trading & Manufacturing Co. Ltd and completed internships as a Robotics Engineer at Smart Methods and as an Electrical/Electronics Trainee at Smart Life Technology and Hamid Nawaz Engineering Services. He is adept with tools like Altium Designer and KiCad, and brings strong problem-solving, time management, and communication skills to every project. Salem is also a certified engineer with the Saudi Council of Engineers and the Board of Engineers Malaysia.',
expertise: [
'Embedded Systems Development',
'PCB Design (Altium Designer, KiCad)',
'Electronics Troubleshooting & Repair',
'Microcontroller Programming (PIC, STM32)',
'Robotics Engineering',
'PLC Programming',
'Automation Systems',
'CFD & ROS Integration',
'IoT Development'
],
achievements: [
'Designed and implemented embedded solutions for industrial automation',
'Completed 12 multi-domain robotics engineering tasks at Smart Methods',
'Certified Electrical and Electronics Engineer by the Saudi Council of Engineers',
'Certified Graduate Engineer by the Board of Engineers Malaysia'
],
education: [
'Bachelor\'s Degree in Electrical and Electronics Engineering – Universiti Tenaga Nasional (2018–2022)',
'Foundation in Engineering – Universiti Tenaga Nasional (2017–2018)'
]
},
{
id: 10,
name: 'Layan Aljahdali',
role: 'Quality Specialist',
location: 'Thuwal, Saudi Arabia',
image: '',
description: 'Specialized in quality control, sustainability, and industrial processes. Experienced in prototyping and quality management practices.',
longDescription: 'Specialized in quality control, sustainability, and industrial processes. Experienced in prototyping and quality management practices.',
expertise: ['Prototyping', 'Sustainability', 'Quality Management'],
achievements: ['Prototyping', 'Sustainability', 'Quality Management'],
education: '',
},
{
id: 11,
name: 'Dr. Zubair Akhter',
role: 'Senior Antenna / RF Engineer',
location: 'Abu Dhabi, UAE',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Dr.Zubair-e1648630424669_mnj1he.jpg',
description: 'RF and microwave specialist with extensive expertise in antenna design, high-power electromagnetic systems, and innovative RF solutions.',
longDescription: 'Dr. Zubair Akhter is a Senior Antenna Engineer at the High Power Electromagnetic (EM) Division of the Directed Energy Research Center, Technology Innovation Institute (TII) in Abu Dhabi, UAE. He leads pioneering research and development in advanced antenna systems, high-power microwave technologies, and thermal effect mitigation for extreme operational environments. His career spans groundbreaking projects in 5G intelligent reflecting surfaces, UAV conformal antennas, and microwave sensing systems for industrial applications. With a PhD in RF and Microwave Engineering from IIT Kanpur and a teaching credential from Harvard University, Dr. Akhter combines deep technical knowledge with a passion for mentoring and innovation.',
expertise: [
'Antenna Design & Optimization',
'High-Power Electromagnetic Systems',
'Thermal Analysis for RF Devices',
'RF/Microwave Measurement & Testing',
'Intelligent Reflecting Surfaces (5G/6G)',
'Microwave Sensing Technologies'
],
achievements: [
'Led development of high-performance antennas including reflectors, horns, helices, arrays, and patches',
'Pioneered thermal effect mitigation strategies for high-power microwave systems',
'Executed advanced multipaction, PIM, and corona testing methodologies',
'Developed UAV ultra-thin conformal antennas in collaboration with Lockheed Martin',
'Designed 3-phase compact MPFM meter using microwave sensing for the oil & gas industry',
'Awarded Early Career Researcher Teaching Award at KAUST'
],
education: [
'PhD in RF and Microwave Engineering – IIT Kanpur',
'Higher Education Teaching Certificate – Harvard University'
]
},
{
id: 12,
name: 'Babar Zia',
role: 'Office Manager',
location: 'Lahore, Pakistan',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555206/Babar-Zia-Picture_kxkfjw.jpg',
description: 'Business Administrator of our overseas office with expertise in organizational excellence and administrative coordination.',
longDescription: 'Babar ensures smooth daily operations  our Thuwal headquarters, managing administrative functions and coordinating between different teams to maintain operational excellence and efficiency.',
expertise: ['Operations Management', 'Administration', 'Team Coordination', 'Process Optimization', 'Office Management'],
achievements: ['10+ years operations experience', 'Process improvement initiatives', 'Team coordination expertise'],
education: 'MBA in Operations Management',
},
{
id: 13,
name: 'Faizan Asif',
role: 'Junior Embedded Design Engineer',
location: 'Lahore, Pakistan',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1759307849/WhatsApp_Image_2025-08-31_at_18.44.51_f6076ce7_aaqhzr.jpg',
description: 'Electrical and Electronics Engineer specializing in embedded systems, firmware development, and digital design.',
longDescription: 'Saad Mahmood is a software engineer at Saher Flow Solutions with a passion for building high-performance, maintainable, and user-centric applications. He brings hands-on experience in mobile and web development using Flutter, React, Node.js/Express, MongoDB, and PostgreSQL. Skilled in REST API design, third-party integrations, and end-to-end feature development, Saad has contributed to diverse projects, from Android apps at Lalaland.pk to backend API systems at DHA Lahore. He also has teaching experience in computer science and holds IBM certifications in DevOps, Cloud, Agile, and Full Stack Development. His approach emphasizes clean coding, scalability, and effective cross-functional collaboration within Agile environments.',
expertise: [
'Embedded Systems Development',
'Firmware Programming',
'Digital System Design',
],
achievements: [

],
education: ''
},
{
id: 14,
name: 'Saad Mahmood',
role: 'Software Engineer',
location: 'Lahore, Pakistan',
image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754639157/saad-profile_swp9ep.jpg',
description: 'Full-stack software engineer specializing in scalable, user-focused web and mobile applications using Flutter, React, Node.js, and modern databases.',
longDescription: 'Saad Mahmood is a software engineer at Saher Flow Solutions with a passion for building high-performance, maintainable, and user-centric applications. He brings hands-on experience in mobile and web development using Flutter, React, Node.js/Express, MongoDB, and PostgreSQL. Skilled in REST API design, third-party integrations, and end-to-end feature development, Saad has contributed to diverse projects, from Android apps at Lalaland.pk to backend API systems at DHA Lahore. He also has teaching experience in computer science and holds IBM certifications in DevOps, Cloud, Agile, and Full Stack Development. His approach emphasizes clean coding, scalability, and effective cross-functional collaboration within Agile environments.',
expertise: [
'MERN & Flutter',
'REST API Development',
'Software Architecture',
'Agile Development Practices'
],
achievements: [
'Developed cross-platform mobile and web applications',
'Integrated third-party APIs and services for seamless UX',
'Built backend systems for real estate and e-commerce platforms',
'Earned IBM DevOps, Cloud, Agile, and Full Stack certifications',
'Experience in both teaching and software engineering roles'
],
education: 'BS in Software Engineering, University of Central Punjab'
},
];

const nextSlide = () => {
setCurrentSlide((prev) => (prev + 1) % heroMedia.length);
};

const prevSlide = () => {
setCurrentSlide((prev) => (prev - 1 + heroMedia.length) % heroMedia.length);
};

const nextTeamSlide = () => {
setCurrentTeamSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
};

const prevTeamSlide = () => {
setCurrentTeamSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
};

const nextPartnerSlide = () => {
setCurrentPartnerSlide((prev) => (prev + 1) % Math.ceil(partnerships.length / 2));
};

const prevPartnerSlide = () => {
setCurrentPartnerSlide((prev) => (prev - 1 + Math.ceil(partnerships.length / 2)) % Math.ceil(partnerships.length / 2));
};

// Custom timer for video switching based on video duration
useEffect(() => {
const currentMedia = heroMedia[currentSlide];
if (currentMedia.type === 'video') {
const timer = setTimeout(() => {
nextSlide();
}, currentMedia.duration);
return () => clearTimeout(timer);
}
}, [currentSlide]);

// Add smooth scrolling
useEffect(() => {
document.documentElement.style.scrollBehavior = 'smooth';
return () => {
document.documentElement.style.scrollBehavior = 'auto';
};
}, []);

return (
<div className="min-h-screen bg-white dark:bg-gray-900">
{/* Hero Section with Mixed Media Background (Images + Videos) */}
<section className="relative min-h-screen overflow-hidden pt-24 lg:pt-20">
<div className="absolute inset-0">
{heroMedia.map((media, index) => (
<div
key={index}
className={`absolute inset-0 transition-opacity duration-1000 z-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
>
<div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/85 to-navy-700/75 dark:from-gray-900/95 dark:via-gray-800/85 dark:to-gray-700/75 z-10" />

{media.type === 'video' ? (
<video
key={`${media.src}-${currentSlide}`} // Force re-render when slide changes
className="w-full h-full object-cover object-center"
autoPlay
muted
playsInline
poster={media.poster}
onError={(e) => {
// Fallback to poster image if video fails to load
const videoElement = e.target as HTMLVideoElement;
const imgElement = document.createElement('img');
imgElement.src = media.poster || 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800';
imgElement.alt = media.alt;
imgElement.className = "w-full h-full object-cover object-center";
videoElement.parentNode?.replaceChild(imgElement, videoElement);
}}
>
<source src={media.src} type="video/mp4" />
Your browser does not support the video tag.
</video>
) : (
<img
src={media.src}
alt={media.alt}
className="w-full h-full object-cover object-center"
onError={handleImageError}
/>
)}
</div>
))}
</div>

<div className="relative z-20 min-h-screen flex items-center py-20 lg:py-24">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
{/* Left Content - Professional Left Alignment */}
<div className="lg:col-span-7 text-left">
<motion.div
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
className="text-white"
>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
Smart
<span className="block text-yellow-400 mt-2">Multiphase Flow Measurement</span>
<span className="block mt-2">Solutions</span>
</h1>

{/* Key Features with Colored Bullets */}
<div className="flex flex-col sm:flex-row sm:flex-nowrap gap-4 sm:gap-6 items-start">
  <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto flex-shrink-0">
    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0" />
    <span className="text-gray-300 font-medium sm:whitespace-nowrap">Patented DMOR Technology</span>
  </div>

  <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto flex-shrink-0">
    <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0" />
    <span className="text-gray-300 font-medium sm:whitespace-nowrap">Real-time Data</span>
  </div>

  <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto flex-shrink-0">
    <div className="w-3 h-3 bg-purple-400 rounded-full flex-shrink-0" />
    <span className="text-gray-300 font-medium sm:whitespace-nowrap">Minimum Calibration Requirement</span>
  </div>
</div>


<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl">
Transform your production with industry-leading multiphase flow meters.
Trusted by major oil companies worldwide for accurate, reliable measurements.
</p>

<div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
{['Saudi Aramco Pre-Qualified', '±2-5% Accuracy', '99.8% Uptime', 'Non-Gamma', 'Non-Intrusive'].map((feature, idx) => (
<motion.div
key={idx}
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-3 rounded-full text-sm sm:text-base font-medium"
>
<CheckCircle size={16} className="text-yellow-400 flex-shrink-0" />
<span className="whitespace-nowrap">{feature}</span>
</motion.div>
))}
</div>

<div className="flex flex-col sm:flex-row gap-4">
<motion.a
href="/products"
target="_blank"
rel="noopener noreferrer"
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.7 }}
className="inline-flex items-center justify-center gap-3 bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
>
Explore Products
<ArrowRight className="w-5 h-5" />
</motion.a>
<motion.button
onClick={() => setShowVideo(true)}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.8 }}
className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300"
>
<Play className="w-5 h-5" />
Overview
</motion.button>
</div>
</motion.div>
</div>

{/* Right Content - Optional space for additional elements */}
<div className="lg:col-span-5 hidden lg:block">
{/* This space can be used for additional graphics or left empty for clean look */}
</div>
</div>
</div>
</div>

{/* Slide Indicators */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
{heroMedia.map((media, index) => (
<button
key={index}
onClick={() => setCurrentSlide(index)}
className={`h-3 rounded-full transition-all duration-300 relative ${currentSlide === index ? 'bg-yellow-500 w-8' : 'bg-white/50 hover:bg-white/70 w-3'}`}
title={media.type === 'video' ? 'Video' : 'Image'}
>
{media.type === 'video' && (
<Play size={8} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-navy-900" />
)}
</button>
))}
</div>
</section>

{/* --- Key Advantages Section (mobile: title centered with icon) --- */}
<section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
  <div className="container mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-8 sm:mb-12 md:mb-16"
    >
      <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold mb-4 sm:mb-6">
        <Star size={14} className="sm:w-4 sm:h-4" />
        Key Advantages
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4 sm:mb-6">
        Why Choose Saher Flow Solutions?
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
        Revolutionary technology that transforms how the energy industry measures multiphase flow
      </p>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {salientFeatures.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.08 }}
          viewport={{ once: true }}
          className="group relative bg-white dark:bg-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
        >
          {/* subtle gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl sm:rounded-2xl`}
            aria-hidden="true"
          />

          {/* === MOBILE-CENTER FIX ===
              items-center on small screens => vertical center with icon
              lg:items-start on large screens => keep top-aligned when title wraps */}
          <div className="flex items-center lg:items-start gap-4 mb-3 sm:mb-4">
            <div
              className={`flex-shrink-0 inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} text-white`}
              aria-hidden="true"
            >
              {feature.icon}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white leading-tight min-w-0">
              {feature.title}
            </h3>
          </div>

          {/* description below the inline icon+title */}
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-0 line-clamp-3">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* Industry Partnerships Section - Updated with Slider */}
<section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-gray-900">
<div className="container mx-auto px-4 sm:px-6">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="text-center mb-8 sm:mb-12 md:mb-16"
>
<div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold mb-4 sm:mb-6">
<Handshake size={14} className="sm:w-4 sm:h-4" />
Strategic Partnerships
</div>

<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4 sm:mb-6">
Trusted by Industry Leaders
</h2>
<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
Building strategic partnerships with leading energy companies worldwide to advance flow measurement technology
</p>
</motion.div>

{/* Partnership Slider */}
<div className="relative max-w-6xl mx-auto">
<div className="overflow-hidden">
<div
className="flex transition-transform duration-700 ease-in-out"
style={{ transform: `translateX(-${currentPartnerSlide * 100}%)` }}
>
{Array.from({ length: Math.ceil(partnerships.length / 2) }).map((_, slideIndex) => (
<div key={slideIndex} className="w-full flex-shrink-0 px-2">
<div className="grid md:grid-cols-2 gap-8">
{partnerships.slice(slideIndex * 2, slideIndex * 2 + 2).map((partner, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: index * 0.1 }}
viewport={{ once: true }}
className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-200 dark:border-gray-600"
>
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-white dark:bg-gray-600 rounded-xl flex items-center justify-center p-3 shadow-md overflow-hidden">
{partner.logo ? (
<img
src={partner.logo}
alt={`${partner.name} logo`}
className="w-full h-full object-contain"
onError={(e) => {
e.currentTarget.style.display = "none";
}}
/>
) : (
<Building className="w-8 h-8 text-navy-600 dark:text-yellow-400" />
)}
</div>

<div>
<h3 className="text-xl font-bold text-navy-900 dark:text-white">{partner.name}</h3>
<div className="flex items-center gap-2 mt-1">
<span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs rounded-full font-semibold">
{partner.status}
</span>
</div>
</div>
</div>

<p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
{partner.description}
</p>

<div className="flex items-center justify-between">
<span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
{partner.type ?? ""}
</span>
</div>
</motion.div>
))}
</div>
</div>
))}
</div>
</div>

{/* Enhanced Navigation */}
{Math.ceil(partnerships.length / 2) > 1 && (
<>
<button
onClick={prevPartnerSlide}
className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-translate-x-7"
>
<ChevronLeft size={24} />
</button>
<button
onClick={nextPartnerSlide}
className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:translate-x-7"
>
<ChevronRight size={24} />
</button>
</>
)}

{/* Slide Indicators */}
{Math.ceil(partnerships.length / 2) > 1 && (
<div className="flex justify-center mt-12 gap-3">
{Array.from({ length: Math.ceil(partnerships.length / 2) }).map((_, index) => (
<button
key={index}
onClick={() => setCurrentPartnerSlide(index)}
className={`h-3 rounded-full transition-all duration-300 hover:scale-125 ${currentPartnerSlide === index
? 'bg-gradient-to-r from-green-400 to-green-500 w-12 shadow-lg'
: 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-3'
}`}
/>
))}
</div>
)}
</div>
</div>
</section>

{/* Products Section */}
<section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
<div className="container mx-auto px-4 sm:px-6">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="text-center mb-8 sm:mb-12 md:mb-16"
>
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4 sm:mb-6">
Our Product Portfolio
</h2>
<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
Comprehensive range of flow measurement instruments designed for the most demanding applications
</p>
</motion.div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
{products.map((product, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: index * 0.2 }}
viewport={{ once: true }}
className="group bg-white dark:bg-gray-700 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
>
<div className="aspect-square bg-gray-50 dark:bg-gray-600 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
<img
src={product.image}
alt={product.name}
className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
onError={handleImageError}
/>
</div>

<div className="p-4 sm:p-6 md:p-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-yellow-500 rounded-lg text-navy-900 flex-shrink-0">
{product.icon}
</div>
<div>
<h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white leading-tight">{product.name}</h3>
<p className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm sm:text-base">{product.model}</p>
</div>
</div>

<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
{product.description}
</p>

<ul className="space-y-2 mb-4 sm:mb-6">
{product.features.map((feature, featureIndex) => (
<li key={featureIndex} className="flex items-center gap-3">
<CheckCircle size={14} className="text-green-500 flex-shrink-0 sm:w-4 sm:h-4" />
<span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
</li>
))}
</ul>
</div>
</motion.div>
))}
</div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="text-center mt-12"
>
<a
href="/products"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
>
View All Products
<ArrowRight className="w-5 h-5" />
</a>
</motion.div>
</div>
</section>

{/* Services Section */}
<section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-gray-900">
<div className="container mx-auto px-4 sm:px-6">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="text-center mb-8 sm:mb-12 md:mb-16"
>
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-4 sm:mb-6">
Our Services
</h2>
<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
Expert solutions and consultancy services tailored to your measurement requirements
</p>
</motion.div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
{services.map((service, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: index * 0.2 }}
viewport={{ once: true }}
className="group bg-gray-50 dark:bg-gray-700 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
>
<div className="aspect-video bg-gradient-to-br from-navy-100 to-navy-50 dark:from-gray-800 dark:to-gray-700 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
<img
src={service.image}
alt={service.title}
className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
onError={handleImageError}
/>
</div>

<div className="p-4 sm:p-6 md:p-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-yellow-500 rounded-lg text-navy-900 flex-shrink-0">
{service.icon}
</div>
<h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white leading-tight">{service.title}</h3>
</div>

<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
{service.description}
</p>
</div>
</motion.div>
))}
</div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="text-center mt-12"
>
<a
href="/services"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
>
View All Services
<ArrowRight className="w-5 h-5" />
</a>
</motion.div>
</div>
</section>

<section className="pt-20 md:pt-32 pb-20 md:pb-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
<div className="container mx-auto px-4 sm:px-6 relative z-10">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="text-center mb-20 -mt-6 md:-mt-16 space-y-4 md:space-y-6"
>
<div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold mb-4 sm:mb-6">
<Star size={14} className="sm:w-4 sm:h-4" />
Our Expert Team
</div>

<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
Our multidisciplinary team drives breakthrough technologies from our Saudi headquarters,
bringing together decades of experience in sensing innovation.
</p>
</motion.div>

{/* Team Grid with Enhanced Cards */}
<div className="relative">
<div className="overflow-hidden">
<div
className="flex transition-transform duration-700 ease-in-out"
style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
>
{Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, slideIndex) => (
<div key={slideIndex} className="w-full flex-shrink-0 px-2">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{teamMembers.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, index) => (
<motion.div
key={member.id}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: index * 0.1 }}
viewport={{ once: true }}
className="group bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100 dark:border-gray-600 relative overflow-hidden"
>
<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-navy-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="relative z-10">
<div className="text-center mb-6">
<div className="relative mb-6">
<div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-yellow-400/20 shadow-xl group-hover:ring-yellow-400/50 transition-all duration-500 group-hover:scale-110">
<img
src={member.image}
alt={member.name}
className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
onError={(e) => {
const target = e.target as HTMLImageElement;
target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ffd500&color=1a3a5c&size=200&font-size=0.6`;
}}
/>
</div>
</div>

<h3 className="text-xl font-bold text-navy-900 dark:text-white mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
{member.name}
</h3>
<p className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm sm:text-base">{member.role}</p>
<div className="flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400 text-xs mb-4">
<MapPin size={12} />
<span>{member.location}</span>
</div>
</div>

<p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed text-center">
{member.description}
</p>

<div className="flex flex-wrap gap-2 justify-center mb-6">
{member.expertise.slice(0, 3).map((skill, skillIndex) => (
<span
key={skillIndex}
className="px-3 py-1 bg-gradient-to-r from-navy-100 to-navy-50 dark:from-navy-800 dark:to-navy-700 text-navy-700 dark:text-navy-300 text-xs rounded-full border border-navy-200 dark:border-navy-600 hover:shadow-md transition-shadow duration-300"
>
{skill}
</span>
))}
</div>
</div>
</motion.div>
))}
</div>
</div>
))}
</div>
</div>
{/* Enhanced Navigation */}
{Math.ceil(teamMembers.length / 3) > 1 && (
<>
<button
onClick={prevTeamSlide}
className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-translate-x-7"
>
<ChevronLeft size={24} />
</button>
<button
onClick={nextTeamSlide}
className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:translate-x-7"
>
<ChevronRight size={24} />
</button>
</>
)}

{/* Slide Indicators */}
{Math.ceil(teamMembers.length / 3) > 1 && (
<div className="flex justify-center mt-12 gap-3">
{Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
<button
key={index}
onClick={() => setCurrentTeamSlide(index)}
className={`h-3 rounded-full transition-all duration-300 hover:scale-125 ${currentTeamSlide === index
? 'bg-gradient-to-r from-yellow-400 to-yellow-500 w-12 shadow-lg'
: 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-3'
}`}
/>
))}
</div>
)}
</div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-8 bg-gradient-to-r from-navy-900 to-navy-700 dark:from-gray-800 dark:to-gray-700 rounded-3xl"
>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-2">3+</div>
<div className="text-sm text-gray-200">Countries Served</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-2">10+</div>
<div className="text-sm text-gray-200">Years MPFM Experience</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-2">30+</div>
<div className="text-sm text-gray-200">Patents & Publications</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white mb-2">3+</div>
<div className="text-sm text-gray-200">Successful Deployments</div>
</div>
</motion.div>
</div>
</section>

{/* Latest News Section - Dynamic */}
<section className="py-16 bg-gray-50 dark:bg-gray-800">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Latest News</h2>
<p className="text-xl text-gray-600 dark:text-gray-300">
Stay updated with our breakthrough developments and partnerships
</p>
</div>

{newsLoading ? (
<div className="grid md:grid-cols-3 gap-8">
{[1, 2, 3].map((i) => (
<div key={i} className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg animate-pulse">
<div className="aspect-video bg-gray-300 dark:bg-gray-600"></div>
<div className="p-6 space-y-4">
<div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
<div className="h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
<div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
</div>
</div>
))}
</div>
) : recentNews.length > 0 ? (
<div className="grid md:grid-cols-3 gap-8">
{recentNews.map((article, index) => (
<motion.article
key={article.id || article.slug}
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: index * 0.1 }}
className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] cursor-pointer"
onClick={() => window.location.href = '/news'}
>
<div className="aspect-video overflow-hidden relative">
<img
src={article.image}
alt={article.title}
className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
onError={handleImageError}
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

<div className="absolute top-4 left-4">
<div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-navy-900 dark:text-white px-3 py-1.5 rounded-full text-sm font-medium">
{article.category}
</div>
</div>

{article.featured && (
<div className="absolute top-4 right-4">
<div className="bg-yellow-500 text-navy-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
<Star size={12} />
FEATURED
</div>
</div>
)}
</div>

<div className="p-6">
<div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
<Calendar size={16} />
<time dateTime={article.date} className="text-sm">
{formatDate(article.date)}
</time>
</div>

<h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-navy-700 dark:group-hover:text-yellow-400 transition-colors duration-200 line-clamp-2">
{article.title}
</h3>

<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
{article.excerpt}
</p>

<div className="flex items-center justify-between">
<span className="flex items-center gap-2 text-navy-600 dark:text-yellow-400 font-semibold hover:text-yellow-500 transition-colors duration-200 text-sm group-hover:gap-3">
Read More <ArrowRight size={16} />
</span>

<div className="text-xs text-gray-400 dark:text-gray-500">
{Math.ceil(article.content.length / 1000)} min read
</div>
</div>
</div>
</motion.article>
))}
</div>
) : (
<div className="text-center py-12">
<div className="text-gray-400 dark:text-gray-500 mb-4">
<Calendar size={48} className="mx-auto mb-4" />
<p className="text-lg">No news articles available yet.</p>
<p className="text-sm">Check back soon for updates!</p>
</div>
</div>
)}

{recentNews.length > 0 && (
<div className="text-center mt-12">
<a
href="/news"
className="inline-flex items-center gap-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
>
View All News
<ArrowRight size={20} />
</a>
</div>
)}
</div>
</section>

{/* Stats Section */}
<section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-900 dark:to-gray-800 text-white">
<div className="container mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}
className="space-y-2 sm:space-y-4"
>
<div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">50%</div>
<div className="text-base sm:text-lg md:text-xl font-semibold">Cost Saving vs Conventional</div>
<div className="text-gray-300 text-sm sm:text-base">Test Separator Based Well Testing</div>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.1 }}
viewport={{ once: true }}
className="space-y-2 sm:space-y-4"
>
<div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">40%</div>
<div className="text-base sm:text-lg md:text-xl font-semibold">Lower Cost Ownership</div>
<div className="text-gray-300 text-sm sm:text-base">Compared to Gamma Based MPFMs</div>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.2 }}
viewport={{ once: true }}
className="space-y-2 sm:space-y-4"
>
<div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">±2-5%</div>
<div className="text-base sm:text-lg md:text-xl font-semibold">Measurement Accuracy</div>
<div className="text-gray-300 text-sm sm:text-base">Industry-leading precision</div>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.3 }}
viewport={{ once: true }}
className="space-y-2 sm:space-y-4"
>
<div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">75%</div>
<div className="text-base sm:text-lg md:text-xl font-semibold">Reduction</div>
<div className="text-gray-300 text-sm sm:text-base">Carbon Emission</div>
</motion.div>
</div>
</div>
</section>

{/* CTA Section */}
<section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-yellow-500 to-yellow-400 text-navy-900">
<div className="container mx-auto px-4 sm:px-6 text-center">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
>
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
Ready to Transform Your Production?
</h2>
<p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90 px-4">
Join industry leaders who trust Saher Flow Solutions for their critical flow measurement needs
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
<a
href="/contact"
className="inline-flex items-center justify-center gap-3 bg-navy-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-navy-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
>
Schedule Demo
<ArrowRight className="w-5 h-5" />
</a>
<a
href="/products"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center justify-center gap-3 border-2 border-navy-900 text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-navy-900 hover:text-white transition-all duration-300"
>
View Products
<Gauge className="w-5 h-5" />
</a>
</div>
</motion.div>
</div>
</section>

{/* Team Member Detail Modal */}
{selectedMember && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 pt-20">
<div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto">
<button
onClick={() => setSelectedMember(null)}
className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
>
<X size={20} />
</button>

<div className="p-8">
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-shrink-0 text-center">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-yellow-400/30 shadow-xl mb-4">
<img
src={selectedMember.image}
alt={selectedMember.name}
className="w-full h-full object-cover"
onError={(e) => {
const target = e.target as HTMLImageElement;
target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedMember.name)}&background=ffd500&color=1a3a5c&size=200&font-size=0.6`;
}}
/>
</div>
<a
href={selectedMember.linkedin}
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300"
>
<Linkedin size={16} />
Connect on LinkedIn
</a>
</div>

<div className="flex-1">
<h3 className="text-3xl font-bold text-navy-900 dark:text-white mb-2">
{selectedMember.name}
</h3>
<p className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold mb-2">
{selectedMember.role}
</p>
<div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-6">
<MapPin size={16} />
<span>{selectedMember.location}</span>
</div>

<div className="space-y-6">
<div>
<h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">About</h4>
<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
{selectedMember.longDescription}
</p>
</div>

<div>
<h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">Education</h4>
<p className="text-gray-600 dark:text-gray-300">{selectedMember.education}</p>
</div>

<div>
<h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">Expertise</h4>
<div className="flex flex-wrap gap-2">
{selectedMember.expertise.map((skill: string, index: number) => (
<span
key={index}
className="px-3 py-1 bg-gradient-to-r from-navy-100 to-navy-50 dark:from-navy-800 dark:to-navy-700 text-navy-700 dark:text-navy-300 text-sm rounded-full border border-navy-200 dark:border-navy-600"
>
{skill}
</span>
))}
</div>
</div>

<div>
<h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">Key Achievements</h4>
<ul className="space-y-2">
{selectedMember.achievements.map((achievement: string, index: number) => (
<li key={index} className="flex items-center gap-3">
<CheckCircle size={16} className="text-green-500 flex-shrink-0" />
<span className="text-gray-600 dark:text-gray-300">{achievement}</span>
</li>
))}
</ul>
</div>

<div>
<h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">Contact</h4>
<div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
<Mail size={16} />
<a href={`mailto:${selectedMember.email}`} className="hover:text-yellow-500 transition-colors">
{selectedMember.email}
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
)}

{/* Video Modal - Fixed YouTube embed and improved mobile responsiveness */}
{showVideo && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4 lg:p-8">
<div className="relative bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden w-full h-full sm:w-auto sm:h-auto sm:max-w-6xl shadow-2xl">
<button
onClick={() => setShowVideo(false)}
className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
>
<X size={20} className="sm:w-5 sm:h-5" />
</button>

<div className="relative w-full h-full sm:h-auto">
<div className="aspect-video w-full h-full sm:h-auto">
<iframe
src="https://www.youtube.com/embed/KmRtSAURurM?autoplay=1&rel=0&modestbranding=1&showinfo=0"
title="Saher Flow Solutions Demo"
className="w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl"
allowFullScreen
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
loading="lazy"
/>
</div>
</div>

<div className="hidden sm:block p-4 lg:p-6 bg-gray-50 dark:bg-gray-800">
<h3 className="text-lg lg:text-xl font-bold text-navy-900 dark:text-white mb-2">
Saher Flow Solutions Technology Demo
</h3>
<p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">
Watch our revolutionary DMOR technology in action and see how we're transforming flow measurement in the energy industry.
</p>
</div>
</div>
</div>
)}
</div>
);
};

export default Home;