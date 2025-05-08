import { type SchemaTypeDefinition } from 'sanity'
import caseStudy from "./caseStudy"
import testimonial from "./testimonial"
import service from "./service"
import about from "./about"
import project from './project'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    about,
    caseStudy,
    testimonial,
    service,
    project
  ],
}
