"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Zap, Shield, Users } from "lucide-react"
import Image from "next/image"
import { useRef, useCallback } from "react"

const teamMembers = [
  {
    name: "Ben",
    alias: "The Deployment Dynamo",
    image: "/images/ben.png",
    hometown: "Silicon Valley, CA",
    costume: "Midnight Blue Power Suit with Lightning Bolt Tie",
    powers: [
      "Instant Infrastructure Scaling",
      "Zero-Downtime Deployment Vision",
      "Client Confidence Amplification",
      "Technical Jargon Translation",
    ],
    bio: "Once a mild-mannered developer, Ben gained his powers after being struck by a bolt of pure serverless energy during a late-night deployment. Now he can scale applications with a single thought and deploy faster than the speed of light.",
    color: "from-blue-600 to-purple-600",
  },
  {
    name: "Harry",
    alias: "The Happiness Hero",
    image: "/images/harry.png",
    hometown: "Austin, TX",
    costume: "Golden Suit of Perpetual Joy with Laughter-Powered Cape",
    powers: [
      "Infectious Enthusiasm",
      "Deal-Closing Charisma",
      "Stress Neutralization Field",
      "Team Morale Multiplication",
    ],
    bio: "Harry discovered his powers at his own wedding when his joy became so contagious it solved three client disputes simultaneously. His laughter can literally power Vercel's edge functions.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Alex",
    alias: "The Digital Phantom",
    image: "/images/alex.png",
    hometown: "Neo Tokyo, Japan",
    costume: "Pixelated Stealth Armor with Holographic Interface Gauntlets",
    powers: [
      "Data Stream Manipulation",
      "Digital Camouflage",
      "Code Architecture Visualization",
      "Quantum Computing Interface",
    ],
    bio: "Alex was digitized during a freak accident involving a quantum computer and a cup of coffee. Now existing partially in the digital realm, they can interface directly with any system and see the true structure of code.",
    color: "from-gray-700 to-black",
  },
  {
    name: "Kevin",
    alias: "The Strategy Sentinel",
    image: "/images/kevin.png",
    hometown: "Boston, MA",
    costume: "Battle-Scarred Navy Tactical Suit with Quantum Planning Visor",
    powers: [
      "Temporal Strategy Sight",
      "Catastrophic Risk Prevention",
      "Timeline Manipulation Resistance",
      "Strategic Sacrifice Calculation",
    ],
    bio: "Kevin's powers came at a terrible cost. During a catastrophic client meeting where a competitor's sabotage threatened to destroy three major companies and thousands of jobs, Kevin made the ultimate sacrifice. He absorbed the full force of a temporal strategy bomb meant to erase all business timelines. The explosion should have killed him, but instead, it shattered his perception across infinite realities. Now he experiences every possible failure simultaneously - watching companies collapse, seeing friends lose everything, feeling the weight of every wrong decision across countless timelines. His strategic perfection comes from living through every nightmare scenario in his mind, forever haunted by the disasters only he can prevent.",
    color: "from-red-900 to-slate-900",
  },
  {
    name: "Carson",
    alias: "The Charm Champion",
    image: "/images/carson.png",
    hometown: "Nashville, TN",
    costume: "Platinum Performance Suit with Confidence-Boosting Accessories",
    powers: [
      "Irresistible Persuasion",
      "Instant Rapport Building",
      "Presentation Perfect Timing",
      "Client Trust Magnetism",
    ],
    bio: "Carson's powers manifested during his first major presentation when his natural charisma created a literal aura of trust. Clients find themselves saying 'yes' before he even finishes his pitch.",
    color: "from-green-500 to-teal-600",
  },
  {
    name: "John",
    alias: "The Ginger Guardian",
    image: "/images/john.png",
    hometown: "Dublin, Ireland",
    costume: "Emerald Executive Armor with Celtic Power Patterns",
    powers: [
      "Unbreakable Determination",
      "Problem-Solving Intuition",
      "Team Unity Amplification",
      "Ancient Wisdom Access",
    ],
    bio: "John's powers awakened when he touched a mystical shamrock during a client meeting in Dublin. His Celtic heritage grants him the wisdom of ages and an unshakeable resolve that inspires entire teams.",
    color: "from-emerald-600 to-green-700",
  },
  {
    name: "Angelo",
    alias: "The Vision Virtuoso",
    image: "/images/angelo.png",
    hometown: "Portland, OR",
    costume: "Artistic Blazer of Infinite Patterns with Reality-Bending Glasses",
    powers: [
      "Creative Solution Manifestation",
      "Pattern Recognition Mastery",
      "Innovation Inspiration Aura",
      "Aesthetic Perfection Field",
    ],
    bio: "Angelo's artistic soul merged with pure creative energy during a late-night design session. His glasses now allow him to see the perfect solution to any problem, and his patterns can literally reshape reality.",
    color: "from-purple-600 to-pink-600",
  },
  {
    name: "Angela",
    alias: "The Golden Goddess",
    image: "/images/angela.png",
    hometown: "Miami, FL",
    costume: "Radiant Gold Battle Dress with Solar-Powered Accessories",
    powers: [
      "Solar-Powered Productivity",
      "Golden Touch Deal Closing",
      "Positive Energy Projection",
      "Success Magnetism",
    ],
    bio: "Angela's powers emerged during a sunrise beach meeting when she absorbed pure solar energy. Her golden aura can turn any negotiation into gold, and her smile can power entire data centers.",
    color: "from-yellow-400 to-amber-500",
  },
]

export default function MMeastTeamPage() {
  const audioContextRef = useRef<AudioContext | null>(null)
  const isPlayingRef = useRef(false)

  const playMissionImpossibleTheme = useCallback(() => {
    if (isPlayingRef.current) return

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      audioContextRef.current = audioContext

      // Mission Impossible theme notes (simplified version)
      // The classic "dun dun da da, dun dun da da" melody
      const notes = [
        { freq: 466.16, duration: 0.25 }, // Bb4
        { freq: 466.16, duration: 0.25 }, // Bb4
        { freq: 523.25, duration: 0.15 }, // C5
        { freq: 587.33, duration: 0.15 }, // D5
        { freq: 466.16, duration: 0.25 }, // Bb4
        { freq: 466.16, duration: 0.25 }, // Bb4
        { freq: 523.25, duration: 0.15 }, // C5
        { freq: 587.33, duration: 0.15 }, // D5
        { freq: 466.16, duration: 0.25 }, // Bb4
        { freq: 466.16, duration: 0.25 }, // Bb4
        { freq: 523.25, duration: 0.15 }, // C5
        { freq: 587.33, duration: 0.15 }, // D5
        { freq: 622.25, duration: 0.3 }, // Eb5
        { freq: 698.46, duration: 0.3 }, // F5
        { freq: 783.99, duration: 0.5 }, // G5
      ]

      let currentTime = audioContext.currentTime
      isPlayingRef.current = true

      notes.forEach((note, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.setValueAtTime(note.freq, currentTime)
        oscillator.type = "triangle" // Gives a more dramatic sound

        // Envelope for each note
        gainNode.gain.setValueAtTime(0, currentTime)
        gainNode.gain.linearRampToValueAtTime(0.1, currentTime + 0.01)
        gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + note.duration)

        oscillator.start(currentTime)
        oscillator.stop(currentTime + note.duration)

        currentTime += note.duration + 0.05 // Small gap between notes

        // Reset playing flag when the last note ends
        if (index === notes.length - 1) {
          setTimeout(
            () => {
              isPlayingRef.current = false
            },
            (currentTime - audioContext.currentTime) * 1000,
          )
        }
      })
    } catch (error) {
      console.log("Audio playback failed:", error)
      isPlayingRef.current = false
    }
  }, [])

  const stopMissionImpossibleTheme = useCallback(() => {
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close()
      audioContextRef.current = null
    }
    isPlayingRef.current = false
  }, [])

  const handleKevinHover = useCallback(() => {
    playMissionImpossibleTheme()
  }, [playMissionImpossibleTheme])

  const handleKevinLeave = useCallback(() => {
    stopMissionImpossibleTheme()
  }, [stopMissionImpossibleTheme])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
            <Shield className="w-4 h-4" />
            VERCEL ACCOUNT EXECUTIVE DIVISION
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 leading-tight">
            THE MMEAST
            <br />
            <span className="text-yellow-400">SUPER TEAM</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Eight extraordinary individuals with incredible powers, united by their mission to deploy the future and
            scale the impossible. Meet the legendary heroes who make Vercel's edge network their playground.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="outline" className="border-blue-400 text-blue-400 bg-blue-400/10">
              <Zap className="w-3 h-3 mr-1" />
              Serverless Powers
            </Badge>
            <Badge variant="outline" className="border-purple-400 text-purple-400 bg-purple-400/10">
              <Users className="w-3 h-3 mr-1" />
              Team Unity
            </Badge>
            <Badge variant="outline" className="border-green-400 text-green-400 bg-green-400/10">
              <Shield className="w-3 h-3 mr-1" />
              Client Protection
            </Badge>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="group relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              onMouseEnter={member.name === "Kevin" ? handleKevinHover : undefined}
              onMouseLeave={member.name === "Kevin" ? handleKevinLeave : undefined}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <CardContent className="p-6 relative z-10">
                {/* Hero Image */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                  ></div>
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-slate-600 group-hover:border-slate-400 transition-colors duration-300">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                </div>

                {/* Hero Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                    {member.alias}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-gray-400 text-sm mt-2">
                    <MapPin className="w-3 h-3" />
                    {member.hometown}
                  </div>
                </div>

                {/* Costume */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                    Signature Costume
                  </h4>
                  <p className="text-sm text-gray-400 italic">{member.costume}</p>
                </div>

                {/* Powers */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Super Powers
                  </h4>
                  <div className="space-y-1">
                    {member.powers.map((power, powerIndex) => (
                      <div key={powerIndex} className="text-xs text-gray-400 flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${member.color}`}></div>
                        {power}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">Origin Story</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold text-white">MMeast Super Team</span>
          </div>
          <p className="text-gray-400 mb-6">
            Protecting the web, one deployment at a time. Powered by Vercel's edge network.
          </p>
          <div className="text-sm text-gray-500">© 2024 MMeast Division - Vercel Account Executive Heroes</div>
        </div>
      </div>
    </div>
  )
}
