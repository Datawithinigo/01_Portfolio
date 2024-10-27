export interface ContactInfo {
    emailAddress: string;
    emailSubject: string;
    emailBody: string;
    calendlyUrl: string;
  }
  
  export const contactStore: ContactInfo = {
    emailAddress: "inigo.arriazu@dataoverkill.com",
    emailSubject: "Get in Touch",
    emailBody: "Hello, I'd like to get in touch with you!",
    calendlyUrl: "https://calendly.com/your-account"
  };