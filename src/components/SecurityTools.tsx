
import { Lock, Key, Shield, FileCheck, Settings, Code, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { DataValidator } from "@/lib/validation";

const SecurityTools = () => {
  const { toast } = useToast();
  const { handleError } = useErrorHandler();

  const handleToolLaunch = async (toolName: string) => {
    try {
      // Validate tool name
      const validation = DataValidator.validateRequired(toolName);
      if (!validation.isValid) {
        throw new Error('Invalid tool selection');
      }

      // Simulate tool launch
      toast({
        title: "Tool Launched",
        description: `${toolName} is now ready to use`,
      });

      // Log for security audit
      console.log(`Security tool launched: ${toolName} at ${new Date().toISOString()}`);
    } catch (error) {
      handleError(error instanceof Error ? error : new Error('Failed to launch tool'));
    }
  };

  const tools = [
    {
      title: "Data Encryption",
      description: "Encrypt and decrypt sensitive data with industry-standard algorithms",
      icon: Lock,
      features: ["AES-256 Encryption", "RSA Key Pairs", "Hash Functions"],
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      title: "API Security",
      description: "Generate secure API keys and validate authentication headers",
      icon: Key,
      features: ["JWT Validation", "API Key Generator", "Rate Limiting"],
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    },
    {
      title: "Headers Generator",
      description: "Create secure HTTP headers for enhanced protection",
      icon: Shield,
      features: ["CORS Configuration", "CSP Headers", "Security Headers"],
      color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
    },
    {
      title: "Code Validator",
      description: "Scan code for common security vulnerabilities and issues",
      icon: Code,
      features: ["XSS Detection", "SQL Injection", "Input Validation"],
      color: "bg-amber-50 border-amber-200 hover:bg-amber-100"
    },
    {
      title: "Compliance Checker",
      description: "Verify GDPR, CCPA, and other privacy regulation compliance",
      icon: FileCheck,
      features: ["GDPR Compliance", "Data Mapping", "Cookie Audit"],
      color: "bg-red-50 border-red-200 hover:bg-red-100"
    },
    {
      title: "Config Generator",
      description: "Generate secure configurations for popular frameworks",
      icon: Settings,
      features: ["Framework Configs", "Environment Setup", "Best Practices"],
      color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100"
    }
  ];

  return (
    <section id="tools" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Security Tools</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive toolkit to secure your web applications. Each tool is designed to address specific security challenges developers face.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card key={index} className={`${tool.color} transition-all duration-300 hover:shadow-lg group cursor-pointer`}>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-slate-800">
                        {tool.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-700">Features:</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full mt-4 security-gradient text-white" 
                      variant="default"
                      onClick={() => handleToolLaunch(tool.title)}
                    >
                      Launch Tool
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityTools;
