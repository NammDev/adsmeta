export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: {
    feature: string // 2-1
    detail: string // 3-1
    detailMobile: string // 4-3
    thumbnail: string // 1-1
  }
  imageDetail?: string
  views: number
  trending?: boolean
  author: {
    name: string
    role?: string
    image: string
  }
  content: string // HTML content as a string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "stable-business-manager-facebook",
    slug: "stable-business-manager-facebook",
    title: "Why Stable Business Managers Matter in Facebook Ads",
    excerpt:
      "Discover why a verified and stable Business Manager is crucial for consistent ad performance, scalability, and avoiding sudden disruptions in your Facebook advertising.",
    date: "June 12, 2022",
    readTime: "6 min read",
    category: "Facebook Ads",
    image: {
      feature: "/blog/stable-business-manager-facebook-21.png",
      detail: "/blog/stable-business-manager-facebook-31.png",
      detailMobile: "/blog/stable-business-manager-facebook-43.png",
      thumbnail: "/blog/stable-business-manager-facebook-11.png",
    },
    views: 0,
    author: {
      name: "Alex Johnson",
      role: "Facebook Ads Specialist",
      image: "/male-marketing-owner.png",
    },
    content:
      '<p class="lead">In the fast-paced world of digital advertising, Facebook remains one of the most powerful platforms for reaching targeted audiences at scale. But for many advertisers, one common issue can stall growth and waste time: unstable Business Managers (BMs).</p>\n\n<p>A stable Business Manager is more than just a dashboard. It is the backbone of your advertising infrastructure. Without it, campaigns are vulnerable to sudden shutdowns, restricted accounts, and interrupted revenue streams.</p>\n\n<p>In this article, we will explore why having a verified and stable Business Manager is essential for success on Facebook, and how you can avoid the common pitfalls that come from using low-trust or unverified assets.</p>\n\n<h2>What Is a Business Manager on Facebook?</h2>\n\n<p>Facebook Business Manager is a central hub that allows advertisers to manage ad accounts, pages, people, and permissions all in one place. It is particularly useful for agencies and businesses running multiple assets and campaigns.</p>\n\n<p>However, not all Business Managers are created equal. Some are newly created with no history or trust, while others have been verified, aged, and used consistently within Facebook\'s guidelines.</p>\n\n<h2>The Risks of Using Unverified or Low-Quality BMs</h2>\n\n<p>If you are using a new or unverified BM, you are far more likely to experience issues such as:</p>\n<ul>\n  <li>Account bans or restrictions without clear reasons</li>\n  <li>Delays in ad approval or poor ad delivery</li>\n  <li>Inability to run certain types of ads</li>\n  <li>Loss of access to your assets and data</li>\n</ul>\n\n<p>These issues can significantly disrupt your advertising performance. Worse, they can create a cycle of starting over with new BMs, which costs time, money, and momentum.</p>\n\n<h2>Why Stability Matters</h2>\n\n<p>A stable BM helps ensure:</p>\n<ul>\n  <li>Consistent ad delivery: Facebook’s algorithm favors accounts with a history of compliant behavior</li>\n  <li>Lower risk of bans: Verified and aged BMs are less likely to be flagged by Facebook’s automated systems</li>\n  <li>Long-term scalability: You can grow your campaigns without fear of losing your assets overnight</li>\n</ul>\n\n<p>If you are spending thousands of dollars per month on Facebook ads, stability is not a luxury — it is a necessity.</p>\n\n<h2>What Makes a BM Stable and Trustworthy?</h2>\n\n<p>Here are a few indicators that a BM is high-quality and stable:</p>\n<ul>\n  <li>It is business-verified (uploaded documents, approved by Meta)</li>\n  <li>It has ad account creation ability</li>\n  <li>It has history of ad spend with no violations</li>\n  <li>It is linked to profiles with high trust (green tick, verified identity)</li>\n  <li>It is used regularly without sudden inactivity or spikes</li>\n</ul>\n\n<p>Many advertisers overlook the importance of these details until they experience problems. Investing in the right BM from the start can save you far more than the initial cost.</p>\n\n<h2>GoAds: Your Source for Verified Business Managers</h2>\n\n<p>At GoAds, we specialize in providing verified, stable Business Managers that are ready to use and built to last. Our accounts are carefully reviewed and backed by high-trust profiles, giving you a dependable foundation to run your campaigns.</p>\n\n<p>Whether you are an agency scaling operations or a solo media buyer looking for peace of mind, we understand your needs because we have been there ourselves. That is why our clients rely on us month after month to supply the assets they need to succeed.</p>\n\n<h2>Final Thoughts</h2>\n\n<p>Running ads on Facebook is competitive enough. You should not have to worry about losing access to your business tools without warning. By using a stable Business Manager, you are setting yourself up for long-term success and minimizing the risk of disruption.</p>\n\n<p>Trust, consistency, and preparation make all the difference. At GoAds, we are here to support you with real solutions that help you move forward with confidence.</p>\n\n<p><strong>Need a verified Business Manager today?</strong> Contact us at <a href="https://goads.shop">goads.shop</a> or message us directly on Telegram <strong>@goads_official</strong>. Let us help you build a stronger, safer foundation for your ads.</p>',
    tags: ["Facebook Ads", "Business Manager", "BM Stability", "Ad Account Trust"],
  },
  {
    id: "top-5-reasons-facebook-ads-get-banned",
    slug: "top-5-reasons-facebook-ads-get-banned",
    title: "Top 5 Reasons Facebook Ads Get Banned and How to Avoid Them",
    excerpt:
      "Learn the most common reasons why Facebook ads get banned and how to avoid them with actionable tips and expert advice.",
    date: "May 17, 2023",
    readTime: "7 min read",
    category: "BM Ads",
    image: {
      feature: "/blog/top-5-reasons-facebook-ads-get-banned-21.png",
      detail: "/blog/top-5-reasons-facebook-ads-get-banned-31.png",
      detailMobile: "/blog/top-5-reasons-facebook-ads-get-banned-43.png",
      thumbnail: "/blog/top-5-reasons-facebook-ads-get-banned-11.png",
    },
    views: 1742,
    author: {
      name: "Simon Carter",
      role: "Performance Marketing Expert",
      image: "/female-ads-expert.png",
    },
    content:
      '\n    <p class="lead">If you run ads on Facebook, chances are you\'ve faced a dreaded moment — your ad account suddenly gets disabled or banned. It\'s frustrating, time-consuming, and can severely disrupt your business. The good news is that most bans are preventable if you understand what triggers them and take the right precautions.</p>\n\n    <p>In this article, we’ll explore the top five reasons Facebook ads get banned and what you can do to avoid them.</p>\n\n    <h2>1. Violation of Ad Policies</h2>\n    <p>Facebook has strict advertising policies that cover everything from the type of product being promoted to how it’s presented. Common violations include misleading claims, before-and-after images, prohibited content (such as adult products or weapons), and aggressive language.</p>\n    <p><strong>How to avoid:</strong></p>\n    <ul>\n      <li>Read and follow Facebook’s Ad Policies thoroughly</li>\n      <li>Avoid exaggerated claims like "100% guaranteed results"</li>\n      <li>Use clean, compliant creatives and landing pages</li>\n    </ul>\n\n    <h2>2. Low-Quality Landing Pages</h2>\n    <p>Facebook reviews not only your ad but also where the ad leads. If your landing page has too many pop-ups, lacks transparency (like missing privacy policies), or is slow to load, your ad might be disapproved.</p>\n    <p><strong>How to avoid:</strong></p>\n    <ul>\n      <li>Use fast, mobile-optimized pages</li>\n      <li>Include clear terms, privacy policies, and contact info</li>\n      <li>Avoid clickbait headlines or misleading navigation</li>\n    </ul>\n\n    <h2>3. New Accounts and Inconsistent Activity</h2>\n    <p>Brand-new ad accounts or Business Managers with no history are under more scrutiny. Inconsistent spending patterns or abrupt activity (like suddenly launching large budgets) can raise red flags.</p>\n    <p><strong>How to avoid:</strong></p>\n    <ul>\n      <li>Warm up your account slowly with small budgets</li>\n      <li>Use verified Business Managers and trusted profiles</li>\n      <li>Maintain consistent activity and avoid long gaps</li>\n    </ul>\n\n    <h2>4. Poor Engagement and Negative Feedback</h2>\n    <p>If users frequently report your ads, hide them, or leave negative comments, Facebook interprets this as a sign of poor quality.</p>\n    <p><strong>How to avoid:</strong></p>\n    <ul>\n      <li>Monitor your ad comments and respond professionally</li>\n      <li>Avoid overly aggressive or sensational content</li>\n      <li>Run high-quality creatives that match user expectations</li>\n    </ul>\n\n    <h2>5. Using Low-Trust Profiles or Shared Accounts</h2>\n    <p>Running ads from accounts that have been flagged before, or from profiles that were bought or shared without care, can lead to immediate blocks.</p>\n    <p><strong>How to avoid:</strong></p>\n    <ul>\n      <li>Use trusted, verified profiles for ad admin access</li>\n      <li>Avoid logging into ad accounts from suspicious IPs or devices</li>\n      <li>Keep your login behavior consistent</li>\n    </ul>\n\n    <h2>How GoAds Can Help</h2>\n    <p>At GoAds, we understand how frustrating account bans can be. That’s why we provide high-trust, verified Business Managers and profiles that help you operate in a safer, more stable environment. Our assets are tested, compliant, and built for long-term use.</p>\n    <p>Whether you’re just getting started or scaling aggressively, our team is here to guide you and supply the tools you need to avoid costly interruptions.</p>\n\n    <h2>Final Advice</h2>\n    <p>Running Facebook ads will always come with some risk, but with the right setup and behavior, you can minimize disruptions. Stay informed, stay compliant, and choose partners who understand the platform inside out.</p>\n\n    <p><strong>Need help getting started with a trusted BM and profile?</strong> Visit <a href="https://goads.shop">goads.shop</a> or message us on Telegram <a href="https://t.me/goads_official">@goads_official</a> today.</p>\n  ',
    tags: ["Facebook Ads", "Policy Compliance", "Ad Strategy", "BM Safety"],
  },
  {
    id: "what-is-a-green-tick-facebook-profile",
    slug: "what-is-a-green-tick-facebook-profile",
    title: "What Is a Green Tick Facebook Profile and Why It Matters",
    excerpt:
      "Discover the importance of verified 'green tick' profiles in Facebook Ads and how they enhance trust, ad stability, and long-term success.",
    date: "August 17, 2022",
    readTime: "6 min read",
    category: "Facebook Ads",
    image: {
      feature: "/blog/what-is-a-green-tick-facebook-profile-21.png",
      detail: "/blog/what-is-a-green-tick-facebook-profile-31.png",
      detailMobile: "/blog/what-is-a-green-tick-facebook-profile-43.png",
      thumbnail: "/blog/what-is-a-green-tick-facebook-profile-11.png",
    },
    views: 1130,
    author: {
      name: "Jason Hangi",
      role: "Ad Infrastructure Specialist",
      image: "/male-expert-ads.png",
    },
    content:
      '\n    <p class="lead">In the world of Facebook advertising, trust is everything. One of the most underrated but powerful signals of trust is the green verification tick on a Facebook profile.</p>\n\n    <p>If you\'ve ever wondered what that tick means and how it affects your advertising performance, you\'re in the right place. This blog post will break down what a green tick profile is, why it’s important for media buyers and advertisers, and how working with verified profiles can boost your account health and campaign stability.</p>\n\n    <h2>What Is a Green Tick Profile?</h2>\n    <p>A green tick profile on Facebook typically refers to a user account that has undergone Facebook’s identity verification process. These profiles have a higher level of trust in the platform’s ecosystem and are less likely to trigger security or compliance issues when used for business purposes.</p>\n    <p>The term "green tick" often refers to profiles that are:</p>\n    <ul>\n      <li>Verified with government-issued ID</li>\n      <li>Have two-factor authentication (2FA) enabled</li>\n      <li>Have passed Facebook’s advertising and account integrity checks</li>\n      <li>Are actively used and exhibit natural behavior patterns</li>\n    </ul>\n    <p>Such profiles are considered more legitimate and trustworthy in the eyes of Facebook’s systems.</p>\n\n    <h2>Why It Matters for Facebook Advertising</h2>\n    <p>When you connect a green tick profile to your Business Manager or ad account, several key benefits follow:</p>\n\n    <h3>1. Reduced Risk of Suspensions</h3>\n    <p>Facebook’s automated systems monitor login behavior, account ownership, and administrative actions. A high-trust profile helps ensure that your BM and ad accounts won’t be flagged unnecessarily.</p>\n\n    <h3>2. Faster Ad Approvals</h3>\n    <p>Accounts associated with verified profiles often experience quicker review times for ads and assets because they’re seen as lower risk.</p>\n\n    <h3>3. Better Reputation Scores</h3>\n    <p>Facebook quietly maintains internal trust scores for both users and assets. Having a green tick profile on your BM can contribute to a stronger score, making your entire ad infrastructure more resilient.</p>\n\n    <h3>4. Access to Higher Spending Limits</h3>\n    <p>With more trust comes more freedom. Ads run under profiles with green tick status may gain faster access to higher ad spend thresholds and advanced tools.</p>\n\n    <h3>5. Lower Recovery Time After Restrictions</h3>\n    <p>If something goes wrong, Facebook is more likely to respond positively to an appeal or reactivation request when it’s tied to a verified, trustworthy profile.</p>\n\n    <h2>Why Not All Profiles Are Created Equal</h2>\n    <p>Buying or borrowing random profiles for your BM is a common but risky practice. Many of these accounts are:</p>\n    <ul>\n      <li>Farmed or created in bulk</li>\n      <li>Lack personal history or natural activity</li>\n      <li>Trigger Facebook\'s automated red flags</li>\n    </ul>\n    <p>Using such profiles can lead to instant bans or long-term instability in your ad setup. The cost of a profile might be cheap, but the damage it can cause is costly.</p>\n\n    <h2>How GoAds Ensures High-Quality Green Tick Profiles</h2>\n    <p>At GoAds, we handpick and verify every profile before offering it to clients. Our green tick profiles are:</p>\n    <ul>\n      <li>Individually verified with real documents</li>\n      <li>Properly aged and naturally active</li>\n      <li>Used exclusively for clean advertising history</li>\n      <li>Linked to secure devices and stable environments</li>\n    </ul>\n    <p>We don’t just sell profiles — we provide reliable entry points into Facebook’s ecosystem, designed to support your long-term advertising goals.</p>\n\n    <h2>Final Thoughts</h2>\n    <p>A green tick isn’t just a badge — it’s a passport into a safer, more stable Facebook advertising environment. As restrictions become tighter and automation grows stricter, using verified profiles is no longer optional for serious advertisers.</p>\n\n    <p><strong>If you’re investing in scaling your campaigns, don’t let weak foundations hold you back. Choose verified, trusted assets that give you the best shot at success.</strong></p>\n\n    <p>Ready to upgrade your setup with a green tick profile? Visit <a href="https://goads.shop">goads.shop</a> or message us on Telegram <a href="https://t.me/goads_official">@goads_official</a> today and get the confidence your business deserves.</p>\n  ',
    tags: ["Facebook Ads", "Green Tick", "BM Trust", "Ad Compliance"],
  },
  {
    id: "how-to-scale-facebook-ads-after-ban",
    slug: "how-to-scale-facebook-ads-after-ban",
    title: "How to Scale Facebook Ads Safely After an Account Ban",
    excerpt:
      "Learn how to recover from a Facebook ad account ban and scale again safely using verified Business Managers, trusted profiles, and smart strategies.",
    date: "May 22, 2024",
    readTime: "6 min read",
    category: "Facebook Ads",
    image: {
      feature: "/blog/how-to-scale-facebook-ads-after-ban-21.png",
      detail: "/blog/how-to-scale-facebook-ads-after-ban-31.png",
      detailMobile: "/blog/how-to-scale-facebook-ads-after-ban-43.png",
      thumbnail: "/blog/how-to-scale-facebook-ads-after-ban-11.png",
    },
    views: 980,
    author: {
      name: "Ryan chulish",
      role: "Performance Marketing Strategist",
      image: "/female-marketing-expert.png",
    },
    content:
      '\n  <p class="lead">Experiencing a Facebook ad account ban can be one of the most stressful moments for any advertiser. Losing access to your ads means losing revenue, disrupting marketing plans, and often facing long wait times for appeals.</p>\n\n  <p>But it is possible to recover and scale your Facebook ads again safely — if you approach it the right way. In this article, we will guide you through proven strategies to bounce back after an account ban and scale your ads without risking another suspension.</p>\n\n  <h2>Understand Why You Were Banned</h2>\n  <p>The first step is to carefully analyze what caused the ban. Facebook typically disables accounts for violations of their ad policies or suspicious activity. Common reasons include:</p>\n  <ul>\n    <li>Repeated policy violations</li>\n    <li>Sudden spikes in spending or changes in account behavior</li>\n    <li>Use of unverified or low-trust Business Managers and profiles</li>\n    <li>Poor-quality creatives or landing pages</li>\n  </ul>\n  <p>Understanding the root cause is critical to avoid repeating the same mistakes.</p>\n\n  <h2>Appeal If You Believe the Ban Was a Mistake</h2>\n  <p>Sometimes, bans happen due to automated systems or errors. Facebook allows you to appeal the decision via the Business Manager or Ads Manager interface. When appealing, be professional, clear, and honest. Provide any relevant documents or evidence to support your case.</p>\n  <p>Keep in mind that appeals can take time and are not always successful, so prepare for alternative plans.</p>\n\n  <h2>Use Verified and Stable Business Managers</h2>\n  <p>When you create a new ad account after a ban, never rush to use a brand new or unverified Business Manager. These are under high scrutiny and more prone to bans.</p>\n  <p>Instead, use verified Business Managers that have a solid history, stable ad spend, and are linked to green tick verified profiles. At GoAds, we provide such trusted assets to help advertisers build a reliable foundation for scaling safely.</p>\n\n  <h2>Warm Up Your New Account Slowly</h2>\n  <p>Facebook’s algorithms monitor sudden changes in ad spend and activity. When starting fresh, avoid jumping to large daily budgets or running many campaigns simultaneously. Gradually increase your spend and scale campaigns over weeks to build trust.</p>\n  <p>Maintain consistent spending patterns and avoid abrupt changes to reduce the risk of being flagged.</p>\n\n  <h2>Maintain High-Quality Ad Content and Landing Pages</h2>\n  <p>Never compromise on the quality of your ads and landing pages. Ensure your creatives follow Facebook’s advertising policies strictly. Use clear, honest messaging and avoid misleading claims.</p>\n  <p>Landing pages should load quickly, be mobile-friendly, and contain transparent information such as terms and privacy policies.</p>\n\n  <h2>Monitor Account Health and Engagement</h2>\n  <p>Keep an eye on your ad performance metrics and user engagement. Respond to comments professionally, remove negative feedback promptly, and pause ads that get poor feedback.</p>\n  <p>Engagement signals matter to Facebook’s algorithms and influence your account’s reputation.</p>\n\n  <h2>Diversify Your Advertising Assets</h2>\n  <p>Avoid relying on a single Business Manager or ad account. Spread your ad campaigns across multiple verified assets and profiles to reduce risk. This approach ensures that if one account faces issues, your business continuity is not entirely disrupted.</p>\n\n  <h2>Final Thoughts</h2>\n  <p>Recovering from a Facebook ad ban requires patience, care, and smart strategy. By focusing on verified and stable assets, warming up your accounts slowly, and maintaining high-quality ads, you can rebuild trust with Facebook and scale your advertising safely.</p>\n\n  <p><strong>At GoAds, we specialize in helping advertisers recover and grow with verified Business Managers and profiles that provide long-term stability. If you want to protect your ad investments and scale confidently, contact us at <a href="https://goads.shop">goads.shop</a> or via Telegram <a href="https://t.me/goads_official">@goads_official</a>.</strong></p>\n',
    tags: ["Facebook Ads", "Scaling", "Account Ban", "Business Manager", "Recovery"],
  },
  {
    id: "verified-business-managers-facebook-ads",
    slug: "verified-business-managers-facebook-ads",
    title: "The Ultimate Guide to Verified Business Managers for Facebook Ads",
    excerpt:
      "Learn how verified Business Managers can protect your Facebook ad setup, improve performance, and unlock advanced advertising features.",
    date: "July 28, 2023",
    readTime: "6 min read",
    category: "Facebook Ads",
    image: {
      feature: "/blog/verified-business-managers-facebook-ads-21.png",
      detail: "/blog/verified-business-managers-facebook-ads-31.png",
      detailMobile: "/blog/verified-business-managers-facebook-ads-43.png",
      thumbnail: "/blog/verified-business-managers-facebook-ads-11.png",
    },
    views: 980,
    author: {
      name: "Hazad Kim",
      role: "Meta Compliance Specialist",
      image: "/liam-tran.png",
    },
    content:
      '\n  <p class="lead">For anyone serious about Facebook advertising, the concept of a verified Business Manager is essential. But what exactly does it mean for a Business Manager to be verified, why does it matter, and how can it impact your ad performance and account safety?</p>\n\n  <p>In this comprehensive guide, we’ll dive into everything you need to know about verified Business Managers and why investing in one can transform your advertising efforts.</p>\n\n  <h2>What Is a Verified Business Manager?</h2>\n  <p>A Business Manager on Facebook is a tool that allows businesses and agencies to manage multiple ad accounts, Pages, and user permissions in one centralized place. When a Business Manager is “verified,” it means Facebook has reviewed and confirmed the legitimacy of the business behind it.</p>\n  <p>Verification usually involves submitting official documents such as business registration certificates, tax identification numbers, or other government-issued paperwork. Once approved, the Business Manager gains a verified badge, signaling to Facebook that it represents a real and trustworthy entity.</p>\n\n  <h2>Why Is Verification Important?</h2>\n  <p>Verification is more than just a badge—it carries several critical benefits for advertisers:</p>\n  <ul>\n    <li><strong>Increased Trust and Credibility</strong><br>Facebook prioritizes verified Business Managers because they represent genuine businesses. This trust reduces the likelihood of automatic bans or restrictions triggered by Facebook’s security algorithms.</li>\n    <li><strong>Access to Advanced Features</strong><br>Verified Business Managers unlock additional Facebook advertising tools, such as higher spending limits, API access, and the ability to run certain ad types that are restricted for unverified accounts.</li>\n    <li><strong>Improved Ad Delivery and Performance</strong><br>Because verified accounts are considered safer, their ads often receive faster approval and better reach. The platform favors assets with a clean compliance history, which helps advertisers scale campaigns more effectively.</li>\n    <li><strong>Better Protection Against Account Loss</strong><br>In case of issues, verified Business Managers have stronger support options and higher chances of successful appeals. This reduces downtime and potential revenue loss.</li>\n  </ul>\n\n  <h2>How to Get Your Business Manager Verified</h2>\n  <p>To get verified, you need to:</p>\n  <ul>\n    <li>Have a Business Manager with an active Page</li>\n    <li>Submit valid business documents that prove your company’s existence</li>\n    <li>Provide accurate business information (address, phone number, website)</li>\n    <li>Complete domain verification if running website conversion campaigns</li>\n    <li>Comply with Facebook’s terms and policies</li>\n  </ul>\n  <p>The process can take from a few days to several weeks depending on your country and the documentation provided.</p>\n\n  <h2>Why Verified Business Managers Are a Game-Changer for Advertisers</h2>\n  <p>For agencies and media buyers, using verified Business Managers reduces risk, speeds up campaign launches, and ensures smoother scaling. For eCommerce stores and brands, it means better control over assets and less chance of sudden disruptions.</p>\n  <p>Additionally, when linked with verified profiles (green tick) and secure ad accounts, a verified Business Manager forms a strong foundation for sustainable advertising success.</p>\n\n  <h2>How GoAds Supports Your Verified Business Manager Needs</h2>\n  <p>At GoAds, we specialize in providing fully verified Business Managers that come ready to use with a proven track record. Our assets help you avoid the costly mistakes of unverified accounts and unstable profiles.</p>\n  <p>We offer:</p>\n  <ul>\n    <li>Verified Business Managers with proper documentation</li>\n    <li>Linked green tick profiles for higher trust</li>\n    <li>Regular monitoring and support to ensure compliance</li>\n    <li>Scalable solutions tailored to agencies, eCommerce, and solo advertisers</li>\n  </ul>\n\n  <h2>Conclusion</h2>\n  <p>Verified Business Managers are no longer optional for serious Facebook advertisers. They provide stability, credibility, and access to tools that can elevate your campaigns and protect your investment.</p>\n  <p><strong>If you want to streamline your Facebook advertising and minimize risks, investing in a verified Business Manager is the smartest move you can make.</strong></p>\n  <p><strong>Visit <a href="https://goads.shop">goads.shop</a> or contact us on Telegram <a href="https://t.me/goads_official">@goads_official</a> today to learn more and get started with a trusted, verified Business Manager.</strong></p>\n',
    tags: ["Facebook Ads", "Verified BM", "Business Manager", "Account Safety", "Ad Performance"],
  },
  {
    id: "facebook-ad-objectives-guide",
    slug: "facebook-ad-objectives-guide",
    title: "How to Choose the Right Facebook Ad Objectives for Your Campaigns",
    excerpt:
      "Not sure which Facebook ad objective to choose? Learn how to match the right campaign goals with the correct ad objectives to maximize ROI and performance.",
    date: "May 05, 2021",
    readTime: "7 min read",
    category: "Facebook Ads",
    image: {
      feature: "/blog/facebook-ad-objectives-guide-21.png",
      detail: "/blog/facebook-ad-objectives-guide-31.png",
      detailMobile: "/blog/facebook-ad-objectives-guide-43.png",
      thumbnail: "/blog/facebook-ad-objectives-guide-11.png",
    },
    views: 1120,
    author: {
      name: "Jasmine Lee",
      role: "Performance Marketing Strategist",
      image: "/jasmine-le.png",
    },
    content:
      '\n  <p class="lead">Running Facebook ads without a clear objective is like setting sail without a destination. Facebook offers a variety of ad objectives, each tailored to different business goals and customer journeys. Understanding which objective to choose can dramatically impact the success and ROI of your campaigns.</p>\n\n  <h2>Why Choosing the Right Objective Matters</h2>\n  <p>Every Facebook ad campaign begins with choosing an objective. Facebook groups these objectives into three main categories:</p>\n  <ul>\n    <li><strong>Awareness:</strong> To introduce your brand to a wide audience</li>\n    <li><strong>Consideration:</strong> To drive engagement, traffic, or leads</li>\n    <li><strong>Conversion:</strong> To encourage specific actions like purchases or sign-ups</li>\n  </ul>\n  <p>Selecting an objective that does not align with your campaign goals can result in wasted budget, poor ad delivery, and low conversions.</p>\n\n  <h2>Overview of Facebook Ad Objectives</h2>\n  <ul>\n    <li><strong>Brand Awareness:</strong> Best for businesses looking to increase recognition and reach people likely to be interested in your product. Ideal for new product launches or entering new markets.</li>\n    <li><strong>Reach:</strong> Focuses on showing your ad to the maximum number of people in your target audience. Useful for promotions or events that require broad exposure.</li>\n    <li><strong>Traffic:</strong> Designed to send people to your website, app, or Facebook event. Perfect when your goal is to drive visitors and increase site visits.</li>\n    <li><strong>Engagement:</strong> Used to get more post likes, comments, shares, or event responses. This objective helps build a community and social proof.</li>\n    <li><strong>App Installs:</strong> Ideal for app developers looking to get more downloads and active users.</li>\n    <li><strong>Video Views:</strong> Optimizes for showing your video ads to users likely to watch them fully. Great for storytelling and product demos.</li>\n    <li><strong>Lead Generation:</strong> Collects contact information from interested users directly on Facebook through forms. Effective for B2B or service businesses.</li>\n    <li><strong>Messages:</strong> Encourages users to start conversations with your business on Messenger or WhatsApp. Useful for personalized sales or support.</li>\n    <li><strong>Conversions:</strong> Focuses on getting people to take specific actions on your website or app, like purchases, sign-ups, or adding payment info. Requires proper setup with Facebook Pixel or SDK.</li>\n    <li><strong>Catalog Sales:</strong> Automatically shows products from your catalog based on user behavior. Best for eCommerce businesses with large inventories.</li>\n    <li><strong>Store Traffic:</strong> Targets users near your physical location to drive foot traffic to brick-and-mortar stores.</li>\n  </ul>\n\n  <h2>How to Choose the Right Objective for Your Business</h2>\n  <ul>\n    <li><strong>Start with your business goal:</strong> Are you building awareness, generating leads, or making sales?</li>\n    <li><strong>Match objective with the sales funnel:</strong> Use Awareness objectives for cold audiences, Consideration for nurturing interest, and Conversion for closing sales.</li>\n    <li><strong>Consider your audience size:</strong> Some objectives work better with large audiences (Reach), others with smaller, targeted groups (Conversions).</li>\n    <li><strong>Ensure you have the right tools:</strong> Conversion campaigns require Facebook Pixel setup. Lead generation needs a well-crafted form.</li>\n  </ul>\n\n  <h2>Common Mistakes to Avoid</h2>\n  <ul>\n    <li>Using Conversion objectives without tracking properly set up.</li>\n    <li>Running Traffic campaigns when you want direct sales.</li>\n    <li>Overlooking the importance of testing different objectives for the same campaign to find the best performer.</li>\n  </ul>\n\n  <h2>How GoAds Helps You Choose and Optimize</h2>\n  <p>At GoAds, we guide our clients to select the most effective objectives tailored to their unique goals. Our team leverages years of experience and data insights to optimize campaign setups, ensuring your ad budget works as efficiently as possible.</p>\n\n  <h2>Final Thoughts</h2>\n  <p>Whether you’re launching a new product or scaling an established brand, choosing the right Facebook ad objective is the first step toward success. A smart objective aligns your goals, creative, and targeting — and that alignment is what drives real ROI.</p>\n',
    tags: ["Facebook Ads", "Ad Objectives", "Campaign Strategy", "Conversions", "Lead Generation"],
  },
  {
    id: "facebook-pixel-performance-guide",
    slug: "facebook-pixel-performance-guide",
    title: "Understanding Facebook Pixel and How It Boosts Your Ad Performance",
    excerpt:
      "Learn how Facebook Pixel works, why it’s essential for accurate tracking and ad optimization, and how it can dramatically improve your campaign ROI.",
    date: "June 01, 2023",
    readTime: "6 min read",
    category: "Facebook Ads",
    image: {
      feature: "/blog/facebook-pixel-performance-guide-21.png",
      detail: "/blog/facebook-pixel-performance-guide-31.png",
      detailMobile: "/blog/facebook-pixel-performance-guide-43.png",
      thumbnail: "/blog/facebook-pixel-performance-guide-11.png",
    },
    views: 960,
    author: {
      name: "Michel Smith",
      role: "Performance Marketing Strategist",
      image: "/jasmine-le.png",
    },
    content:
      '\n  <p class="lead">Facebook Pixel is one of the most powerful tools available for advertisers on the platform, yet many still underestimate its impact. Properly implementing and leveraging Facebook Pixel can transform your campaigns by providing valuable data, enabling precise targeting, and improving conversion tracking.</p>\n\n  <h2>What Is Facebook Pixel?</h2>\n  <p>Facebook Pixel is a small piece of code that you place on your website. It tracks user actions such as page visits, purchases, sign-ups, and more. This data is then sent back to Facebook, allowing advertisers to measure the effectiveness of their ads, build custom audiences, and optimize for specific actions.</p>\n\n  <h2>Why Is Facebook Pixel Important?</h2>\n  <ul>\n    <li><strong>Track Conversions Accurately:</strong> Without Pixel, Facebook can only guess how many sales or sign-ups come from your ads. Pixel provides real data so you know exactly which ads are driving results.</li>\n    <li><strong>Optimize Ad Delivery:</strong> Facebook’s algorithm uses Pixel data to deliver your ads to people most likely to take your desired action, improving performance and lowering costs.</li>\n    <li><strong>Build Custom Audiences:</strong> You can retarget users who visited your website but didn’t convert, or create lookalike audiences based on your best customers.</li>\n    <li><strong>Measure Return on Ad Spend (ROAS):</strong> Knowing which ads bring revenue helps you allocate your budget more effectively.</li>\n  </ul>\n\n  <h2>Key Events You Can Track with Facebook Pixel</h2>\n  <ul>\n    <li><strong>Page View:</strong> Tracks when someone lands on your page.</li>\n    <li><strong>View Content:</strong> When users view specific product pages or content.</li>\n    <li><strong>Add to Cart:</strong> Tracks when users add items to their shopping cart.</li>\n    <li><strong>Initiate Checkout:</strong> When users start the checkout process.</li>\n    <li><strong>Purchase:</strong> Records completed purchases.</li>\n    <li><strong>Lead:</strong> When a user submits a form or expresses interest.</li>\n  </ul>\n\n  <h2>How to Set Up Facebook Pixel</h2>\n  <ol>\n    <li>Create a Facebook Pixel in Events Manager.</li>\n    <li>Add the Pixel base code to the header of your website.</li>\n    <li>Configure standard events or custom conversions to track specific actions.</li>\n    <li>Verify Pixel is working using Facebook’s Pixel Helper Chrome extension.</li>\n  </ol>\n  <p>Many platforms like Shopify, WordPress, and WooCommerce offer easy Pixel integration plugins.</p>\n\n  <h2>Best Practices for Using Facebook Pixel</h2>\n  <ul>\n    <li>Place Pixel code on every page of your website for complete tracking.</li>\n    <li>Use standard events to capture key actions relevant to your business goals.</li>\n    <li>Avoid duplicate Pixel installations that may cause inflated data.</li>\n    <li>Regularly monitor Pixel health and troubleshoot issues promptly.</li>\n    <li>Combine Pixel data with your CRM or analytics for deeper insights.</li>\n  </ul>\n\n  <h2>How GoAds Supports Your Pixel Setup and Optimization</h2>\n  <p>At GoAds, we not only provide you with verified Business Managers but also assist in setting up and optimizing Facebook Pixels. We ensure your Pixel is correctly installed and tracking critical events so you get the most from your ad spend.</p>\n  <p>Proper Pixel usage allows you to target smarter, optimize faster, and grow your campaigns with confidence.</p>\n\n  <h2>Conclusion</h2>\n  <p>Facebook Pixel is essential for advertisers who want to move beyond guesswork. By tracking real user actions, it empowers you to optimize your ads, build effective retargeting audiences, and measure true ROI.</p>\n  <p>If you want expert help with Facebook Pixel and Business Manager setup, visit <a href="https://goads.shop">goads.shop</a> or contact us on Telegram <a href="https://t.me/goads_offcial">@goads_offcial</a>. We are here to help you build stable, data-driven campaigns that deliver results.</p>\n',
    tags: [
      "Facebook Pixel",
      "Conversion Tracking",
      "Ad Optimization",
      "Facebook Ads",
      "Custom Audiences",
    ],
  },
  {
    id: "high-converting-facebook-ad-creatives",
    slug: "high-converting-facebook-ad-creatives",
    title: "Best Practices for Creating High-Converting Facebook Ad Creatives",
    excerpt:
      "Learn how to create Facebook ad creatives that capture attention, drive engagement, and maximize conversions. Follow these proven best practices.",
    date: "May 14, 2023",
    readTime: "7 min read",
    category: "Facebook Ads",
    image: {
      feature: "/blog/high-converting-facebook-ad-creatives-21.png",
      detail: "/blog/high-converting-facebook-ad-creatives-31.png",
      detailMobile: "/blog/high-converting-facebook-ad-creatives-43.png",
      thumbnail: "/blog/high-converting-facebook-ad-creatives-11.png",
    },
    views: 1075,
    author: {
      name: "Sophia Taylor",
      role: "Creative Strategy Lead",
      image: "/daniel-vu.png",
    },
    content:
      '\n  <p class="lead">In Facebook advertising, creative content is king. Even with the most precise targeting and optimized bidding, a poorly designed or irrelevant ad creative can cause your campaign to underperform. Creating compelling, engaging, and relevant ads is essential to capture attention and convert users.</p>\n\n  <h2>Why Creative Matters</h2>\n  <p>Facebook users scroll quickly through their feeds, so your ad needs to stand out instantly. A strong creative:</p>\n  <ul>\n    <li>Catches the eye</li>\n    <li>Communicates your value clearly</li>\n    <li>Builds trust and interest</li>\n    <li>Encourages users to take action</li>\n  </ul>\n  <p>If your ad creative fails at any of these points, your click-through rates (CTR) and conversions will suffer, increasing your cost per result.</p>\n\n  <h2>Types of Facebook Ad Creatives</h2>\n  <ul>\n    <li><strong>Image Ads:</strong> Simple, static images are quick to create and can be very effective if well-designed. They work best for showcasing products or simple offers.</li>\n    <li><strong>Video Ads:</strong> Video ads allow you to tell a story, demonstrate products, or explain services in an engaging way. Videos tend to generate higher engagement and can communicate more information.</li>\n    <li><strong>Carousel Ads:</strong> These ads allow multiple images or videos in one ad, each with its own link. Great for showcasing different products, features, or offers.</li>\n    <li><strong>Collection Ads:</strong> These combine videos/images with product catalogs and allow users to browse and shop without leaving Facebook.</li>\n  </ul>\n\n  <h2>Key Elements of High-Converting Creatives</h2>\n  <ul>\n    <li><strong>Clear and compelling headline:</strong> Grab attention quickly and communicate the benefit.</li>\n    <li><strong>Strong visuals:</strong> Use high-quality, relevant images or videos with bright colors and clear focus.</li>\n    <li><strong>Concise and persuasive copy:</strong> Keep text short and action-oriented. Focus on benefits, not just features.</li>\n    <li><strong>Call to Action (CTA):</strong> Encourage users to take the next step, whether it’s “Shop Now,” “Learn More,” or “Sign Up.”</li>\n    <li><strong>Branding:</strong> Include your logo or brand colors to build recognition and trust.</li>\n    <li><strong>Mobile optimization:</strong> Most Facebook users are on mobile devices, so creatives should look great on small screens.</li>\n  </ul>\n\n  <h2>Tips for Writing Ad Copy</h2>\n  <ul>\n    <li>Speak directly to your target audience and their pain points.</li>\n    <li>Use social proof, like reviews or testimonials, if possible.</li>\n    <li>Avoid jargon or overly technical language.</li>\n    <li>Include urgency or scarcity when appropriate (e.g., limited-time offer).</li>\n    <li>Test different headlines and descriptions to see what resonates best.</li>\n  </ul>\n\n  <h2>Creative Testing and Optimization</h2>\n  <p>Testing multiple creatives is crucial. Facebook allows you to run A/B tests to compare images, videos, headlines, and calls to action. Regularly review performance data and pause ads that underperform. Optimize by focusing budget on your best-performing creatives.</p>\n\n  <h2>Avoid Common Mistakes</h2>\n  <ul>\n    <li>Using too much text in images (Facebook limits text to 20% of image area).</li>\n    <li>Ignoring the power of video content.</li>\n    <li>Reusing the same creative for too long, causing audience fatigue.</li>\n    <li>Overloading ads with too much information. Keep it simple.</li>\n  </ul>\n\n  <h2>How GoAds Supports Your Creative Success</h2>\n  <p>GoAds offers more than just verified Business Managers and profiles. We provide guidance and consultation on creative strategies that work with your assets. By pairing stable accounts with compelling creatives, you maximize your chances of sustained advertising success.</p>\n',
    tags: [
      "Ad Creatives",
      "Facebook Ads",
      "Ad Copywriting",
      "Conversion Tips",
      "Creative Strategy",
    ],
  },
  {
    id: "scale-facebook-ads-account-stability",
    slug: "scale-facebook-ads-account-stability",
    title: "How to Scale Facebook Ads Without Losing Account Stability",
    excerpt:
      "Scaling Facebook ads is crucial for growth, but doing it wrong can lead to bans and restrictions. Discover smart, safe scaling techniques to maintain performance and account health.",
    date: "June 12, 2021",
    readTime: "6 min read",
    category: "Facebook Ads",
    image: {
      feature: "/blog/scale-facebook-ads-account-stability-21.png",
      detail: "/blog/scale-facebook-ads-account-stability-31.png",
      detailMobile: "/blog/scale-facebook-ads-account-stability-43.png",
      thumbnail: "/blog/scale-facebook-ads-account-stability-11.png",
    },
    views: 948,
    author: {
      name: "Matthew Moore",
      role: "Campaign Growth Advisor",
      image: "/daniel-vu.png",
    },
    content:
      '\n  <p class="lead">Scaling Facebook ads is the natural goal once you find a campaign that performs well. But many advertisers struggle to grow their budgets and reach without encountering account issues like bans or restrictions. Knowing how to scale safely is crucial to maintaining long-term success.</p>\n\n  <h2>Why Scaling Facebook Ads Can Be Risky</h2>\n  <p>Facebook’s automated systems monitor sudden changes in ad spend, audience targeting, and account behavior. Abrupt increases or inconsistent activity may trigger flags, causing ad disapproval or even account disabling. Many advertisers lose valuable momentum and money due to rushed or unplanned scaling.</p>\n\n  <h2>Smart Scaling Strategies for Facebook Ads</h2>\n  <ul>\n    <li><strong>Gradual Budget Increases:</strong> Increase your daily or lifetime budget by no more than 20–30% every few days. This steady growth helps avoid triggering Facebook’s risk systems.</li>\n    <li><strong>Duplicate and Test Campaigns:</strong> Instead of increasing budget on one campaign, duplicate it and test with a fresh audience or slightly different creative. This reduces risk and helps uncover new profitable pockets.</li>\n    <li><strong>Expand Targeting Carefully:</strong> Broaden your audience slowly by adding related interests, lookalike audiences, or geographic areas. Avoid drastically changing targeting parameters overnight.</li>\n    <li><strong>Leverage Campaign Budget Optimization (CBO):</strong> Facebook’s CBO lets you set a single budget across multiple ad sets, allowing the algorithm to dynamically allocate spend to top-performing ad sets.</li>\n    <li><strong>Maintain Consistent Ad Quality and Compliance:</strong> Keep your creatives fresh, relevant, and compliant with Facebook’s ad policies. Regularly update creatives to prevent ad fatigue.</li>\n  </ul>\n\n  <h2>Monitoring Key Metrics During Scaling</h2>\n  <p>Keep a close eye on metrics like:</p>\n  <ul>\n    <li><strong>Cost Per Acquisition (CPA)</strong></li>\n    <li><strong>Return on Ad Spend (ROAS)</strong></li>\n    <li><strong>Click-Through Rate (CTR)</strong></li>\n    <li><strong>Frequency</strong></li>\n  </ul>\n  <p>If your CPA rises sharply or ROAS declines, pause and analyze before continuing. Scaling should not come at the cost of performance.</p>\n\n  <h2>Importance of Stable Business Managers When Scaling</h2>\n  <p>Scaling with verified and trusted Business Managers reduces the risk of sudden bans or restrictions. Accounts with a strong trust history are better equipped to handle increases in ad spend, letting you grow confidently.</p>\n\n  <h2>How GoAds Helps You Scale Safely</h2>\n  <p>At GoAds, we provide stable, verified Business Managers and profiles built to support scaling. Our clients rely on us to supply assets that minimize risk and let them grow ad spend smoothly. With the right infrastructure, scaling becomes less risky and more profitable.</p>\n\n  <h2>Final Advice for Scaling</h2>\n  <p>Scaling is a marathon, not a sprint. Patience and strategy matter more than quick, aggressive moves. Plan your growth carefully, keep your assets stable, and always maintain compliance.</p>\n  <p>If you want expert advice and reliable Business Managers to support your scaling goals, visit <a href="https://goads.shop" target="_blank">goads.shop</a> or contact us on Telegram <strong>@goads_offcial</strong>.</p>\n',
    tags: [
      "Scaling Facebook Ads",
      "Business Manager",
      "Ad Stability",
      "CBO Strategy",
      "Facebook Compliance",
    ],
  },
  {
    id: "facebook-ads-account-security-recovery",
    slug: "facebook-ads-account-security-recovery",
    title: "The Ultimate Guide to Facebook Ads Account Security and Recovery",
    excerpt:
      "Protect your Facebook Ads accounts from hacks and suspensions. Learn best practices for security and steps to recover if your account gets disabled.",
    date: "May 08, 2022",
    readTime: "7 min read",
    category: "Facebook Ads",
    image: {
      feature: "/blog/facebook-ads-account-security-recovery-21.png",
      detail: "/blog/facebook-ads-account-security-recovery-31.png",
      detailMobile: "/blog/facebook-ads-account-security-recovery-43.png",
      thumbnail: "/blog/facebook-ads-account-security-recovery-11.png",
    },
    views: 1023,
    author: {
      name: "James Miller",
      role: "Campaign Growth Advisor",
      image: "/daniel-vu.png",
    },
    content:
      '\n  <p class="lead">For any business running Facebook ads, account security is critical. Losing access to your ad account or Business Manager can mean lost revenue, wasted time, and major headaches. Understanding how to secure your accounts and what to do if they get disabled is essential.</p>\n\n  <h2>Why Facebook Ads Account Security Matters</h2>\n  <p>Your Facebook ad accounts hold valuable assets—ad creatives, customer data, payment methods, and campaign history. Unauthorized access or account bans can lead to financial loss and disruption of your marketing efforts.</p>\n\n  <h2>Common Causes of Account Suspensions and Hacks</h2>\n  <ul>\n    <li>Violations of Facebook advertising policies</li>\n    <li>Suspicious login activity or access from untrusted devices</li>\n    <li>Using shared or low-trust profiles as admins</li>\n    <li>Sudden, unusual changes in ad spend or campaign behavior</li>\n    <li>Phishing attacks or compromised credentials</li>\n  </ul>\n\n  <h2>Best Practices to Secure Your Facebook Ads Account</h2>\n  <ul>\n    <li><strong>Use Strong, Unique Passwords:</strong> Ensure passwords are complex and different from other accounts.</li>\n    <li><strong>Enable Two-Factor Authentication (2FA):</strong> 2FA adds an extra layer of security, requiring a code from your phone to log in.</li>\n    <li><strong>Limit Admin Access:</strong> Only give Business Manager or ad account access to trusted team members and regularly review permissions.</li>\n    <li><strong>Avoid Shared Logins or Buying Accounts from Untrusted Sources:</strong> These can lead to account flags or hacks.</li>\n    <li><strong>Monitor Login Activity Regularly:</strong> Check for unknown devices or locations in your Facebook Security Settings.</li>\n  </ul>\n\n  <h2>What to Do If Your Account Gets Disabled</h2>\n  <ul>\n    <li><strong>Review the Notification Carefully:</strong> Facebook usually provides a reason for disabling. Understand the cause before proceeding.</li>\n    <li><strong>Appeal Through Facebook’s Official Channels:</strong> Use the ‘Account Quality’ section to request a review if you believe the disable was in error.</li>\n    <li><strong>Contact Support:</strong> If available, reach out to Facebook Business Support for assistance.</li>\n    <li><strong>Avoid Creating New Accounts Immediately:</strong> Creating new accounts without fixing underlying issues can lead to repeated bans.</li>\n  </ul>\n\n  <h2>How GoAds Supports Account Security and Recovery</h2>\n  <p>GoAds specializes in verified, high-trust Business Managers and profiles that reduce the risk of bans and security issues. Our assets come with proper documentation and are managed to comply with Facebook’s policies.</p>\n  <p>In case of issues, our experienced team guides you through recovery steps and provides ongoing support to maintain account health.</p>\n\n  <h2>Final Thoughts</h2>\n  <p>Securing your Facebook Ads accounts is not optional—it is vital for protecting your business. Prevention, vigilance, and working with trusted partners are the best strategies to avoid disruptions.</p>\n  <p>If you want stable, secure Business Managers and professional support, visit <a href="https://goads.shop" target="_blank">goads.shop</a> or message us on Telegram <strong>@goads_offcial</strong>. We are dedicated to helping you advertise safely and successfully.</p>\n',
    tags: [
      "Account Security",
      "Facebook Ads",
      "Business Manager",
      "Account Recovery",
      "Ad Account Protection",
    ],
  },
]

// Get all unique categories from blog posts
export function getAllCategories() {
  const categories = blogPosts.map((post) => post.category)
  return ["All", ...Array.from(new Set(categories))].sort()
}

// Get all blog posts
export function getAllBlogPosts() {
  return blogPosts
}

// Get blog post by slug
export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

// Get related posts (excluding current post)
export function getRelatedPosts(currentSlug: string, limit = 5) {
  const currentPost = getBlogPostBySlug(currentSlug)
  const category = currentPost?.category
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit)
}

// Get most viewed posts
export function getMostViewedPosts(limit = 4) {
  return [...blogPosts].sort((a, b) => b.views - a.views).slice(0, limit)
}

// Get trending posts
export function getTrendingPosts(limit = 3) {
  return blogPosts.filter((post) => post.trending).slice(0, limit)
}

// Get posts by category
export function getPostsByCategory(category: string, page = 1, postsPerPage = 6) {
  const filteredPosts =
    category === "All" ? blogPosts : blogPosts.filter((post) => post.category === category)

  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  return {
    posts: filteredPosts.slice(startIndex, endIndex),
    totalPages: Math.ceil(filteredPosts.length / postsPerPage),
    totalPosts: filteredPosts.length,
  }
}
