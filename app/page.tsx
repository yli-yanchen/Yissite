'use-client';

import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/public/NavBar';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandSocketIo,
} from 'react-icons/tb';
import {
  SiTypescript,
  SiArcgis,
  SiMui,
  SiR,
  SiYaml,
  SiSupabase,
  SiMongodb,
  SiPrisma,
  SiJquery,
  SiRedis,
  SiWebpack,
  SiExpress,
  SiKubernetes,
  SiGithubactions,
  SiOpenai,
  SiVercel,
  SiSketchup,
} from 'react-icons/si';
import { BiSolidFileJson, BiLogoPostgresql } from 'react-icons/bi';

export default function Home() {
  return (
    <div className='grid grid-cols-[16rem_1fr] min-h-screen'>
      <div className='bg-primary text-white p-4'>
        <NavBar />
      </div>

      {/* Main Content */}
      <main className='p-8'>
        {/* ---- ABOUT  ---- */}
        <section id='about' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4  bg-primary text-white indent-4'>
            About
          </h2>
          <p className='text-md py-2 mt-4'>
            Hello World! Welcome to Yis Website! 👋👋👋
          </p>
          <p className='text-md py-2'>
            I am a Software Engineer with experience in web development at DEYI
            Consultants, Inc., where I built the company website to enhance
            public access to company information. Currently, I am developing a
            project management system to streamline processes for both engineers
            and clients. This system includes features such as project status
            tracking, bill payments, appointment scheduling, and more. The
            dashboard is designed to assist administrators in efficient project
            management while offering clients a user-friendly platform to
            monitor their ongoing projects.
            {/* I am a Software Engineer specializing in web development at DEYI
            Consultants, Inc. I played a key role in developing and launching
            the company&apos;s website and am currently working on a project
            management system to help our engineers and clients track project
            statuses. In my previous role at LLG, I introduced Python for safety
            data analysis and utilized ArcGIS Pro for geographic analysis. I
            also designed VBA macros in Excel and created GISDK macros in
            TransCAD to streamline VMT calculations. Additionally, I integrated
            the TomTom Traffic API to access speed data, which significantly
            improved workflows and enhanced the quality of our work. */}
          </p>
          <p className='text-md py-2'>
            I graduate from USC in 2021. I am passionate about leveraging
            technology to solve real-world problems and thrive in collaborative
            team environments. I look forward to connecting with you and
            discussing how I can contribute to the success of your team.
          </p>
        </section>

        {/* ---- EDUCATION  ---- */}
        <section id='education' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4  bg-primary text-white indent-4'>
            Education
          </h2>
          <div className='space-y-8'>
            {/* <div>
              <h3 className='text-lg py-1 font-bold'>Codesmith</h3>
              <p className='text-sm font-medium py-1'>
                Immersive Software Engineering
              </p>
              <p className='text-sm'>Sep 2023 - Jun 2024</p>
            </div> */}
            <div>
              <h3 className='text-lg py-1 font-bold text-primary'>
                University of Southern California (USC),{' '}
                <span className='font-normal'>Los Angeles, United State</span>
              </h3>
              <p className='text-md font-bold py-1'>
                {/* Master of Engineering - Civil Engineering (Transportation
                Engineering) */}
                Master of Engineering
              </p>
              <p className='text-md py-1'>
                <span className='font-bold'>Timeline: </span>Aug 2019 - May 2021
              </p>
              <p className='text-md py-1'>
                <span className='font-bold'>Cumulative GPA: </span>3.9
              </p>
              <p className='text-md font-medium py-1'>
                <span className='font-bold'>Classwork: </span>
                Data Mining, Data Science for Transportation, Data Management,
                Business Analysis, Supply Chain Analytics, Fundamental Concepts
                of computing and programming in Civil and Environmental
                Engineering, Network and Travel Demand Analysis, Geographic
                Information Systems
              </p>
            </div>
            <div>
              <h3 className='text-lg py-1 font-bold text-primary'>
                Civil Aviation University of China (CAUC),{' '}
                <span className='font-normal'>Tianjin, China</span>
              </h3>
              <p className='text-md font-bold py-1'>
                {/* Beachlor of Engineering - Transportation Engineering */}
                Bachelor of Engineering
              </p>
              <p className='text-md py-1'>
                <span className='font-bold'>Timeline: </span>Aug 2015 - Jun 2019
              </p>
              <p className='text-md py-1'>
                <span className='font-bold'>Cumulative GPA: </span>3.5
              </p>
              <p className='text-md font-medium py-1'>
                <span className='font-bold'>Classwork: </span>
                Advanced Mathematics, Foundation of Computers, Linear Algebra,
                Programming Design of C Language, Probability and Statistics,
                Operation Research
              </p>
            </div>
          </div>
        </section>

        {/* ---- EXPERTISE ---- */}
        <section id='expertise' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4 bg-primary text-white indent-4'>
            Expertise
          </h2>
          {/* <div className='flex flex-wrap sm:flex-nowrap justify-center'> */}
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-8 justify-center pt-4'>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <TbBrandJavascript
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>JavaScript</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiTypescript
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>TypeScript</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <FaPython
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Python</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiR
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>R</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiYaml
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>YAML</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <BiSolidFileJson
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>JSON</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiJquery
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>jQuery</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <FaHtml5
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>HTML</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <FaCss3Alt
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>CSS</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <FaReact
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>React v18.3.1</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <TbBrandNextjs
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Next JS</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiMui
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Material UI</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <BiLogoPostgresql
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>PostgreSQL</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiSupabase
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Supabase</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiMongodb
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>MongoDB</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiRedis
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Redis</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiPrisma
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Prisma</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <FaNodeJs
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Node.js</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiExpress
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Express.js</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiWebpack
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Webpack</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <FaGitAlt
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Git</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <FaGithub
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>GitHub</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiGithubactions
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>GitHub Actions</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <FaDocker
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Docker</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiKubernetes
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Kubernetes</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <TbBrandSocketIo
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Socket.IO</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiOpenai
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>OpenAI</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiVercel
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Vercel</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiArcgis
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>ArcGIS Pro</p>
            </div>
            <div className='text-lg flex flex-col items-center justify-start mx-4'>
              <SiSketchup
                className='mr-2 text-2xl size-12'
                style={{ color: 'rgba(52, 52, 52, 0.8)' }}
              />
              <p className='text-sm flex items-center'>Sketchup</p>
            </div>
          </div>
        </section>

        {/* ---- EXPERIENCE  ---- */}
        <section id='experience' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4  bg-primary text-white indent-4'>
            Experience
          </h2>
          <div className='space-y-8'>
            <div>
              <h3 className='text-lg py-1 font-bold text-primary'>
                DEYI Consultants, Inc,{' '}
                <span className='font-normal'>Full Stack Engineer</span>
              </h3>
              <p className='text-md py-1'>
                <span className='font-bold'>Timeline: </span>Dec 2023 - Present
              </p>
              <div className='text-md font-medium py-1'>
                <ul className='list-disc list-inside space-y-1'>
                  <li className='py-1'>
                    Developed and deployed a full-stack web application using
                    Next.js and TypeScript to display public company
                    information, and implemented a role-based project management
                    dashboard with React and JavaScript, accessible after
                    authentication, optimizing project management workflows and
                    improving team efficiency.
                  </li>
                  <li className='py-1'>
                    Integrated third-party APIs such as Google Maps API for
                    address autocomplete, Google OAuth for secure user
                    authentication, Nodemailer API for transactional email
                    functionality, and Calendly for seamless online meeting
                    scheduling.
                  </li>
                  <li className='py-1'>
                    Utilized React built-in hooks and custom hooks for data
                    fetching, state management, and user authorization, enabling
                    the creation of maintainable components and streamlining the
                    development process.
                  </li>
                  <li className='py-1'>
                    Architected a high-performance RESTful API with Node.js and
                    Express, ensuring seamless integration with MongoDB Atlas
                    for scalable and efficient data management, supporting
                    robust backend functionality.
                  </li>
                </ul>
                <p className='py-1 italic'>
                  <span className='font-bold'>👉👉👉 Reference Link: </span>{' '}
                  <Link
                    href='https://www.deyiconsultants.com'
                    className='underline text-primary font-bold'
                  >
                    www.deyiconsultants.com
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h3 className='text-lg py-1 font-bold text-primary'>
                Linscott, Law & Greenspan, Engineers,{' '}
                <span className='font-normal'>
                  Transportation Engineer (Data Analysis)
                </span>
              </h3>
              <p className='text-md py-1'>
                <span className='font-bold'>Timeline: </span>Jun 2021 - Dec 2023
              </p>
              <div className='text-md font-medium py-1'>
                <ul className='list-disc list-inside space-y-1'>
                  <li className='py-1'>
                    Designed and implemented a custom VBA macro-enabled Excel
                    toolbox to automate complex calculation workflows,
                    significantly improving efficiency in transportation
                    engineering tasks.
                  </li>
                  <li className='py-1'>
                    {`Develop a backend API for an ETL (Extract, Transform, Load)
                    system to retrieve, process, and integrate traffic data from
                    TOMTOM platform.`}
                    {/* Get promoted over{' '}
                    <span className='font-bold'>30% faster</span> than the
                    typical progression timeline, showcasing exceptional
                    performance and rapid technical growth. */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---- PROJECT  ---- */}
        <section id='projects' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4  bg-primary text-white indent-4'>
            Projects
          </h2>
          <div>
            <h3 className='text-lg py-1 font-bold text-primary'>
              OptiKube, <span className='font-normal'>Software Engineer</span>
            </h3>
            <p className='text-md py-1'>
              <span className='font-bold'>Timeline: </span>September 2023 - May
              2024
            </p>
            <div className='text-md font-medium py-1'>
              <ul className='list-disc list-inside space-y-1'>
                <li className='py-1'>
                  Developed and launched a full-stack dashboard using Next.js
                  and TypeScript to provide users with detailed monitoring of
                  metrics and cost, while enabling custom deployment adjustments
                  based on user inputs, delivering granular insights into
                  Kubernetes cluster configurations.
                </li>
                <li className='py-1'>
                  Designed and implemented a custom Kubernetes operator to
                  dynamically scale cluster resources based on user inputs and
                  feedback loops, optimizing resource utilization and reducing
                  operational costs.
                </li>
                <li className='py-1'>
                  Leveraged the Kubernetes client library to optimize Horizontal
                  Pod Autoscaler (HPA) configurations and deployment
                  specifications, ensuring high availability, resilience, and
                  efficient resource allocation, resulting in significant cost
                  savings.
                </li>
                <li className='py-1'>
                  Integrated KubeCost API endpoints to retrieve detailed cloud
                  cost insights and visualized them within the dashboard, using
                  tables and figures to provide users with clear, actionable
                  insights for informed decision-making.
                </li>
                <li className='py-1'>
                  Packaged the entire application and its dependencies into
                  Docker containers, configured via YAML files, and deployed it
                  to Google Kubernetes Engine using Google Cloud CLI, enhancing
                  portability and ease of deployment across environments.
                </li>
              </ul>
              <p className='py-1 italic'>
                <span className='font-bold'>👉👉👉 Reference Link: </span>{' '}
                <Link
                  href='https://optikube.vercel.app'
                  className='underline text-primary font-bold'
                >
                  https://optikube.vercel.app
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ---- INTEREST  ---- */}
        <section id='interests' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4  bg-primary text-white indent-4'>
            Interests
          </h2>
          <p className='py-2'>
            I enjoy traveling, photography, cooking, reading, and blogging!{' '}
          </p>
          <p className='py-2'>
            I&apos;m fascinated by ancient history and love exploring how
            civilizations and countries have developed. One of my favorite books
            is <span className='italic'>Revelation</span>, which discusses the
            evolution of the Shang Dynasty in the ancient China. I also love{' '}
            <span className='italic'>
              Sapiens: A Brief History of Humankind
            </span>
            which delves into the development of humanity. Other favorites
            include <span className='italic'>Becoming</span>,{' '}
            <span className='italic'>Educated, </span>
            and more.
          </p>
          <p className='py-2'>
            Beyond reading, I also love writing. Some of my articles are
            publiced online and I get used to have a diary to reflect on the
            day, capturing my thoughts, actions, and emotions.{' '}
            {/* <span className='italic'>
              (It&apos;s my secret to staying happy, and keep motivated everyday
              😊😊😊)
            </span> */}
          </p>
          <p className='py-2'>
            Lastly, thank you all for visiting my website. I truly appreciate
            you taking the time to get to know me. I&apos;d love to share some
            photos from my daily life with you.
          </p>

          <div className='w-full h-auto bg-primary p-1 flex flex-row items-center justify-center'>
            <div className='bg-white m-2 p-3'>
              <Image
                src='/images/pic1.JPG'
                alt='Residential Structural Design'
                objectFit='cover'
                width={600}
                height={400}
                className='z-10 border-2 border-zinc-400 shadow-2xl'
              />
            </div>
            <div className='bg-white m-2 p-3'>
              <Image
                src='/images/pic2.JPG'
                alt='Residential Structural Design'
                objectFit='cover'
                width={600}
                height={400}
                className='z-10 border-2 border-zinc-400 shadow-2xl'
              />
            </div>
            <div className='bg-white m-2 p-3'>
              <Image
                src='/images/pic5.JPG'
                alt='Residential Structural Design'
                objectFit='cover'
                width={600}
                height={400}
                className='z-10 border-2 border-zinc-400 shadow-2xl'
              />
            </div>
          </div>

          <p className='py-4'>See you all around! Best wishes.</p>
        </section>
      </main>
    </div>
  );
}
