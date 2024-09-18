'use-client';

import Image from 'next/image';
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
      <aside className='bg-primary text-white p-4'>
        <NavBar />
      </aside>

      {/* Main Content */}
      <main className='p-8'>
        {/* ---- ABOUT  ---- */}
        <section id='about' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4 text-primary'>About</h2>
          <p className='text-md'>Hello World! Welcome to Yis Website!</p>
          <p className='text-md'>
            I was previously a Transportation Engineering, focus on the data
            modeling with ArcGIS and also TransCAD
          </p>
        </section>

        {/* ---- EDUCATION  ---- */}
        <section id='education' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4 text-primary'>Education</h2>
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
                Master of Engineering - Civil Engineering (Transportation
                Engineering)
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
                Beachlor of Engineering - Transportation Engineering
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
          <h2 className='text-2xl font-bold mb-4 text-primary'>Expertise</h2>
          {/* <div className='flex flex-wrap sm:flex-nowrap justify-center'> */}
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-8 justify-center'>
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
          <h2 className='text-2xl font-bold mb-4 text-primary'>Experience</h2>
          <div className='space-y-8'>
            <div>
              <h3 className='text-lg py-1 font-bold text-primary'>
                DEYI Consultants, Inc,{' '}
                <span className='font-normal'>Fullstack Engineer</span>
              </h3>
              <p className='text-md py-1'>
                <span className='font-bold'>Timeline: </span>Dec 2023 - Present
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
                Linscott, Law & Greenspan, Engineers,{' '}
                <span className='font-normal'>Transportation Engineer</span>
              </h3>
              <p className='text-md py-1'>
                <span className='font-bold'>Timeline: </span>Jun 2021 - Dec 2023
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

        {/* ---- PROJECT  ---- */}
        <section id='projects' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4 text-primary'>Projects</h2>
          <p className='text-md'>Hello World! Welcome to Yis Website!</p>
          <p className='text-md'>
            I was previously a Transportation Engineering, focus on the data
            modeling with ArcGIS and also TransCAD
          </p>
        </section>

        {/* ---- INTEREST  ---- */}
        <section id='interests' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4 text-primary'>Interests</h2>
          <p className='text-md'>Hello World! Welcome to Yis Website!</p>
          <p className='text-md'>
            I was previously a Transportation Engineering, focus on the data
            modeling with ArcGIS and also TransCAD
          </p>
        </section>
      </main>
    </div>
  );
}
