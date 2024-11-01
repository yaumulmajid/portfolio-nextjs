import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/potrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Yaumul Majid</title>
        <meta
          name="description"
          content="I'm Victoria Jordan. A leader, artist, and frontend enthusiast in Austin, TX."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Hey there! 👋🏻 | Thanks for comming.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m Majid, a versatile Software Engineer with over 3 years of experience in building diverse technology solutions. My expertise spans web development and mobile applications. I specialize in developing scalable applications across multiple platforms, leveraging modern technologies and best practices to create efficient, user-centric solutions. From implementing complex algorithms to optimizing system performance, I&lsquo;m passionate about delivering innovative solutions that solve real-world challenges.
              </p>
              <p>
                Throughout my journey, I&apos;ve mastered various modern technologies and frameworks, 
                constantly pushing the boundaries of what&apos;s possible in web development. 
                I take pride in transforming complex problems into elegant, efficient solutions that not only meet but exceed client expectations. Whether it&apos;s architecting new applications from the ground up, optimizing existing systems, or implementing cutting-edge features, 
                I approach each project with enthusiasm and attention to detail.
              </p>
              <p>
                Programming isn&apos;t just my profession—it&lsquo;s my craft and calling. I thrive on staying ahead of industry trends and best practices, ensuring that every line of code I write contributes to creating impactful digital experiences. My commitment to clean, 
                maintainable code and user-centric design has helped businesses achieve their digital transformation goals.
              </p>
              <p>
                In my personal life, I am fortunate to be the husband of my best friend and soulmate who always supports every step of my life. Outside of work routines, I have a passion for reading to sharpen my knowledge, running to maintain fitness, and enjoy exploring new places as my way to unwind while discovering the beauty of nature around me.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/yaumulmajid"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/yaumulmajidd/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:yaumulmajid@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                yaumulmajid@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
