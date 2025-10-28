# Accessible React Slick Carousel

An accessible image carousel built with **React Slick** that replicates the W3C ARIA Carousel Example, ensuring compatibility with screen readers like **NVDA** and full keyboard navigation.

---

## Features

* Built with **React**, **React Slick**, and **ARIA accessibility best practices**.
* Tested using **NVDA screen reader** (Windows).
* Full keyboard support: Arrow keys, Home, End, Tab, and Space.
* Announcements via `aria-live` region for slide changes.
* Responsive, modern design with accessible color contrast.

---

## Tech Stack

* React 18+
* React Slick & Slick Carousel
* CSS (custom + slick overrides)

---

## Live Demo
  https://accessibile-carousal.netlify.app/     
---


##  How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/inkersal501/accessible-carousel.git
cd accessible-carousel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

This will start the app at `http://localhost:3000/`.

### 4. Build for production (optional)

```bash
npm run build
```

---

## Accessibility Testing with NVDA

### Step 1: Install NVDA

* Download NVDA from the official website: [https://www.nvaccess.org/download/](https://www.nvaccess.org/download/)
* Install it on your Windows machine.

### Step 2: Prepare the Environment

* Launch NVDA **before** opening your local app.
* Use **Firefox** for best results (NVDA + Firefox is the official W3C test pairing).

### Step 3: Run the Carousel Locally

* Open `http://localhost:3000` in your browser.

### Step 4: Test Screen Reader Announcements

Use the following checks:

| Test                              | Expected NVDA Behavior                                              |
| --------------------------------- | ------------------------------------------------------------------- |
| **Tab into carousel**             | NVDA announces “Image Carousel region”.                             |
| **Press Next / Previous buttons** | NVDA announces “Slide X of Y: [title]”.                             |
| **Use Arrow keys (← →)**          | Navigates slides and announces updated slide info.                  |
| **Press Home / End keys**         | Moves to first or last slide; NVDA updates slide announcement.      |
| **Toggle Play/Pause button**      | Announces “Autoplay enabled” or “Autoplay disabled”.                |
| **Use Dots navigation**           | NVDA announces the selected slide number and moves focus correctly. |

### Step 5: Verify Keyboard Accessibility

* All buttons are reachable with **Tab**.
* Focus indicator is visible on interactive elements.
* Space or Enter activates the focused control.

---

## Deployment

You can deploy the project easily using **Netlify**:

1. Push your code to GitHub.
2. In Netlify, click **New Site from Git** → connect your repo.
3. Set build command: `npm run build`
4. Set publish directory: `build/`
5. Click **Deploy**.

After deployment, test again with NVDA on the live URL.

 

## Credits

Images are dynamically fetched from [Picsum Photos](https://picsum.photos/).

---

## Author

Developed by **Inkersal Mahendran**

---

##  License

MIT License — free to use and modify for educational or professional purposes.
