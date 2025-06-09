import Link from "next/link";

export default function FavoriteWritings() {
  const writings = [
    {
      title: "Why Bittensor Will Win The Decentralised AI Race",
      href: "https://hfaresearch.substack.com/p/why-bittensor-will-win-the-decentralised",
      image: "article_images/why-bittensor-will-win-the-decentralised-ai-race.png",
      category: "AI & Blockchain",
      description: "An in-depth analysis of Bittensor's potential to dominate the decentralized AI landscape"
    },
    {
      title: "Avalanche: A Novel Solution To The Blockchain Trilema",
      href: "https://static.phemex.com/s/home/student-foundation/Shubh.pdf",
      image: "article_images/A-DETAILED-GUIDE-ON-AVALANCHE-NETWORK.png",
      category: "Blockchain",
      description: "Exploring how Avalanche addresses scalability, security, and decentralization challenges"
    },
    {
      title: "Why You Need a .ETH Domain Name",
      href: "https://blog.shubhpatni.com/why-you-need-a-eth-domain-name-b16762fd16b4",
      image: "/article_images/Why You Need a '.ETH' Domain Name.png",
      category: "Web3",
      description: "Understanding the importance and benefits of ENS domains in the decentralized web"
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Fav <span className="text-red-500">Writings</span>
          </h2>
          <Link href="/writing">
            <a className="inline-flex items-center px-6 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200">
              <span>All Blogs</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main featured article */}
          <div className="lg:col-span-2">
            <a
              href={writings[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video relative">
                  <img
                    src={writings[0].image}
                    alt={writings[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {writings[0].category}
                      </span>
                      <span className="text-gray-300 text-sm">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {writings[0].title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {writings[0].description}
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </div>

          {/* Secondary articles */}
          <div className="space-y-8">
            {writings.slice(1).map((article, index) => (
              <a
                key={index}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <article className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-square relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1 leading-tight line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-200 text-xs line-clamp-2">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-red-500">5x</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Top Writer on Medium</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">200k+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Views</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">100+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Articles Published</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Featured Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
}
