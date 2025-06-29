# Interactive Developer Portfolio

A modern, highly interactive developer portfolio built with React, TypeScript, and Framer Motion. Features smooth animations, dark/light mode, and a responsive design.

## 🚀 Features

- **Interactive Animations**: Smooth transitions and micro-interactions throughout
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive Design**: Optimized for all screen sizes
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Performance Optimized**: Fast loading with code splitting and optimization
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify, Vercel, or any static hosting

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd interactive-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Sections

- **Hero**: Animated introduction with typing effect
- **About**: Personal information with interactive cards
- **Skills**: Animated skill bars and technology stack
- **Projects**: Interactive project carousel and grid
- **Experience**: Timeline with detailed work history
- **Contact**: Functional contact form with animations

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The primary colors use a blue palette that can be easily changed.

### Content
Update the content in each component file:
- Personal info in `Hero.tsx`
- About section in `About.tsx`
- Skills in `Skills.tsx`
- Projects in `Projects.tsx`
- Experience in `Experience.tsx`
- Contact info in `Contact.tsx`

### Images
Replace the placeholder images with your own:
- Profile image in `Hero.tsx`
- Project images in `Projects.tsx`

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel
1. Connect your repository to Vercel
2. Set build command to `npm run build`
3. Set output directory to `dist`

### GitHub Actions + EC2 (Automated Deployment)

This project includes an automated deployment workflow using GitHub Actions. When you push to the main branch, it will:

1. **Build the project** - Runs linting and builds the project
2. **Test the build** - If build fails, the deployment is rejected
3. **Deploy to EC2** - If build succeeds, automatically deploys to your EC2 instance

#### Setup Instructions:

1. **Add GitHub Secrets** (in your GitHub repository settings):
   - `EC2_HOST`: Your EC2 instance public IP or domain
   - `EC2_USERNAME`: SSH username (usually `ubuntu` or `ec2-user`)
   - `EC2_SSH_KEY`: Your private SSH key for EC2 access
   - `EC2_PORT`: SSH port (usually `22`)

2. **EC2 Setup Requirements**:
   - Node.js and npm installed
   - PM2 installed globally: `npm install -g pm2`
   - Your portfolio repository cloned to `/home/username/Portfolio`
   - PM2 process named "portfolio" configured

3. **PM2 Configuration** (on your EC2 instance):
   ```bash
   cd Portfolio
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Workflow Behavior**:
   - **On Push to main/master**: Triggers build and deployment
   - **On Pull Request**: Only runs build (no deployment)
   - **Build Failure**: Stops deployment and shows error
   - **Build Success**: Automatically deploys to EC2

The workflow file is located at `.github/workflows/deploy.yml`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

Alex Johnson - [alex@example.com](mailto:alex@example.com)

Project Link: [https://github.com/yourusername/interactive-portfolio](https://github.com/yourusername/interactive-portfolio)