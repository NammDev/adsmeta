import { H2, H3, Lead, Body, Small } from "@/components/typography"
import { typographyStyles } from "@/components/typography"

export default function TypographyGuide() {
  return (
    <div className="space-y-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div>
        <H2>Typography System Guide</H2>
        <Lead>How to use the responsive typography system</Lead>
      </div>

      <div className="space-y-4">
        <H3>Component Usage</H3>
        <div className="space-y-2">
          <Body>Import the components:</Body>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm">
            {`import { H1, H2, H3, Lead, Body, Small } from "@/components/typography"`}
          </pre>

          <Body>Use them in your JSX:</Body>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm">
            {`<H1>Page Title</H1>
<Lead>This is an introduction paragraph that stands out.</Lead>
<Body>This is the main content of the page.</Body>`}
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <H3>Utility Function Usage</H3>
        <div className="space-y-2">
          <Body>Import the utility functions:</Body>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm">
            {`import { heading, text } from "@/lib/typography"`}
          </pre>

          <Body>Use them with className:</Body>
          <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm">
            {`<h1 className={heading("h1")}>Page Title</h1>
<p className={text("lead")}>This is an introduction paragraph.</p>
<p className={text("body")}>This is the main content.</p>`}
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <H3>Available Styles</H3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(typographyStyles).map(([name, className]) => (
            <div key={name} className="p-3 border border-gray-200 rounded-md">
              <Small className="text-gray-500 mb-1">{name}</Small>
              <div className={className}>Example Text</div>
              <code className="text-xs mt-2 block text-gray-500">{className}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
