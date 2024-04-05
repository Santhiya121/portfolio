import webImg1 from '../assets/ecom.jpg';
import webImg2 from '../assets/food.jpg';
import webImg3 from '../assets/spoti.jpg';
export default function Projects(){
     const config={
        projects:[
           
            {
                image: webImg1,
                description:'A E-commerce website build with Django',
                link:''
            },
            {
                image:webImg2,
                description:'A Food recipe website build with Html , CSS and JavaScript',
                link:''
            },
            {
                image:webImg2,
                description:'A spotify clone using ReactJs',
                link:''
            }
        ]
     }
    return <section id='projects'className="flex flex-col py-20 px-20 justify-center bg-secondary text-white">
        <div className="w-1/2">
            <div className="flex flex-col px-10 py-5">
        <h1 className='text-4xl text-white border-[#501B1D] border-b-4 mb-5 w-[140px] font-bold'>Projects</h1>
          <p>These are some of my best project . Check them out.</p>
            </div>

        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-10'>
                {config.projects.map((project)=>(
                <div className='relative'>
                <img className='h-[200px] w-[400px]' src={project.image}/>
                <div className='Projects-desc'>
                    <p className='text-center py-5'>
                     {project.description}
                     <div className='flex justify-center'>
                    <a className='btn' target='_blank' href={project.link}>View project</a>
                    </div>
                    </p>
                

                    </div>
                  
                </div>
        
              
                ))}
                
     
            </div>
        </div>
    </section>
}