
# CodeDock UI Boilerplate 💫

## Documentation for building modules

This documentation purpose is to help all the people which are starting their adventure with web development, but would like to make a use of this project. Below you will find all the design and functional patterns deeply explaine for further project development.

---

## **All modules follow consistent patterns:**

### Design Principles
- **Responsive grid layouts** - Mobile-first approach with breakpoint-based columns
- **Semantic HTML structure** - Proper heading hierarchy and content organization
- **Tailwind CSS utility classes** - Consistent spacing, typography, and color schemes
- **No JavaScript dependencies** - Pure CSS animations and interactions
- **Accessibility-focused design** - Proper contrast ratios and screen reader support
- **Mobile-first responsive approach** - Progressive enhancement for larger screens

### Module Architecture
- **Container Structure** - Consistent div nesting with container/content separation
- **Typography Hierarchy** - h1 (36px), h2 (30px), h3 (24px), h4 (20px) sizing
- **Color Consistency** - Purple primary (#7C3AED) or theme color, gray text scales, semantic colors
- **Spacing System** - 4px base unit with consistent margin/padding multiples
- **Interactive Elements** - Hover states, copy buttons, terminal animations

### Content Patterns
- **Educational Blocks** - Note, warning, advantage, and pro-tip containers
- **Code Snippets** - Syntax highlighting with copy functionality
- **Terminal Output** - Realistic command-line demonstrations
- **Two-Column Layouts** - Theory/practice or comparison presentations
- **Custom Lists** - Styled bullet points with consistent spacing


## Pattern Summary

### **Typography Hierarchy Pattern**
- **H1:** `text-4xl font-bold` (36px) - Main page titles
- **H2:** `text-3xl font-bold` (30px) - Section headers  
- **H3:** `text-2xl font-bold` (24px) - Module titles
- **H4:** `text-xl font-bold` (20px) - Subsection titles
- **Body:** `text-gray-600` with accent highlights using `accent-text` class

### **Spacing System Pattern**
- **Sections:** `mb-16` (64px) between major sections
- **Modules:** `mb-8` (32px) between learning modules
- **Elements:** `mb-4` (16px) for standard element spacing
- **Content:** `space-y-6` (24px) for vertical content flow

### **Color Scheme Pattern**
- **Primary:** Purple (main accent colour) (#7C3AED) for branding and CTAs
- **Semantic:** Green (success), Yellow (tips), Red (warnings), Blue (info)
- **Text:** Gray scale from 400-900 for content hierarchy
- **Accents:** Framework-specific colors (JS=Yellow, HTML=Orange, React=Cyan)

The documentation reveals several core patterns used consistently across all modules:

### **Container Structure Pattern**
```html
<div class="container mx-auto px-4">
  <div class="text-center mb-12">
    <!-- Content -->
  </div>
</div>
```
**Usage:** Universal wrapper for all sections providing responsive centering and consistent spacing.

### **Grid Layout Pattern**
```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <!-- Responsive columns -->
</div>
```
**Usage:** Responsive layouts that stack on mobile, expand to 2-3 columns on desktop.

### **Information Block Pattern**
```html
<div class="bg-{color}-50 border border-{color}-200 rounded-lg p-4">
  <div class="flex items-start">
    <i class="fas fa-{icon} text-{color}-500 mr-3 mt-1"></i>
    <div>
      <h4 class="font-semibold text-{color}-800 mb-2">Title</h4>
      <p class="text-sm text-{color}-700">Content</p>
    </div>
  </div>
</div>
```
**Usage:** Semantic color-coded blocks (purple=important, yellow=tips, red=warnings, green=advantages).

### **Terminal Output Pattern**
```html
<div class="terminal-output">
  <div class="terminal-header">
    <div class="terminal-button red"></div>
    <div class="terminal-button yellow"></div>
    <div class="terminal-button green"></div>
    <span class="text-sm text-gray-400 ml-3">Terminal</span>
  </div>
  <div class="terminal-content">
    <pre><span class="terminal-prompt">user@hostname:~$</span> command</pre>
  </div>
</div>
```
**Usage:** Realistic macOS-style terminal with colored window controls and command prompts.

### **Code Snippet Pattern**
```html
<div class="code-snippet">
  <div class="code-header">
    <span class="text-sm text-gray-400">Language</span>
    <button class="copy-btn" onclick="copyCode(this)">
      <i class="fas fa-copy"></i> Copy
    </button>
  </div>
  <pre><code>// Code content</code></pre>
</div>
```
**Usage:** Syntax-highlighted code blocks with integrated copy functionality.



## Tutorials Page Index

### [1. Web Development Tutorials](#1-web-development-tutorials)
[1.1 Web Development Tutorials H1](#11-web-development-tutorials-h1)  
[1.2 Description paragraph](#12-description-paragraph)

### [2. Featured Tutorials H2](#2-featured-tutorials-h2)
[2.1 Three Cards 3col 1row](#21-three-cards-3col-1row)
[2.1.1 JavaScript Fundamentals Card](#211-javascript-fundamentals-card)
[2.1.2 HTML & CSS Mastery Card](#212-html--css-mastery-card)  
[2.1.3 React Development Card](#213-react-development-card)

### [3. Choose Your Learning Path H2](#3-choose-your-learning-path-h2)
[3.1 Two Cards 2col 1row](#31-two-cards-2col-1row)
[3.1.1 Frontend Developer Card](#311-frontend-developer-card)
[3.1.2 Full Stack Developer Card](#312-full-stack-developer-card)

### [4. Core Concepts H2](#4-core-concepts-h2)
[4.1 Git Version Control Setup Module](#41-git-version-control-setup-module)
[4.1.1 Left Column Content](#411-left-column-content)
[4.1.2 Right Column Terminal Output](#412-right-column-terminal-output)

### [5. Frontend Basics H2](#5-frontend-basics-h2)
[5.1 HTML Structure & Semantic Tags Module](#51-html-structure--semantic-tags-module)
[5.1.1 Left Column Content with Code Snippet](#511-left-column-content-with-code-snippet)
[5.1.2 Right Column with DevTools and Quote Block](#512-right-column-with-devtools-and-quote-block)

### [6. JavaScript Fundamentals H2](#6-javascript-fundamentals-h2)
[6.1 JavaScript Functions Deep Dive Module](#61-javascript-functions-deep-dive-module)
[6.1.1 Left Column Theory with Note Block and Custom List](#611-left-column-theory-with-note-block-and-custom-list)
[6.1.2 Right Column Practice with Code and Warning Block](#612-right-column-practice-with-code-and-warning-block)

### [7. JavaScript Ecosystem H2](#7-javascript-ecosystem-h2)
[7.1 Package Management with npm Module](#71-package-management-with-npm-module)
[7.1.1 Left Column Content with Code](#711-left-column-content-with-code)
[7.1.2 Right Column Terminal and Important Note Block](#712-right-column-terminal-and-important-note-block)

### [8. UI Frameworks H2](#8-ui-frameworks-h2)
[8.1 Bootstrap vs Tailwind CSS Module](#81-bootstrap-vs-tailwind-css-module)
[8.1.1 Left Column Bootstrap with Advantage Block](#811-left-column-bootstrap-with-advantage-block)
[8.1.2 Right Column Tailwind with Advantage Block](#812-right-column-tailwind-with-advantage-block)

### [9. Interactive Frontend H2](#9-interactive-frontend-h2)
[9.1 DOM Manipulation & Event Handling Module](#91-dom-manipulation--event-handling-module)
[9.1.1 Left Column Theory with Note Block and List](#911-left-column-theory-with-note-block-and-list)
[9.1.2 Right Column Practice with Code and Pro Tip Block](#912-right-column-practice-with-code-and-pro-tip-block)

### [10. Command Line Interface Example H2](#10-command-line-interface-example-h2)
[10.1 Command Line Practice Module](#101-command-line-practice-module)
[10.1.1 Single Column with Terminal Output](#1011-single-column-with-terminal-output)

---

## Module Building Documentation

### 1. Web Development Tutorials

```html
<div class="container mx-auto px-4">
    <div class="text-center mb-12">
        <!-- Content -->
    </div>
</div>
```

**Module wrapped into 2 divs.**

**First div** is a module container used to wrap the entire section content and provide consistent spacing across the page.

**Styling:**
- `container` - sets max-width responsive breakpoints and centers content horizontally
- `mx-auto` - applies automatic left and right margins to center the container
- `px-4` - adds 16px horizontal padding (left and right) for mobile spacing

**JS:** no JS used in module

**Second div** is used to format the inner content with centered alignment and bottom spacing.

**Styling:**
- `text-center` - centers all text content horizontally within the container
- `mb-12` - adds 48px bottom margin to create spacing between sections

**JS:** no JS used in module

#### 1.1 Web Development Tutorials H1

```html
<h1 class="text-4xl font-bold text-gray-900 mb-4">
    Web Development Tutorials
</h1>
```

**Main title on the page with centered text size 36pt.**

**Styling:**
- `text-4xl` - sets font size to 36px (2.25rem) for large heading display
- `font-bold` - applies font-weight: 700 for strong visual hierarchy
- `text-gray-900` - sets text color to very dark gray (#111827) for high contrast
- `mb-4` - adds 16px bottom margin to separate from following content

**JS:** no JS used in module

#### 1.2 Description paragraph

```html
<p class="text-xl text-gray-600 max-w-3xl mx-auto">
    Comprehensive tutorials following our structured learning path. Master
    web development from core concepts to advanced frameworks.
</p>
```

**Single paragraph containing centered text in size 20pt.**

**Styling:**
- `text-xl` - changes text size to 20px (1.25rem) for readable subtitle text
- `text-gray-600` - changes text color to medium gray (#6B7280) for softer appearance
- `max-w-3xl` - limits maximum width to 768px for optimal reading length on larger screens
- `mx-auto` - centers the paragraph horizontally within its container using automatic margins

**JS:** no JS used in module

### 2. Featured Tutorials H2

```html
<section class="mb-16">
    <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
        Featured Tutorials
    </h2>
    <!-- Card grid content -->
</section>
```

**Section wrapper with bottom spacing and centered heading.**

**Styling:**
- `mb-16` - adds 64px bottom margin to separate from next section  
- `text-3xl` - sets heading size to 30px (1.875rem) for secondary heading hierarchy
- `font-bold` - applies font-weight: 700 for emphasis
- `text-gray-900` - uses darkest gray for high contrast readability
- `text-center` - centers the heading horizontally
- `mb-12` - adds 48px bottom margin below heading

**JS:** no JS used in module

#### 2.1 Three Cards 3col 1row

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Card content -->
</div>
```

**Responsive grid container for tutorial cards.**

**Styling:**
- `grid` - establishes CSS Grid layout container
- `grid-cols-1` - single column on mobile devices (default)
- `md:grid-cols-2` - two columns on medium screens (768px+) for tablet layout
- `lg:grid-cols-3` - three columns on large screens (1024px+) for desktop layout  
- `gap-8` - adds 32px spacing between grid items

**JS:** no JS used in module

##### 2.1.1 JavaScript Fundamentals Card

```html
<div class="tutorial-card">
    <div class="flex-1">
        <div class="flex items-center mb-4">
            <i class="fab fa-js-square text-3xl text-yellow-500 mr-3"></i>
            <h3 class="text-xl font-bold text-gray-900">
                JavaScript Fundamentals
            </h3>
        </div>
        <!-- Card content -->
    </div>
    <button class="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition-colors">
        Start Tutorial
    </button>
</div>
```

**Interactive tutorial card with icon, content, and action button.**

**Styling:**
- `tutorial-card` - custom class for card styling (defined in CSS)
- `flex-1` - allows content area to grow and push button to bottom
- `flex items-center` - horizontally aligns icon and title
- `mb-4` - adds 16px bottom margin below title section
- `text-3xl` - sets icon size to 30px
- `text-yellow-500` - JavaScript brand color (#EAB308)
- `mr-3` - adds 12px right margin after icon
- `w-full` - makes button span full card width
- `bg-purple-700` - primary purple background (#7C3AED)
- `hover:bg-purple-800` - darker purple on hover state
- `transition-colors` - smooth color transition animation

**JS:** no JS used in module

##### 2.1.2 HTML & CSS Mastery Card

```html
<div class="tutorial-card">
    <div class="flex-1">
        <div class="flex items-center mb-4">
            <i class="fab fa-html5 text-3xl text-orange-500 mr-3"></i>
            <h3 class="text-xl font-bold text-gray-900">
                HTML & CSS Mastery
            </h3>
        </div>
        <!-- Card content -->
    </div>
    <button class="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition-colors">
        Start Tutorial
    </button>
</div>
```

**HTML/CSS tutorial card with orange branding.**

**Styling:**
- Same structure as JavaScript card
- `text-orange-500` - HTML5 brand color (#F97316) for visual distinction
- All other styles identical to maintain consistency

**JS:** no JS used in module

##### 2.1.3 React Development Card

```html
<div class="tutorial-card">
    <div class="flex-1">
        <div class="flex items-center mb-4">
            <i class="fab fa-react text-3xl text-cyan-500 mr-3"></i>
            <h3 class="text-xl font-bold text-gray-900">React Development</h3>
        </div>
        <!-- Card content -->
    </div>
    <button class="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition-colors">
        Start Tutorial
    </button>
</div>
```

**React framework tutorial card with cyan branding.**

**Styling:**
- Same structure as other tutorial cards
- `text-cyan-500` - React brand color (#06B6D4) for framework identification
- Consistent button and layout styling

**JS:** no JS used in module

### 3. Choose Your Learning Path H2

```html
<section class="py-16 bg-gray-50 rounded-2xl">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
            Choose Your Learning Path
        </h2>
        <!-- Path cards -->
    </div>
</section>
```

**Full-width section with background color and rounded corners.**

**Styling:**
- `py-16` - adds 64px vertical padding (top and bottom) for section spacing
- `bg-gray-50` - light gray background (#F9FAFB) to distinguish section
- `rounded-2xl` - applies 16px border radius for modern rounded appearance

**JS:** no JS used in module

#### 3.1 Two Cards 2col 1row

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Path cards -->
</div>
```

**Responsive two-column grid for learning paths.**

**Styling:**
- `grid-cols-1` - single column on mobile for vertical stacking
- `md:grid-cols-2` - two equal columns on medium screens and larger
- `gap-8` - 32px spacing between path cards

**JS:** no JS used in module

##### 3.1.1 Frontend Developer Card

```html
<div class="bg-white rounded-xl p-8 shadow-lg">
    <div class="text-center mb-6">
        <i class="fas fa-laptop-code text-4xl text-purple-700 mb-4"></i>
        <h3 class="text-2xl font-bold text-gray-900">Frontend Developer</h3>
        <p class="text-gray-600 mt-2">
            Build beautiful and interactive user interfaces
        </p>
    </div>
    <!-- Feature list and button -->
</div>
```

**Learning path card with icon, title, and description.**

**Styling:**
- `bg-white` - white background to contrast with gray section background
- `rounded-xl` - 12px border radius for card corners
- `p-8` - 32px padding on all sides for content spacing
- `shadow-lg` - large drop shadow for card elevation effect
- `text-4xl` - 36px icon size for visual impact
- `text-purple-700` - brand color for consistency

**JS:** no JS used in module

##### 3.1.2 Full Stack Developer Card

```html
<div class="bg-white rounded-xl p-8 shadow-lg">
    <div class="text-center mb-6">
        <i class="fas fa-server text-4xl text-purple-700 mb-4"></i>
        <h3 class="text-2xl font-bold text-gray-900">Full Stack Developer</h3>
        <p class="text-gray-600 mt-2">
            Master both frontend and backend development
        </p>
    </div>
    <!-- Feature list and button -->
</div>
```

**Full stack learning path card with server icon.**

**Styling:**
- Identical styling to Frontend Developer card
- `fas fa-server` - server icon to represent backend development
- Same spacing, colors, and layout consistency

**JS:** no JS used in module

### 4. Core Concepts H2

**Two-column educational module with code and terminal output.**

#### 4.1 Git Version Control Setup Module

```html
<div class="two-column-code-module mb-8">
    <h3 class="text-2xl font-bold mb-6">Git Version Control Setup</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Left and right columns -->
    </div>
</div>
```

**Educational module container for code tutorials.**

**Styling:**
- `two-column-code-module` - custom class for module styling (background, padding, shadows)
- `mb-8` - 32px bottom margin between modules
- `text-2xl` - 24px font size for module titles
- `lg:grid-cols-2` - two columns on large screens (1024px+)

**JS:** no JS used in module

##### 4.1.1 Left Column Content

```html
<div class="space-y-6">
  <h4 class="text-xl font-bold">Setup Instructions</h4>
  <div class="prose">
    <p class="text-gray-600">
      Configure Git with your identity and initialize your first repository.
      These commands set up your <span class="accent-text">development environment</span> 
      for version control.
    </p>
  </div>
  <!-- Code snippet with copy button -->
</div>
```

**Contains explanatory text and code snippets with copy functionality.**

**Styling:**
- `space-y-6` - adds 24px vertical spacing between child elements
- `text-xl` - 20px font size for subsection titles
- `prose` - applies typography styling for readable text blocks
- `accent-text` - custom class for highlighting important terms

**JS:** no JS used in module

##### 4.1.2 Right Column Terminal Output

```html
<div class="terminal-output">
  <div class="terminal-header">
    <div class="terminal-button red"></div>
    <div class="terminal-button yellow"></div>
    <div class="terminal-button green"></div>
    <span class="text-sm text-gray-400 ml-3">Terminal</span>
  </div>
  <div class="terminal-content">
    <pre><span class="terminal-prompt">user@hostname:~$</span> git config --global user.name "Your Name"
<span class="terminal-prompt">user@hostname:~$</span> git config --global user.email "your.email@example.com"
<span class="terminal-prompt">user@hostname:~$</span> git init
Initialized empty Git repository in /home/user/.git/
<span class="terminal-prompt">user@hostname:~$</span><span class="cursor">_</span></pre>
  </div>
</div>
```

**Shows realistic terminal output with command prompt styling.**

**Styling:**
- `terminal-output` - custom class for terminal container styling
- `terminal-header` - macOS-style terminal window header with colored buttons
- `terminal-button` - circular buttons (red, yellow, green) for window controls
- `terminal-content` - main terminal content area with monospace font
- `terminal-prompt` - styled command prompt with user@hostname format
- `cursor` - blinking cursor animation for active terminal effect

**JS:** no JS used in module

### 5. Frontend Basics H2

```html
<section class="mb-16">
  <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
    Frontend Basics
  </h2>
  <!-- Module content -->
</section>
```

**HTML structure and semantic elements tutorial module.**

**Styling:**
- `mb-16` - 64px bottom margin for section separation
- `text-3xl` - 30px font size for main section headings
- `font-bold` - font-weight: 700 for emphasis
- `text-center` - centers heading text horizontally
- `mb-12` - 48px bottom margin below heading

**JS:** no JS used in module

#### 5.1 HTML Structure & Semantic Tags Module

```html
<div class="two-column-code-module mb-8">
  <h3 class="text-2xl font-bold mb-6">HTML Structure & Semantic Tags</h3>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Left and right columns -->
  </div>
</div>
```

**Two-column educational layout for HTML concepts.**

**Styling:**
- `two-column-code-module` - custom class for module container (background, padding, shadows)
- `text-2xl` - 24px font size for module titles
- `grid grid-cols-1 lg:grid-cols-2` - responsive grid: single column on mobile, two columns on large screens
- `gap-6` - 24px spacing between grid columns

**JS:** no JS used in module

##### 5.1.1 Left Column Content with Code Snippet

```html
<div class="space-y-6">
  <h4 class="text-xl font-bold">Semantic HTML Elements</h4>
  <div class="code-snippet">
    <div class="code-header">
      <span class="text-sm text-gray-400">HTML</span>
      <button class="copy-btn" onclick="copyCode(this)">
        <i class="fas fa-copy"></i> Copy
      </button>
    </div>
    <pre><code>&lt;article&gt;
  &lt;header&gt;
    &lt;h1&gt;Article Title&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;Article content...&lt;/p&gt;
  &lt;/main&gt;
&lt;/article&gt;</code></pre>
  </div>
</div>
```

**Code demonstration with syntax highlighting and copy functionality.**

**Styling:**
- `code-snippet` - custom class for code block container
- `code-header` - header bar with language label and copy button
- `copy-btn` - styled copy button with icon
- `pre code` - monospace font for code display with preserved formatting

**JS:** copyCode() function handles clipboard functionality

##### 5.1.2 Right Column with DevTools and Quote Block

```html
<div class="space-y-6">
  <div class="quote-block">
    <div class="border-l-4 border-blue-500 pl-4">
      <h4 class="font-semibold text-blue-800 mb-2">Best Practice</h4>
      <p class="text-sm">
        Use semantic HTML elements to improve <span class="accent-text">accessibility</span> 
        and SEO. Screen readers rely on proper semantic structure.
      </p>
    </div>
  </div>
</div>
```

**Educational content with highlighted best practices.**

**Styling:**
- `quote-block` - custom class for highlighted information blocks
- `border-l-4 border-blue-500` - 4px left border in blue for visual emphasis
- `pl-4` - 16px left padding to offset content from border
- `font-semibold` - font-weight: 600 for block titles
- `text-blue-800` - dark blue text color for block headers

**JS:** no JS used in module

### 6. JavaScript Fundamentals H2

```html
<section class="mb-16">
  <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
    JavaScript Fundamentals
  </h2>
  <!-- Module content -->
</section>
```

**Advanced JavaScript concepts with theory and practice sections.**

#### 6.1 JavaScript Functions Deep Dive Module

```html
<div class="two-column-theory-module mb-8">
  <h3 class="text-2xl font-bold mb-6">JavaScript Functions Deep Dive</h3>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Theory and practice columns -->
  </div>
</div>
```

**Theory-practice module layout for JavaScript concepts.**

**Styling:**
- `two-column-theory-module` - custom class for theory-based modules
- Same responsive grid system as code modules
- Specialized styling for educational content presentation

**JS:** no JS used in module

##### 6.1.1 Left Column Theory with Note Block and Custom List

```html
<div class="space-y-6">
  <h4 class="text-xl font-bold">Theory</h4>
  <div class="note-block">
    <div class="flex items-start">
      <i class="fas fa-lightbulb text-yellow-500 mr-3 mt-1"></i>
      <div>
        <h4 class="font-semibold text-yellow-800 mb-2">Key Concept</h4>
        <p class="text-sm">
          Functions are first-class objects in JavaScript, meaning they can be assigned to variables, 
          passed as arguments, and returned from other functions.
        </p>
      </div>
    </div>
  </div>
  
  <div class="custom-list">
    <h5 class="font-semibold mb-3">Function Types:</h5>
    <ul class="space-y-2">
      <li class="flex items-start">
        <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>Regular Functions:</strong> Traditional function declarations with hoisting</span>
      </li>
    </ul>
  </div>
</div>
```

**Educational content with highlighted concepts and structured lists.**

**Styling:**
- `note-block` - highlighted information container
- `flex items-start` - aligns icon and content at the top
- `text-yellow-500` - warning/info icon color (#EAB308)
- `custom-list` - styled list container
- `w-2 h-2` - 8px circular bullet points
- `bg-purple-500` - purple bullet color for brand consistency
- `flex-shrink-0` - prevents bullet from shrinking

**JS:** no JS used in module

##### 6.1.2 Right Column Practice with Code and Warning Block

```html
<div class="space-y-6">
  <h4 class="text-xl font-bold">Practice</h4>
  <div class="code-snippet">
    <!-- Code content -->
  </div>
  
  <div class="warning-block">
    <div class="bg-red-50 border border-red-200 rounded-lg p-4">
      <div class="flex items-start">
        <i class="fas fa-exclamation-triangle text-red-500 mr-3 mt-1"></i>
        <div>
          <h4 class="font-semibold text-red-800 mb-2">Important</h4>
          <p class="text-sm text-red-700">
            Arrow functions don't have their own <span class="accent-text">this</span> context. 
            They inherit it from the enclosing scope.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Practice section with code examples and important warnings.**

**Styling:**
- `warning-block` - container for warning messages
- `bg-red-50` - light red background (#FEF2F2) for warning context
- `border-red-200` - red border (#FECACA) for visual emphasis
- `text-red-500` - warning icon color (#EF4444)
- `text-red-700` - dark red text (#B91C1C) for readability
- `rounded-lg` - 8px border radius for modern appearance

**JS:** no JS used in module

### 7. JavaScript Ecosystem H2

```html
<section class="mb-16">
  <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
    JavaScript Ecosystem
  </h2>
  <!-- Module content -->
</section>
```

**Package management and npm workflow demonstrations.**

#### 7.1 Package Management with npm Module

```html
<div class="two-column-code-module mb-8">
  <h3 class="text-2xl font-bold mb-6">Package Management with npm</h3>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Left and right columns -->
  </div>
</div>
```

**npm workflow and package management tutorial.**

##### 7.1.1 Left Column Content with Code

```html
<div class="space-y-6">
  <h4 class="text-xl font-bold">npm Basics</h4>
  <div class="prose">
    <p class="text-gray-600">
      npm (Node Package Manager) is the default package manager for Node.js. 
      It allows you to <span class="accent-text">install, update, and manage</span> 
      JavaScript packages in your projects.
    </p>
  </div>
  
  <div class="code-snippet">
    <div class="code-header">
      <span class="text-sm text-gray-400">package.json</span>
      <button class="copy-btn" onclick="copyCode(this)">
        <i class="fas fa-copy"></i> Copy
      </button>
    </div>
    <pre><code>{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21"
  }
}</code></pre>
  </div>
</div>
```

**npm concepts with package.json example.**

**Styling:**
- Same code snippet styling as previous modules
- `prose` class for readable paragraph text
- Consistent spacing and typography

**JS:** copyCode() function for clipboard functionality

##### 7.1.2 Right Column Terminal and Important Note Block

```html
<div class="space-y-6">
  <div class="terminal-output">
    <div class="terminal-header">
      <div class="terminal-button red"></div>
      <div class="terminal-button yellow"></div>
      <div class="terminal-button green"></div>
      <span class="text-sm text-gray-400 ml-3">Terminal</span>
    </div>
    <div class="terminal-content">
      <pre><span class="terminal-prompt">user@hostname:~$</span> npm install express
added 57 packages, and audited 58 packages in 3s
<span class="terminal-prompt">user@hostname:~$</span><span class="cursor">_</span></pre>
    </div>
  </div>
  
  <div class="important-block">
    <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
      <div class="flex items-start">
        <i class="fas fa-info-circle text-purple-500 mr-3 mt-1"></i>
        <div>
          <h4 class="font-semibold text-purple-800 mb-2">Important Note</h4>
          <p class="text-sm text-purple-700">
            Always review package dependencies and use <span class="accent-text">npm audit</span> 
            to check for security vulnerabilities.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Terminal output with important security information.**

**Styling:**
- Same terminal styling as previous modules
- `important-block` - purple-themed information block
- `bg-purple-50` - light purple background (#FAF5FF)
- `border-purple-200` - purple border (#E9D5FF)
- `text-purple-500` - purple icon color (#8B5CF6)

**JS:** no JS used in module

### 8. UI Frameworks H2

```html
<section class="mb-16">
  <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
    UI Frameworks
  </h2>
  <!-- Module content -->
</section>
```

**Comparison between Bootstrap and Tailwind CSS approaches.**

#### 8.1 Bootstrap vs Tailwind CSS Module

```html
<div class="two-column-theory-module mb-8">
  <h3 class="text-2xl font-bold mb-6">Bootstrap vs Tailwind CSS</h3>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Comparison columns -->
  </div>
</div>
```

**Side-by-side framework comparison module.**

##### 8.1.1 Left Column Bootstrap with Advantage Block

```html
<div class="space-y-6">
  <h4 class="text-xl font-bold">Bootstrap Framework</h4>
  <div class="prose">
    <p class="text-gray-600">
      Bootstrap provides pre-built components and a responsive grid system. 
      It's <span class="accent-text">component-based</span> and comes with JavaScript functionality.
    </p>
  </div>
  
  <div class="advantage-block">
    <div class="bg-green-50 border border-green-200 rounded-lg p-4">
      <div class="flex items-start">
        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
        <div>
          <h4 class="font-semibold text-green-800 mb-2">Bootstrap Advantage</h4>
          <p class="text-sm text-green-700">
            Quick prototyping with pre-designed components and consistent design system.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Bootstrap framework explanation with highlighted advantages.**

**Styling:**
- `advantage-block` - positive information block styling
- `bg-green-50` - light green background (#F0FDF4)
- `border-green-200` - green border (#BBF7D0)
- `text-green-500` - green icon color (#10B981)
- `text-green-700` - dark green text (#047857)

**JS:** no JS used in module

##### 8.1.2 Right Column Tailwind with Advantage Block

```html
<div class="space-y-6">
  <h4 class="text-xl font-bold">Tailwind CSS</h4>
  <div class="prose">
    <p class="text-gray-600">
      Tailwind CSS is a <span class="accent-text">utility-first</span> framework 
      that provides low-level utility classes for building custom designs.
    </p>
  </div>
  
  <div class="advantage-block">
    <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
      <div class="flex items-start">
        <i class="fas fa-magic text-purple-500 mr-3 mt-1"></i>
        <div>
          <h4 class="font-semibold text-purple-800 mb-2">Tailwind CSS Advantage</h4>
          <p class="text-sm text-purple-700">
            Complete design control with utility-first approach and no unused CSS.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Tailwind CSS explanation with purple-themed advantages.**

**Styling:**
- Same advantage block structure with purple theming
- `fas fa-magic` - magic wand icon representing flexibility
- Purple color scheme consistent with brand

**JS:** no JS used in module

### 9. Interactive Frontend H2

```html
<section class="mb-16">
  <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
    Interactive Frontend
  </h2>
  <!-- Module content -->
</section>
```

**DOM manipulation and event handling with practical examples.**

#### 9.1 DOM Manipulation & Event Handling Module

```html
<div class="two-column-theory-module mb-8">
  <h3 class="text-2xl font-bold mb-6">DOM Manipulation & Event Handling</h3>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Theory and practice columns -->
  </div>
</div>
```

**Interactive frontend development concepts.**

##### 9.1.1 Left Column Theory with Note Block and List

```html
<div class="space-y-6">
  <h4 class="text-xl font-bold">Theory</h4>
  <div class="prose">
    <p class="text-gray-600">
      The Document Object Model (DOM) represents the structure of your HTML document. 
      JavaScript can manipulate this structure to create <span class="accent-text">dynamic interactions</span>.
    </p>
  </div>
  
  <div class="note-block">
    <div class="flex items-start">
      <i class="fas fa-info-circle text-cyan-600 mr-3 mt-1"></i>
      <div>
        <h4 class="font-semibold text-cyan-800 mb-2">DOM Concepts</h4>
        <p class="text-sm">
          Every HTML element is a DOM node that can be selected, modified, or removed using JavaScript.
        </p>
      </div>
    </div>
  </div>
  
  <div class="custom-list">
    <h5 class="font-semibold mb-3">Common DOM Methods:</h5>
    <ul class="space-y-2">
      <li class="flex items-start">
        <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span><code class="text-purple-600">getElementById()</code> - Select element by ID</span>
      </li>
      <li class="flex items-start">
        <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span><code class="text-purple-600">addEventListener()</code> - Attach event handlers</span>
      </li>
    </ul>
  </div>
</div>
```

**DOM theory with concepts and method listings.**

**Styling:**
- `text-cyan-600` - cyan color for DOM-specific information
- `code` elements with purple syntax highlighting
- Custom list with method explanations

**JS:** no JS used in module

##### 9.1.2 Right Column Practice with Code and Pro Tip Block

```html
<div class="space-y-6">
  <h4 class="text-xl font-bold">Practice</h4>
  <div class="code-snippet">
    <div class="code-header">
      <span class="text-sm text-gray-400">JavaScript</span>
      <button class="copy-btn" onclick="copyCode(this)">
        <i class="fas fa-copy"></i> Copy
      </button>
    </div>
    <pre><code>const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  const output = document.getElementById('output');
  output.textContent = 'Button clicked!';
});</code></pre>
  </div>
  
  <div class="pro-tip-block">
    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div class="flex items-start">
        <i class="fas fa-lightbulb text-yellow-500 mr-3 mt-1"></i>
        <div>
          <h4 class="font-semibold text-yellow-800 mb-2">Pro Tip</h4>
          <p class="text-sm text-yellow-700">
            Use arrow functions for simple, one-line operations to make your code more concise. 
            However, be aware that arrow functions have different 
            <span class="accent-text">this</span> binding behavior.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Practical DOM manipulation with professional tips.**

**Styling:**
- `pro-tip-block` - yellow-themed tip container
- `bg-yellow-50` - light yellow background (#FFFBEB)
- `border-yellow-200` - yellow border (#FDE68A)
- `text-yellow-500` - yellow icon color (#F59E0B)
- `text-yellow-700` - dark yellow text (#A16207)

**JS:** copyCode() function handles code copying

### 10. Command Line Interface Example H2

```html
<section class="mb-16">
  <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
    Command Line Interface Example
  </h2>
  <!-- Module content -->
</section>
```

**Standalone terminal demonstrations for development workflows.**

#### 10.1 Command Line Practice Module

```html
<div class="two-column-code-module mb-8">
  <h3 class="text-2xl font-bold mb-6">Command Line Practice</h3>
  <div class="grid grid-cols-1 lg:grid-cols-1 gap-6">
    <!-- Single column layout -->
  </div>
</div>
```

**Full-width terminal demonstration module.**

**Styling:**
- `lg:grid-cols-1` - single column layout even on large screens
- Full-width terminal for better command visibility

**JS:** no JS used in module

##### 10.1.1 Single Column with Terminal Output

```html
<div class="space-y-4">
  <div class="prose">
    <p class="text-gray-600">
      Practice essential command line operations for JavaScript development.
      These commands demonstrate <span class="accent-text">package initialization</span> 
      and dependency management workflow.
    </p>
  </div>

  <div class="mb-8">
    <div class="terminal-output">
      <div class="terminal-header">
        <div class="terminal-button red"></div>
        <div class="terminal-button yellow"></div>
        <div class="terminal-button green"></div>
        <span class="text-sm text-gray-400 ml-3">Terminal</span>
      </div>
      <div class="terminal-content">
        <pre><span class="terminal-prompt">user@hostname:~$</span> npm init -y
Wrote to /home/user/package.json:
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

<span class="terminal-prompt">user@hostname:~$</span> npm install express
added 57 packages, and audited 58 packages in 3s

<span class="terminal-prompt">user@hostname:~$</span> node --version
v18.17.0
<span class="terminal-prompt">user@hostname:~$</span><span class="cursor">_</span></pre>
      </div>
    </div>
  </div>
</div>
```

**Complete terminal workflow demonstration with realistic output.**

**Styling:**
- Full-width terminal display for command visibility
- Multi-line output showing package.json creation
- Realistic npm install feedback
- Blinking cursor for active terminal appearance

**JS:** no JS used in module

---

by mrKevler, Bartosz Sergot
