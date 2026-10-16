# Admin Category & Tag Implementation Guide

This document defines the tasks required to implement **Category** and **Tag** management in the admin panel.

The implementation must **follow the same structure and approach used in the Blog admin module**.

---

# 1. Reference Blog Implementation

Use the Blog admin page as the reference implementation.

Reference file:

src/app/(admin)/admin/blog/page.tsx

Category and Tag implementations must follow the **same logic and UI patterns** used here.

This includes:

- Material UI table listing
- Add/Edit dialog
- API calls
- Form state management
- Slug handling
- Validation
- SEO meta fields

---

# 2. Database Models

Schemas already exist and must be followed.

Category model:

src/models/Category.js

Tag model:

src/models/Tag.js

Forms must map correctly to the fields defined in these models.

---

# 3. API Location

All APIs are stored in:

src/app/api

Follow the **same API structure used in the Blog module**.

Expected API routes:

## Category APIs

GET /api/category  
POST /api/category  
PUT /api/category/:id  
DELETE /api/category/:id  

## Tag APIs

GET /api/tag  
POST /api/tag  
PUT /api/tag/:id  
DELETE /api/tag/:id  

---

# 4. Pages To Implement

Create the following admin pages.

## Category Page

src/app/(admin)/admin/category/page.tsx

## Tag Page

src/app/(admin)/admin/tag/page.tsx

Each page must include:

- List view
- Add button
- Edit functionality
- Delete functionality (recommended)

---

# 5. Category Listing Page

File:

src/app/(admin)/admin/category/page.tsx

## Tasks

### Import Material UI components

Use components such as:

Container  
Box  
Typography  
Button  
Table  
TableHead  
TableRow  
TableCell  
TableBody  
IconButton  
Dialog  
TextField  
Select  
MenuItem  

---

### Create state variables

Example:

