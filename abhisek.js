class URLShortener {
  constructor() {
    this.urlMap = new Map(); 
    this.baseUrl = 'http://example.com/'; 
    this.shortUrlLength = 6; 
  }

  encodeURL(longURL) {
    
    const shortCode = this.generateShortCode();
    
    
    this.urlMap.set(shortCode, longURL);
    
    
    const shortURL = `${this.baseUrl}${shortCode}`;
    
    return shortURL;
  }

  decodeURL(shortURL) {
    
    const shortCode = shortURL.slice(this.baseUrl.length);
    
    
    const longURL = this.urlMap.get(shortCode);
    
    if (longURL) {
      
      window.location.href = longURL;
    } else {
      console.error('Invalid URL');
    }
  }

  generateShortCode() {
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortCode = '';
    for (let i = 0; i < this.shortUrlLength; i++) {
      shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    if (this.urlMap.has(shortCode)) {
      return this.generateShortCode(); 
    }
    return shortCode;
  }
}


const shortener = new URLShortener();
const longURL = 'http://www.example.com/very/long/url/to/test';
const shortURL = shortener.encodeURL(longURL);
console.log('Shortened URL:', shortURL);


shortener.decodeURL(shortURL);
