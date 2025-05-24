
import { DataValidator } from './validation';
import { validateApiResponse } from './testUtils';

// Simple test functions for demonstration
export const runSecurityTests = () => {
  const results: Array<{ test: string; passed: boolean; error?: string }> = [];

  // Test email validation
  try {
    const emailTest = DataValidator.validateEmail('test@example.com');
    results.push({
      test: 'Email Validation',
      passed: emailTest.isValid
    });
  } catch (error) {
    results.push({
      test: 'Email Validation',
      passed: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  // Test URL validation
  try {
    const urlTest = DataValidator.validateUrl('https://example.com');
    results.push({
      test: 'URL Validation',
      passed: urlTest.isValid
    });
  } catch (error) {
    results.push({
      test: 'URL Validation',
      passed: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  // Test API response validation
  try {
    const validResponse = { score: 8, vulnerabilities: [], duration: 1000 };
    const responseTest = validateApiResponse(validResponse);
    results.push({
      test: 'API Response Validation',
      passed: responseTest
    });
  } catch (error) {
    results.push({
      test: 'API Response Validation',
      passed: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  // Test input sanitization
  try {
    const sanitized = DataValidator.sanitizeInput('<script>alert("xss")</script>Hello');
    const passed = !sanitized.includes('<script>') && sanitized.includes('Hello');
    results.push({
      test: 'Input Sanitization',
      passed
    });
  } catch (error) {
    results.push({
      test: 'Input Sanitization',
      passed: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }

  return results;
};

// Log test results in development
if (process.env.NODE_ENV === 'development') {
  console.log('Running security tests...');
  const testResults = runSecurityTests();
  console.table(testResults);
}
