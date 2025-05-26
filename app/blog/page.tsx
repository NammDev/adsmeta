import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

const dailyPosts = [
  {
    id: "1",
    title: "The Future of AI in Web Development",
    excerpt:
      "Explore how artificial intelligence is revolutionizing web development, from automated testing to intelligent code completion.",
    image: "/ai-web-dev.jpg",
    category: "Technology",
    date: "2024-01-26",
    readTime: "5 min",
    trending: true,
  },
  {
    id: "2",
    title: "Mastering React Hooks: A Practical Guide",
    excerpt:
      "Learn how to leverage React Hooks to write cleaner, more maintainable code. This guide covers useState, useEffect, useContext, and more.",
    image: "/react-hooks.jpg",
    category: "JavaScript",
    date: "2024-01-25",
    readTime: "7 min",
    trending: false,
  },
  {
    id: "3",
    title: "The Ultimate Guide to Next.js Routing",
    excerpt: "Discover the power of Next.js routing and how it simplifies building complex web applications with ease.",
    image: "/nextjs-routing.jpg",
    category: "Next.js",
    date: "2024-01-24",
    readTime: "6 min",
    trending: true,
  },
  {
    id: "4",
    title: "CSS Grid Layout: A Comprehensive Tutorial",
    excerpt: "Dive deep into CSS Grid Layout and learn how to create stunning, responsive layouts with minimal code.",
    image: "/css-grid.jpg",
    category: "CSS",
    date: "2024-01-23",
    readTime: "8 min",
    trending: false,
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Daily New Posts</h2>
        {/* Mobile view */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {dailyPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="block relative">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {post.trending && <Badge className="absolute top-3 left-3 bg-orange-500 text-white">Trending</Badge>}
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-facebook/10 text-facebook hover:bg-facebook/20">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-facebook transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
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

        {/* Desktop view (updated to make entire card clickable) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {dailyPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="block group">
              <Card className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all group flex flex-col h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
                <div className="block relative">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
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
    </div>
  )
}
