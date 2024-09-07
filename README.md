# Mysite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Folder Structure Suggestions

/app
├── core/ # Core module (singleton services, app-wide components)
│ ├── guards/ # Route guards
│ ├── interceptors/ # HTTP interceptors
│ ├── services/ # Singleton services (e.g., AuthService)
│ └── core.module.ts # Core module definition
│
├── shared/ # Shared module (reusable components, pipes, and directives)
│ ├── components/ # Reusable UI components
│ ├── directives/ # Reusable directives
│ ├── pipes/ # Reusable pipes
│ └── shared.module.ts # Shared module definition
│
├── features/ # Feature modules (each with its own routing and components)
│ ├── feature1/ # A specific feature module
│ │ ├── components/ # Feature-specific components
│ │ ├── services/ # Feature-specific services
│ │ ├── pages/ # Feature-specific pages (containers)
│ │ ├── feature1.module.ts # Feature module definition
│ │ └── feature1-routing.module.ts # Routing for this feature
│ │
│ └── feature2/ # Another feature module
│
├── layouts/ # Layout components (header, footer, sidebars)
│ ├── main-layout/ # Main application layout
│ │ ├── main-layout.component.ts
│ │ ├── main-layout.component.html
│ │ └── main-layout.component.scss
│ └── layout.module.ts # Layout module
│
├── auth/ # Authentication module
│ ├── login/ # Login components
│ └── auth.module.ts # Auth module definition
│
├── app-routing.module.ts # Application-wide routing
├── app.component.ts # Root application component
├── app.module.ts # Root application module
└── app.component.html # Root template

## Folder Breakdown

core/: Contains services, guards, interceptors, and singletons used throughout the app. This folder typically imports once in the AppModule and shouldn't depend on any other feature module.

shared/: Contains reusable components, pipes, and directives. The SharedModule can be imported into any feature module to reuse these components. It should not depend on other modules to avoid circular dependencies.

features/: This is where your application's feature modules are organized. Each feature (or domain) of your application should have its own folder with components, services, and routing.

layouts/: Organizes layout components (e.g., header, footer, sidebar). You can create a separate module if you want to load different layouts dynamically.

auth/: A dedicated folder for authentication-related logic, such as login, registration, and password recovery components.
