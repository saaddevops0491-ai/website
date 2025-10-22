import React, { useState, useEffect } from 'react';
import { FileText, Download, Gauge, Droplets, Settings, X, Eye } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [isPDFLoaded, setIsPDFLoaded] = useState(false);
  const [pdfLoadError, setPdfLoadError] = useState(false);

  const products = [
    {
      name: '3 Phase Wellhead Water-cut Meter (SF-321)',
      model: 'SF-321',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png',
      fallbackImage: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Produced water is one of the biggest challenges of production team in any oil field. Mature fields start producing more and more water with each passing day. It is crucial to measure the amount of produced water in the production stream in order to schedule and effectively manage the well intervention tasks.',
      features: [
        'Non-radioactive, non-intrusive measurement',
        'Full range water-cut measurement',
        'Orientation insensitive',
        'Real-time insights for production optimization',
        'Patented DMOR™ technology'
      ],
      icon: <Droplets className="w-8 h-8" />
    },
    {
      name: '3-Phase Multi Phase Flow Meter (SF-331)',
      model: 'SF-331',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1756373010/Saher_3G_MPFM_damfjy.png',
      fallbackImage: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multiphase mixture is very common in upstream sector of oil industry. Our 3-phase flow meter gives flow rates of all three fluids (oil, gas and water). Our patented microwave DMOR technology provides unparalleled accuracy to measure the multiphase fluid without any separation.',
      features: [
        'Simultaneous three-phase measurement',
        'Ultra-compact integration with venturi',
        'Minimal pressure drop (<2 psi)',
        'Full range accuracy (0~100% WC & 0~95% GVF)',
        'Dual microwave resonators on 2 different bands'
      ],
      icon: <Gauge className="w-8 h-8" />
    },
    {
      name: 'Skid Mounted MPFM (SK-100)',
      model: 'SK-100',
      image: 'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555852/MPFM-with-SKID-1536x1187_sjrvdp.png',
      fallbackImage: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'SK-100 is a compact and portable skid integrating Saher\'s patented multiphase meter (MPM). The skid is equipped with a high-pressure sampling valve and ATEX/IECEx certified readout electronics box with plug-and-play setup.',
      features: [
        'Portable and compact design',
        'Safe sampling system with custom bottles',
        'Local HMI integrated',
        'Cloud data upload capability',
        'Fits in pickup truck compartment',
        'Dramatically reduces OPEX'
      ],
      icon: <Settings className="w-8 h-8" />
    }
  ];

  // === Google Drive links ===
  // Your provided sharing link (should be "Anyone with the link" for anonymous visitors)
  const pdfShareLink = 'https://drive.google.com/file/d/1JJ13RSS8QrNEsIeskzoqZQQH8wIFpa4D/view?usp=sharing';

  // Extract fileId from the sharing link (safe — this ID is public)
  const fileId = '1JJ13RSS8QrNEsIeskzoqZQQH8wIFpa4D';

  // Drive embed (preview) and download URLs
  const pdfEmbedUrl = `https://drive.google.com/file/d/${fileId}/preview`; // use in iframe for in-page preview
  const pdfDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`; // open in new tab to download
  const pdfViewUrl = pdfShareLink; // fallback open/view link

  // === Preload the embed iframe quietly to set isPDFLoaded / pdfLoadError ===
  useEffect(() => {
    if (typeof document === 'undefined') return;

    let removed = false;
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = pdfEmbedUrl;

    const loadHandler = () => {
      if (removed) return;
      setIsPDFLoaded(true);
      cleanup();
    };

    const errorHandler = () => {
      if (removed) return;
      setIsPDFLoaded(false);
      setPdfLoadError(true);
      cleanup();
    };

    const timeout = window.setTimeout(() => {
      if (!isPDFLoaded) {
        setIsPDFLoaded(false);
        setPdfLoadError(true);
        cleanup();
      }
    }, 7000);

    function cleanup() {
      removed = true;
      iframe.onload = null;
      iframe.onerror = null;
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
      window.clearTimeout(timeout);
    }

    iframe.onload = loadHandler;
    iframe.onerror = errorHandler;

    document.body.appendChild(iframe);

    return () => {
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackSrc) {
      target.src = fallbackSrc;
    }
  };

  const PDFViewer = ({ url, title }: { url: string; title: string }) => (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <div className="flex gap-2">
            <a
              href={pdfDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <Download size={16} />
              Open / Download
            </a>
            <button
              onClick={() => setShowPDFViewer(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close PDF viewer"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="h-[calc(90vh-80px)]">
          {!pdfLoadError ? (
            <iframe src={url} className="w-full h-full border-0" title={title} />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-6">
              <div className="text-center max-w-xl">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Unable to preview document</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The document may require Google authentication or the file's sharing isn't set to "Anyone with the link".
                </p>
                <a
                  href={pdfViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Open / Download Brochure
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SEOHead
        title="Multiphase Flow Measurement Products | DMOR Technology | Saher Flow Solutions"
        description="Explore our revolutionary multiphase flow meters: SF-321 Water-cut Meter, SF-331 Multiphase Flow Meter, and SK-100 Skid Mounted MPFM. Non-radioactive, AI-powered, Saudi Aramco approved."
        keywords="multiphase flow meter, water cut meter, DMOR technology, SF-321, SF-331, SK-100, non-radioactive flow meter, oil gas instrumentation, Saudi Aramco approved, made in Saudi Arabia"
        url="/products"
        image="https://res.cloudinary.com/drnak5yb2/image/upload/v1754555852/MPFM-with-SKID-1536x1187_sjrvdp.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ProductCollection",
          name: "Saher Flow Solutions Products",
          description: "Revolutionary multiphase flow measurement instruments",
          url: "https://saherflow.com/products",
          provider: { "@type": "Organization", name: "Saher Flow Solutions" },
          hasProduct: [
            {
              "@type": "Product",
              name: "SF-321 Water-cut Meter",
              description: "3 Phase Wellhead Water-cut Meter using DMOR technology",
              image: "https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png",
              brand: "Saher Flow Solutions",
              category: "Flow Measurement Instrument"
            },
            {
              "@type": "Product",
              name: "SF-331 Multiphase Flow Meter",
              description: "3-Phase Multi Phase Flow Meter with AI integration",
              image: "https://res.cloudinary.com/drnak5yb2/image/upload/v1756373010/Saher_3G_MPFM_damfjy.png",
              brand: "Saher Flow Solutions",
              category: "Flow Measurement Instrument"
            }
          ]
        }}
      />

      <section id="products" className="py-24 dark:bg-gray-900 pt-32">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry-leading flow measurement instruments and digital solutions
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Product Portfolio</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Precision-engineered instruments designed for the most demanding applications
              </p>
            </div>

            <div className="space-y-16">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-yellow-500 rounded-xl text-navy-900">{product.icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-navy-900 dark:text-white">{product.name}</h3>
                        <p className="text-lg text-yellow-600 dark:text-yellow-400 font-semibold">{product.model}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{product.description}</p>

                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-navy-900 dark:text-white">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <a href="/contact" className="bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors duration-200">
                        Get Quote
                      </a>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-navy-900 dark:border-yellow-500 text-navy-900 dark:text-yellow-500 rounded-lg font-semibold hover:bg-navy-900 dark:hover:bg-yellow-500 hover:text-white dark:hover:text-navy-900 transition-all duration-200"
                      >
                        <FileText size={16} />
                        Specs
                      </button>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-navy-100 to-navy-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                      <div className="aspect-square bg-white dark:bg-gray-600 rounded-xl shadow-lg overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4" onError={(e) => handleImageError(e, product.fallbackImage)} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Solutions */}
            <div className="mt-20 bg-gradient-to-r from-navy-900 to-navy-800 dark:from-gray-800 dark:to-gray-700 text-white rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Our engineering team can develop tailored solutions for your specific measurement challenges</p>
              <a href="/contact" className="bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200">Discuss Custom Requirements</a>
            </div>
          </div>
        </div>

        {/* Product Brochure with Preloaded PDF */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">Complete Product Catalog</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Comprehensive specifications and technical details for all our products</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
              <div className="aspect-[4/3] w-full bg-white dark:bg-gray-700 flex items-center justify-center relative">
                {isPDFLoaded && !pdfLoadError ? (
                  <iframe src={pdfEmbedUrl} className="w-full h-full border-0" title="Product Brochure Preview" />
                ) : (
                  <div className="text-center p-8">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
                    <FileText size={64} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{pdfLoadError ? 'Unable to preview brochure' : 'Loading Product Brochure...'}</h3>
                    <p className="text-gray-500 dark:text-gray-400">Complete technical specifications and product details</p>
                    {pdfLoadError && (
                      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                        If the preview does not load, the document may require Google sign-in. You can open it directly:
                        <br />
                        <a href={pdfViewUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Open brochure in a new tab</a>
                      </p>
                    )}
                  </div>
                )}

                {/* Overlay with buttons */}
                <div className="absolute bottom-4 right-4 flex gap-3">
                  <button onClick={() => setShowPDFViewer(true)} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                    <Eye size={16} />
                    Full View
                  </button>
                  <a href={pdfDownloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg">
                    <Download size={16} />
                    Open / Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specs Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-navy-900 dark:text-white">{selectedProduct.name}</h2>
                    <p className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold">{selectedProduct.model}</p>
                  </div>
                  <button onClick={() => setSelectedProduct(null)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl" aria-label="Close product specs">
                    <X size={24} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-auto rounded-lg object-contain bg-gray-50 dark:bg-gray-700 p-4" onError={(e) => handleImageError(e, selectedProduct.fallbackImage)} />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-3">Description</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProduct.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <a href="/contact" className="w-full bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 py-3 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors duration-200 block text-center">Request Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PDF Viewer Modal */}
        {showPDFViewer && <PDFViewer url={pdfEmbedUrl} title="Product Catalog" />}
      </section>
    </>
  );
};

export default Products;
