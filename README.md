# Video Streaming Service - YouTube Clone 

## 🔗 Live Demo
- Application: [YouTube Clone](https://yt-web-client-649896679555.us-central1.run.app)

## Overview

This project showcases a full-stack YouTube clone, built to demonstrate video upload, processing, and streaming capabilities using modern web technologies and Google Cloud Platform services, following [neetcode's](https://neetcode.io/) full-stack development course. 

## 🌟 Key Features

- **User Authentication**
  - Secure Google OAuth integration via Firebase
  - Seamless sign-in experience
  - Protected routes and content

- **Video Management**
  - Drag-and-drop video uploads
  - Cloud storage integration
  - Automatic video processing
  - Adaptive video streaming

- **Video Processing**
  - Automated FFmpeg processing
  - Multiple quality formats
  - Thumbnail generation
  - Progress tracking

- **Data Management**
  - Firestore integration
  - Real-time updates
  - Metadata management
  - Scalable storage

## Architecture

The application follows a microservices architecture, with the following key components:

-   **yt-web-client:** A Next.js frontend application that provides the user interface for uploading, browsing, and watching videos.
-   **yt-api-service:** Firebase Cloud Functions that handle user authentication, video metadata management, and generating upload URLs.
-   **video-processing-service:** A Node.js application running in a Docker container on Cloud Run that processes uploaded videos using FFmpeg.

## 🏗 System Architecture
![System Architecture](https://github.com/Aamir-Hullur/YouTube-Clone/blob/main/utils/images/system-architecture.png?raw=true)


## 🛠 Tech Stack 

-   **Frontend:**
    -   Next.js
    -   React
    -   TypeScript
    -   CSS Modules

-   **Backend:**
    -   Firebase Functions
    -   Firestore
    -   Google Cloud Storage
    -   Node.js

-   **Video Processing:**
    -   FFmpeg
    -   Docker
    -   Google Cloud Run

## 🚀 Cloud Functionality

This project leverages the following Google Cloud Platform services:

-   **Cloud Run:** The yt-web-client and video-processing-service are deployed as Docker containers on Cloud Run.
-   **Firebase Functions:** The yt-api-service is deployed as Firebase Cloud Functions.
-   **Cloud Storage:** Raw and processed videos are stored in Google Cloud Storage buckets.
-   **Firestore:** Video metadata is stored in Firestore.
-   **Pub/Sub:** A Pub/Sub topic is used to trigger video processing when new videos are uploaded.

## 📝 Project Structure

```
YouTube-Clone/
├── yt-web-client/        # Next.js frontend application
├── yt-api-service/       # Firebase Cloud Functions
├── video-processing/     # Video processing service
└── shared/              # Shared types and utilities
```

![Project Structure](https://github.com/Aamir-Hullur/YouTube-Clone/blob/main/utils/images/Project_Structure.png?raw=true)   

## 🔄 Video Processing Flow

![Sequence Diagram](https://github.com/Aamir-Hullur/YouTube-Clone/blob/main/utils/images/sequence_diagram.png?raw=true)

## 🙏 Acknowledgments

- [neetcode](https://neetcode.io/) for the excellent full-stack development course
