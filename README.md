# Monorepo Micro-Frontends with TRUE HMR ✨

A modern micro-frontend architecture using **Turborepo + pnpm workspaces** with **genuine Hot Module Replacement across all applications**.

## 🎯 The Solution

This project solves the Module Federation HMR problem by using a **monorepo with shared packages** instead of runtime Module Federation. 

### ✅ What You Get:

- **TRUE HMR** - Edit `packages/ui/src/Table.jsx` and see instant updates in BOTH apps
- **No Manual Refresh** - Changes propagate automatically across all apps
- **Independent Deployment** - Apps can still be deployed separately
- **Shared Components** - Reusable UI components in `packages/ui`
- **Fast Builds** - Rspack for blazing fast compilation
- **Parallel Dev Servers** - Turborepo runs all apps simultaneously

## 📁 Project Structure

```
module_fed_gemini/
├── apps/
│   ├── host/              # Host application (port 3000)
│   │   ├── src/
│   │   │   └── App.jsx    # Imports from @repo/ui
│   │   └── package.json
│   └── remote/            # Remote application (port 5001)
│       ├── src/
│       │   └── App.jsx    # Also imports from @repo/ui
│       └── package.json
├── packages/
│   └── ui/                # Shared UI components
│       ├── src/
│       │   ├── Table.jsx  # Shared Table component
│       │   └── Table.css
│       └── package.json
├── package.json           # Root with Turborepo
├── pnpm-workspace.yaml    # Workspace configuration
└── turbo.json             # Turborepo tasks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (will be installed automatically via packageManager field)

### Installation

Dependencies are already installed! If you need to reinstall:

```bash
pnpm install
```

### Running the Applications

**Start all applications with HMR:**

```bash
pnpm dev
```

This will start:
- 🏠 Host app at `http://localhost:3000` (opens automatically)
- 🚀 Remote app at `http://localhost:5001`

Both apps will have **TRUE HMR** - edit any file and see instant updates!

### Building for Production

```bash
pnpm build
```

## ✨ Testing TRUE HMR

1. Run `pnpm dev`
2. Open both `http://localhost:3000` and `http://localhost:5001`
3. Edit `packages/ui/src/Table.jsx` - change the title or add a row
4. **Watch BOTH apps update instantly without refresh!** 🎉

This is the real HMR you wanted - no manual refresh needed!

## 🔧 How It Works

### Monorepo Architecture

Instead of Module Federation's runtime loading, we use:

1. **pnpm Workspaces** - Links packages together at install time
2. **Shared Package** - `@repo/ui` contains reusable components
3. **Workspace Protocol** - Apps depend on `@repo/ui` via `workspace:*`
4. **Rspack HMR** - Each app's dev server watches the shared package
5. **Turborepo** - Orchestrates parallel dev servers

### Why This Works Better

**Module Federation:**
- ❌ No HMR across app boundaries
- ❌ Requires manual refresh
- ✅ True runtime independence

**Monorepo Approach:**
- ✅ TRUE HMR across all apps
- ✅ Automatic updates
- ✅ Can still deploy independently
- ⚠️ Shared code at build time (not runtime)

### The Trade-off

You're trading **runtime independence** for **developer experience**:

- Apps share code at **build time** (via workspace packages)
- But you can still **deploy them independently**
- And you get **genuine HMR** during development

For most teams, this is the right choice!

## 📂 What Goes Where?

### `apps/` - Application Code
**Put here:** Complete applications that users interact with

```
apps/
├── host/          # Main dashboard app
├── admin/         # Admin panel app
└── mobile/        # Mobile-specific app
```

**Examples:**
- Pages and routing
- App-specific layouts
- Application state management
- App configuration

### `packages/` - Shared Code
**Put here:** Reusable code used by multiple apps

```
packages/
├── ui/            # Shared UI components (Button, Table, Modal)
├── utils/         # Helper functions (formatDate, validateEmail)
├── hooks/         # Custom React hooks (useAuth, useFetch)
└── config/        # Shared configs (theme, constants)
```

**Examples:**
- UI components (buttons, forms, tables)
- Business logic utilities
- Custom hooks
- Type definitions
- Shared constants

**Rule of thumb:** If 2+ apps need it → put it in `packages/`


## 📦 Adding More Apps

1. Create a new app:
   ```bash
   cd apps
   npx -y create-rspack@latest my-new-app --template react
   ```

2. Add `@repo/ui` dependency:
   ```json
   {
     "dependencies": {
       "@repo/ui": "workspace:*"
     }
   }
   ```

3. Configure port in `rspack.config.mjs`:
   ```javascript
   devServer: {
     port: 5002,  // Use a different port
     hot: true
   }
   ```

4. Import shared components:
   ```javascript
   import Table from "@repo/ui/Table";
   import "@repo/ui/Table.css";
   ```

5. Run `pnpm install` and `pnpm dev`

## 📦 Adding More Shared Components

1. Create component in `packages/ui/src/`:
   ```bash
   cd packages/ui/src
   touch Button.jsx Button.css
   ```

2. Export in `packages/ui/package.json`:
   ```json
   {
     "exports": {
       "./Table": "./src/Table.jsx",
       "./Table.css": "./src/Table.css",
       "./Button": "./src/Button.jsx",
       "./Button.css": "./src/Button.css"
     }
   }
   ```

3. Import in any app:
   ```javascript
   import Button from "@repo/ui/Button";
   import "@repo/ui/Button.css";
   ```

## 🛠️ Tech Stack

- **Turborepo** - Monorepo build system
- **pnpm** - Fast, disk-efficient package manager
- **Rspack** - Rust-based bundler (faster than Webpack)
- **React 19** - Latest React
- **Workspaces** - Code sharing between apps

## 📝 Key Differences from Module Federation

| Feature | Module Federation | Monorepo |
|---------|------------------|----------|
| HMR across apps | ❌ No | ✅ Yes |
| Runtime independence | ✅ Yes | ⚠️ Build-time sharing |
| Developer experience | ⚠️ Manual refresh | ✅ Instant updates |
| Deployment | ✅ Independent | ✅ Independent |
| Setup complexity | Complex | Simple |

## 🎉 Success!

You now have a micro-frontend setup with:
- ✅ **TRUE HMR** across all applications
- ✅ **No manual refresh** needed
- ✅ **Shared components** with instant updates
- ✅ **Independent deployment** capability
- ✅ **Simple, maintainable** architecture

Edit `packages/ui/src/Table.jsx` and watch the magic happen! ✨

## 💡 Pro Tips

1. **Develop shared components in isolation** - You can add Storybook to `packages/ui`
2. **Use TypeScript** - Add types to shared components for better DX
3. **Add more packages** - Create `packages/utils`, `packages/hooks`, etc.
4. **Deploy independently** - Each app builds to its own `dist` folder

Happy coding! 🚀
