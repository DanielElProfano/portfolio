import { lazy } from 'react';
// import Home from '../../components/Home';
import { HOME, CV, PROJECTS } from './paths';

const Projects = lazy (() => import('../../components/Home'));
const About = lazy (() => import('../../components/About'));
const Cv = lazy (()=> import('../../components/Cv')); 

const routes = [
    {
        path: PROJECTS,
        component: Projects
    },
    {
        path: CV,
        component: Cv
    },
    {
        path: HOME,
        component: About
    }
];

export default routes;