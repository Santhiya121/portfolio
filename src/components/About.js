import AboutImg from '../assets/about.jpg'
export default function About(){
    return <section className='flex flex-col md:flex-row bg-primary px-10 py-10 ' id='about'>
        <div className='py-5 md:w-1/3  '>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center px-20'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-[#752f61e8] border-b-4 mb-5 w-[180px] font-bold'>About Me</h1>
            <p className='text-white'>Hello! I'm Santhiya Ravi, an MCA final year student currently interning at Monolith Technology, specializing in web development. I'm familiar with C++, Python, HTML, CSS, and JavaScript, Sql and I work with Django and React.js. I love turning ideas into practical solutions, and my journey involves a mix of academic learning and hands-on experience. Check out my skills in Object-Oriented Programming, data structures, and algorithms. I'm enthusiastic about exploring job opportunities and would love to connect with you. Let's chat about tech, projects, or potential collaborations!</p>

            </div>
           
        </div>
    </section>
}