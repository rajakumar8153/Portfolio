import AboutImg from './about.png';

export default function About () {
    const config  = {
        line1: "Hello, I am Elon Musk. I am an entrepreneur, engineer, and inventor with a passion for pushing the boundaries of technology to solve some of the world's most pressing problems.",
        line2: ' You might know me as the CEO of SpaceX, where our goal is to make space travel more accessible and ultimately enable humanity to become a multiplanetary species.',
        line3: 'SpaceX in 2002, and Tesla, Inc. in 2003. I am currently the CEO of SpaceX and Tesla, Inc.',
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}
