# 🍜 My Blog - Food Travel Stories

![App Preview](https://imgix.cosmicjs.com/190eaee0-4f1b-11f1-b9f0-cbc23c61a4eb-autopilot-photo-1513104890138-7c749659a591-1778711322712.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern food travel blog built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 📝 Blog posts with rich content and featured images
- 👨‍🍳 Author profiles with bios
- 🏷️ Category-based content organization
- 🖼️ Optimized images with imgix
- 📱 Fully responsive design
- ⚡ Server-side rendering for fast performance

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6a04fad19b45e5cc77023956&clone_repository=6a04fba033e3bf5f3ca6c19c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
> 
> User instructions: A food travel blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: categories, authors, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A food travel blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic SDK](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites
- Bun installed
- A Cosmic account and bucket

### Installation

```bash
bun install
bun dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all posts with authors and categories
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with three content types: posts, authors, and categories. All content is fetched server-side using the Cosmic SDK.

## Deployment Options

Deploy to Vercel or Netlify. Set environment variables in your hosting dashboard.
<!-- README_END -->