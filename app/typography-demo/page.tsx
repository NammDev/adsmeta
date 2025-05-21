import PageSection from "@/components/page-section"
import { H1, H2, H3, H4, H5, Lead, Body, Small, Muted, InlineCode } from "@/components/typography"
import { textSpacing } from "@/lib/typography"

export default function TypographyDemo() {
  return (
    <PageSection className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className={textSpacing.section}>
          <H1>Typography System</H1>
          <Lead>
            This page demonstrates the responsive typography system implemented across the site. Text sizes
            automatically adjust based on screen size for optimal readability.
          </Lead>

          <div className={textSpacing.section}>
            <H2>Heading Elements</H2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-md">
                <H1>Heading 1 (fluid-h1)</H1>
                <Muted>Used for main page titles</Muted>
              </div>

              <div className="p-4 border border-gray-200 rounded-md">
                <H2>Heading 2 (fluid-h2)</H2>
                <Muted>Used for section titles</Muted>
              </div>

              <div className="p-4 border border-gray-200 rounded-md">
                <H3>Heading 3 (fluid-h3)</H3>
                <Muted>Used for subsection titles</Muted>
              </div>

              <div className="p-4 border border-gray-200 rounded-md">
                <H4>Heading 4 (fluid-h4)</H4>
                <Muted>Used for card titles and smaller sections</Muted>
              </div>

              <div className="p-4 border border-gray-200 rounded-md">
                <H5>Heading 5 (fluid-h5)</H5>
                <Muted>Used for small titles and emphasized text</Muted>
              </div>
            </div>
          </div>

          <div className={textSpacing.section}>
            <H2>Body Text Elements</H2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-md">
                <Lead>Lead Paragraph (fluid-body-lg)</Lead>
                <Muted>Used for introductory text and important paragraphs</Muted>
              </div>

              <div className="p-4 border border-gray-200 rounded-md">
                <Body>
                  Body Text (fluid-body) - This is the standard paragraph text used throughout the site. It's designed
                  to be readable on all devices with an optimal line length and height.
                </Body>
                <Muted>Used for main content text</Muted>
              </div>

              <div className="p-4 border border-gray-200 rounded-md">
                <Small>
                  Small Text (fluid-body-sm) - Used for less important information, captions, and footnotes.
                </Small>
                <Muted>Used for supplementary information</Muted>
              </div>

              <div className="p-4 border border-gray-200 rounded-md">
                <Muted>
                  Muted Text - Used for secondary information that shouldn't draw attention away from the main content.
                </Muted>
              </div>
            </div>
          </div>

          <div className={textSpacing.section}>
            <H2>Special Text Elements</H2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-md">
                <Body>
                  You can use <InlineCode>InlineCode</InlineCode> for technical terms or code snippets within text.
                </Body>
              </div>
            </div>
          </div>

          <div className={textSpacing.section}>
            <H2>Implementation Guide</H2>
            <Body>To use this typography system in your components, you can either:</Body>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <Body>
                  Import the typography components:{" "}
                  <InlineCode>{`import { H1, Body } from "@/components/ui/typography"`}</InlineCode>
                </Body>
              </li>
              <li>
                <Body>
                  Use the utility functions:{" "}
                  <InlineCode>{`import { heading, text } from "@/lib/typography"`}</InlineCode>
                </Body>
              </li>
              <li>
                <Body>
                  Apply the classes directly: <InlineCode>{`className="text-fluid-h1 font-bold"`}</InlineCode>
                </Body>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
