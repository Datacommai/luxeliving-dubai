
## Tech Stack

### Component library 
- Our project utilizes [Shadn UI](https://ui.shadcn.com/)  as the foundation for our component library, providing a robust and flexible base for developing responsive, cohesive user interfaces. Shadn UI’s component-centric architecture enables streamlined customization and enhances maintainability, ensuring that our UI aligns with modern design standards and delivers a seamless user experience. Leveraging this library allows us to efficiently integrate design consistency and functionality across our application, meeting both current and future interface needs with ease.

### Tailwind
- We are also leveraging [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework that streamlines the development of user interfaces by providing a highly customizable and consistent design system. Tailwind's approach enables us to build components using predefined classes that directly map to styling rules, promoting a clean and efficient workflow. This methodology fosters rapid development while maintaining design consistency and scalability across our application. By combining Tailwind's utility classes with our design tokens in Figma, we create a seamless bridge between design and development, ensuring clarity in implementation and adaptability to evolving project requirements.

## Design methodology
- We are also implementing the [Atomic Design methodology](https://bradfrost.com/blog/post/atomic-web-design/), a structured approach that organizes components into hierarchical layers, from the simplest elements to complex interfaces. This methodology enables us to build UI components with a high degree of reusability and scalability, fostering consistency across our application. By decomposing interfaces into atoms, molecules, organisms, templates, and pages, we achieve a cohesive design system that adapts seamlessly to evolving requirements while maintaining clarity in both structure and styling. [Figma design ](https://www.figma.com/design/LwqFZsvot9Zl39fSxdtHtM/Real-Estate-Agent-Dubai?node-id=107-1853&t=elg9xryWClE2EIVG-1)
---

## Development

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Every component inherits from [Shadn UI](https://ui.shadcn.com/)
- Components should be generic and re-usable
- Every component should have `types` and `enums

### Naming
- We follow industry standard naming `my-component.tsx`

### Github worfklow 
- Create issue with easy to read title and clear description for the task
- When creating PR:
   - title should follow this standard naming: `#number - title` e.g. `#01 - Created custom component`
   - description should describe the tasks and key word `closes` with issue number
   - commit message should be simple and descriptive and follow this naming `#number - added colours`
   - Squash and merging after PR has been approved 

---

### Server Components
- Server components are made of client, server, and skeleton.
- **Server component** feeds data from API to client component.
- **Client component** only holds UI.
- **Skeleton component** is displayed in `suspense component` while server fetching is ongoing.
 
## Deployment 
- We are also utilizing [Firebase](https://firebase.google.com/), a comprehensive app development platform that simplifies backend integration and streamlines the development process. Firebase provides a suite of tools and services, including real-time databases, authentication, cloud functions, and hosting, enabling us to build scalable and secure applications efficiently. This platform allows for seamless synchronization of data and effortless integration across various services, fostering consistency and reliability throughout our application. By coupling Firebase with our design and development workflows, we ensure adaptability to evolving requirements while maintaining a robust and scalable infrastructure.

Create **env.local** for configuration:
```
NEXT_PUBLIC_FIREBASE_API_KEY=''
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=''
NEXT_PUBLIC_FIREBASE_PROJECT_ID=''
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=''
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=''
NEXT_PUBLIC_FIREBASE_APP_ID=''
NEXT_PUBLIC_MEASUREMENT_ID=''

NEXT_PUBLIC_FEATURE_FLAG_DEMO=true
```

### Build and deploy
```
npm run build
firebase deploy
```

