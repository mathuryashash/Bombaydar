# Bombay Restaurant � SEO & Growth Strategy Summary

**Prepared for:** Client Review  
**Date:** August 2026  
**Site:** bombaydar.com (Live on Vercel)  
**Approach:** All changes via feature branch ? PR ? preview deploy ? merge

---

## ?? Goal
Increase organic visibility for high-intent keywords:
- Indian restaurant Marrakech / restaurant indien Marrakech
- Rooftop dining Marrakech Medina
- Indian restaurant Casablanca
- Clay-pot biryani Morocco
- Indian catering Morocco weddings

---

## ?? Critical Technical Fixes (Do First � Week 1)

| # | Issue | Why It Matters | Fix |
|---|-------|----------------|-----|
| 1 | No XML Sitemap | Google can't discover all pages efficiently | Add next-sitemap config; auto-generates /sitemap.xml |
| 2 | No robots.txt | Crawlers lack guidance | Add public/robots.txt with sitemap reference |
| 3 | Zero Schema Markup | Missing rich results (stars, hours, menu in SERP) | Add JSON-LD: Restaurant, LocalBusiness, Menu, MenuItem |
| 4 | /locations redirects to / | Kills internal link equity to 3 branch pages | Replace with proper index page linking all 3 locations |
| 5 | No unique meta titles/descriptions per page | Low CTR from search results | Add page-specific metadata via Next.js metadata export |
| 6 | No hreflang / language URLs | FR content invisible to French searchers | Implement /en/ and /fr/ subdirectories or hreflang tags |
| 7 | Google Business Profiles unclaimed | No map pack visibility | Claim/optimize 3 locations (Gueliz, Medina, Casablanca) |

---

## ?? On-Page Optimizations (Week 1-2)

| Page | Current Title | Optimized Title (60 chars) | Meta Description (150-160 chars) |
|------|---------------|----------------------------|----------------------------------|
| Home | Bombay Restaurant | Authentic Indian Cuisine in Morocco | Bombay Restaurant: Authentic North Indian & Punjabi Cuisine in Marrakech & Casablanca | Experience Chef Surender's 20-year legacy. Clay-pot biryani, tandoor grills & rooftop dining in Marrakech & Casablanca. Book now. |
| Gueliz | (Hero only) | Bombay Marrakech Gueliz: Flagship Indian Restaurant in Ville Nouvelle | Original Bombay location since 2004. Art Deco lounge, clay-pot biryani, tandoor grills. Open Tue-Sun 12-23h. Book a table. |
| Medina | (Hero only) | Medina Rooftop Marrakech: Rooftop Indian Dining Near Jemaa el-Fnaa | Dine under stars with Koutoubia views. Authentic North Indian & Mughlai cuisine. Open daily 12:30-23:30. Reserve now. |
| Casablanca | (Hero only) | Bombay Casablanca Ma�rif: Modern Indian Restaurant with Seafood & Cocktails | Atlantic coastal elegance meets Indian gastronomy. Seafood curries, tandoor grills, card payments accepted. Open daily 12-23:30. |
| About | The Brand Story | Chef Surender Kumar Thakur: 20+ Years of Authentic Indian Cuisine in Morocco | From Oberoi Udaivilas to Marrakech. Chef Surender's culinary journey, clay-pot traditions & catering for weddings across Morocco. |

**Also needed:**
- Single H1 per page (homepage currently has multiple)
- Descriptive alt text on all images (currently generic)
- FAQ schema on location pages (parking, halal, vegetarian, dress code)

---

## ?? Content Opportunities (Month 1)

| Asset | Target Keywords | Format | Internal Links |
|-------|----------------|--------|----------------|
| /menu Hub Page | indian menu marrakech, biryani menu casablanca | Filterable by branch/category/diet; each dish gets /menu/{slug} | All location pages, Homepage |
| Blog: Chef's Journey | chef surender kumar thakur, indian chef morocco | Long-form story + photos | About, Home |
| Blog: Why Our Biryani is Different | clay pot biryani marrakech, authentic biryani morocco | Process + try ours CTA | Menu, Location pages |
| Blog: North Indian Cuisine Guide | north indian food morocco, punjabi restaurant marrakech | Educational + menu cross-links | All pages |
| Blog: Indian Wedding Catering Guide | indian wedding catering marrakech, traiteur indien maroc | Checklist + inquiry form | Catering section, Contact |
| /reviews Page | bombay restaurant reviews marrakech | Aggregated Google/TripAdvisor + schema | Homepage, Location pages |

---

## ?? Paid Advertising (Parallel Track)

| Channel | Monthly Budget | Targeting | KPI |
|---------|---------------|-----------|-----|
| Google Search Ads | 800-1,500 EUR | indian restaurant marrakech, biryani delivery, restaurant gueliz | CPL 8-15 EUR, ROAS 4:1 |
| Google Local Service Ads | 300-500 EUR | restaurant near me (Marrakech/Casablanca) | Verified badge, click-to-call |
| Meta (FB/IG) Awareness | 500-800 EUR | Tourists in Marrakech (30km), Expats in Casablanca, Foodies 25-55 | CPM, Video views |
| Meta Retargeting | 200-300 EUR | Site visitors 30d, Menu page viewers | Booking conversions |
| TripAdvisor / TheFork | 200-400 EUR | Travelers searching where to eat marrakech | Booking clicks |

**Total Starting Budget:** 2,000-3,500 EUR/month  
**Creative Needed:** Hero video (rooftop sunset + biryani pour + chef), carousel of signature dishes

---

## ??? Implementation Plan (Branch-Based)

`
main (production)
  +-- feature/seo-foundation
        +-- Add next-sitemap + robots.txt
        +-- Implement schema markup (all pages)
        +-- Fix /locations index page
        +-- Add unique metadata per page
        +-- Add hreflang structure
        +-- Image alt text audit
  
  +-- feature/menu-hub
        +-- Create /menu page with filters
        +-- Generate item-level URLs (/menu/chicken-biryani)
        +-- Add MenuItem schema per dish
        +-- Link from all location pages
  
  +-- feature/content-hub
        +-- Set up blog structure (/blog/{slug})
        +-- Publish 4 pillar articles
        +-- Add FAQ schema to location pages
        +-- Create /reviews aggregation page
  
  +-- feature/paid-ads-setup
        +-- Google Ads account structure + campaigns
        +-- Meta Business Manager + pixel
        +-- Conversion tracking (booking form submit)
        +-- UTM parameter strategy
`

**Workflow per branch:**
1. Create branch from main
2. Implement changes
3. Push ? Vercel preview deployment auto-created
4. Client/QA review on preview URL
5. Approve ? PR ? merge to main ? auto-deploy to production

---

## ?? Success Metrics (Track Monthly)

| Metric | Baseline | 3-Month Target | 6-Month Target |
|--------|----------|----------------|----------------|
| Organic clicks (GSC) | � | +50% | +120% |
| Indian restaurant Marrakech position | � | Top 5 | Top 3 |
| Map pack impressions (GBP) | � | 500+/mo | 1,500+/mo |
| Booking form conversions | � | 30+/mo | 60+/mo |
| Paid ROAS | � | 3:1 | 4:1 |

---

## ? Client Decisions Needed

1. **Language URL structure:** Subdirectories (/en/, /fr/) vs. hreflang on same URLs?
2. **Blog priority:** Launch with 4 articles now, or phase 1 article/month?
3. **Paid ads budget:** Confirm starting monthly spend (2K-3.5K EUR range)?
4. **Google Business Profile access:** Client to grant manager access to agency/team?
5. **Review automation:** Post-booking WhatsApp Leave a review flow � approve copy?

---

## ?? Next Steps

1. Client reviews this doc ? confirms priorities/budget
2. Team creates feature/seo-foundation branch ? implements P0 fixes
3. Preview deploy shared ? client approves
4. Merge ? production ? submit sitemap to GSC
5. Parallel: Set up GBP, Google Ads, Meta pixel
6. Month 1: Launch menu hub + first 2 blog articles

---

