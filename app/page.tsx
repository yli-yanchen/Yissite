import Image from 'next/image';
import NavBar from '@/components/public/NavBar';

export default function Home() {
  return (
    <div className='grid grid-cols-[16rem_1fr] min-h-screen'>
      <aside className='bg-primary text-white p-4'>
        <NavBar />
      </aside>

      {/* Main Content */}
      <main className='p-8'>
        <section id='about' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4'>About</h2>
          <p className='text-lg'>About YL</p>
        </section>
        <section id='education' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4'>Education</h2>
          <div className='space-y-8'>
            <div>
              <h3 className='text-lg py-1 font-bold'>Codesmith</h3>
              <p className='text-sm font-medium py-1'>
                Immersive Software Engineering
              </p>
              <p className='text-sm'>Sep 2023 - Jun 2024</p>
            </div>
          </div>
        </section>
        <section id='expertise' className='h-auto py-16'>
          <h2 className='text-2xl font-bold mb-4'>Expertise</h2>
          <p className='text-lg'>React</p>
        </section>
      </main>
    </div>
  );
}
