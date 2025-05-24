
import { useState } from "react";
import { ChevronLeft, ChevronRight, Shield, Target, Lightbulb, Wrench, TrendingUp, Code, DollarSign, Users, Calendar, Rocket, Play, Pause } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides = [
    {
      id: "title",
      title: "SecureGuard",
      subtitle: "Comprehensive Web Security Toolkit",
      content: (
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-24 h-24 security-gradient rounded-full flex items-center justify-center">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-slate-800 mb-4">SecureGuard</h1>
            <p className="text-2xl text-slate-600 mb-8">Empowering developers with comprehensive security tools</p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg">Web Security</Badge>
              <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2 text-lg">Developer Tools</Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-lg">AI-Powered</Badge>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "problem",
      title: "The Problem",
      subtitle: "Web Security Challenges Are Growing",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-800">
                  <Target className="w-5 h-5 mr-2" />
                  43% Increase in Cyber Attacks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700">Web applications face unprecedented security threats in 2024</p>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <Users className="w-5 h-5 mr-2" />
                  68% of Developers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Lack comprehensive security knowledge and tools</p>
              </CardContent>
            </Card>
          </div>
          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Key Challenges:</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Fragmented security tools and workflows
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Lack of real-time vulnerability detection
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Complex compliance requirements (GDPR, CCPA)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Limited security expertise in development teams
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "solution",
      title: "Our Solution",
      subtitle: "Unified Security Platform for Developers",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">SecureGuard provides everything developers need</h3>
            <p className="text-lg text-slate-600">One platform, complete security coverage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Real-time Scanning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">Automated vulnerability detection with instant feedback</p>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50 border-emerald-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <Wrench className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800">Integrated Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-700">Complete toolkit from encryption to compliance checking</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700">Interactive guides and security recommendations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "features",
      title: "Key Features",
      subtitle: "Comprehensive Security Arsenal",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800">Security Tools</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Data Encryption (AES-256, RSA)</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">API Security & JWT Validation</span>
                </div>
                <div className="flex items-center p-3 bg-emerald-50 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Security Headers Generator</span>
                </div>
                <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Code Vulnerability Scanner</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800">Dashboard & Analytics</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Real-time Security Metrics</span>
                </div>
                <div className="flex items-center p-3 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Vulnerability Tracking</span>
                </div>
                <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Compliance Monitoring</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Progress Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "market",
      title: "Market Opportunity",
      subtitle: "Growing Cybersecurity Market",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-emerald-50 border-emerald-200 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-emerald-800">$345B</CardTitle>
                <p className="text-emerald-600">Global Cybersecurity Market by 2026</p>
              </CardHeader>
            </Card>
            <Card className="bg-blue-50 border-blue-200 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-800">18.4%</CardTitle>
                <p className="text-blue-600">Annual Growth Rate (CAGR)</p>
              </CardHeader>
            </Card>
            <Card className="bg-purple-50 border-purple-200 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-800">26M+</CardTitle>
                <p className="text-purple-600">Developers Worldwide</p>
              </CardHeader>
            </Card>
          </div>
          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Target Market Segments:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Primary Market</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Mid-size development teams (10-100 developers)</li>
                  <li>• Startups and scale-ups</li>
                  <li>• Freelance developers and consultants</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Secondary Market</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Enterprise development teams</li>
                  <li>• Educational institutions</li>
                  <li>• Security consultancies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "technology",
      title: "Technology Stack",
      subtitle: "Built with Modern, Scalable Technologies",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Code className="w-5 h-5 mr-2" />
                  Frontend Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-700">React 18 + TypeScript</span>
                    <Badge className="bg-blue-100 text-blue-800">Core</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Tailwind CSS + shadcn/ui</span>
                    <Badge className="bg-emerald-100 text-emerald-800">UI</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Vite + React Query</span>
                    <Badge className="bg-purple-100 text-purple-800">Performance</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-800">
                  <Shield className="w-5 h-5 mr-2" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Input Validation & Sanitization</span>
                    <Badge className="bg-red-100 text-red-800">Security</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Error Handling & Monitoring</span>
                    <Badge className="bg-amber-100 text-amber-800">Reliability</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Comprehensive Testing Suite</span>
                    <Badge className="bg-blue-100 text-blue-800">Quality</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Key Technical Advantages:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-700">Fast Performance</h4>
                <p className="text-sm text-slate-600">Optimized for speed and responsiveness</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-700">Secure by Design</h4>
                <p className="text-sm text-slate-600">Built with security best practices</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-slate-700">Scalable Architecture</h4>
                <p className="text-sm text-slate-600">Ready for enterprise deployment</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "business",
      title: "Business Model",
      subtitle: "Sustainable Revenue Streams",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-emerald-50 border-emerald-200">
              <CardHeader>
                <CardTitle className="text-emerald-800">Freemium</CardTitle>
                <p className="text-emerald-600">Basic tools free, premium features paid</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Free Tier</span>
                    <span className="font-semibold">$0/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pro Tier</span>
                    <span className="font-semibold">$29/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enterprise</span>
                    <span className="font-semibold">$199/month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">API Services</CardTitle>
                <p className="text-blue-600">Pay-per-use security scanning</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Basic Scan</span>
                    <span className="font-semibold">$0.10/scan</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deep Scan</span>
                    <span className="font-semibold">$0.50/scan</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance Audit</span>
                    <span className="font-semibold">$2.00/audit</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-800">Consulting</CardTitle>
                <p className="text-purple-600">Expert security consulting services</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Security Audit</span>
                    <span className="font-semibold">$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Implementation</span>
                    <span className="font-semibold">$10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Training</span>
                    <span className="font-semibold">$2,500</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Revenue Projections (Year 1-3):</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Year 1 Target</span>
                <div className="flex items-center space-x-4">
                  <Progress value={25} className="w-32" />
                  <span className="font-semibold text-slate-800">$250K ARR</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Year 2 Target</span>
                <div className="flex items-center space-x-4">
                  <Progress value={50} className="w-32" />
                  <span className="font-semibold text-slate-800">$1.2M ARR</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Year 3 Target</span>
                <div className="flex items-center space-x-4">
                  <Progress value={75} className="w-32" />
                  <span className="font-semibold text-slate-800">$5M ARR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "roadmap",
      title: "Product Roadmap",
      subtitle: "Strategic Development Timeline",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Calendar className="w-5 h-5 mr-2" />
                  Q1 2024 - Foundation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Core security scanner ✓
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Basic encryption tools ✓
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    User authentication
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    API documentation
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center text-emerald-800">
                  <Calendar className="w-5 h-5 mr-2" />
                  Q2 2024 - Enhancement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Advanced threat detection
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    CI/CD integrations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Team collaboration features
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Mobile application
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-800">
                  <Calendar className="w-5 h-5 mr-2" />
                  Q3 2024 - Scale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Enterprise features
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    White-label solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <Calendar className="w-5 h-5 mr-2" />
                  Q4 2024 - Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    AI-powered recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Global compliance support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Partner marketplace
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    International expansion
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "cta",
      title: "Join the Security Revolution",
      subtitle: "Ready to Secure Your Applications?",
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-800">Get Started Today</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join thousands of developers already using SecureGuard to build safer, more secure applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-blue-200 text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Try the Demo</h3>
                <p className="text-sm text-slate-600">Experience SecureGuard with our interactive demo</p>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50 border-emerald-200 text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Start Free Trial</h3>
                <p className="text-sm text-slate-600">Get full access to all features for 14 days</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200 text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Scale Securely</h3>
                <p className="text-sm text-slate-600">Build with confidence using our security toolkit</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="security-gradient text-white px-8 py-3 text-lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
          
          <div className="bg-slate-100 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-bold text-slate-800 mb-3">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <p><strong>Email:</strong> hello@secureguard.dev</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
              <div>
                <p><strong>Website:</strong> www.secureguard.dev</p>
                <p><strong>Support:</strong> support@secureguard.dev</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 security-gradient rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">SecureGuard Pitch Deck</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="flex items-center space-x-2"
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isAutoPlay ? 'Pause' : 'Auto Play'}</span>
            </Button>
            <span className="text-sm text-slate-600">
              {currentSlide + 1} of {slides.length}
            </span>
          </div>
        </div>

        {/* Slide Content */}
        <Card className="bg-white border-slate-200 shadow-lg min-h-[600px]">
          <CardHeader className="text-center border-b border-slate-200 pb-6">
            <CardTitle className="text-3xl font-bold text-slate-800">
              {slides[currentSlide].title}
            </CardTitle>
            <p className="text-lg text-slate-600">{slides[currentSlide].subtitle}</p>
          </CardHeader>
          <CardContent className="p-8">
            {slides[currentSlide].content}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-blue-500'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <Progress 
            value={((currentSlide + 1) / slides.length) * 100} 
            className="h-2"
          />
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
