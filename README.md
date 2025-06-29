# Smarth Sood - Interactive Developer Portfolio

A modern, highly interactive developer portfolio built with React, TypeScript, and Framer Motion. Features smooth animations, dark/light mode, and a responsive design showcasing Smarth Sood's projects and skills.

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
- **Deployment**: Automated deployment with GitHub Actions + EC2

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/SmartSood/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

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

### GitHub Actions + EC2 (Automated Deployment)

This project includes an automated deployment workflow using GitHub Actions. When you push to the master branch, it will:

1. **Build the project** - Runs build process
2. **Test the build** - If build fails, the deployment is rejected
3. **Deploy to EC2** - If build succeeds, automatically deploys to your EC2 instance

#### Setup Instructions:

1. **Add GitHub Secrets** (in your GitHub repository settings):
   - `EC2_HOST`: Your EC2 instance public IP or domain
   - `EC2_USERNAME`: SSH username (usually `ubuntu`)
   - `EC2_SSH_KEY`: Your private SSH key for EC2 access

2. **EC2 Setup Requirements**:
   - Node.js and npm installed
   - PM2 installed globally: `npm install -g pm2`
   - Your portfolio repository cloned to `/home/ubuntu/Portfolio`
   - PM2 process named "portfolio" configured

3. **PM2 Configuration** (on your EC2 instance):
   ```bash
   cd Portfolio
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Workflow Behavior**:
   - **On Push to master**: Triggers build and deployment
   - **On Pull Request**: Only runs build (no deployment)
   - **Build Failure**: Stops deployment and shows error
   - **Build Success**: Automatically deploys to EC2

The workflow file is located at `.github/workflows/deploy.yml`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SmartSood/Portfolio/issues).

## 📞 Contact

**Smarth Sood**

- GitHub: [@SmartSood](https://github.com/SmartSood)
- Portfolio: [https://github.com/SmartSood/Portfolio](https://github.com/SmartSood/Portfolio)

---

*Built with React, TypeScript, and Framer Motion*