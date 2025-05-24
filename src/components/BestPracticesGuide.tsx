
import { CheckCircle, AlertCircle, BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BestPracticesGuide = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const practiceCategories = [
    {
      title: "Authentication & Authorization",
      practices: [
        "Implement multi-factor authentication (MFA)",
        "Use strong password policies (12+ characters, complexity)",
        "Implement proper session management",
        "Use OAuth 2.0 or similar secure protocols",
        "Implement rate limiting for login attempts"
      ],
      priority: "Critical"
    },
    {
      title: "Data Protection",
      practices: [
        "Encrypt sensitive data at rest and in transit",
        "Use HTTPS everywhere with proper certificates",
        "Implement proper input validation and sanitization",
        "Use parameterized queries to prevent SQL injection",
        "Implement proper error handling (don't expose internals)"
      ],
      priority: "Critical"
    },
    {
      title: "Security Headers",
      practices: [
        "Implement Content Security Policy (CSP)",
        "Use X-Frame-Options to prevent clickjacking",
        "Set X-Content-Type-Options: nosniff",
        "Configure X-XSS-Protection",
        "Implement Strict-Transport-Security (HSTS)"
      ],
      priority: "High"
    },
    {
      title: "Code Security",
      practices: [
        "Keep dependencies updated and scan for vulnerabilities",
        "Use static analysis security testing (SAST)",
        "Implement proper logging and monitoring",
        "Follow principle of least privilege",
        "Regular security code reviews"
      ],
      priority: "High"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "bg-red-100 text-red-800 border-red-200";
      case "High": return "bg-amber-100 text-amber-800 border-amber-200";
      case "Medium": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const completionPercentage = Math.round((checkedItems.length / practiceCategories.reduce((acc, cat) => acc + cat.practices.length, 0)) * 100);

  return (
    <section id="guide" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Security Best Practices</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
            Follow this comprehensive checklist to ensure your web application meets industry security standards.
          </p>
          
          {/* Progress Summary */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-600">Completion Progress</span>
              <span className="text-2xl font-bold text-slate-800">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-emerald-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {checkedItems.length} of {practiceCategories.reduce((acc, cat) => acc + cat.practices.length, 0)} practices completed
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {practiceCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-slate-800 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    {category.title}
                  </CardTitle>
                  <Badge className={getPriorityColor(category.priority)}>
                    {category.priority}
                  </Badge>
                </div>
                <CardDescription>
                  Essential security practices for {category.title.toLowerCase()}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {category.practices.map((practice, practiceIndex) => {
                    const globalIndex = categoryIndex * 10 + practiceIndex; // Simple indexing
                    const isChecked = checkedItems.includes(globalIndex);
                    
                    return (
                      <div 
                        key={practiceIndex}
                        className={`flex items-start space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          isChecked 
                            ? 'bg-emerald-50 border-emerald-200' 
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                        onClick={() => toggleCheck(globalIndex)}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {isChecked ? (
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <div className="w-5 h-5 border-2 border-slate-300 rounded-full"></div>
                          )}
                        </div>
                        <span className={`text-sm ${isChecked ? 'text-emerald-800 line-through' : 'text-slate-700'}`}>
                          {practice}
                        </span>
                      </div>
                    );
                  })}
                  
                  <Button variant="outline" className="w-full mt-4 text-blue-600 border-blue-200 hover:bg-blue-50">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="bg-white border-slate-200 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-slate-800">Need Help?</CardTitle>
              <CardDescription>
                Get personalized security recommendations for your specific use case
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="security-gradient text-white">
                Get Security Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BestPracticesGuide;
