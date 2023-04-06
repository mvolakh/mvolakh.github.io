import TechnologyType from '../types/TechnologyType'

interface ProjectType {
    name: string;
    desc: string;
    img: string;
    technologies: TechnologyType[];
    link: string;
}
    
export default ProjectType;