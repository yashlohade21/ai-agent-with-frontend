import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Code, Search, FileText, Brain, Lightbulb, 
  Zap, MessageSquare, Sparkles, Rocket, Star, Heart
} from 'lucide-react';

const WelcomeMessage = ({ onExampleClick }) => {
  const quickActions = [
    {
      icon: Code,
      title: "Code",
      description: "Write & debug code",
      color: "from-blue-500 to-cyan-500",
      examples: [
        "Create a React component",
        "Debug this Python error",
        "Optimize SQL query"
      ]
    },
    {
      icon: Search,
      title: "Research",
      description: "Find information",
      color: "from-green-500 to-emerald-500",
      examples: [
        "Latest AI developments",
        "Market analysis for tech stocks",
        "Climate change solutions"
      ]
    },
    {
      icon: FileText,
      title: "Write",
      description: "Create content",
      color: "from-purple-500 to-pink-500",
      examples: [
        "Write a blog post about AI",
        "Create a business proposal",
        "Draft an email response"
      ]
    },
    {
      icon: Brain,
      title: "Analyze",
      description: "Process data",
      color: "from-orange-500 to-red-500",
      examples: [
        "Analyze this dataset",
        "Explain complex concepts",
        "Compare different options"
      ]
    }
  ];

  const examplePrompts = [
    {
      icon: Lightbulb,
      text: "Explain quantum computing in simple terms",
      category: "Education",
      color: "text-yellow-600"
    },
    {
      icon: Code,
      text: "Create a REST API with Node.js and Express",
      category: "Development",
      color: "text-blue-600"
    },
    {
      icon: Search,
      text: "What are the latest trends in machine learning?",
      category: "Research",
      color: "text-green-600"
    },
    {
      icon: FileText,
      text: "Write a professional email for a job application",
      category: "Writing",
      color: "text-purple-600"
    },
    {
      icon: Brain,
      text: "Help me solve this complex math problem",
      category: "Problem Solving",
      color: "text-red-600"
    },
    {
      icon: Rocket,
      text: "Plan a marketing strategy for a startup",
      category: "Business",
      color: "text-indigo-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="w-full px-4 sm:px-6 lg:px-8 mx-auto py-6 sm:py-8 md:py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div 
        variants={itemVariants} 
        className="flex flex-col items-center justify-center mb-8 sm:mb-10 md:mb-12 w-full"
      >
        <motion.div
          className="flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4 sm:mb-6"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-grey" />
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-3 sm:mb-4 text-center"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Welcome to BinaryBrained AI
        </motion.h1>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center justify-center">
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary-600" />
          Quick Actions
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 h-full">
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${action.color} rounded-md sm:rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {action.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {action.description}
                </p>
                
                <div className="space-y-1 sm:space-y-2">
                  {action.examples.map((example, exampleIndex) => (
                    <motion.button
                      key={example}
                      className="block w-full text-left text-xs text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1 sm:p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                      onClick={() => onExampleClick(example)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + exampleIndex * 0.1 }}
                      whileHover={{ x: 3 }}
                    >
                      • {example}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Example Prompts */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary-600" />
          Try These Examples
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {examplePrompts.map((prompt, index) => (
            <motion.button
              key={prompt.text}
              className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 text-left"
              onClick={() => onExampleClick(prompt.text)}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <motion.div
                  className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-700 rounded-md sm:rounded-lg flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                >
                  <prompt.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${prompt.color}`} />
                </motion.div>
                
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium mb-1 sm:mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {prompt.text}
                  </p>
                  
                  <span className="inline-flex items-center px-2 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    {prompt.category}
                  </span>
                </div>
                
                <motion.div
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                </motion.div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        variants={itemVariants}
        className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            <span>Made with AI</span>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            <span>Always Learning</span>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <span>Powered by Innovation</span>
          </div>
        </div>
        
        <motion.p 
          className="mt-3 sm:mt-4 text-xs text-gray-400 dark:text-gray-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Start a conversation by typing a message or clicking on any example above
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeMessage;