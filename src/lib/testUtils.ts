
export const mockSecurityScan = async (): Promise<{
  score: number;
  vulnerabilities: Array<{ type: string; severity: 'low' | 'medium' | 'high'; description: string }>;
  duration: number;
}> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
  
  // Simulate potential scan failure
  if (Math.random() < 0.1) {
    throw new Error('Scan service temporarily unavailable');
  }

  const vulnerabilities = [
    { type: 'XSS', severity: 'medium' as const, description: 'Potential XSS vulnerability in user input' },
    { type: 'CSRF', severity: 'low' as const, description: 'Missing CSRF protection on form submission' },
    { type: 'Headers', severity: 'high' as const, description: 'Missing security headers' }
  ];

  return {
    score: Math.floor(Math.random() * 4) + 7, // 7-10
    vulnerabilities: vulnerabilities.slice(0, Math.floor(Math.random() * 4)),
    duration: Math.floor(Math.random() * 3000) + 1000
  };
};

export const validateApiResponse = (response: any): boolean => {
  return (
    response &&
    typeof response.score === 'number' &&
    Array.isArray(response.vulnerabilities) &&
    typeof response.duration === 'number'
  );
};
