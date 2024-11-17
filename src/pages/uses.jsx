import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ChatBot } from '@/components/ChatBot'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Development Tools</title>
        <meta
          name="description"
          content="Discover my essential developer toolkit: IDEs, database tools, productivity software and tech gear I use daily for software development, database management and server administration."
        />
      </Head>
      <SimpleLayout
        title="My Essential Developer Tools & Software Stack 2024"
        intro="Here's my personal tech stack and tools that I use daily for software development, database management, and server administration. These are battle-tested tools that have proven reliable and efficient in my development workflow."
        >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” Ideapad Slim 5i, Ultra 7, 16GB RAM (2024)">
              I was using an Intel-based 14” Ideapad Slim 5i prior to this and the
              difference is night and day. I&apos;ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Ipad 10th Gen (2022)">
              Perfect tablet device for productivity and creativity. 
              With a 10.9-inch Liquid Retina display, A14 Bionic chip, and Apple Pencil support, this is my go-to tool for sketching, reading, and everyday light tasks.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
          <Tool title="Intellij IDEA 2024">
          The most powerful and intelligent Java IDE. With its advanced features like smart code completion, refactoring tools, and built-in developer tools, it&apos;s essential for my Java development workflow.
          </Tool>

          <Tool title="Visual Studio Code">
          My favorite lightweight but powerful code editor. With its extensive marketplace of extensions and great Git integration, it&apos;s perfect for web development and quick code edits.
          </Tool>

          <Tool title="Dbeaver">
          Excellent universal database management tool. Its support for multiple databases, visual query builder, and data export features make database administration much easier.
          </Tool>

          <Tool title="Postman">
          Essential API development and testing tool. Makes testing, documenting, and sharing API collections a breeze. Perfect for both development and API documentation.
          </Tool>

          <Tool title="Termius">
          Cross-platform SSH client that makes server management simple. With features like saved sessions, SFTP support, and secure credential storage, it&apos;s my go-to terminal tool.
          </Tool>

          <Tool title="WinSCP">
          Reliable SFTP and FTP client for Windows. Makes file transfers between local and remote servers efficient and secure. Essential for web hosting management.
          </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
          <Tool title="Slack">
            Essential team communication platform that streamlines our workflow. With organized channels, integrations, and real-time messaging, it keeps our team collaboration efficient and productive.
          </Tool>
          
          <Tool title="Jira">
            Powerful project management tool that helps track tasks and agile workflows. Perfect for managing sprints, tracking issues, and maintaining project timelines with the development team.
          </Tool>
        </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
