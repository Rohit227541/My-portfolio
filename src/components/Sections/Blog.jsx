import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaCalendar, FaUser, FaTag, FaSearch, FaTimes, 
  FaArrowRight, FaHeart, FaComment, FaShare 
} from 'react-icons/fa'
import { toast } from 'react-hot-toast'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPost, setSelectedPost] = useState(null)
  const [likedPosts, setLikedPosts] = useState({})

  // Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React 18",
      excerpt: "Learn the latest features in React 18 including concurrent rendering, automatic batching, and new hooks...",
      content: `
        <p>React 18 introduced several groundbreaking features that change how we build React applications. The most significant addition is concurrent rendering, which allows React to prepare multiple versions of the UI at the same time.</p>
        
        <h2>Key Features of React 18</h2>
        <ul>
          <li><strong>Concurrent Rendering:</strong> Enables React to interrupt rendering to handle higher-priority updates</li>
          <li><strong>Automatic Batching:</strong> Groups multiple state updates into a single re-render</li>
          <li><strong>New Hooks:</strong> useId, useTransition, useDeferredValue</li>
          <li><strong>Suspense Improvements:</strong> Better data fetching and code splitting</li>
        </ul>
        
        <p>To get started with React 18, simply run: <code>npm install react@18 react-dom@18</code></p>
      `,
      date: "2024-01-15",
      readTime: "5 min read",
      author: "John Doe",
      category: "React",
      tags: ["React", "JavaScript", "Frontend"],
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600",
      likes: 42,
      comments: 12
    },
    {
      id: 2,
      title: "Tailwind CSS Best Practices",
      excerpt: "Master Tailwind CSS with these proven patterns and techniques for scalable styling...",
      content: `
        <p>Tailwind CSS has revolutionized how we style web applications. However, with great power comes great responsibility. Here are some best practices to keep your code clean and maintainable.</p>
        
        <h2>Component Extraction</h2>
        <p>Don't repeat yourself! Extract reusable component patterns using @apply or create custom components.</p>
        
        <h2>Responsive Design</h2>
        <p>Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:, 2xl:) to build mobile-first designs.</p>
        
        <h2>Dark Mode</h2>
        <p>Implement dark mode easily with the dark: variant and proper configuration.</p>
      `,
      date: "2024-01-10",
      readTime: "4 min read",
      author: "Jane Smith",
      category: "CSS",
      tags: ["Tailwind", "CSS", "Design"],
      image: "https://images.unsplash.com/photo-1507721999474-8f617b6904f5?w=600",
      likes: 38,
      comments: 8
    },
    {
      id: 3,
      title: "Advanced Framer Motion Animations",
      excerpt: "Create stunning animations with Framer Motion - from simple transitions to complex gestures...",
      content: `
        <p>Framer Motion is the go-to animation library for React. It's powerful, declarative, and incredibly intuitive.</p>
        
        <h2>Basic Animations</h2>
        <p>Start with simple fade-ins and slide-ups using animate and initial props.</p>
        
        <h2>Gestures</h2>
        <p>Add interactive animations with whileHover, whileTap, and whileDrag.</p>
        
        <h2>Variants</h2>
        <p>Organize complex animations using variants and orchestrate child animations.</p>
      `,
      date: "2024-01-05",
      readTime: "6 min read",
      author: "Mike Johnson",
      category: "Animation",
      tags: ["Framer Motion", "Animation", "React"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600",
      likes: 56,
      comments: 15
    },
    {
      id: 4,
      title: "State Management in 2024",
      excerpt: "Comparing Zustand, Redux, and Context API for modern React applications...",
      content: `
        <p>State management continues to evolve. Let's explore the best options available today.</p>
        
        <h2>Zustand</h2>
        <p>Minimalist approach with excellent TypeScript support and boilerplate-free code.</p>
        
        <h2>Redux Toolkit</h2>
        <p>The standard for large-scale applications with powerful devtools.</p>
        
        <h2>Context API</h2>
        <p>Built-in solution perfect for simpler state needs or theme management.</p>
      `,
      date: "2024-01-01",
      readTime: "7 min read",
      author: "Sarah Williams",
      category: "State Management",
      tags: ["Zustand", "Redux", "Context API"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
      likes: 49,
      comments: 10
    }
  ]

  // Categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Handle like
  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }))
    toast.success(likedPosts[postId] ? 'Removed like' : 'Post liked!')
  }

  // Handle share
  const handleShare = (post) => {
    navigator.clipboard.writeText(`${window.location.origin}/blog/${post.id}`)
    toast.success('Link copied to clipboard!')
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and deep dives into web development
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Box */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 focus:border-purple-500 focus:outline-none transition text-white placeholder-gray-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">No posts found. Try different search terms!</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-purple-400" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser className="text-purple-400" /> {post.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                        <FaTag className="inline mr-1 text-purple-400" size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-1 transition ${
                          likedPosts[post.id] ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <FaHeart /> {post.likes + (likedPosts[post.id] ? 1 : 0)}
                      </button>
                      <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition">
                        <FaComment /> {post.comments}
                      </button>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleShare(post)}
                        className="text-gray-400 hover:text-purple-400 transition"
                      >
                        <FaShare />
                      </button>
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-purple-400 hover:text-purple-300 transition flex items-center gap-1"
                      >
                        Read More <FaArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Full Post */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content */}
              <div className="relative">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                >
                  <FaTimes />
                </button>
                
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-purple-400" /> {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser className="text-purple-400" /> {selectedPost.author}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">
                      {selectedPost.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6">{selectedPost.title}</h2>
                  
                  <div 
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                  
                  <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-white/10">
                    {selectedPost.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Blog