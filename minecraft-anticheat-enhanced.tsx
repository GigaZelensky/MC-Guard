"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Zap, Lock, Server, Code, Users, Cog } from "lucide-react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [cursorX, cursorY])

  return (
    <div className="min-h-screen bg-gray-950 text-white font-mono relative overflow-hidden">
      <DynamicBackground mousePosition={mousePosition} />
      <NetworkVisualization cursorX={cursorXSpring} cursorY={cursorYSpring} />

      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <motion.div
          className="text-2xl font-bold text-green-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MC•GUARD
        </motion.div>
        <nav>
          <ul className="flex space-x-4">
            {["Features", "About", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={`#${item.toLowerCase()}`} className="hover:text-green-400 transition-colors">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Secure Your Minecraft Server
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Advanced anti-cheat protection powered by cutting-edge AI technology
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105 hover:rotate-3">
                Get Started
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold mb-12 text-center text-green-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Features
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Shield className="h-6 w-6" />, title: "Advanced Protection", description: "AI-powered detection of various cheats and hacks" },
                { icon: <Eye className="h-6 w-6" />, title: "Real-time Monitoring", description: "Continuous server surveillance and instant alerts" },
                { icon: <Zap className="h-6 w-6" />, title: "Low Latency", description: "Minimal impact on server performance" },
                { icon: <Lock className="h-6 w-6" />, title: "Customizable Rules", description: "Tailor protection to your server's needs" },
                { icon: <Server className="h-6 w-6" />, title: "Scalable Infrastructure", description: "Designed to handle servers of all sizes" },
                { icon: <Code className="h-6 w-6" />, title: "Plugin Integration", description: "Seamless integration with popular Minecraft plugins" },
                { icon: <Users className="h-6 w-6" />, title: "Community Support", description: "Active community and dedicated support team" },
                { icon: <Cog className="h-6 w-6" />, title: "Regular Updates", description: "Continuous improvements and new features" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gray-700/50 p-3 rounded-full group-hover:bg-gray-700 transition-colors">
                      <div className="text-green-400 group-hover:text-green-300 transition-colors">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-green-400 group-hover:text-green-300 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl font-bold mb-8 text-green-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About MC•GUARD
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              MC•GUARD is the next generation of Minecraft anti-cheat systems. Leveraging advanced AI and machine learning
              algorithms, we provide unparalleled protection for your Minecraft server, ensuring fair play and an enjoyable
              experience for all players.
            </motion.p>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl font-bold mb-8 text-green-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to secure your Minecraft server? Contact us for a personalized demo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105 hover:rotate-3">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800/50 backdrop-blur-sm py-6 text-center text-gray-400 relative z-10">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 MC•GUARD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function DynamicBackground({ mousePosition }) {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.2) 0%, rgba(6, 95, 70, 0.05) 30%, transparent 70%)`,
        mixBlendMode: "screen",
      }}
    />
  )
}

function NetworkVisualization({ cursorX, cursorY }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const nodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }))

    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = "rgba(16, 185, 129, 0.1)"
      ctx.lineWidth = 0.5

      const cursorXValue = cursorX.get()
      const cursorYValue = cursorY.get()

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        const distanceToCursor = Math.hypot(node.x - cursorXValue, node.y - cursorYValue)
        if (distanceToCursor < 200) {
          const angle = Math.atan2(node.y - cursorYValue, node.x - cursorXValue)
          node.x += Math.cos(angle) * 0.5
          node.y += Math.sin(angle) * 0.5
        }

        nodes.slice(i + 1).forEach((otherNode) => {
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y)
          if (distance < 200) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(16, 185, 129, 0.3)"
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(drawNetwork)
    }

    drawNetwork()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [cursorX, cursorY])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}