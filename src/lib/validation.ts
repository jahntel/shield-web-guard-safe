
export interface ValidationRule {
  validate: (value: any) => boolean;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class DataValidator {
  static validateRequired(value: any): ValidationResult {
    const isValid = value !== null && value !== undefined && value !== '';
    return {
      isValid,
      errors: isValid ? [] : ['This field is required']
    };
  }

  static validateEmail(email: string): ValidationResult {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    return {
      isValid,
      errors: isValid ? [] : ['Please enter a valid email address']
    };
  }

  static validateUrl(url: string): ValidationResult {
    try {
      new URL(url);
      return { isValid: true, errors: [] };
    } catch {
      return { isValid: false, errors: ['Please enter a valid URL'] };
    }
  }

  static validateMinLength(value: string, minLength: number): ValidationResult {
    const isValid = value.length >= minLength;
    return {
      isValid,
      errors: isValid ? [] : [`Minimum length is ${minLength} characters`]
    };
  }

  static sanitizeInput(input: string): string {
    return input
      .trim()
      .replace(/[<>]/g, '') // Basic XSS prevention
      .substring(0, 1000); // Prevent extremely long inputs
  }

  static validateSecurityHeaders(headers: Record<string, string>): ValidationResult {
    const requiredHeaders = ['Content-Security-Policy', 'X-Frame-Options', 'X-Content-Type-Options'];
    const missingHeaders = requiredHeaders.filter(header => !headers[header]);
    
    return {
      isValid: missingHeaders.length === 0,
      errors: missingHeaders.map(header => `Missing required security header: ${header}`)
    };
  }
}
