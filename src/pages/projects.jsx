import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import ikklan from '@/images/logos/ikklan.png'
import chart from '@/images/logos/chart.png'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
// import shyna from '@/images/logos/shyna.png'
// Import preview images
import ikklanPreview from '@/images/projects/ikklan.png'
import chartPreview from '@/images/projects/chartgenerator.png'
import shynaPreview from '@/images/projects/compro.png'
// import javaPreview from '@/images/projects/java-preview.jpg'

const projects = [
  {
    name: 'IKK LAN RI: Custom Development',
    description:
      "IKK LAN RI custom website using Java Spring Framework for the back-end and Vue.js for the front-end, focusing on key features such as: User Registration with Admin Approval, File Upload/Download Handling, Data Filtering.",
    techStack: [
        { name: "Vue.js", color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" },
        { name: "Java SpringBoot", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" }
      ],
    link: {
      href: 'https://ikk.lan.go.id',
      label: 'Live',
    },
    preview: ikklanPreview, // Add preview image
  },
  {
    name: 'Chart Generator: Web Development',
    description:
      'This project aims to create a web application using Laravel that can generate charts and export them to DOCX format. The application will include a content management system (CMS) to help users manage data easily.',
    techStack: [
        { name: "Laravel", color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" },
        { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400" }
      ],
      link: {
      href: 'https://chart.yaumulmajid.com',
      label: 'Live',
    },
    preview: chartPreview, // Add preview image
  },
  {
    name: 'Company Profile: Web Development',
    description:
      "Build a dynamic and interactive company website using Laravel. Showcase company information, including services, products, team, and portfolio. Enable the company to manage a Content Management System (CMS).",
    techStack: [
        { name: "Laravel", color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" }
      ],
    
      link: { 
      href: 'https://github.com/yaumulmajid/laravel-company-profile.git',
      label: 'Github' 
    },
    preview: shynaPreview, // Add preview image
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}
export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Yaumul Majid</title>
        <meta
          name="description"
          content="Where vision meets innovation, I craft digital solutions that transform ideas into engaging experiences."
        />
      </Head>
      <SimpleLayout
        title="Beyond the Screen Personal Projects."
        intro="Where vision meets innovation, I craft digital solutions that transform ideas into engaging experiences. Every project tells a unique story of possibility and purpose."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {/* Preview Image */}
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg z-30">
                <Image
                  src={project.preview}
                  alt={project.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  unoptimized
                />
              </div>

              {/* Tech Stack Section */}
              {project.techStack && (
                <div className="mb-4 z-40 relative">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Rest of the content */}
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}