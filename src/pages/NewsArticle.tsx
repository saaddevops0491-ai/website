import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2, Clock, Tag, Award, TrendingUp, Building, ChevronRight } from 'lucide-react';
import { loadNewsArticle, getRecentNews, NewsArticle as NewsArticleType } from '../utils/newsLoader';
import SEOHead from '../components/SEOHead';

const NewsArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<NewsArticleType | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticleData = async () => {
      if (!slug) {
        setError('No article slug provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const [articleData, recentArticles] = await Promise.all([
          loadNewsArticle(slug),
          getRecentNews(4)
        ]);

        if (!articleData) {
          setError('Article not found');
          setLoading(false);
          return;
        }

        setArticle(articleData);

        // Filter out current article from related articles
        const related = recentArticles.filter(a => a.slug !== slug).slice(0, 3);
        setRelatedArticles(related);

      } catch (err) {
        console.error('Error loading article:', err);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    loadArticleData();
  }, [slug]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Customer Validation':
        return <Award className="w-5 h-5" />;
      case 'Technology':
        return <TrendingUp className="w-5 h-5" />;
      case 'Company News':
        return <Building className="w-5 h-5" />;
      default:
        return <Tag className="w-5 h-5" />;
    }
  };

  const shareArticle = async () => {
    if (!article) return;

    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: shareUrl
        });
      } catch (err) {
        console.log('Share was cancelled');
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-navy-600 rounded-full mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-48 mx-auto mb-2"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto"></div>
          </div>
          <p className="text-navy-600 dark:text-white font-medium mt-4">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {error || 'Article not found'}
          </h2>
          <button
            onClick={() => navigate('/news')}
            className="inline-flex items-center gap-2 bg-navy-600 text-white px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to News
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${article.title} | Saher Flow Solutions News`}
        description={article.excerpt}
        keywords={`${article.category}, Saher Flow Solutions, multiphase flow meter, DMOR technology, oil gas technology, Saudi Aramco, non-radioactive flow meter, flow measurement, Saudi Arabia, KAUST, Vision 2030`}
        url={`/news/${article.slug}`}
        image={article.image}
        type="article"
        publishedTime={article.date}
        modifiedTime={article.date}
        section={article.category}
        tags={[article.category, 'Multiphase Flow Measurement', 'DMOR Technology', 'Oil and Gas']}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": article.title,
          "description": article.excerpt,
          "image": {
            "@type": "ImageObject",
            "url": article.image,
            "width": 1200,
            "height": 630
          },
          "datePublished": article.date,
          "dateModified": article.date,
          "author": {
            "@type": "Organization",
            "@id": "https://saherflow.com/#organization",
            "name": "Saher Flow Solutions"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://saherflow.com/#organization",
            "name": "Saher Flow Solutions",
            "logo": {
              "@type": "ImageObject",
              "url": "https://saherflow.com/wp-content/uploads/2021/06/Artboard-1-copy100.svg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://saherflow.com/news/${article.slug}`
          },
          "articleSection": article.category,
          "keywords": `${article.category}, multiphase flow meter, DMOR technology, Saher Flow Solutions`,
          "inLanguage": "en-US",
          "about": {
            "@type": "Thing",
            "name": "Multiphase Flow Measurement",
            "description": "Revolutionary DMOR technology for oil and gas industry"
          }
        }}
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://saherflow.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "News",
              "item": "https://saherflow.com/news"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": article.title,
              "item": `https://saherflow.com/news/${article.slug}`
            }
          ]
        })}
      </script>

      <article className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen">

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover opacity-40"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Article Header */}
          <div className="absolute bottom-0 left-0 right-0 pb-8 lg:pb-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl">
                {/* Category & Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                    {getCategoryIcon(article.category)}
                    {article.category}
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.date}>
                      {formatDate(article.date)}
                    </time>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-4 h-4" />
                    {Math.ceil(article.content.length / 1000)} min read
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  {article.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 py-12 lg:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10 lg:p-16">
              {/* Article Body */}
              <div
                className="prose prose-xl dark:prose-invert max-w-none prose-headings:text-navy-900 dark:prose-headings:text-white prose-a:text-navy-600 dark:prose-a:text-yellow-400 prose-strong:text-navy-900 dark:prose-strong:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <style jsx>{`
                .prose {
                  line-height: 1.85;
                  max-width: 100%;
                }
                .prose h1 {
                  font-size: 2.75rem;
                  font-weight: 800;
                  margin-top: 3rem;
                  margin-bottom: 1.75rem;
                  color: #1a3a5c;
                  line-height: 1.25;
                }
                .prose h2 {
                  font-size: 2.25rem;
                  font-weight: 700;
                  margin-top: 3rem;
                  margin-bottom: 1.25rem;
                  color: #1a3a5c;
                  border-bottom: 3px solid #ffd500;
                  padding-bottom: 0.75rem;
                  line-height: 1.3;
                }
                .prose h3 {
                  font-size: 1.75rem;
                  font-weight: 600;
                  margin-top: 2.5rem;
                  margin-bottom: 1rem;
                  color: #1a3a5c;
                  line-height: 1.4;
                }
                .prose p {
                  margin-bottom: 1.75rem;
                  font-size: 1.175rem;
                  line-height: 1.85;
                  color: #374151 !important;
                  letter-spacing: 0.01em;
                }
                .dark .prose p {
                  color: #d1d5db !important;
                }
                .prose ul, .prose ol {
                  margin: 2rem 0;
                  padding-left: 2.5rem;
                }
                .prose li {
                  margin-bottom: 1rem;
                  font-size: 1.15rem;
                  line-height: 1.8;
                  color: #374151 !important;
                  padding-left: 0.5rem;
                }
                .dark .prose li {
                  color: #d1d5db !important;
                }
                .prose blockquote {
                  border-left: 5px solid #ffd500;
                  background: #f9fafb;
                  padding: 2rem 2.5rem;
                  margin: 2.5rem 0;
                  font-style: italic;
                  font-size: 1.25rem;
                  color: #1a3a5c;
                  border-radius: 0.5rem;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }
                .prose table {
                  width: 100%;
                  margin: 2rem 0;
                  border-collapse: collapse;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                  border-radius: 0.5rem;
                  overflow: hidden;
                }
                .prose th {
                  background: #1a3a5c;
                  color: white;
                  padding: 1rem;
                  text-align: left;
                  font-weight: 600;
                }
                .prose td {
                  padding: 1rem;
                  border-bottom: 1px solid #e5e7eb;
                }
                .prose tr:nth-child(even) {
                  background: #f9fafb;
                }
                .prose code {
                  background: #f3f4f6;
                  padding: 0.25rem 0.5rem;
                  border-radius: 0.25rem;
                  font-family: 'Monaco', 'Menlo', monospace;
                  font-size: 0.9rem;
                  color: #1a3a5c;
                }
                .prose pre {
                  background: #1f2937;
                  color: #f9fafb;
                  padding: 1.5rem;
                  border-radius: 0.5rem;
                  overflow-x: auto;
                  margin: 2rem 0;
                }
                .prose img {
                  border-radius: 0.5rem;
                  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
                  margin: 2rem 0;
                  max-width: 100%;
                  height: auto;
                }
                .prose a {
                  color: #1a3a5c;
                  text-decoration: underline;
                  text-decoration-color: #ffd500;
                  text-underline-offset: 3px;
                  font-weight: 500;
                }
                .prose a:hover {
                  color: #ffd500;
                }
                .prose strong {
                  font-weight: 700;
                  color: #1a3a5c;
                }
                .prose em {
                  font-style: italic;
                  color: #374151;
                }
                .dark .prose h1,
                .dark .prose h2,
                .dark .prose h3 {
                  color: white !important;
                }
                .dark .prose strong {
                  color: #ffd500 !important;
                }
                .dark .prose em {
                  color: #d1d5db !important;
                }
                .dark .prose blockquote {
                  background: #374151;
                  color: #f9fafb !important;
                }
                .dark .prose th {
                  background: #374151;
                }
                .dark .prose tr:nth-child(even) {
                  background: #374151;
                }
                .dark .prose td {
                  color: #d1d5db !important;
                }
                .dark .prose code {
                  background: #374151;
                  color: #ffd500;
                }
              `}</style>

              {/* Share Section */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={shareArticle}
                  className="flex items-center gap-2 text-navy-600 dark:text-yellow-400 hover:text-navy-700 dark:hover:text-yellow-300 transition-colors font-medium"
                >
                  <Share2 className="w-5 h-5" />
                  Share Article
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-white dark:bg-gray-800 py-16 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    to={`/news/${relatedArticle.slug}`}
                    className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(relatedArticle.date)}
                      </div>
                      <h3 className="font-bold text-navy-900 dark:text-white group-hover:text-navy-700 dark:group-hover:text-yellow-400 transition-colors line-clamp-2 mb-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-navy-600 dark:text-yellow-400 font-medium text-sm">
                        Read More <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default NewsArticle;