"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    id: "1",
    title: "The Future of AI in Web Development",
    excerpt:
      "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent design tools.",
    image: "/ai-web-dev.jpg",
    category: "Technology",
    date: "2024-01-20",
    readTime: "5 min",
    trending: true,
  },
  {
    id: "2",
    title: "Mastering React Hooks: A Practical Guide",
    excerpt:
      "Learn how to leverage React hooks to write cleaner, more efficient, and reusable components. Includes practical examples and best practices.",
    image: "/react-hooks.jpg",
    category: "Web Development",
    date: "2024-01-15",
    readTime: "7 min",
    trending: false,
  },
  {
    id: "3",
    title: "The Ultimate Guide to CSS Flexbox",
    excerpt:
      "A comprehensive guide to CSS Flexbox, covering everything from basic concepts to advanced layout techniques. Perfect for beginners and experienced developers alike.",
    image: "/css-flexbox.jpg",
    category: "CSS",
    date: "2024-01-10",
    readTime: "10 min",
    trending: true,
  },
  {
    id: "4",
    title: "Getting Started with Next.js",
    excerpt:
      "An introduction to Next.js, the popular React framework for building server-rendered and statically generated web applications.",
    image: "/nextjs.jpg",
    category: "Framework",
    date: "2024-01-05",
    readTime: "6 min",
    trending: false,
  },
  {
    id: "5",
    title: "The Power of TypeScript in Large Projects",
    excerpt:
      "Discover how TypeScript can improve the maintainability and scalability of large web development projects. Includes tips for migrating existing JavaScript codebases.",
    image: "/typescript.jpg",
    category: "JavaScript",
    date: "2023-12-28",
    readTime: "8 min",
    trending: false,
  },
  {
    id: "6",
    title: "Building a RESTful API with Node.js and Express",
    excerpt:
      "Learn how to build a RESTful API using Node.js and Express. Includes best practices for designing and implementing API endpoints.",
    image: "/nodejs-express.jpg",
    category: "Backend",
    date: "2023-12-20",
    readTime: "9 min",
    trending: false,
  },
]

const trendingPosts = posts.filter((post) => post.trending)
const dailyPosts = posts.slice(0, 3)
const recentPosts = posts.slice(3)

export default function Blog() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">Welcome to Our Blog</h1>
            <p className="text-gray-600">Stay updated with the latest news, trends, and insights in web development.</p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <Image src="/hero-image.jpg" alt="Blog Hero" width={600} height={400} className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* Trending Posts Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Trending Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-lg font-semibold mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Daily New Posts Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Daily New Posts</h2>
        {/* Mobile View Cards */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {dailyPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="block">
              <Card className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="block relative">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {post.trending && <Badge className="absolute top-3 left-3 bg-orange-500 text-white">Trending</Badge>}
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 hover:text-facebook transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Desktop View Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {dailyPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="block group">
              <Card className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all group flex flex-col h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
                <div className="block relative">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {post.trending && <Badge className="absolute top-3 left-3 bg-orange-500 text-white">Trending</Badge>}
                </div>
                <CardContent className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-facebook transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center mt-auto">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-lg font-semibold mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
