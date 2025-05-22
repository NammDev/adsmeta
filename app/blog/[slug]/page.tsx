"use client"

import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock, Facebook, Twitter, Linkedin, Copy, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SupportingPageLayout from "@/components/supporting-page-layout"
import PageSection from "@/components/page-section"
import { TableOfContents } from "@/components/table-of-contents"
import { BlogCarousel } from "@/components/blog-carousel"
import { useEffect, useRef, useState } from "react"
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blog-posts"
import { use } from "react"

// Add this function before the BlogPostPage component
function extractHeadings(content: string) {
  const headingRegex = /<h([2-3])>(.*?)<\/h[2-3]>/g
  const headings: { id: string; text: string; level: number }[] = []

  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = Number.parseInt(match[1])
    const text = match[2]
    const id = text.toLowerCase().replace(/[^\w]+/g, "-")

    headings.push({ id, text, level })
  }

  return headings
}

// Now, modify the content rendering to add IDs to headings
// Add this function before the BlogPostPage component
function processContent(content: string) {
  return content.replace(/<h([2-3])>(.*?)<\/h[2-3]>/g, (match, level, text) => {
    const id = text.toLowerCase().replace(/[^\w]+/g, "-")
    return `<h${level} id="${id}">${text}</h${level}>`
  })
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params using React.use()
  const { slug } = use(params)

  // Refs for measuring elements
  const featuredImageRef = useRef<HTMLDivElement>(null)
  const articleEndRef = useRef<HTMLDivElement>(null)
  const tocRef = useRef<HTMLDivElement>(null)
  const tocContainerRef = useRef<HTMLDivElement>(null)

  // State for TOC positioning
  const [tocStyle, setTocStyle] = useState({
    position: "absolute" as "absolute" | "fixed",
    top: "0px",
    bottom: "auto",
    maxHeight: "calc(100vh - 8rem)",
    width: "100%",
  })

  // Get the blog post data from our centralized data source
  const blogPost = getBlogPostBySlug(slug)

  // If blog post not found, we could handle this better in a production app
  if (!blogPost) {
    return <div>Blog post not found</div>
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(slug)

  const headings = extractHeadings(blogPost.content)
  const processedContent = processContent(blogPost.content)

  // Function to update TOC position
  const updateTocPosition = () => {
    if (!featuredImageRef.current || !articleEndRef.current || !tocRef.current || !tocContainerRef.current) return

    const featuredRect = featuredImageRef.current.getBoundingClientRect()
    const articleEndRect = articleEndRef.current.getBoundingClientRect()
    const tocRect = tocRef.current.getBoundingClientRect()
    const tocContainerRect = tocContainerRef.current.getBoundingClientRect()

    const headerOffset = 96 // 6rem, adjust as needed
    const containerWidth = tocContainerRect.width

    // If featured image is below viewport top + offset, position TOC at featured image
    if (featuredRect.top > headerOffset) {
      setTocStyle({
        position: "absolute",
        top: "0px",
        bottom: "auto",
        maxHeight: "calc(100vh - 8rem)",
        width: "100%",
      })
    }
    // If featured image is above viewport top + offset but article end is below viewport
    else if (articleEndRect.top > headerOffset + tocRect.height) {
      setTocStyle({
        position: "fixed",
        top: `${headerOffset}px`,
        bottom: "auto",
        maxHeight: "calc(100vh - 8rem)",
        width: `${containerWidth}px`, // Set explicit width when fixed
      })
    }
    // If article end is about to go above the bottom of the TOC
    else {
      setTocStyle({
        position: "absolute",
        top: "auto",
        bottom: "0px",
        maxHeight: "calc(100vh - 8rem)",
        width: "100%",
      })
    }
  }

  // Effect for handling TOC positioning
  useEffect(() => {
    // Initial update
    updateTocPosition()

    // Update on scroll and resize
    window.addEventListener("scroll", updateTocPosition)
    window.addEventListener("resize", updateTocPosition)

    return () => {
      window.removeEventListener("scroll", updateTocPosition)
      window.removeEventListener("resize", updateTocPosition)
    }
  }, [])

  return (
    <SupportingPageLayout
      title={blogPost.title}
      subtitle={blogPost.excerpt}
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: blogPost.title, href: `/blog/${blogPost.id}` },
      ]}
      showNewsletter={true}
    >
      {/* Title Section */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <div className="max-w-6xl mx-auto px-4 mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
              {blogPost.category}
            </Badge>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center relative inline-block mx-auto w-full">
            <span className="relative z-10">{blogPost.title}</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-3 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full w-48"></div>
          </h1>
          <p className="text-lg text-gray-600 text-center mt-2">{blogPost.excerpt}</p>
        </div>
      </PageSection>

      {/* Content Section */}
      <PageSection className="pt-0 pb-8 relative overflow-hidden">
        {/* Add decorative gradient circles */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-6xl mx-auto px-4">
          {/* Main content area with sidebar */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Left column - Main content (spans 2 columns) */}
            <div className="lg:col-span-2">
              {/* Featured Image with Metadata */}
              <div className="mb-6" ref={featuredImageRef}>
                <div className="relative h-[250px] w-full rounded-lg overflow-hidden shadow-md border border-transparent bg-gradient-to-r from-blue-100 to-purple-100 p-[1px]">
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <Image
                      src={blogPost.image || "/placeholder.svg"}
                      alt={blogPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end mt-3 mb-6 text-sm text-gray-500 border-b border-gray-200 pb-4">
                  <div className="flex items-center mr-4">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{blogPost.date}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{blogPost.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>338 views</span>
                  </div>
                </div>
              </div>

              {/* Blog Post Content */}
              <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: processedContent }} />

              {/* Social Sharing */}
              <div className="border-t border-gray-200 mt-8 pt-6 mb-4" ref={articleEndRef}>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">Share this article:</p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Table of Contents (spans 1 column) */}
            <div className="hidden lg:block lg:col-span-1 relative" ref={tocContainerRef}>
              {/* The TOC container with dynamic positioning */}
              <div
                ref={tocRef}
                className="bg-white rounded-lg shadow-sm border border-transparent bg-gradient-to-r from-blue-50 to-purple-50 p-[1px] overflow-y-auto"
                style={{
                  position: tocStyle.position,
                  top: tocStyle.top,
                  bottom: tocStyle.bottom,
                  maxHeight: tocStyle.maxHeight,
                  width: tocStyle.width,
                }}
              >
                <TableOfContents headings={headings} title="Table of Contents" />
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Related Posts Title Section */}
      <PageSection className="pt-6 md:pt-8 pb-0">
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-2xl font-bold text-center relative inline-block mx-auto w-full">
            <span className="relative z-10">You Might Also Like</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-3 bg-gradient-to-r from-blue-200 to-purple-200 opacity-50 rounded-full w-48"></div>
          </h2>
        </div>
      </PageSection>

      {/* Related Posts Content Section */}
      <PageSection className="pt-0 pb-12 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-6xl mx-auto">
          <BlogCarousel itemsPerView={3} mobileItemsPerView={2} className="px-4">
            {relatedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full group/card"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative h-36 md:h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-facebook/0 to-blue-600/0 group-hover/card:from-facebook/10 group-hover/card:to-blue-600/10 transition-all duration-300 z-10"></div>
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover/card:scale-105 duration-300"
                    />
                  </div>
                </Link>
                <div className="p-4 md:p-6">
                  {/* Badge only shows on desktop */}
                  <Badge variant="blog" className="mb-3 hidden md:inline-flex border-0">
                    {post.category}
                  </Badge>

                  <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-facebook transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Summary text - reduced on mobile */}
                  <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4 line-clamp-1 md:line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Simplified link for mobile */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-facebook hover:underline text-xs md:text-sm font-medium flex items-center group/link"
                  >
                    <span className="md:block">Read</span>
                    <span className="hidden md:inline"> Article</span>
                    <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </BlogCarousel>
        </div>
      </PageSection>
    </SupportingPageLayout>
  )
}
