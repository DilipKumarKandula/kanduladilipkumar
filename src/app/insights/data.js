export const insights = [
  {
    slug: "lms-architecture",
    title: "Designing a Scalable LMS Architecture",
    tag: "System Design",
    date: "2026",
    content: [
      {
        type: "heading",
        text: "Problem",
      },
      {
        type: "paragraph",
        text: "Building a scalable LMS system that supports multiple users and real-time tracking.",
      },
      {
        type: "heading",
        text: "Approach",
      },
      {
        type: "paragraph",
        text: "Separated frontend, backend, and database layers for better scalability.",
      },
      {
        type: "heading",
        text: "Architecture",
      },
      {
        type: "image",
        src: "/images/lms.png",
        alt: "LMS Architecture Diagram",
      },
      {
        type: "heading",
        text: "Key Decisions",
      },
      {
        type: "list",
        items: [
          "Used REST APIs for communication",
          "Implemented JWT authentication",
          "Designed modular backend structure",
        ],
      },
      {
        type: "heading",
        text: "Result",
      },
      {
        type: "paragraph",
        text: "Achieved a scalable and maintainable LMS system with improved performance.",
      },
    ],
  },
];