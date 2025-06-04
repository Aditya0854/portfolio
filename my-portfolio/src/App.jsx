import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Code, Database, Globe, Award, Briefcase, GraduationCap, User, ExternalLink, ChevronDown, Sparkles, Zap, Rocket, Star } from 'lucide-react';
import './index.css';
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const skills = {
    'Programming Languages': ['Java (DSA)', 'Python', 'C', 'JavaScript', 'SQL'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React.js'],
    'Databases': ['MongoDB', 'MySQL'],
    'Tools & Technologies': ['Git', 'GitHub', 'Postman']
  };

  const projects = [
    {
      title: 'Clothify - E-commerce Website',
      description: 'Interactive e-commerce platform built with modern web technologies',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
      features: ['Interactive front-end design', 'Local Storage integration', 'Product & user data management'],
      github: 'https://github.com/Aditya0854/E-Commerce-Website/tree/main/Ecommerce/project',
      status: 'Completed',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'URL Shortener Web Application',
      description: 'A comprehensive URL shortening service with user dashboard',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      features: ['URL shortening functionality', 'User dashboard', 'Short URL management'],
      status: 'In Progress',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  const InteractiveBackground = () => (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.1), transparent 40%)`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(236, 72, 153, 0.3); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .neon-border {
          border: 2px solid transparent;
          background: linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: exclude;
        }
      `}</style>

      <FloatingElements />
      <InteractiveBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse-slow">
              <Sparkles className="inline mr-2 text-purple-400" size={24} />
              Aditya Kumar
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 hover:scale-110 relative ${
                    activeSection === section ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 animate-glow rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/10 to-pink-900/10 animate-rotate-slow" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-slide-up">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-glow flex items-center justify-center">
                  <Rocket className="text-white" size={48} />
                </div>
                <div className="absolute -top-4 -right-4">
                  <Star className="text-yellow-400 animate-pulse" size={24} />
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse-slow bg-[length:200%_100%]">
              Aditya Kumar
            </h1>
            
            <div className="relative mb-8">
              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                <Zap className="inline mr-2 text-yellow-400" size={24} />
                Computer Science Student & Full-Stack Developer
              </p>
            </div>
            
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about building efficient and scalable applications using modern technologies. 
              Currently pursuing B.Tech in Computer Science with hands-on experience in web development and algorithm optimization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a 
                href="mailto:adityaashu826@gmail.com" 
                className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-glow"
              >
                <Mail size={20} className="group-hover:animate-bounce" />
                Get In Touch
              </a>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="group flex items-center gap-3 glass-effect hover:bg-purple-400/20 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-purple-400/50"
              >
                <Code size={20} className="group-hover:animate-spin" />
                View Projects
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-400 glass-effect px-4 py-2 rounded-full">
                <MapPin size={16} className="text-purple-400" />
                <span>Renukoot, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 glass-effect px-4 py-2 rounded-full">
                <Phone size={16} className="text-pink-400" />
                <span>9795029531</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-purple-900/50" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <User className="inline mr-4 text-purple-400" size={48} />
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-3xl hover:scale-105 transition-all duration-500 neon-border">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold">Professional Summary</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Motivated and detail-oriented Computer Science student with hands-on experience in web development, 
                  data structures, and algorithm optimization. I'm passionate about building efficient and scalable 
                  applications using Java, JavaScript, Node.js, and MongoDB.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-500 border border-emerald-400/30">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-emerald-400 mr-3" size={28} />
                  <h4 className="text-xl font-semibold">Education</h4>
                </div>
                <div className="space-y-4">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-emerald-400 rounded-full" />
                    <h5 className="font-medium text-white">B.Tech Computer Science & Engineering</h5>
                    <p className="text-sm text-gray-300">Kalinga Institute of Industrial Technology, Bhubaneswar</p>
                    <p className="text-sm text-emerald-400 font-semibold">2022 – Present | CGPA: 8.42</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-purple-400 rounded-full" />
                    <h5 className="font-medium text-white">Class 12 (CBSE) - 90.6%</h5>
                    <p className="text-sm text-gray-300">Nirmala Convent High School</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-500 border border-blue-400/30">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-blue-400 mr-3" size={28} />
                  <h4 className="text-xl font-semibold">Experience</h4>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <h5 className="font-medium text-white">Intern - Hindalco Industries Pvt. Ltd.</h5>
                  <p className="text-sm text-blue-400 font-semibold">May 2024 - June 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <Zap className="inline mr-4 text-yellow-400" size={48} />
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div 
                key={category} 
                className="glass-effect p-8 rounded-3xl hover:scale-110 transition-all duration-500 transform hover:-translate-y-4 neon-border group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:animate-spin">
                    {category.includes('Programming') && <Code className="text-white" size={24} />}
                    {category.includes('Web') && <Globe className="text-white" size={24} />}
                    {category.includes('Database') && <Database className="text-white" size={24} />}
                    {category.includes('Tools') && <Award className="text-white" size={24} />}
                  </div>
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
                <div className="space-y-3">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${skillIndex * 0.1}s` }}>
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse" />
                      <span className="text-gray-300 text-sm hover:text-white transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-purple-900/50" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <Rocket className="inline mr-4 text-purple-400" size={48} />
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="glass-effect p-8 rounded-3xl hover:scale-105 transition-all duration-500 transform hover:-translate-y-4 neon-border group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center mr-4 group-hover:animate-spin`}>
                      <Code className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed">{project.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-purple-400 mb-4 flex items-center">
                    <Star className="mr-2" size={16} />
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-purple-400 mb-4 flex items-center">
                    <Zap className="mr-2" size={16} />
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs border border-purple-400/30 hover:scale-110 transition-transform cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-110 group"
                  >
                    <Github size={18} className="group-hover:animate-spin" />
                    <span className="text-sm font-medium">View on GitHub</span>
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <Award className="inline mr-4 text-yellow-400" size={48} />
            Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-effect p-8 rounded-3xl hover:scale-105 transition-all duration-500 neon-border">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4 animate-glow">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-4 animate-pulse" />
                  <span className="text-gray-300 hover:text-white transition-colors">Fundamentals of Java Programming (Board Infinity)</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-4 animate-pulse" />
                  <span className="text-gray-300 hover:text-white transition-colors">SQL - The Complete Introduction to SQL</span>
                </div>
              </div>
            </div>
            
            <div className="glass-effect p-8 rounded-3xl hover:scale-105 transition-all duration-500 neon-border">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 animate-glow">
                  <User className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-semibold">Community</h3>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 animate-pulse" />
                <span className="text-gray-300 hover:text-white transition-colors">National Service Scheme (NSS) - 2023 to Present</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-purple-900/50" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <Sparkles className="inline mr-4 text-purple-400" size={48} />
            Let's Connect
          </h2>
          
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and create something amazing together!
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <a 
              href="mailto:adityaashu826@gmail.com" 
              className="group flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-110 animate-glow"
            >
              <Mail size={24} className="group-hover:animate-bounce" />
              <span className="text-lg font-medium">adityaashu826@gmail.com</span>
            </a>
            <a 
              href="tel:9795029531" 
              className="group flex items-center gap-4 glass-effect hover:bg-purple-400/20 px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-110 border border-purple-400/50"
            >
              <Phone size={24} className="group-hover:animate-bounce text-purple-400" />
              <span className="text-lg font-medium">9795029531</span>
            </a>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-effect px-8 py-4 rounded-full border border-purple-400/30">
              <span className="text-purple-400 font-semibold mr-4">Languages:</span>
              <span className="text-gray-300">English (Professional) • Hindi (Native)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-800/30 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <Sparkles className="text-purple-400 mr-2" size={20} />
            <p className="text-gray-400">
              © 2025 Aditya Kumar. Crafted with React.js and passion for innovation.
            </p>
            <Sparkles className="text-pink-400 ml-2" size={20} />
          </div>
          <div className="flex justify-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
