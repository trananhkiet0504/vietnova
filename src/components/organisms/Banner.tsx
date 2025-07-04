import BannerContent from '../molecules/BannerContent.tsx';

const Banner = () => (
  <section className='bg-white-500 flex h-100 items-center justify-between px-16'>
    <BannerContent />
    <div className='w-1/2'>
      <div className='h-[300px] w-full overflow-hidden rounded-lg shadow-lg'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='h-full w-full rounded-lg object-cover'
        >
          <source src='/banner.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
);

export default Banner;