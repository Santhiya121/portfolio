import removeImg from '../assets/remove.png'
export default function Resume(){
    const config={
        link:'https://bronze-brittany-20.tiiny.site'
    }
    return <section id='resume'className='flex flex-col md:flex-row bg-primary px-10 py-10'>
        <div className='py-10  md:w-1/3 flex  justify-center md:justify-end '>
            <img className='w-[1000px]' src={removeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center px-20'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-[#752f61e8] border-b-4 mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='text-white'>You can view my resume   <a className='btn px-2' href={config.link}>Download</a></p>

            </div>
           
        </div>
    </section>
}