// SEO utility functions for dynamic content optimization

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

// Generate SEO-friendly URLs
export const generateSEOUrl = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
};

// Generate meta description from content
export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  // Remove HTML tags
  const textContent = content.replace(/<[^>]*>/g, '');
  
  // Truncate to maxLength
  if (textContent.length <= maxLength) {
    return textContent;
  }
  
  // Find the last complete sentence within the limit
  const truncated = textContent.substring(0, maxLength);
  const lastSentence = truncated.lastIndexOf('.');
  
  if (lastSentence > maxLength * 0.7) {
    return textContent.substring(0, lastSentence + 1);
  }
  
  // If no good sentence break, truncate at word boundary
  const lastSpace = truncated.lastIndexOf(' ');
  return textContent.substring(0, lastSpace) + '...';
};

// Extract keywords from content
export const extractKeywords = (content: string, title: string): string => {
  const commonWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
    'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
    'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those'
  ]);
  
  // Combine title and content
  const text = `${title} ${content}`.toLowerCase();
  
  // Remove HTML and extract words
  const words = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.has(word));
  
  // Count word frequency
  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Get top keywords
  const topKeywords = Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
  
  // Add industry-specific keywords
  const industryKeywords = [
    'multiphase flow', 'DMOR technology', 'oil gas', 'flow measurement',
    'Saudi Arabia', 'non-radioactive', 'artificial intelligence'
  ];
  
  return [...industryKeywords, ...topKeywords].join(', ');
};

// Generate structured data for articles
export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  content: string;
  author: string;
  authorTitle?: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
  category?: string;
  tags?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || "https://saherflow.com/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": article.authorTitle || "Expert"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Saher Flow Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saherflow.com/wp-content/uploads/2021/06/Artboard-1-copy100.svg"
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://saherflow.com${article.url}`
    },
    "articleSection": article.category,
    "keywords": article.tags?.join(', '),
    "wordCount": article.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Saher Flow Solutions"
    },
    "copyrightYear": new Date(article.publishedDate).getFullYear()
  };
};

// Generate FAQ structured data
export const generateFAQStructuredData = (faqs: Array<{question: string; answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string; url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://saherflow.com${crumb.url}`
    }))
  };
};

// Validate and optimize meta tags
export const optimizeMetaTags = (data: SEOData): SEOData => {
  return {
    ...data,
    title: data.title.length > 60 ? data.title.substring(0, 57) + '...' : data.title,
    description: data.description.length > 160 ? generateMetaDescription(data.description, 160) : data.description,
    keywords: data.keywords.length > 255 ? data.keywords.substring(0, 252) + '...' : data.keywords
  };
};

// Generate social media optimized content
export const generateSocialContent = (data: SEOData) => {
  return {
    twitter: {
      title: data.title.length > 70 ? data.title.substring(0, 67) + '...' : data.title,
      description: data.description.length > 200 ? data.description.substring(0, 197) + '...' : data.description
    },
    facebook: {
      title: data.title.length > 100 ? data.title.substring(0, 97) + '...' : data.title,
      description: data.description.length > 300 ? data.description.substring(0, 297) + '...' : data.description
    },
    linkedin: {
      title: data.title.length > 150 ? data.title.substring(0, 147) + '...' : data.title,
      description: data.description.length > 256 ? data.description.substring(0, 253) + '...' : data.description
    }
  };
};

// Check SEO score
export const calculateSEOScore = (data: SEOData, content?: string): {score: number; suggestions: string[]} => {
  let score = 0;
  const suggestions: string[] = [];
  
  // Title checks
  if (data.title.length >= 30 && data.title.length <= 60) {
    score += 20;
  } else {
    suggestions.push('Title should be between 30-60 characters');
  }
  
  // Description checks
  if (data.description.length >= 120 && data.description.length <= 160) {
    score += 20;
  } else {
    suggestions.push('Meta description should be between 120-160 characters');
  }
  
  // Keywords check
  if (data.keywords && data.keywords.split(',').length >= 5) {
    score += 15;
  } else {
    suggestions.push('Include at least 5 relevant keywords');
  }
  
  // Image check
  if (data.image) {
    score += 15;
  } else {
    suggestions.push('Add an optimized image for social sharing');
  }
  
  // Content checks
  if (content) {
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    if (wordCount >= 300) {
      score += 15;
    } else {
      suggestions.push('Content should be at least 300 words');
    }
    
    // Check for headings
    if (content.includes('<h1>') || content.includes('<h2>')) {
      score += 15;
    } else {
      suggestions.push('Include proper heading structure (H1, H2, etc.)');
    }
  }
  
  return { score, suggestions };
};